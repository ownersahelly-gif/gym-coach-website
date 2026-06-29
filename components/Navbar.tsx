"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#transformations" },
  { label: "Posts", href: "#posts" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const open = menuOpen;

  return (
    <div
      className="fixed top-0 inset-x-0 z-50 flex justify-center"
      style={{
        transition: "padding 0.5s var(--ease)",
        padding: scrolled ? "12px 12px 0" : "0",
      }}
    >
      <nav
        className="w-full overflow-hidden"
        style={{
          transition: "max-width 0.5s var(--ease), background 0.5s var(--ease), border-color 0.5s var(--ease), border-radius 0.5s var(--ease), box-shadow 0.5s var(--ease)",
          maxWidth: scrolled ? "660px" : "100%",
          background: scrolled ? "rgba(12,12,12,0.72)" : "#000000",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          border: scrolled ? "1px solid rgba(255,255,255,0.10)" : "1px solid rgba(255,255,255,0.05)",
          borderRadius: scrolled ? (open ? "24px" : "999px") : "0px",
          boxShadow: scrolled ? "0 16px 50px -16px rgba(0,0,0,0.85)" : "none",
        }}
      >
        <div
          className="px-5 flex items-center justify-between"
          style={{ height: scrolled ? "54px" : "56px", transition: "height 0.5s var(--ease)" }}
        >
          <a href="#" className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
              <span className="display text-black text-[11px] leading-none pt-0.5">OV</span>
            </div>
            <span className="text-white font-bold text-sm tracking-[0.12em]">OLA VOLOSHINA</span>
          </a>

          <div className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="navlink text-xs text-white/60 hover:text-white transition-colors uppercase tracking-wider">
                {l.label}
              </a>
            ))}
            <a href="/services" className="bg-white text-black font-bold text-xs px-4 py-2 rounded-full hover:opacity-85 transition-opacity uppercase tracking-wider">
              Join Now
            </a>
          </div>

          <button className="md:hidden text-white/70" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" /> : <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/5 px-5 pb-5 flex flex-col gap-3 pt-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-white/70 hover:text-white text-sm uppercase tracking-wider" onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="/services" className="bg-white text-black font-bold px-5 py-2.5 rounded-full text-center uppercase tracking-wider text-sm" onClick={() => setMenuOpen(false)}>
              Join Now
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}
