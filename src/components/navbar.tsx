import Link from "next/link";

const navLinks = [
  { label: "ABOUT", href: "#hero" },
  { label: "EXPERIENCE", href: "#chronicle" },
  { label: "AWARDS", href: "#awards" },
  { label: "VIDEOS", href: "#transmission" },
  { label: "BLOGS", href: "#logs" },
  { label: "OSS", href: "#terminal" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0E0E0E]/80 backdrop-blur-xl border-b border-outline-variant/20 flex justify-between items-center px-8 py-4">
      <div className="font-headline font-black text-primary tracking-tighter text-xl">
        ARCHITECT.V1
      </div>

      <div className="hidden md:flex gap-8 items-center font-headline font-bold tracking-tighter uppercase text-sm">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="w-2 h-2 bg-secondary rounded-full animate-pulse shadow-[0_0_8px_rgba(210,240,0,0.8)]" />
        <span className="font-label text-[10px] text-secondary tracking-widest uppercase">
          NODE_ACTIVE
        </span>
      </div>
    </nav>
  );
}
