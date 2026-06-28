"use client";

import { useState } from "react";
import type { Transformation } from "@/lib/types";

function TransformationCard({ t }: { t: Transformation }) {
  const [showAfter, setShowAfter] = useState(false);
  const isPlaceholder = t.before_image.startsWith("/placeholders/");

  return (
    <div className="rounded-2xl overflow-hidden bg-surface-2 border border-border hover:border-primary/40 transition-all duration-300">
      <div className="flex border-b border-border">
        <button
          onClick={() => setShowAfter(false)}
          className={`flex-1 py-2.5 text-sm font-bold transition-colors ${
            !showAfter ? "bg-surface-3 text-white" : "bg-surface-2 text-white/30 hover:text-white/60"
          }`}
        >
          Before
        </button>
        <button
          onClick={() => setShowAfter(true)}
          className={`flex-1 py-2.5 text-sm font-bold transition-colors ${
            showAfter ? "bg-primary text-white" : "bg-surface-2 text-white/30 hover:text-primary-light"
          }`}
        >
          After
        </button>
      </div>

      <div className="relative h-72 bg-surface-3">
        {isPlaceholder ? (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
            <span className="text-5xl opacity-20">{showAfter ? "✨" : "📷"}</span>
            <p className="text-white/20 text-xs">{showAfter ? "After photo" : "Before photo"}</p>
          </div>
        ) : (
          <img src={showAfter ? t.after_image : t.before_image} alt={t.name} className="w-full h-full object-cover" />
        )}
      </div>

      <div className="p-5 flex items-center justify-between">
        <div>
          <p className="font-bold text-white">{t.name}</p>
          <p className="text-white/30 text-xs mt-0.5">{t.duration}</p>
        </div>
        <span className="bg-primary/15 text-primary-light font-black text-sm px-3 py-1.5 rounded-full border border-primary/30">
          {t.result}
        </span>
      </div>
    </div>
  );
}

export default function Transformations({ transformations }: { transformations: Transformation[] }) {
  return (
    <section id="transformations" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-primary-light font-bold tracking-[0.2em] uppercase text-xs mb-3">Real Results</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">Client Transformations</h2>
          <p className="text-white/30 mt-4 text-sm">Click Before / After to see the full change.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {transformations.map((t) => <TransformationCard key={t.id} t={t} />)}
        </div>

        {/* CTA strip */}
        <div className="mt-14 rounded-2xl p-10 text-center bg-gradient-to-r from-[#1a0a2e] via-[#2d1060] to-[#1a0a2e] border border-primary/20">
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
            Ready to write your own story?
          </h3>
          <p className="text-white/40 mb-6 text-sm">Join hundreds who have already changed their lives.</p>
          <a href="#contact" className="inline-block bg-primary hover:bg-primary-dark text-white font-black px-8 py-3.5 rounded-full transition-colors">
            Start Today
          </a>
        </div>
      </div>
    </section>
  );
}
