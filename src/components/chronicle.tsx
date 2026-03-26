const experiences = [
  {
    period: "2023 — PRES",
    company: "COGNITION_AI",
    description:
      "Lead Developer Relations. Architecting the future of autonomous engineering loops and LLM-integrated devtools.",
  },
  {
    period: "2021 — 2023",
    company: "AWS // WEB3_ORG",
    description:
      "Senior Cloud Architect. Built managed blockchain services for enterprise scaling on Ethereum and Polygon.",
  },
  {
    period: "2019 — 2021",
    company: "AMAZON_CORP",
    description:
      "Software Development Engineer II. Optimized high-throughput payment gateways using serverless primitives.",
  },
];

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
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="group grid grid-cols-12 gap-4 items-center"
          >
            <div className="col-span-12 md:col-span-2 font-label text-xs text-on-surface-variant">
              {exp.period}
            </div>
            <div className="col-span-12 md:col-span-4 font-headline text-2xl font-bold group-hover:text-primary transition-colors">
              {exp.company}
            </div>
            <div className="col-span-12 md:col-span-4 font-body text-on-surface-variant">
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
