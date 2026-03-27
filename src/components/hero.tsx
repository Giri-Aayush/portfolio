import Image from "next/image";

const tags = [
  { label: "ETHEREUM_INFRA", color: "primary" },
  { label: "ZERO_KNOWLEDGE", color: "secondary" },
  { label: "SDK_TOOLING", color: "primary" },
  { label: "AI_AGENTS", color: "secondary" },
] as const;

export function Hero() {
  return (
    <section id="hero" className="px-8 mb-28">
      <div className="editorial-grid">
        {/* Image - hidden on mobile, shown on desktop left with blended edges */}
        <div className="hidden md:block col-span-5 aspect-[4/5] relative overflow-hidden">
          <Image
            src="/profile.png"
            alt="Profile"
            width={800}
            height={1000}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            priority
          />
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_30px_#0e0e0e]" />
        </div>

        <div className="col-span-12 md:col-span-7 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-secondary shadow-[0_0_10px_#d2f000]" />
            <span className="font-label text-xs text-on-surface-variant tracking-[0.2em]">
              CURRENT_FOCUS
            </span>
          </div>

          <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
            BUILDING <span className="text-primary italic">DEVEX</span>
            <br />
            FOR THE OPEN WEB.
          </h1>

          <p className="font-body text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
            Hi, I&apos;m Aayush Giri. I&apos;ve been building software for over
            5 years across zero-knowledge cryptography, AI agent tooling,
            developer tooling, blockchain infrastructure, and full-stack
            development. I also specialize in high-impact developer relations
            and technical education, with a deep focus on closing the gap
            between complex protocols and the developers building on top of
            them.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {tags.map((tag) => (
              <span
                key={tag.label}
                className={`font-label text-[10px] px-3 py-1 border uppercase tracking-widest ${
                  tag.color === "primary"
                    ? "border-primary/30 text-primary"
                    : "border-secondary/30 text-secondary"
                }`}
              >
                {tag.label}
              </span>
            ))}
          </div>

          <a
            href="https://cal.com/aayush-giri/quicksync"
            className="font-label text-[10px] tracking-[0.3em] uppercase bg-primary text-surface px-6 py-3 hover:bg-primary-dim transition-colors inline-block w-fit font-bold"
          >
            LET&apos;S_CONNECT [→]
          </a>
        </div>

        {/* Mobile-only image - shown below content with blended edges */}
        <div className="col-span-12 md:hidden relative max-w-xs mx-auto mt-8">
          <div className="aspect-square overflow-hidden grayscale rounded-full">
            <Image
              src="/profile.png"
              alt="Profile"
              width={400}
              height={400}
              className="w-full h-full object-cover scale-110"
            />
          </div>
          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_20px_#0e0e0e] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
