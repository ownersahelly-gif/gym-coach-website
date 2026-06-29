"use client";

import { useState } from "react";
import type { Transformation } from "@/lib/types";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

function Card({ t }: { t: Transformation }) {
  const [showAfter, setShowAfter] = useState(true);
  return (
    <div className="rounded-2xl overflow-hidden border" style={{ background: "#0b0b0d", borderColor: "#1c1f24" }}>
      <div className="relative">
        <img src={showAfter ? t.after_image : t.before_image} alt={t.name} className="w-full h-72 object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(11,11,13,0.85), transparent 45%)" }} />
        {/* toggle */}
        <div className="absolute top-3 left-3 flex gap-1.5 p-1 rounded-full" style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)" }}>
          <button
            onClick={() => setShowAfter(false)}
            className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full transition-colors"
            style={{ background: !showAfter ? "#fff" : "transparent", color: !showAfter ? "#000" : "rgba(255,255,255,0.6)" }}
          >Before</button>
          <button
            onClick={() => setShowAfter(true)}
            className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full transition-colors"
            style={{ background: showAfter ? "#00E0B8" : "transparent", color: showAfter ? "#000" : "rgba(255,255,255,0.6)" }}
          >After</button>
        </div>
        <span className="absolute bottom-3 right-3 display text-black text-sm px-3 py-1.5 rounded-full" style={{ background: "#00E0B8" }}>
          {t.result}
        </span>
      </div>
      <div className="p-4 flex items-center justify-between">
        <p className="font-bold text-white text-sm">{t.name}</p>
        <p className="text-white/35 text-xs uppercase tracking-wider">{t.duration}</p>
      </div>
    </div>
  );
}

export default function Transformations({ transformations }: { transformations: Transformation[] }) {
  return (
    <section id="transformations" className="py-20" style={{ background: "#050505" }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader num="04" label="Real results" title="Transformations" />
        <Reveal delay={80}>
          <p className="text-white/40 text-sm mt-3 mb-12">Tap Before / After on any card to see the full change.</p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {transformations.map((t, i) => (
            <Reveal key={t.id} delay={i * 90}>
              <Card t={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
