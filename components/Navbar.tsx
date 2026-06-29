"use client";

import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#transformations" },
  { label: "Posts", href: "#posts" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5" style={{ background: "#000000" }}>
      <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full border border-white/25 flex items-center justify-center">
            <span className="display text-white text-[10px]">OV</span>
          </div>
          <span className="text-white font-bold text-sm tracking-wide">OLA VOLOSHINA</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-xs text-white/55 hover:text-white transition-colors uppercase tracking-wider">
              {l.label}
            </a>
          ))}
          <a href="/services" className="bg-white text-black font-bold text-xs px-4 py-2 rounded-full hover:opacity-85 transition-opacity uppercase tracking-wider">
            Join Now
          </a>
        </div>

        <button className="md:hidden text-white/70" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2">
            {menuOpen ? <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" /> : <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-white/5 px-5 pb-5 flex flex-col gap-3 pt-3" style={{ background: "#000000" }}>
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
  );
}
