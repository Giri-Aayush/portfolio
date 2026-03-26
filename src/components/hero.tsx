import Image from "next/image";

const tags = [
  { label: "EVM_OPTIMIZATION", color: "primary" },
  { label: "ZERO_KNOWLEDGE", color: "secondary" },
  { label: "RUST_LANG", color: "primary" },
  { label: "MODULAR_DA", color: "secondary" },
] as const;

export function Hero() {
  return (
    <section id="hero" className="px-8 mb-28">
      <div className="editorial-grid">
        <div className="col-span-12 md:col-span-5 aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDwunGl3kJPqxtiTUsmCB5hD9_964izuFRbb2X08Y8Fd0EtGfgbN2amOdzJoMnhklhNqHPkDeTYuEeuDZVCtMkcCYdd8etAW9fBbknuFsmTuGn9rnW8LRwsBWERiguupRYF_QDDyz3euURCj4AK1yqo_gRLHF0RZWzGU54vNod6ifWSu6KU3-6-xdj1DQxMMbFw5DHUWJibUa38fj7-EX4uS9vmYQMHeXmtPk96X0wS089lpjWPpJL-yFBL77XbYp7wNaRDnZ7EsSw"
            alt="Profile"
            width={800}
            height={1000}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        <div className="col-span-12 md:col-span-7 flex flex-col justify-end pt-8 md:pt-0">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-secondary shadow-[0_0_10px_#d2f000]" />
            <span className="font-label text-xs text-on-surface-variant tracking-[0.2em]">
              CURRENT_FOCUS
            </span>
          </div>

          <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
            SCALING <span className="text-primary italic">PROTOCOLS</span>
            <br />
            FOR THE OPEN WEB.
          </h1>

          <p className="font-body text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
            Developer Relations Engineer specializing in Ethereum infrastructure
            and decentralized systems. Bridging the gap between complex
            cryptography and high-performance engineering through technical
            advocacy and modular architecture.
          </p>

          <div className="flex flex-wrap gap-3">
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
        </div>
      </div>
    </section>
  );
}
