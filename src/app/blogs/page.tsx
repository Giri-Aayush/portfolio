import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Motion } from "@/components/motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { Contact } from "@/components/contact";
import { blogs } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Writing // Aayush Giri",
  description:
    "Long-form writing on zero-knowledge cryptography, rollup architecture, account abstraction, and the infrastructure that keeps the open web open.",
  alternates: {
    canonical: "https://aayushgiri.dev/blogs",
  },
};

export default function BlogsPage() {
  const posts = blogs;

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-16">
        <section className="wrap mb-16">
          <div className="seclabel mb-6 reveal">Writing · archive</div>
          <h1
            className="display reveal d-1"
            style={{ fontSize: "clamp(48px, 7vw, 96px)" }}
          >
            Notes from
            <br />
            the <span className="cyan-hl">workbench.</span>
          </h1>
          <p
            className="reveal d-2 mt-8 max-w-2xl leading-relaxed"
            style={{ color: "var(--fg-2)", fontSize: 18 }}
          >
            Long-form writing on zero-knowledge cryptography, rollup
            architecture, account abstraction, and the infrastructure that
            keeps the open web open.
          </p>
          <div
            className="mono mt-6"
            style={{ color: "var(--fg-3)" }}
          >
            {String(posts.length).padStart(2, "0")} essays · newest first
          </div>
        </section>

        <section className="wrap pb-10">
          <div className="flex flex-col gap-3.5">
            {posts.map((article, i) => (
              <Link
                key={article.slug}
                href={`/blogs/${article.slug}`}
                className={`card reveal d-${Math.min(i, 3)} group block`}
                style={{ padding: i === 0 ? "32px" : "24px" }}
              >
                <div className="flex items-start justify-between gap-6 flex-wrap">
                  <div className="flex-1 min-w-0" style={{ maxWidth: "680px" }}>
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span
                        className="mono"
                        style={{
                          color: "var(--cyan)",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {article.date}
                      </span>
                      <span className="pill">{article.readTime}</span>
                      {article.status === "coming_soon" && (
                        <span className="pill" style={{ color: "var(--fg-4)" }}>
                          Coming soon
                        </span>
                      )}
                    </div>
                    <h2
                      className="transition-colors group-hover:text-[var(--cyan)]"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: i === 0 ? 36 : 26,
                        fontWeight: 600,
                        letterSpacing: "-0.025em",
                        lineHeight: 1.2,
                      }}
                    >
                      {article.title}
                    </h2>
                    <p
                      className="mt-3 leading-relaxed"
                      style={{
                        color: "var(--fg-3)",
                        fontSize: 15,
                      }}
                    >
                      {article.description}
                    </p>
                  </div>
                  <div
                    className="mono hidden md:flex items-center gap-2 transition-colors group-hover:text-[var(--cyan)]"
                    style={{ color: "var(--fg-4)" }}
                  >
                    {article.status === "published" ? "Read" : "Soon"} →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <Contact />
      </main>
      <ThemeToggle />
      <Motion />
    </>
  );
}
