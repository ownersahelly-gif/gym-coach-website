"use client";

import { useState } from "react";

const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Transformations", href: "#transformations" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5" style={{ background: "#000000" }}>
      <div className="max-w-7xl mx-auto px-5 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-full border border-accent/40 flex items-center justify-center" style={{ background: "rgba(0,201,167,0.1)" }}>
            <span className="text-accent font-black text-xs">LOGO</span>
          </div>
          <div className="leading-tight">
            <p className="text-white font-black text-base tracking-wide">OLA VOLOSHINA</p>
            <p className="text-white/30 text-[10px] tracking-widest uppercase">Shape your story</p>
          </div>
        </a>

        <div className="flex items-center gap-5">
          <button className="text-white/50 hover:text-white transition-colors" aria-label="Search">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" strokeLinecap="round" />
            </svg>
          </button>
          <button className="text-white/50 hover:text-white transition-colors" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-white/5 px-6 pb-6 flex flex-col gap-4 pt-4" style={{ background: "#000000" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-white/60 hover:text-white font-medium text-base transition-colors" onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="text-black font-bold px-6 py-3 rounded-full text-center transition-colors" style={{ background: "#00C9A7" }} onClick={() => setMenuOpen(false)}>
            Join Now
          </a>
        </div>
      )}
    </nav>
  );
}
