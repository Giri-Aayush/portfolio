import { getGitHubStats } from "@/lib/github";
import { config } from "@/lib/config";

function formatNumber(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}K`;
  return n.toString();
}

export function Stats() {
  const gh = getGitHubStats();

  const stats = [
    {
      label: "Talks Given",
      value: formatNumber(config.stats.talksGiven),
      suffix: "+",
      color: "primary" as const,
    },
    {
      label: "PRs Created",
      value: formatNumber(gh.totalPRs + config.stats.extraPRs),
      suffix: "+",
      color: "secondary" as const,
    },
    {
      label: "Commits",
      value: formatNumber(gh.totalCommits + config.stats.extraCommits),
      suffix: "+",
      color: "primary" as const,
    },
    {
      label: "Articles Published",
      value: formatNumber(config.stats.articlesPublished),
      suffix: "+",
      color: "secondary" as const,
    },
  ];

  return (
    <section className="w-full bg-surface-container-low border-y border-outline-variant/20 py-16 mb-28">
      <div className="px-8 grid grid-cols-2 md:grid-cols-4 gap-12">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col">
            <span
              className={`font-label text-[10px] tracking-widest mb-2 uppercase ${
                stat.color === "primary" ? "text-primary" : "text-secondary"
              }`}
            >
              {stat.label}
            </span>
            <span className="font-headline text-5xl font-bold tracking-tight">
              {stat.value}
              {stat.suffix && (
                <span
                  className={
                    stat.color === "primary"
                      ? "text-primary"
                      : "text-secondary"
                  }
                >
                  {stat.suffix}
                </span>
              )}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
