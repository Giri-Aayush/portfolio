import { config } from "@/lib/config";
import { Icon } from "./icons";

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <div className="seclabel">Experience · timeline</div>
            <h2 className="display">
              Five years,
              <br />
              <span className="cyan-hl">one through-line.</span>
            </h2>
          </div>
          <div
            className="right hidden md:flex items-center gap-4"
            style={{ color: "var(--fg-3)" }}
          >
            <span>
              {String(config.experience.length).padStart(2, "0")} roles · 2022 – present
            </span>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--cyan)] transition-colors"
            >
              Resume ↗
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          {config.experience.map((exp, i) => (
            <a
              key={exp.company}
              href={exp.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`card reveal d-${Math.min(i, 3)} group block`}
              style={{
                padding: "22px 24px",
              }}
            >
              <div className="grid gap-6 items-center md:grid-cols-[180px_1fr_auto]">
                <div className="mono" style={{ color: "var(--fg-3)" }}>
                  {exp.period}
                </div>
                <div>
                  <div>
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 20,
                        fontWeight: 600,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {exp.roles[0].title}
                    </span>
                    <span
                      className="ml-2"
                      style={{ color: "var(--fg-3)", fontSize: 14 }}
                    >
                      · {exp.company.replace(/_/g, " ")}
                    </span>
                  </div>
                  <div
                    className="mt-1.5 leading-relaxed"
                    style={{
                      color: "var(--fg-2)",
                      fontSize: 13,
                    }}
                  >
                    {exp.roles.length > 1 ? (
                      <>
                        {exp.roles.length} roles · {exp.roles[exp.roles.length - 1].title}
                        {" → "}
                        {exp.roles[0].title}
                      </>
                    ) : (
                      exp.roles[0].period
                    )}
                  </div>
                </div>
                <div
                  className="hidden md:flex items-center transition-all group-hover:text-[var(--cyan)] group-hover:translate-x-1"
                  style={{ color: "var(--fg-4)" }}
                >
                  <Icon.arrow width={18} height={18} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
