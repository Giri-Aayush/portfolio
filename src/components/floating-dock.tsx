import Link from "next/link";

const dockItems = [
  { icon: "</>", href: "#", active: true },
  { icon: "⬡", href: "#" },
  { icon: ">_", href: "#" },
  { icon: "◎", href: "#" },
];

export function FloatingDock() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-8 items-center bg-[#131313]/90 backdrop-blur-md border border-primary/30 px-6 py-3 shadow-[0_0_40px_rgba(0,229,255,0.06)]">
      {dockItems.map((item, i) => (
        <Link
          key={i}
          href={item.href}
          className={`font-label text-sm transition-transform hover:scale-110 ${
            item.active
              ? "text-secondary drop-shadow-[0_0_8px_rgba(210,240,0,0.5)]"
              : "text-on-surface-variant hover:text-primary"
          }`}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
}
