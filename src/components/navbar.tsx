import Link from "next/link";

const navLinks = [
  { label: "ABOUT", href: "/#hero" },
  { label: "EXPERIENCE", href: "/#chronicle" },
  { label: "AWARDS", href: "/#awards" },
  { label: "VIDEOS", href: "/#transmission" },
  { label: "BLOGS", href: "/blogs" },
  { label: "OSS", href: "/#terminal" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0E0E0E]/80 backdrop-blur-xl border-b border-outline-variant/20 flex justify-between items-center px-8 py-4">
      <div className="font-headline font-black text-primary tracking-tighter text-xl">
        AAYUSH GIRI
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

      <a
        href="https://cal.com/aayush-giri/quicksync"
        className="font-label text-[10px] tracking-widest uppercase border border-primary/30 px-4 py-2 text-primary hover:bg-primary/10 transition-colors"
      >
        BOOK_A_CALL
      </a>
    </nav>
  );
}
