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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2d1b4e]">
      <div className="max-w-7xl mx-auto px-5 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          {/*
            REPLACE with your actual logo:
            <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
          */}
          <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
            <span className="text-white font-black text-sm">LOGO</span>
          </div>
          <div className="leading-tight">
            <p className="text-white font-black text-base tracking-wide">COACH NAME</p>
            <p className="text-white/50 text-[10px] tracking-widest uppercase">Shape your story</p>
          </div>
        </a>

        {/* Right icons */}
        <div className="flex items-center gap-5">
          <button className="text-white/80 hover:text-white" aria-label="Search">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" strokeLinecap="round" />
            </svg>
          </button>
          <button
            className="text-white/80 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown menu */}
      {menuOpen && (
        <div className="bg-[#2d1b4e] border-t border-white/10 px-6 pb-6 flex flex-col gap-4 pt-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-white font-medium text-base"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary text-white font-bold px-6 py-3 rounded-full text-center hover:bg-primary-dark"
            onClick={() => setMenuOpen(false)}
          >
            Join Now
          </a>
        </div>
      )}
    </nav>
  );
}
