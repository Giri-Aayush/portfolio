import { config } from "@/lib/config";

export function Credentials() {
  const { speaking } = config;

  return (
    <section id="credentials" className="px-8 mb-28">
      <div className="mb-12 flex items-center gap-4">
        <h2 className="font-headline text-3xl font-bold tracking-tighter uppercase">
          CREDENTIALS // COMMUNITY
        </h2>
        <div className="h-px grow bg-outline-variant/20" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-surface-container-low p-6 border border-outline-variant/10">
          <span className="font-label text-[10px] tracking-widest text-primary uppercase block mb-2">
            Conference Talks
          </span>
          <span className="font-headline text-4xl font-bold">
            {speaking.talks}
            <span className="text-primary">+</span>
          </span>
        </div>
        <div className="bg-surface-container-low p-6 border border-outline-variant/10">
          <span className="font-label text-[10px] tracking-widest text-secondary uppercase block mb-2">
            Hackathons Judged
          </span>
          <span className="font-headline text-4xl font-bold">
            {speaking.hackathonsJudged}
            <span className="text-secondary">+</span>
          </span>
        </div>
        <div className="bg-surface-container-low p-6 border border-outline-variant/10">
          <span className="font-label text-[10px] tracking-widest text-primary uppercase block mb-2">
            Developers Onboarded
          </span>
          <span className="font-headline text-4xl font-bold">
            {(speaking.developersOnboarded / 1000).toFixed(0)}K
            <span className="text-primary">+</span>
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {speaking.conferences.map((conf) => (
          <span
            key={conf}
            className="font-label text-[10px] px-3 py-1 border border-outline-variant/20 text-on-surface-variant tracking-widest uppercase hover:border-primary/30 hover:text-primary transition-colors"
          >
            {conf}
          </span>
        ))}
      </div>
    </section>
  );
}
