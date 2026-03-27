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

      <div className="space-y-10">
        {config.experience.map((exp) => (
          <div
            key={exp.company}
            className="group grid grid-cols-12 gap-4 items-start"
          >
            <div className="col-span-12 md:col-span-2 font-label text-xs text-on-surface-variant pt-1">
              {exp.period}
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="font-headline text-2xl font-bold group-hover:text-primary transition-colors">
                {exp.company}
              </div>
            </div>
            <div className="col-span-12 md:col-span-5">
              <div className="space-y-2">
                {exp.roles.map((role, i) => (
                  <div key={role.title} className="flex items-start gap-3">
                    <div className="flex flex-col items-center mt-1.5">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          i === 0
                            ? "bg-primary shadow-[0_0_8px_rgba(129,236,255,0.6)]"
                            : "bg-outline-variant/40"
                        }`}
                      />
                      {i < exp.roles.length - 1 && (
                        <div className="w-px h-5 bg-outline-variant/20 mt-1" />
                      )}
                    </div>
                    <div>
                      <div
                        className={`font-headline text-sm font-bold ${
                          i === 0 ? "text-on-surface" : "text-on-surface-variant"
                        }`}
                      >
                        {role.title}
                      </div>
                      <div className="font-label text-[10px] text-on-surface-variant/60 tracking-widest uppercase">
                        {role.period}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-12 md:col-span-1 text-right hidden md:block">
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
