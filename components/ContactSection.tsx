"use client";

export default function ContactSection() {
  return (
    /* Section 6: Dark charcoal */
    <section id="contact" className="py-20" style={{ background: "#111827", borderTop: "1px solid #1e2a2a" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1">
            <p className="font-bold tracking-[0.2em] uppercase text-xs mb-3" style={{ color: "#00C9A7" }}>Get Started</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              Ready to Build<br />
              <span style={{ color: "#00C9A7" }}>Your Best Body?</span>
            </h2>
            <p className="text-white/40 text-lg leading-relaxed mb-8">
              Fill in your details and I&apos;ll get back to you within 24 hours with a plan built around your goals.
            </p>
            <ul className="space-y-4">
              {["Personalised training program", "Custom nutrition plan", "Weekly check-ins & accountability", "Direct access via WhatsApp"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/60">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 border" style={{ background: "rgba(0,201,167,0.1)", borderColor: "rgba(0,201,167,0.4)" }}>
                    <svg viewBox="0 0 12 12" className="w-3 h-3 fill-none" stroke="#00C9A7" strokeWidth="2">
                      <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 w-full">
            <div className="rounded-2xl p-8 border" style={{ background: "#0f1923", borderColor: "#1e2a2a" }}>
              <h3 className="text-xl font-black text-white mb-6">Send Me a Message</h3>
              <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); alert("Message sent! I'll be in touch within 24 hours."); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your name" required
                    className="rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/20 focus:outline-none transition-colors"
                    style={{ background: "#111827", border: "1px solid #1e2a2a" }}
                    onFocus={e => (e.target.style.borderColor = "#00C9A7")}
                    onBlur={e => (e.target.style.borderColor = "#1e2a2a")} />
                  <input type="email" placeholder="Email address" required
                    className="rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/20 focus:outline-none transition-colors"
                    style={{ background: "#111827", border: "1px solid #1e2a2a" }}
                    onFocus={e => (e.target.style.borderColor = "#00C9A7")}
                    onBlur={e => (e.target.style.borderColor = "#1e2a2a")} />
                </div>
                <input type="tel" placeholder="WhatsApp number"
                  className="rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/20 focus:outline-none transition-colors"
                  style={{ background: "#111827", border: "1px solid #1e2a2a" }}
                  onFocus={e => (e.target.style.borderColor = "#00C9A7")}
                  onBlur={e => (e.target.style.borderColor = "#1e2a2a")} />
                <select className="rounded-xl px-4 py-3.5 text-sm focus:outline-none transition-colors"
                  style={{ background: "#111827", border: "1px solid #1e2a2a", color: "rgba(255,255,255,0.3)" }}>
                  <option value="">My goal is...</option>
                  <option>Lose weight &amp; get lean</option>
                  <option>Build muscle &amp; bulk up</option>
                  <option>Improve fitness &amp; endurance</option>
                  <option>General health &amp; lifestyle</option>
                </select>
                <textarea placeholder="Tell me more about yourself (optional)" rows={4}
                  className="rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/20 focus:outline-none transition-colors resize-none"
                  style={{ background: "#111827", border: "1px solid #1e2a2a" }}
                  onFocus={e => (e.target.style.borderColor = "#00C9A7")}
                  onBlur={e => (e.target.style.borderColor = "#1e2a2a")} />
                <button type="submit"
                  className="text-black font-black text-base py-4 rounded-xl transition-all hover:opacity-90 active:scale-[0.99]"
                  style={{ background: "#00C9A7" }}>
                  Join Now — It&apos;s Free to Start
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
