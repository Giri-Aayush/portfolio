import Image from "next/image";

const videos = [
  {
    category: "Workshop // ETH_CC",
    title: "Deep Dive into Proto-Danksharding (EIP-4844)",
    description:
      "How blobs transform the cost of data availability for Rollups.",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCPmq7u6GEzcEB8qx41tVpwn7PF4O_Pi0Bzo45hsHjQz43IXkSU-SJ9nUU_PbypGLfLkB96TzZRnr84jZlOzhuyVyVUmHd_nhDFm0_0KfrOHCG52okNC-6q1kq1fwlkmy4Tf-uhN0J-LVop_vmD2aGbnl7sEqW6k2bMdFb_pCnrf_UQbItT2shqsM96AgMY95aD1WeP6hc10LCC7rqrujlDa3ObLV_koeZaz6b2okOjtwm7mLWb9zGkOq44z1r7X2P5P34Mh1eBwlvG",
  },
  {
    category: "Keynote // DevCon",
    title: "The UX of Modular Infrastructure",
    description:
      "Decoupling execution from settlement without fragmenting liquidity.",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDu1UtWjSTCRX3OI0QTba1InoRdyhJcJNHYFABDLxLndTfAvdM269ZaoyV7N4-J-yJHnuc8fBizSo59htQMqyaLJo2sdVYAZVgf3Sp5xdSNRNn7l4Q7ed-93g30kQ6WLk9Q2psmFfLH6qyOEdkaBuv13flJuZw0OhEbWi6umxnOWVJjb1ocr9XnBX-hbZpAAJtcd3_XbPFUJDhtulnekIDV_94g7bk4u3zlhG5-sMf9p9QWhpNy47CFRXtjOYY6OA_5dtqeemhMq-Fj",
  },
  {
    category: "Live_Code // YouTube",
    title: "Zero-Knowledge Proofs from Scratch",
    description:
      "Implementing a simple Groth16 circuit in Rust for beginners.",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCN3W-htL9jmCepRPev-3LITNydlk4dsXlDL2uQ9APbwxZUQ5ngxxfr1Uzs6MhtGvX4vhB1lgqajaQdDeG5Extk-8ko_urbVh7yXsWgvjxmyK_fgQdNfrtPzTMrg-EBdPfB5dTdPTwC1R9M-nYzsW4RXfyuWeC_zMJwMceIeNKhXTE6RNdMn-OxJGL_voBkaLZl6LwNzjV227VxCRapqLw6lehewdSlWDk2IPE358M0zdO1AQYhhpgDiKWNqpg8wITjq8WJX6ylUYZW",
  },
];

export function Transmission() {
  return (
    <section className="px-8 mb-28">
      <div className="mb-12 flex items-center gap-4">
        <h2 className="font-headline text-3xl font-bold tracking-tighter uppercase">
          TRANSMISSION // VIDEO
        </h2>
        <div className="h-[1px] flex-grow bg-outline-variant/20" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {videos.map((video) => (
          <div key={video.title} className="group cursor-pointer">
            <div className="aspect-video bg-surface-container-low mb-6 relative overflow-hidden">
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-surface/40">
                <span className="text-5xl text-white">▶</span>
              </div>
            </div>
            <span className="font-label text-[10px] text-secondary tracking-widest uppercase mb-2 block">
              {video.category}
            </span>
            <h3 className="font-headline text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {video.title}
            </h3>
            <p className="font-body text-sm text-on-surface-variant">
              {video.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
