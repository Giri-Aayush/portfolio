import { config } from "@/lib/config";

export function Chronicle() {
  return (
    <section id="chronicle" className="px-8 mb-28">
      <div className="mb-12 flex justify-between items-end border-b border-outline-variant/20 pb-4">
        <h2 className="font-headline text-3xl font-bold tracking-tighter uppercase">
          CHRONICLE // EXPERIENCE
        </h2>
        <span className="font-label text-[10px] text-on-surface-variant tracking-widest cursor-pointer hover:text-primary transition-colors">
          VIEW_FULL_CV [→]
        </span>
      </div>

      <div className="space-y-12">
        {config.experience.map((exp) => (
          <div
            key={exp.company}
            className="group grid grid-cols-12 gap-4 items-start"
          >
            <div className="col-span-12 md:col-span-2 font-label text-xs text-on-surface-variant pt-1">
              {exp.period}
            </div>
            <div className="col-span-12 md:col-span-3">
              <div className="font-headline text-2xl font-bold group-hover:text-primary transition-colors">
                {exp.company}
              </div>
              <div className="font-label text-[10px] text-on-surface-variant tracking-widest uppercase mt-1">
                {exp.role}
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 font-body text-on-surface-variant">
              {exp.description}
            </div>
            <div className="col-span-12 md:col-span-2 text-right hidden md:block">
              <span className="text-primary group-hover:translate-x-2 transition-transform inline-block">
                →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
