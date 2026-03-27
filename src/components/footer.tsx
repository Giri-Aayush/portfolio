import Link from "next/link";

export function Footer() {
  return (
    <footer
      id="footer"
      className="w-full pt-12 pb-24 px-8 bg-surface border-t border-outline-variant/10"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full">
        <div className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant">
          &copy;{new Date().getFullYear()} AAYUSH GIRI
        </div>
        <div className="flex gap-8 font-label text-[10px] tracking-widest uppercase">
          <Link
            href="https://github.com/Giri-Aayush"
            target="_blank"
            rel="noopener noreferrer"
            className="text-outline-variant hover:text-on-surface transition-colors"
          >
            GITHUB
          </Link>
          <Link
            href="https://x.com/AayushStack"
            target="_blank"
            rel="noopener noreferrer"
            className="text-outline-variant hover:text-on-surface transition-colors"
          >
            X
          </Link>
          <Link
            href="https://www.linkedin.com/in/aayush-giri/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-outline-variant hover:text-on-surface transition-colors"
          >
            LINKEDIN
          </Link>
          <Link
            href="mailto:aayushgiri1234@gmail.com"
            className="text-outline-variant hover:text-on-surface transition-colors"
          >
            EMAIL
          </Link>
        </div>
      </div>
    </footer>
  );
}
