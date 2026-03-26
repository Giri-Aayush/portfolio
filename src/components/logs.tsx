import Link from "next/link";

const articles = [
  {
    date: "04.12.24",
    readTime: "8 MIN READ",
    title: "The Case for Sovereign Rollups on Bitcoin.",
    description:
      "Exploration of the Ordinals theory and how L2s are finding their way into the most secure settlement layer on earth.",
  },
  {
    date: "22.10.24",
    readTime: "12 MIN READ",
    title: "Statelessness: The Final Frontier of Decentralization.",
    description:
      "Verkle trees and the journey towards making node requirements so light a smartphone can secure the network.",
  },
  {
    date: "15.08.24",
    readTime: "5 MIN READ",
    title: "ERC-4337 is Not Enough.",
    description:
      "Why native Account Abstraction at the protocol level is the only way to achieve mainstream adoption.",
  },
];

export function Logs() {
  return (
    <section className="px-8 mb-28">
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
          {articles.map((article) => (
            <article key={article.title} className="group">
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
              <Link
                href="#"
                className="font-label text-[10px] text-primary tracking-[0.3em] uppercase group-hover:translate-x-2 inline-block transition-transform"
              >
                READ_ENTRY [→]
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
