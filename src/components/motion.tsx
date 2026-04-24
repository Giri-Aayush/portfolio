"use client";

import { useEffect } from "react";

export function Motion() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      document.querySelectorAll<HTMLElement>(".card.spot").forEach((card) => {
        const r = card.getBoundingClientRect();
        if (
          e.clientX < r.left - 40 ||
          e.clientX > r.right + 40 ||
          e.clientY < r.top - 40 ||
          e.clientY > r.bottom + 40
        )
          return;
        card.style.setProperty("--mx", `${e.clientX - r.left}px`);
        card.style.setProperty("--my", `${e.clientY - r.top}px`);
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".card.tilt");
    const handlers: Array<[HTMLElement, () => void, (e: MouseEvent) => void, () => void]> = [];
    els.forEach((el) => {
      const onEnter = () => {
        el.style.transition = "transform 0.15s ease-out";
      };
      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateX(${-y * 3}deg) rotateY(${x * 3}deg) translateZ(0)`;
      };
      const onLeave = () => {
        el.style.transition = "transform 0.6s cubic-bezier(0.22,1,0.36,1)";
        el.style.transform = "";
      };
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mousemove", onMove as EventListener);
      el.addEventListener("mouseleave", onLeave);
      handlers.push([el, onEnter, onMove, onLeave]);
    });
    return () => {
      handlers.forEach(([el, a, b, c]) => {
        el.removeEventListener("mouseenter", a);
        el.removeEventListener("mousemove", b as EventListener);
        el.removeEventListener("mouseleave", c);
      });
    };
  }, []);

  return null;
}
