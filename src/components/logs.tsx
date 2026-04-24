import Link from "next/link";
import { blogs } from "@/data/blogs";

export function Logs() {
  const preview = blogs.slice(0, 3);

  return (
    <section id="logs" className="px-8 mb-28">
      <div className="editorial-grid">
        <div className="col-span-12 md:col-span-4">
          <h2 className="font-headline text-6xl font-bold tracking-tighter uppercase mb-4 sticky top-28">
            LOGS // BLOGS
          </h2>
          <p className="font-label text-xs text-on-surface-variant uppercase tracking-widest">
            Thought leadership on the decentralization stack.
          </p>
        </div>

        <div className="col-span-12 md:col-span-8 space-y-16">
          {preview.map((article) => (
            <Link
              key={article.slug}
              href={`/blogs/${article.slug}`}
              className="block group"
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
              <span className="font-label text-[10px] text-outline-variant tracking-[0.3em] uppercase">
                {article.status === "published" ? "READ [→]" : "COMING_SOON"}
              </span>
            </Link>
          ))}

          <Link
            href="/blogs"
            className="font-label text-[10px] tracking-[0.3em] uppercase bg-primary text-surface px-6 py-3 hover:bg-primary-dim transition-colors inline-block w-fit font-bold"
          >
            VIEW_ALL_BLOGS [→]
          </Link>
        </div>
      </div>
    </section>
  );
}
