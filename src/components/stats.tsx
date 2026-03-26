const stats = [
  { label: "Devs Mentored", value: "45K", suffix: "+", color: "primary" },
  { label: "PRs Merged", value: "1.2K", suffix: "", color: "secondary" },
  { label: "Keynotes", value: "12", suffix: "", color: "primary" },
  { label: "Grant Funding", value: "$4M", suffix: "+", color: "secondary" },
] as const;

export function Stats() {
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
