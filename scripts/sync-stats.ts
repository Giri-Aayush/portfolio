/**
 * sync-stats.ts
 *
 * Recomputes all-time GitHub stats (commits, PRs, repos, stars) and writes them
 * to src/data/stats.json, which the hero section reads. Every run is a full
 * recompute, so the output is idempotent — running it twice gives the same
 * numbers. Requires a GITHUB_TOKEN env var (a user PAT, so private/restricted
 * contributions are included in the commit count).
 *
 * Usage:
 *   GITHUB_TOKEN=… npx tsx scripts/sync-stats.ts
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

  // Non-2xx responses (401 bad/expired token, 403 rate-limit/SAML, 5xx) come
  // back without a GraphQL `errors` array, so surface the status + body instead
  // of letting a downstream `data.user` deref throw an opaque TypeError.
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GitHub API returned ${res.status}: ${body.slice(0, 300)}`);
  }

  const json = await res.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors));
  return json.data;
}

/**
 * Fetch commit contributions across a date range, batched per calendar year.
 *
 * Counts `totalCommitContributions` only — commits to repos this token can see
 * (public + accessible private). We deliberately do NOT add
 * `restrictedContributionsCount`: that bucket lumps together every private
 * contribution the viewer can't itemize (commits AND PRs, issues, reviews), so
 * adding it would inflate a number we label "Commits" with non-commit activity.
 *
 * `contributionsCollection(from, to)` is capped at one year, so we batch by
 * calendar year. Result is a pure function of [from, to]: idempotent, no drift.
 */
async function fetchCommits(from: Date, to: Date): Promise<number> {
  const yearFragments: string[] = [];
  const firstYear = from.getUTCFullYear();
  const lastYear = to.getUTCFullYear();

  for (let year = firstYear; year <= lastYear; year++) {
    const start =
      year === firstYear ? from : new Date(Date.UTC(year, 0, 1, 0, 0, 0, 0));
    const end =
      year === lastYear
        ? to
        : new Date(Date.UTC(year, 11, 31, 23, 59, 59, 999));
    yearFragments.push(
      `y${year}: contributionsCollection(from: "${start.toISOString()}", to: "${end.toISOString()}") {
        totalCommitContributions
      }`
    );
  }

  // Inverted range (e.g. clock skew) → no work, rather than an empty GraphQL selection.
  if (yearFragments.length === 0) return 0;

  const data = await graphql(
    `{ user(login: "${GITHUB_USERNAME}") { ${yearFragments.join("\n")} } }`
  );

  let total = 0;
  for (const year of Object.values(data.user) as { totalCommitContributions: number }[]) {
    total += year.totalCommitContributions;
  }
  return total;
}

/** Fetch repos, stars, and all-time PR count (these are cheap — always fresh) */
async function fetchReposAndPRs() {
  let totalRepos = 0;
  let totalPRs = 0;
  let totalStars = 0;
  let cursor: string | null = null;
  let first = true;

  // Repos are ordered by stars (desc) and paginated, so the star sum stays
  // correct beyond the 100-repo page limit. Because the order is descending,
  // once a page ends on a 0-star repo every remaining repo is 0-star too — so
  // we can stop early instead of walking the long tail of unstarred repos.
  while (true) {
    const after: string = cursor ? `, after: "${cursor}"` : "";
    const data = await graphql(`{
      user(login: "${GITHUB_USERNAME}") {
        ${first ? "pullRequests(states: [OPEN, CLOSED, MERGED]) { totalCount }" : ""}
        repositories(first: 100, ownerAffiliations: OWNER, orderBy: {field: STARGAZERS, direction: DESC}${after}) {
          totalCount
          nodes { stargazerCount }
          pageInfo { hasNextPage endCursor }
        }
      }
    }`);

    const repos = data.user.repositories;
    if (first) {
      totalRepos = repos.totalCount;
      totalPRs = data.user.pullRequests.totalCount;
      first = false;
    }

    const nodes: { stargazerCount: number }[] = repos.nodes;
    for (const r of nodes) totalStars += r.stargazerCount;

    const lastNode = nodes[nodes.length - 1];
    const nextCursor: string | null = repos.pageInfo.endCursor;
    // Stop at the end of the list, once the tail is all-zero stars (DESC order),
    // or if the cursor fails to advance — the last guards against an endless
    // loop on a malformed page (hasNextPage true but a null/repeated cursor).
    if (
      !repos.pageInfo.hasNextPage ||
      (lastNode && lastNode.stargazerCount === 0) ||
      !nextCursor ||
      nextCursor === cursor
    ) {
      break;
    }
    cursor = nextCursor;
  }

  return { totalRepos, totalPRs, totalStars };
}

async function main() {
  const now = new Date();

  console.log("→ Fetching all-time stats from GitHub...");

  // Repos, PRs, stars — single (paginated) query.
  const { totalRepos, totalPRs, totalStars } = await fetchReposAndPRs();

  // Commits — recomputed in full every run. It's one GraphQL request (all years
  // batched together), so it's cheap, and recomputing from scratch keeps the
  // number idempotent: no incremental boundary drift across repeated runs.
  const totalCommits = await fetchCommits(new Date(ACCOUNT_CREATED), now);

  const updated: Stats = { totalCommits, totalPRs, totalRepos, totalStars };

  // Only the four numbers are written (no timestamp), so the file changes only
  // when a real stat changes — the CI commit step keys off that diff directly.
  fs.writeFileSync(STATS_FILE, JSON.stringify(updated, null, 2) + "\n");

  console.log("✓ Stats updated:");
  console.log(`  Commits:  ${updated.totalCommits}`);
  console.log(`  PRs:      ${updated.totalPRs}`);
  console.log(`  Repos:    ${updated.totalRepos}`);
  console.log(`  Stars:    ${updated.totalStars}`);
}

main().catch((err) => {
  console.error("✗ Failed:", err);
  process.exit(1);
});
