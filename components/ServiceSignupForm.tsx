"use client";

import { useState } from "react";
import type { ServicePlan } from "@/lib/data";

// EDIT ME: your payment number / wallet
const PAYMENT_NUMBER = "01XXXXXXXXX";

const field = { background: "#000000", border: "1px solid #1c1c1c" };
const onFocus = (e: React.FocusEvent<HTMLInputElement>) => { e.target.style.borderColor = "#ffffff"; };
const onBlur = (e: React.FocusEvent<HTMLInputElement>) => { e.target.style.borderColor = "#1c1c1c"; };

export default function ServiceSignupForm({ plans }: { plans: ServicePlan[] }) {
  const [selected, setSelected] = useState(plans[0].name);
  const [fileName, setFileName] = useState("");

  return (
    <div>
      {/* Plans */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        {plans.map((p) => {
          const active = selected === p.name;
          return (
            <button
              key={p.name}
              type="button"
              onClick={() => setSelected(p.name)}
              className="text-left rounded-xl p-5 border transition-all"
              style={{
                background: active ? "#ffffff" : "#0a0a0a",
                borderColor: active ? "#ffffff" : "#1c1c1c",
                color: active ? "#000" : "#fff",
              }}
            >
              <p className="text-xs uppercase tracking-wider" style={{ color: active ? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.45)" }}>{p.name}</p>
              <p className="display text-2xl mt-1">{p.price}</p>
              <ul className="mt-3 space-y-1.5">
                {p.perks.map((perk) => (
                  <li key={perk} className="text-xs flex items-start gap-1.5" style={{ color: active ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.55)" }}>
                    <span>✓</span>{perk}
                  </li>
                ))}
              </ul>
            </button>
          );
        })}
      </div>

      {/* Payment instructions */}
      <div className="rounded-xl p-5 mb-6 border" style={{ background: "#0a0a0a", borderColor: "#1c1c1c" }}>
        <p className="text-white font-bold text-sm mb-1">How to enroll</p>
        <p className="text-white/50 text-sm leading-relaxed">
          Transfer the amount for your chosen plan to <span className="text-white font-bold">{PAYMENT_NUMBER}</span> (InstaPay / Vodafone Cash),
          then fill in your details below and attach a screenshot of the payment. I&apos;ll confirm your spot within 24 hours.
        </p>
      </div>

      {/* Form */}
      <form
        className="flex flex-col gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          alert(`Thanks! Your request for the "${selected}" plan was received. I'll confirm within 24 hours.`);
        }}
      >
        <input type="text" placeholder="Full name" required className="rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none transition-colors" style={field} onFocus={onFocus} onBlur={onBlur} />
        <input type="tel" placeholder="Phone number" required className="rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none transition-colors" style={field} onFocus={onFocus} onBlur={onBlur} />
        <input type="email" placeholder="Email address" required className="rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none transition-colors" style={field} onFocus={onFocus} onBlur={onBlur} />

        {/* Payment screenshot upload */}
        <label className="rounded-xl px-4 py-3 text-sm cursor-pointer flex items-center justify-between transition-colors" style={field}>
          <span className="text-white/45">{fileName || "Attach payment screenshot"}</span>
          <span className="text-white/70 text-xs uppercase tracking-wider border border-white/20 rounded-full px-3 py-1">Upload</span>
          <input
            type="file"
            accept="image/*"
            required
            className="hidden"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
          />
        </label>

        <button type="submit" className="bg-white text-black display text-sm py-3.5 rounded-xl hover:bg-white/85 transition-colors mt-1" style={{ letterSpacing: "0.1em" }}>
          Submit &amp; join — {selected}
        </button>
      </form>
    </div>
  );
}
