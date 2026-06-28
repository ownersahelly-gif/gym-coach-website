"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Transformations", href: "#transformations" },
  { label: "Posts", href: "#posts" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo — replace COACH NAME with yours */}
        <a href="#" className="font-black text-xl tracking-tight">
          COACH<span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-accent text-black text-sm font-semibold px-5 py-2 rounded-full hover:bg-yellow-300 transition-colors"
          >
            Join Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10 px-6 pb-6 flex flex-col gap-4 pt-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/80 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-accent text-black font-semibold px-5 py-3 rounded-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            Join Now
          </a>
        </div>
      )}
    </nav>
  );
}
