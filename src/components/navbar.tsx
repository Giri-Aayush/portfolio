"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "./icons";

const navLinks = [
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Videos", href: "/#videos" },
  { label: "Writing", href: "/blogs" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav-bar ${scrolled ? "scrolled" : ""}`}>
      <div
        className="font-mono text-[13px]"
        style={{ color: "var(--fg-2)" }}
      >
        ~ / <span style={{ color: "var(--fg)" }}>aayush</span>
        <span style={{ color: "var(--fg-4)" }}> — portfolio</span>
      </div>
      <div className="hidden md:flex gap-[2px] text-[13px]">
        {navLinks.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            className="px-[13px] py-[7px] rounded-full transition-colors"
            style={{ color: "var(--fg-2)" }}
          >
            {l.label}
          </Link>
        ))}
      </div>
      <a
        href="https://cal.com/aayush-giri/quicksync"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-cta"
      >
        <Icon.mail />
        <span>Book a call</span>
      </a>
    </nav>
  );
}
