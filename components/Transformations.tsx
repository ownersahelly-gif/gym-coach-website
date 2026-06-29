"use client";

import { useState } from "react";
import type { Transformation } from "@/lib/types";

function TransformationCard({ t }: { t: Transformation }) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="rounded-xl overflow-hidden bg-surface-2 border border-border">
      {/* Before / After toggle */}
      <div className="flex">
        <button
          onClick={() => setShowAfter(false)}
          className={`flex-1 py-2 text-xs font-black uppercase tracking-wider transition-colors ${
            !showAfter ? "bg-surface-3 text-white" : "bg-surface-2 text-white/30"
          }`}
        >
          Before
        </button>
        <button
          onClick={() => setShowAfter(true)}
          className={`flex-1 py-2 text-xs font-black uppercase tracking-wider transition-colors ${
            showAfter ? "bg-primary text-white" : "bg-surface-2 text-white/30"
          }`}
        >
          After
        </button>
      </div>

      <img
        src={showAfter ? t.after_image : t.before_image}
        alt={`${t.name} ${showAfter ? "after" : "before"}`}
        className="w-full h-64 object-cover"
      />

      <div className="p-4 flex items-center justify-between">
        <div>
          <p className="font-bold text-white text-sm">{t.name}</p>
          <p className="text-white/30 text-xs">{t.duration}</p>
        </div>
        <span className="bg-primary/15 text-primary-light font-black text-xs px-3 py-1.5 rounded-full border border-primary/30">
          {t.result}
        </span>
      </div>
    </div>
  );
}

export default function Transformations({ transformations }: { transformations: Transformation[] }) {
  return (
    <section id="transformations" className="py-16 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-black text-white text-center mb-10 uppercase tracking-wide">
          Transformations
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {transformations.map((t) => (
            <TransformationCard key={t.id} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
