"use client";

import { useEffect } from "react";

/*
  Intercepts clicks on in-page anchor links (href="#id").
  - Scrolls smoothly to the target, offset for the fixed navbar.
  - Does NOT write the hash into the URL, so refreshing the page
    no longer jumps to the last-clicked section (e.g. the footer).
*/
export default function SmoothScroll() {
  useEffect(() => {
    // If the page loaded with a hash already, clear it and start at top.
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
      window.scrollTo(0, 0);
    }

    const handler = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!link) return;
      const id = link.getAttribute("href")!.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const navOffset = 56;
      const top = el.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top, behavior: "smooth" });
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return null;
}
