import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { FloatingDock } from "@/components/floating-dock";
import { Footer } from "@/components/footer";
import { blogs } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blogs // Aayush Giri",
  description:
    "Thought leadership on the decentralization stack: zero-knowledge proofs, rollups, account abstraction, and Ethereum infrastructure.",
  alternates: {
    canonical: "https://aayushgiri.dev/blogs",
  },
};

export default function BlogsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-12">
        <section id="blogs-header" className="px-8 mb-20">
          <div className="editorial-grid">
            <div className="col-span-12 md:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-secondary shadow-[0_0_10px_#d2f000]" />
                <span className="font-label text-xs text-on-surface-variant tracking-[0.2em]">
                  LOGS // ARCHIVE
                </span>
              </div>

              <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-8 uppercase">
                BLOGS <span className="text-primary italic">&amp; ESSAYS</span>
              </h1>

              <p className="font-body text-lg text-on-surface-variant max-w-xl mb-4 leading-relaxed">
                Long-form writing on zero-knowledge cryptography, rollup
                architecture, account abstraction, and the infrastructure that
                keeps the open web open.
              </p>
            </div>

            <div className="hidden md:flex col-span-5 flex-col items-end justify-end">
              <span className="font-label text-xs text-on-surface-variant tracking-[0.2em] mb-2">
                COUNT
              </span>
              <span className="font-headline text-8xl font-bold tracking-tighter leading-none text-primary">
                {String(blogs.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </section>

        <section id="blogs-list" className="px-8 mb-28">
          <div className="editorial-grid">
            <div className="col-span-12 md:col-span-4">
              <h2 className="font-headline text-6xl font-bold tracking-tighter uppercase mb-4 sticky top-28">
                INDEX
              </h2>
              <p className="font-label text-xs text-on-surface-variant uppercase tracking-widest">
                All posts, newest first.
              </p>
            </div>

            <div className="col-span-12 md:col-span-8 space-y-16">
              {blogs.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blogs/${article.slug}`}
                  className="block group border-b border-outline-variant/20 pb-12 last:border-b-0"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-label text-xs text-secondary">
                      {article.date}
                    </span>
                    <span className="font-label text-[10px] text-on-surface-variant border border-outline-variant/30 px-2 py-0.5 uppercase">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="font-headline text-4xl font-bold tracking-tight group-hover:text-primary transition-colors mb-4">
                    {article.title}
                  </h3>
                  <p className="font-body text-on-surface-variant leading-relaxed mb-6">
                    {article.description}
                  </p>
                  <span className="font-label text-[10px] text-outline-variant tracking-[0.3em] uppercase group-hover:text-primary transition-colors">
                    {article.status === "published"
                      ? "READ [→]"
                      : "COMING_SOON"}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FloatingDock />
      <Footer />
    </>
  );
}
