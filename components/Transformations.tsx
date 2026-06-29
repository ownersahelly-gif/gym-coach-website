"use client";

import { useState } from "react";
import type { Transformation } from "@/lib/types";

function TransformationCard({ t }: { t: Transformation }) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="rounded-xl overflow-hidden border" style={{ background: "#0f1923", borderColor: "#1e3a3a" }}>
      <div className="flex">
        <button onClick={() => setShowAfter(false)}
          className="flex-1 py-2 text-xs font-black uppercase tracking-wider transition-colors"
          style={{ background: !showAfter ? "#1e2d2d" : "transparent", color: !showAfter ? "#fff" : "rgba(255,255,255,0.3)" }}>
          Before
        </button>
        <button onClick={() => setShowAfter(true)}
          className="flex-1 py-2 text-xs font-black uppercase tracking-wider transition-colors"
          style={{ background: showAfter ? "#00C9A7" : "transparent", color: showAfter ? "#000" : "rgba(255,255,255,0.3)" }}>
          After
        </button>
      </div>
      <img src={showAfter ? t.after_image : t.before_image} alt={t.name} className="w-full h-64 object-cover" />
      <div className="p-4 flex items-center justify-between">
        <div>
          <p className="font-bold text-white text-sm">{t.name}</p>
          <p className="text-white/30 text-xs">{t.duration}</p>
        </div>
        <span className="font-black text-xs px-3 py-1.5 rounded-full border" style={{ background: "rgba(0,201,167,0.1)", color: "#00C9A7", borderColor: "rgba(0,201,167,0.3)" }}>
          {t.result}
        </span>
      </div>
    </div>
  );
}

export default function Transformations({ transformations }: { transformations: Transformation[] }) {
  return (
    /* Section 4: Dark green-tinted black */
    <section id="transformations" className="py-16" style={{ background: "#0c1a14" }}>
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center font-bold uppercase tracking-[0.2em] text-xs mb-2" style={{ color: "#00C9A7" }}>Real Results</p>
        <h2 className="text-3xl sm:text-4xl font-black text-white text-center mb-10 uppercase tracking-wide">
          Transformations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {transformations.map((t) => <TransformationCard key={t.id} t={t} />)}
        </div>
      </div>
    </section>
  );
}
