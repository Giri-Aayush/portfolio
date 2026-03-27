/**
 * sync-stats.ts
 *
 * Run once to seed all-time stats, then on each subsequent run
 * it only fetches the delta since the last run and increments.
 *
 * Usage:
 *   npx tsx scripts/sync-stats.ts          # incremental update
 *   npx tsx scripts/sync-stats.ts --full   # force full re-fetch
 */

import fs from "fs";
import path from "path";

const GITHUB_USERNAME = "Giri-Aayush";
const GITHUB_API = "https://api.github.com/graphql";
const ACCOUNT_CREATED = "2022-03-07T19:37:53Z";
const STATS_FILE = path.join(__dirname, "../src/data/stats.json");

interface Stats {
  totalCommits: number;
  totalPRs: number;
  totalRepos: number;
  totalStars: number;
  lastFetched: string | null;
}

async function graphql(query: string) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error("GITHUB_TOKEN env var is required");

  const res = await fetch(GITHUB_API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const json = await res.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors));
  return json.data;
}

/** Fetch commits between two dates, batching year-by-year if needed */
async function fetchCommits(from: Date, to: Date): Promise<number> {
  const yearFragments: string[] = [];
  let cursor = new Date(from);

  while (cursor < to) {
    const f = cursor.toISOString();
    const nextYear = new Date(cursor);
    nextYear.setFullYear(nextYear.getFullYear() + 1);
    const t = nextYear > to ? to.toISOString() : nextYear.toISOString();
    yearFragments.push(
      `y${cursor.getFullYear()}: contributionsCollection(from: "${f}", to: "${t}") {
        totalCommitContributions
        restrictedContributionsCount
      }`
    );
    cursor = nextYear;
  }

  const data = await graphql(
    `{ user(login: "${GITHUB_USERNAME}") { ${yearFragments.join("\n")} } }`
  );

  let total = 0;
  for (const key of Object.keys(data.user)) {
    if (key.startsWith("y")) {
      total +=
        data.user[key].totalCommitContributions +
        data.user[key].restrictedContributionsCount;
    }
  }
  return total;
}

/** Fetch repos, stars, and all-time PR count (these are cheap — always fresh) */
async function fetchReposAndPRs() {
  const data = await graphql(`{
    user(login: "${GITHUB_USERNAME}") {
      repositories(first: 100, ownerAffiliations: OWNER, orderBy: {field: STARGAZERS, direction: DESC}) {
        totalCount
        nodes { stargazerCount }
      }
      pullRequests(states: [OPEN, CLOSED, MERGED]) {
        totalCount
      }
    }
  }`);

  const user = data.user;
  return {
    totalRepos: user.repositories.totalCount,
    totalPRs: user.pullRequests.totalCount,
    totalStars: user.repositories.nodes.reduce(
      (sum: number, r: { stargazerCount: number }) => sum + r.stargazerCount,
      0
    ),
  };
}

async function main() {
  const forceFullFetch = process.argv.includes("--full");
  const current: Stats = JSON.parse(fs.readFileSync(STATS_FILE, "utf-8"));
  const now = new Date();

  const isFirstRun = !current.lastFetched || forceFullFetch;

  console.log(
    isFirstRun
      ? "→ First run / full fetch: fetching all-time stats..."
      : `→ Incremental: fetching delta since ${current.lastFetched}...`
  );

  // Repos, PRs, stars — always fetched fresh (single cheap query, these are running totals)
  const { totalRepos, totalPRs, totalStars } = await fetchReposAndPRs();

  // Commits — expensive, so incremental
  let totalCommits: number;
  if (isFirstRun) {
    totalCommits = await fetchCommits(new Date(ACCOUNT_CREATED), now);
  } else {
    const newCommits = await fetchCommits(new Date(current.lastFetched!), now);
    totalCommits = current.totalCommits + newCommits;
  }

  const updated: Stats = {
    totalCommits,
    totalPRs,
    totalRepos,
    totalStars,
    lastFetched: now.toISOString(),
  };

  fs.writeFileSync(STATS_FILE, JSON.stringify(updated, null, 2) + "\n");

  console.log("✓ Stats updated:");
  console.log(`  Commits:  ${updated.totalCommits}`);
  console.log(`  PRs:      ${updated.totalPRs}`);
  console.log(`  Repos:    ${updated.totalRepos}`);
  console.log(`  Stars:    ${updated.totalStars}`);
  console.log(`  Snapshot: ${updated.lastFetched}`);
}

main().catch((err) => {
  console.error("✗ Failed:", err);
  process.exit(1);
});
