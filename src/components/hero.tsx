import Image from "next/image";
import { Icon } from "./icons";
import { config } from "@/lib/config";
import { getGitHubStats } from "@/lib/github";

function formatNumber(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  return n.toString();
}

const marqueeItems = [
  "Ethereum",
  "Rollups",
  "Account Abstraction",
  "State Channels",
  "Solidity",
  "Zero-Knowledge",
  "Starknet",
  "Cairo",
  "Aztec",
  "Noir",
  "MCP",
  "AI Agents",
  "SDK Design",
  "DevRel",
  "Rust",
  "TypeScript",
  "Go",
];

export function Hero() {
  const gh = getGitHubStats();
  const totalPRs = gh.totalPRs + config.stats.extraPRs;
  const totalCommits = gh.totalCommits + config.stats.extraCommits;

  const stats: Array<[string, string]> = [
    [`${config.stats.talksGiven}+`, "Talks"],
    [formatNumber(totalPRs) + "+", "PRs"],
    [formatNumber(totalCommits) + "+", "Commits"],
    [`${config.stats.articlesPublished}+`, "Articles"],
  ];

  return (
    <section id="hero" className="hero-ambient relative pt-[100px] pb-6">
      <div className="wrap relative z-[1]">
        <div className="grid gap-6 md:[grid-template-columns:1fr_1.3fr_auto]">
          {/* Portrait card */}
          <div className="portrait-card reveal group">
            <div className="flex-1 rounded-[22px] relative overflow-hidden">
              <Image
                src="/profile.png"
                alt="Aayush Giri"
                fill
                priority
                sizes="(max-width: 960px) 100vw, 35vw"
                className="object-cover grayscale contrast-[1.02] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.02]"
              />
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-700 group-hover:opacity-70"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.55))",
                }}
              />
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-[2]">
              <div>
                <div
                  className="mono mb-1"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  01 — Intro
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 28,
                    fontWeight: 600,
                    color: "#fff",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Aayush Giri
                </div>
              </div>
              <div
                className="mono text-right"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                Remote · Global
              </div>
            </div>
          </div>

          {/* Manifesto card */}
          <div
            className="card card-lg glass reveal d-1 p-10 flex flex-col gap-7"
          >
            <div className="seclabel">Current focus</div>
            <h1
              className="display"
              style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
            >
              Building <span className="cyan-hl">DevEx</span>
              <br />
              for the open web.
            </h1>
            <p
              className="m-0 leading-relaxed max-w-[480px]"
              style={{
                color: "var(--fg-2)",
                fontSize: 16,
              }}
            >
              Senior Developer Relations Engineer at Nethermind. 5+ years
              shipping SDKs, developer tooling, and protocol integrations
              across EVM and non-EVM ecosystems. I close the gap between
              complex protocols and the developers building on top of them.
            </p>
            <div className="social-bar">
              <a
                className="social-btn"
                href={`https://github.com/${config.github}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Icon.gh />
              </a>
              <a
                className="social-btn"
                href="https://x.com/AayushStack"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <Icon.x />
              </a>
              <a
                className="social-btn"
                href="https://www.linkedin.com/in/aayush-giri/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Icon.in />
              </a>
              <a
                className="social-btn"
                href="https://youtube.com/@AayushStack"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Icon.yt />
              </a>
              <a
                className="social-btn"
                href="mailto:aayushgiri1234@gmail.com"
                aria-label="Email"
              >
                <Icon.mail />
              </a>
            </div>
            <div className="flex gap-2.5 mt-1 flex-wrap">
              <a
                href="https://cal.com/aayush-giri/quicksync"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-cyan"
              >
                Let&apos;s connect <Icon.arrow />
              </a>
              <a href="#projects" className="btn">
                Selected work
              </a>
            </div>
          </div>

          {/* Stats column */}
          <div
            className="reveal d-2 grid grid-cols-4 md:grid-cols-1 gap-5 md:gap-8 md:content-between p-6 md:px-7 md:py-8 md:min-w-[150px]"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "var(--r-lg)",
            }}
          >
            {stats.map(([n, l]) => (
              <div key={l}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 32,
                    fontWeight: 600,
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  {n}
                </div>
                <div
                  className="mono mt-2"
                  style={{ fontSize: 10 }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="marquee">
          <div className="marquee-track">
            {[0, 1].map((i) => (
              <span key={i} className="flex gap-12">
                {marqueeItems.map((item, j) => (
                  <span key={`${i}-${j}`} className="flex gap-12 items-center">
                    <span>{item}</span>
                    <span className="sep">✦</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
