"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#transformations" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(5,5,5,0.85)" : "rgba(5,5,5,1)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 h-[72px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div
            className="h-10 w-10 rounded-full border flex items-center justify-center"
            style={{ borderColor: "rgba(0,224,184,0.4)", background: "rgba(0,224,184,0.08)" }}
          >
            <span className="text-accent display text-[11px]">OV</span>
          </div>
          <div className="leading-tight">
            <p className="text-white font-bold text-sm tracking-wide">OLA VOLOSHINA</p>
            <p className="text-white/30 text-[9px] tracking-[0.2em] uppercase">Shape your story</p>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/60 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-black font-bold text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
            style={{ background: "#00E0B8" }}
          >
            Join Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white/70 hover:text-white" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current" strokeWidth="2">
            {menuOpen ? <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" /> : <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-white/5 px-6 pb-6 flex flex-col gap-4 pt-4" style={{ background: "#050505" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-white/70 hover:text-white text-base" onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-black font-bold px-6 py-3 rounded-full text-center"
            style={{ background: "#00E0B8" }}
            onClick={() => setMenuOpen(false)}
          >
            Join Now
          </a>
        </div>
      )}
    </nav>
  );
}
