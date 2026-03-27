import Link from "next/link";

const footerLinks = [
  { label: "SOURCE_CODE", href: "#" },
  { label: "NODES", href: "#" },
  { label: "STATUS", href: "#" },
];

export function Footer() {
  return (
    <footer
      id="footer"
      className="w-full py-12 px-8 bg-surface border-t border-outline-variant/10"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full">
        <div className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant">
          ©2024 PROTOCOL_ARCHITECT // BUILT_ON_ETHEREUM
        </div>
        <div className="flex gap-8 font-label text-[10px] tracking-widest uppercase">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-outline-variant hover:text-on-surface transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
