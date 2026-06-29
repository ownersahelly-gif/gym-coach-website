"use client";

import Reveal from "./Reveal";

const focusAccent = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  e.target.style.borderColor = "#00E0B8";
};
const blurReset = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  e.target.style.borderColor = "#1c1f24";
};
const field = { background: "#050505", border: "1px solid #1c1f24" };

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: "#08130f" }}>
      {/* accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,224,184,0.12), transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row gap-14 items-start">
          <div className="flex-1">
            <Reveal>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-accent font-black text-sm tracking-widest">07</span>
                <span className="w-8 h-px bg-accent/50" />
                <span className="text-white/40 text-xs font-bold uppercase tracking-[0.25em]">Get started</span>
              </div>
              <h2 className="display text-white text-5xl sm:text-6xl leading-none mb-6">
                Ready to build<br /><span className="text-accent">your best body?</span>
              </h2>
              <p className="text-white/50 text-base leading-relaxed mb-8 max-w-md">
                Fill in your details and I&apos;ll get back to you within 24 hours with a plan built around your goals.
              </p>
              <ul className="space-y-3.5">
                {["Personalised training program", "Custom nutrition plan", "Weekly check-ins & accountability", "Direct access via WhatsApp"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/65 text-sm">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 border" style={{ background: "rgba(0,224,184,0.1)", borderColor: "rgba(0,224,184,0.4)" }}>
                      <svg viewBox="0 0 12 12" className="w-3 h-3 fill-none" stroke="#00E0B8" strokeWidth="2"><path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={140} className="flex-1 w-full">
            <div className="rounded-2xl p-8 border" style={{ background: "#0b0b0d", borderColor: "#1c1f24" }}>
              <h3 className="display text-white text-2xl mb-6">Send me a message</h3>
              <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); alert("Message sent! I'll be in touch within 24 hours."); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your name" required className="rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/25 focus:outline-none transition-colors" style={field} onFocus={focusAccent} onBlur={blurReset} />
                  <input type="email" placeholder="Email address" required className="rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/25 focus:outline-none transition-colors" style={field} onFocus={focusAccent} onBlur={blurReset} />
                </div>
                <input type="tel" placeholder="WhatsApp number" className="rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/25 focus:outline-none transition-colors" style={field} onFocus={focusAccent} onBlur={blurReset} />
                <select className="rounded-xl px-4 py-3.5 text-sm focus:outline-none transition-colors" style={{ ...field, color: "rgba(255,255,255,0.4)" }} onFocus={focusAccent} onBlur={blurReset}>
                  <option value="">My goal is...</option>
                  <option>Lose weight &amp; get lean</option>
                  <option>Build muscle &amp; bulk up</option>
                  <option>Improve fitness &amp; endurance</option>
                  <option>General health &amp; lifestyle</option>
                </select>
                <textarea placeholder="Tell me more about yourself (optional)" rows={4} className="rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/25 focus:outline-none transition-colors resize-none" style={field} onFocus={focusAccent} onBlur={blurReset} />
                <button type="submit" className="text-black display text-base py-4 rounded-xl hover:bg-accent-dark transition-colors" style={{ background: "#00E0B8", letterSpacing: "0.08em" }}>
                  Join Now — it&apos;s free to start
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
