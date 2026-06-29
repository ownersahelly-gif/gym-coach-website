"use client";

import Reveal from "./Reveal";

const field = { background: "#000000", border: "1px solid #1c1c1c" };
const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => { e.target.style.borderColor = "#ffffff"; };
const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => { e.target.style.borderColor = "#1c1c1c"; };

export default function ContactSection() {
  return (
    <section id="contact" className="py-14" style={{ background: "#0a0a0a", borderTop: "1px solid #1c1c1c" }}>
      <div className="max-w-md mx-auto px-6 text-center">
        <Reveal>
          <p className="text-white/40 text-[11px] font-bold uppercase tracking-[0.25em] mb-2">Get started</p>
          <h2 className="display text-white text-3xl sm:text-4xl">Ready to start?</h2>
          <div className="heading-rule mb-3" />
          <p className="text-white/45 text-sm mb-7 leading-relaxed">
            Send your details and I&apos;ll get back to you within 24 hours with a plan built around your goals.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <form
            className="flex flex-col gap-3 text-left"
            onSubmit={(e) => { e.preventDefault(); alert("Thanks! I'll be in touch within 24 hours."); }}
          >
            <input type="text" placeholder="Your name" required className="rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none transition-colors" style={field} onFocus={onFocus} onBlur={onBlur} />
            <input type="email" placeholder="Email address" required className="rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none transition-colors" style={field} onFocus={onFocus} onBlur={onBlur} />
            <select className="rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors" style={{ ...field, color: "rgba(255,255,255,0.4)" }} onFocus={onFocus} onBlur={onBlur}>
              <option value="">My goal is...</option>
              <option>Lose weight &amp; get lean</option>
              <option>Build muscle</option>
              <option>Improve fitness &amp; endurance</option>
              <option>General health</option>
            </select>
            <button type="submit" className="bg-white text-black display text-sm py-3.5 rounded-xl hover:bg-white/85 transition-colors mt-1" style={{ letterSpacing: "0.1em" }}>
              Join Now
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
