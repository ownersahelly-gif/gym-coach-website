export default function Hero() {
  return (
    <section className="flex flex-col" style={{ background: "#000000" }}>
      {/* Text — pure black, blends with navbar */}
      <div className="relative pt-20 pb-6 px-6 text-center overflow-hidden">
        {/* soft accent glow */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-6 w-[320px] h-[320px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.06), transparent 70%)" }}
        />
        <div className="relative">
          <p className="fade-up text-white/40 font-bold uppercase tracking-[0.28em] text-[9px] mb-2" style={{ animationDelay: "0.05s" }}>
            Elite Fitness &amp; Nutrition Coaching By
          </p>
          <h1 className="fade-up display text-white" style={{ fontSize: "clamp(1.9rem, 8vw, 3rem)", animationDelay: "0.15s" }}>
            Ola Voloshina
          </h1>
          <p className="fade-up text-white/45 text-xs mt-2.5 max-w-xs mx-auto leading-relaxed" style={{ animationDelay: "0.25s" }}>
            Level up your body and mindset with training that delivers real, lasting change.
          </p>
          <a
            href="/services"
            className="fade-up btn-arrow inline-flex items-center bg-white text-black display text-xs px-9 py-3 mt-5 hover:bg-white/85 transition-colors"
            style={{ letterSpacing: "0.12em", animationDelay: "0.35s" }}
          >
            <span className="arrow mr-2">→</span> Join Now
          </a>
        </div>
      </div>

      {/* Photo — full-bleed, no text on it */}
      <img
        src="/hero-photo.jpg"
        alt="Ola Voloshina"
        className="fade-up w-full object-cover object-top"
        style={{ display: "block", maxHeight: "68vh", animationDelay: "0.2s" }}
      />
    </section>
  );
}
