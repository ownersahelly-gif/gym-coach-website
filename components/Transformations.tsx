"use client";

import Image from "next/image";
import { useState } from "react";
import type { Transformation } from "@/lib/types";

function TransformationCard({ t }: { t: Transformation }) {
  const [showAfter, setShowAfter] = useState(false);
  const isPlaceholder = t.before_image.startsWith("/placeholders/");

  return (
    <div className="group rounded-2xl overflow-hidden bg-zinc-900 border border-white/10">
      {/* Image toggle */}
      <div className="relative h-64 sm:h-72">
        {/* Before / After labels */}
        <div className="absolute top-3 left-3 z-10 flex gap-2">
          <button
            onClick={() => setShowAfter(false)}
            className={`text-xs font-bold px-3 py-1 rounded-full transition-all ${
              !showAfter
                ? "bg-white text-black"
                : "bg-black/50 text-white/60 hover:text-white"
            }`}
          >
            BEFORE
          </button>
          <button
            onClick={() => setShowAfter(true)}
            className={`text-xs font-bold px-3 py-1 rounded-full transition-all ${
              showAfter
                ? "bg-accent text-black"
                : "bg-black/50 text-white/60 hover:text-white"
            }`}
          >
            AFTER
          </button>
        </div>

        {isPlaceholder ? (
          <div className="w-full h-full bg-zinc-800 flex flex-col items-center justify-center gap-2">
            <span className="text-4xl">{showAfter ? "✨" : "📷"}</span>
            <p className="text-white/30 text-xs">
              {showAfter ? "After photo" : "Before photo"}
            </p>
          </div>
        ) : (
          <Image
            src={showAfter ? t.after_image : t.before_image}
            alt={`${t.name} ${showAfter ? "after" : "before"}`}
            fill
            className="object-cover transition-all duration-500"
          />
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <p className="font-bold text-base">{t.name}</p>
        <div className="flex items-center gap-3 mt-1">
          <span className="text-accent font-black text-lg">{t.result}</span>
          <span className="text-white/30 text-xs">in {t.duration}</span>
        </div>
      </div>
    </div>
  );
}

export default function Transformations({
  transformations,
}: {
  transformations: Transformation[];
}) {
  return (
    <section id="transformations" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <p className="section-label mb-3">Proof it works</p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
            TRANSFORMATIONS
          </h2>
          <p className="text-white/40 mt-3 text-sm">
            Click BEFORE / AFTER to toggle each photo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {transformations.map((t) => (
            <TransformationCard key={t.id} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
