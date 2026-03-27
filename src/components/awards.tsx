import { config } from "@/lib/config";

export function Awards() {
  return (
    <section id="awards" className="px-8 mb-16">
      <div className="mb-12 flex items-center gap-4">
        <h2 className="font-headline text-3xl font-bold tracking-tighter uppercase">
          SIGNAL // AWARDS
        </h2>
        <div className="h-px grow bg-outline-variant/20" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {config.awards.map((award) => (
          <div
            key={award.event}
            className="bg-surface-container-low p-6 border border-outline-variant/10 hover:border-secondary/50 transition-colors group"
          >
            <div className="flex items-center gap-2 mb-4">
              <span
                className={`font-label text-[10px] tracking-widest uppercase px-2 py-0.5 border ${
                  award.result === "WINNER"
                    ? "text-secondary border-secondary/30"
                    : "text-primary border-primary/30"
                }`}
              >
                {award.result}
              </span>
            </div>
            <h3 className="font-headline text-xl font-bold mb-1 group-hover:text-secondary transition-colors">
              {award.track}
            </h3>
            <p className="font-label text-xs text-on-surface-variant tracking-widest uppercase mb-4">
              {award.event}
            </p>
            <p className="font-body text-sm text-on-surface-variant">
              {award.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
