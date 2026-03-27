const projects = [
  {
    icon: "⌘",
    name: "zk-snark-kit",
    stars: "2.4k",
    description:
      "A production-ready toolkit for generating Groth16 proofs in browser-based environments.",
    language: "TypeScript",
    langColor: "#3178c6",
  },
  {
    icon: "◈",
    name: "helios-rust",
    stars: "840",
    description:
      "A high-performance light client implementation for Ethereum 2.0 consensus layer.",
    language: "Rust",
    langColor: "#dea584",
  },
  {
    icon: "⬡",
    name: "modular-sdk",
    stars: "1.1k",
    description:
      "Unified abstraction layer for interacting with Celestia, Avail, and EigenDA.",
    language: "TypeScript",
    langColor: "#3178c6",
  },
  {
    icon: "◇",
    name: "evm-analyzer",
    stars: "492",
    description:
      "Static analysis tool for finding gas optimization patterns in Solidity bytecode.",
    language: "Python",
    langColor: "#3572A5",
  },
];

export function Terminal() {
  return (
    <section className="px-8 mb-28">
      <div className="mb-12 flex items-center gap-4">
        <h2 className="font-headline text-3xl font-bold tracking-tighter uppercase">
          TERMINAL // OSS
        </h2>
        <div className="h-[1px] flex-grow bg-outline-variant/20" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-surface-container-low p-6 border border-outline-variant/10 hover:border-primary/50 transition-colors cursor-pointer group"
          >
            <div className="flex justify-between items-start mb-8">
              <span className="text-primary text-xl">{project.icon}</span>
              <div className="flex items-center gap-2">
                <span className="font-label text-[10px] text-on-surface-variant">
                  ★ {project.stars}
                </span>
              </div>
            </div>
            <h4 className="font-headline font-bold text-xl mb-3 group-hover:text-secondary transition-colors">
              {project.name}
            </h4>
            <p className="font-body text-sm text-on-surface-variant mb-6">
              {project.description}
            </p>
            <div className="flex gap-2 items-center">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: project.langColor }}
              />
              <span className="font-label text-[10px] text-on-surface-variant">
                {project.language}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
