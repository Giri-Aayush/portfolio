import { config } from "@/lib/config";
import { Icon } from "./icons";
import { ProjectThumb } from "./project-thumb";

const gradients = [
  "gradient-1",
  "gradient-2",
  "gradient-6",
  "gradient-3",
  "gradient-4",
  "gradient-5",
];

export function Projects() {
  const featured = config.ossProjects.slice(0, 8);

  return (
    <section id="projects" className="py-20">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <div className="seclabel">Selected projects</div>
            <h2 className="display">
              Things I&apos;ve built
              <br />
              <span className="cyan-hl">with good people.</span>
            </h2>
          </div>
          <div
            className="right hidden md:block"
            style={{ color: "var(--fg-3)" }}
          >
            08 shown ·{" "}
            <a
              href={`https://github.com/${config.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--cyan)] transition-colors"
            >
              more on GitHub ↗
            </a>
          </div>
        </div>
        <div
          className="grid gap-[18px] md:grid-cols-3"
          style={{
            gridAutoRows: "280px",
          }}
        >
          {featured.map((p, i) => {
            const big = i === 0;
            return (
              <a
                key={p.repo}
                href={`https://github.com/${config.github}/${p.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`card card-lg spot reveal d-${Math.min(i, 3)} group p-[22px] flex flex-col cursor-pointer ${big ? "md:col-span-2" : ""}`}
              >
                <div
                  className={`tile-preview ${gradients[i % gradients.length]} flex-1 mb-4 relative`}
                >
                  <ProjectThumb
                    big={big}
                    mockType={"mockType" in p ? p.mockType : undefined}
                    mockHeader={"mockHeader" in p ? p.mockHeader : undefined}
                    mock={"mock" in p ? p.mock : undefined}
                    mockMethod={"mockMethod" in p ? p.mockMethod : undefined}
                    mockEndpoint={"mockEndpoint" in p ? p.mockEndpoint : undefined}
                    mockFeed={"mockFeed" in p ? p.mockFeed : undefined}
                    mockLogs={"mockLogs" in p ? p.mockLogs : undefined}
                    mockLabel={"mockLabel" in p ? p.mockLabel : undefined}
                    mockValue={"mockValue" in p ? p.mockValue : undefined}
                  />
                  {p.tag && (
                    <span
                      className="pill cyan absolute top-4 left-4"
                      style={{ fontSize: 9, padding: "4px 9px" }}
                    >
                      {p.tag}
                    </span>
                  )}
                  <span
                    className="absolute top-4 right-4 flex items-center gap-1.5 mono"
                    style={{
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    {p.stars > 0 && (
                      <>
                        <Icon.star width={11} height={11} /> {p.stars}
                      </>
                    )}
                  </span>
                </div>
                <div className="flex justify-between items-end gap-3">
                  <div className="min-w-0">
                    <div
                      className="truncate"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: big ? 26 : 20,
                        fontWeight: 600,
                        letterSpacing: "-0.02em",
                        marginBottom: 4,
                      }}
                    >
                      {p.name}
                    </div>
                    <div className="mono" style={{ fontSize: 10 }}>
                      {p.language} · {p.description.split(".")[0]}
                    </div>
                  </div>
                  <div
                    className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all group-hover:rotate-[-45deg]"
                    style={{
                      background: "var(--surface-2)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <Icon.arrow />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {config.awards.length > 0 && (
          <div className="mt-16 reveal">
            <div className="seclabel mb-6">Awards · ETHGlobal</div>
            <div className="grid gap-4 md:grid-cols-3">
              {config.awards.map((a) => (
                <div
                  key={a.event}
                  className="card p-6"
                  style={{ borderRadius: "var(--r-lg)" }}
                >
                  <span
                    className="pill"
                    style={
                      a.result === "WINNER"
                        ? { color: "var(--cyan)", borderColor: "var(--cyan-border)", background: "var(--cyan-soft)" }
                        : undefined
                    }
                  >
                    {a.result}
                  </span>
                  <div
                    className="mt-4"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 20,
                      fontWeight: 600,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {a.track}
                  </div>
                  <div
                    className="mono mt-1.5"
                    style={{ fontSize: 10 }}
                  >
                    {a.event}
                  </div>
                  <p
                    className="mt-4 leading-relaxed"
                    style={{ color: "var(--fg-2)", fontSize: 13 }}
                  >
                    {a.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
