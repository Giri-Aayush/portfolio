import { config } from "@/lib/config";

export function Terminal() {
  return (
    <section id="terminal" className="px-8 mb-16">
      <div className="mb-12 flex items-center gap-4">
        <h2 className="font-headline text-3xl font-bold tracking-tighter uppercase">
          TERMINAL // OSS
        </h2>
        <div className="h-[1px] flex-grow bg-outline-variant/20" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {config.ossProjects.map((project) => (
          <a
            key={project.repo}
            href={`https://github.com/${config.github}/${project.repo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface-container-low p-6 border border-outline-variant/10 hover:border-primary/50 transition-colors cursor-pointer group"
          >
            <div className="flex justify-between items-start mb-8">
              <span className="text-primary text-xl">{project.icon}</span>
              {project.stars > 0 && (
                <div className="flex items-center gap-2">
                  <span className="font-label text-[10px] text-on-surface-variant">
                    ★ {project.stars}
                  </span>
                </div>
              )}
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
          </a>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="https://github.com/Giri-Aayush"
          target="_blank"
          rel="noopener noreferrer"
          className="font-label text-[10px] text-primary tracking-[0.3em] uppercase border border-primary/30 px-6 py-3 hover:bg-primary/10 transition-colors"
        >
          VIEW ALL PROJECTS [→]
        </a>
      </div>
    </section>
  );
}
