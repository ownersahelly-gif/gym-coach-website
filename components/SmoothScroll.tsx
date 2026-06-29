"use client";

import { useEffect } from "react";

/*
  Two jobs:
  1. Disable the browser's automatic scroll restoration. That restoration is
     what made a refresh jump back to the footer — fixed by forcing top on load
     (unless the URL genuinely has a #section hash to honor).
  2. Smooth-scroll in-page anchor links without writing the hash to the URL.
*/
export default function SmoothScroll() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const scrollToId = (id: string, smooth: boolean) => {
      const el = document.getElementById(id);
      if (!el) return false;
      const top = el.getBoundingClientRect().top + window.scrollY - 56;
      window.scrollTo({ top, behavior: smooth ? "smooth" : "auto" });
      return true;
    };

    // On load: honor a real hash, otherwise start at the very top.
    const hash = window.location.hash ? window.location.hash.slice(1) : "";
    if (hash) {
      setTimeout(() => scrollToId(hash, false), 0);
    } else {
      window.scrollTo(0, 0);
    }

    const handler = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a") as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute("href") || "";
      let id = "";
      if (href.startsWith("#")) id = href.slice(1);
      else if (href.startsWith("/#") && window.location.pathname === "/") id = href.slice(2);
      else return; // real navigation — let it through
      if (id && scrollToId(id, true)) e.preventDefault();
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return null;
}
