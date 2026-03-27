import statsData from "@/data/stats.json";

export interface GitHubStats {
  totalCommits: number;
  totalPRs: number;
  totalRepos: number;
  totalStars: number;
}

export function getGitHubStats(): GitHubStats {
  return {
    totalCommits: statsData.totalCommits,
    totalPRs: statsData.totalPRs,
    totalRepos: statsData.totalRepos,
    totalStars: statsData.totalStars,
  };
}
