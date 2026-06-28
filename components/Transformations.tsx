"use client";

import { useState } from "react";
import type { Transformation } from "@/lib/types";

function TransformationCard({ t }: { t: Transformation }) {
  const [showAfter, setShowAfter] = useState(false);
  const isPlaceholder = t.before_image.startsWith("/placeholders/");

  return (
    <div className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
      {/* Toggle tabs */}
      <div className="flex border-b border-gray-100">
        <button
          onClick={() => setShowAfter(false)}
          className={`flex-1 py-2.5 text-sm font-bold transition-colors ${
            !showAfter
              ? "bg-dark text-white"
              : "bg-white text-gray-400 hover:text-dark"
          }`}
        >
          Before
        </button>
        <button
          onClick={() => setShowAfter(true)}
          className={`flex-1 py-2.5 text-sm font-bold transition-colors ${
            showAfter
              ? "bg-primary text-white"
              : "bg-white text-gray-400 hover:text-primary"
          }`}
        >
          After
        </button>
      </div>

      {/* Photo */}
      <div className="relative h-72 bg-gray-100">
        {isPlaceholder ? (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-gray-50 to-gray-100">
            <span className="text-5xl">{showAfter ? "✨" : "📷"}</span>
            <p className="text-gray-300 text-xs">{showAfter ? "After photo" : "Before photo"}</p>
          </div>
        ) : (
          <img
            src={showAfter ? t.after_image : t.before_image}
            alt={`${t.name} ${showAfter ? "after" : "before"}`}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Info */}
      <div className="p-5 flex items-center justify-between">
        <div>
          <p className="font-bold text-dark">{t.name}</p>
          <p className="text-gray-400 text-xs mt-0.5">{t.duration}</p>
        </div>
        <span className="bg-purple-50 text-primary font-black text-sm px-3 py-1.5 rounded-full border border-purple-100">
          {t.result}
        </span>
      </div>
    </div>
  );
}

export default function Transformations({ transformations }: { transformations: Transformation[] }) {
  return (
    <section id="transformations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-3">
            Real Results
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-dark">
            Client Transformations
          </h2>
          <p className="text-gray-400 mt-4">
            Click <strong>Before</strong> / <strong>After</strong> to see the full change.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {transformations.map((t) => (
            <TransformationCard key={t.id} t={t} />
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-14 bg-primary rounded-2xl p-10 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-black mb-3">
            Ready to write your own story?
          </h3>
          <p className="text-white/70 mb-6">
            Join hundreds who have already changed their lives.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-primary font-black px-8 py-3.5 rounded-full hover:bg-gray-100 transition-colors"
          >
            Start Today
          </a>
        </div>
      </div>
    </section>
  );
}
