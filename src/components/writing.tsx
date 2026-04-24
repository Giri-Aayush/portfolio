import Link from "next/link";
import { blogs } from "@/data/blogs";

export function Writing() {
  const posts = blogs.filter((b) => b.status === "published");
  const displayed = posts.slice(0, 5);

  return (
    <section id="writing" className="py-20">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <div className="seclabel">Writing · essays & notes</div>
            <h2 className="display">
              Notes from
              <br />
              the <span className="cyan-hl">workbench.</span>
            </h2>
          </div>
          <div
            className="right hidden md:flex gap-5"
            style={{ color: "var(--fg-3)" }}
          >
            <Link href="/blogs" className="hover:text-[var(--cyan)] transition-colors">
              All essays ↗
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3.5">
          {displayed.map((p, i) => {
            const isFeat = i === 0;
            return (
              <Link
                key={p.slug}
                href={`/blogs/${p.slug}`}
                className={`card reveal d-${Math.min(i, 3)} group block`}
                style={{
                  padding: isFeat ? "28px" : "22px",
                }}
              >
                <div
                  className="grid gap-5 items-center"
                  style={{
                    gridTemplateColumns: "56px 1fr 160px 100px",
                  }}
                >
                  <div
                    className="mono hidden md:block"
                    style={{ color: "var(--fg-4)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="col-span-4 md:col-span-1 min-w-0">
                    <div
                      className="transition-colors group-hover:text-[var(--cyan)]"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: isFeat ? 26 : 20,
                        fontWeight: 600,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.25,
                      }}
                    >
                      {p.title}
                    </div>
                    {isFeat && (
                      <p
                        className="mt-2 leading-relaxed"
                        style={{
                          color: "var(--fg-3)",
                          fontSize: 13,
                        }}
                      >
                        {p.description}
                      </p>
                    )}
                  </div>
                  <div
                    className="mono hidden md:block"
                    style={{
                      color: "var(--fg-3)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {p.date}
                  </div>
                  <div
                    className="mono hidden md:block"
                    style={{
                      color: "var(--fg-3)",
                    }}
                  >
                    {p.readTime}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
