"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Transformations", href: "#transformations" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className={`font-black text-2xl tracking-tight transition-colors ${
            scrolled ? "text-dark" : "text-white"
          }`}
        >
          COACH<span className="text-primary">FIT</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-gray-700" : "text-white/90"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-primary-dark transition-colors"
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
          <span className={`block w-6 h-0.5 transition-all ${scrolled ? "bg-dark" : "bg-white"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 transition-all ${scrolled ? "bg-dark" : "bg-white"} ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 transition-all ${scrolled ? "bg-dark" : "bg-white"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 pb-6 flex flex-col gap-4 pt-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-gray-800 font-medium text-base hover:text-primary"
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
