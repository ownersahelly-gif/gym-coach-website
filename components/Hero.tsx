export default function Hero() {
  return (
    <section className="relative flex flex-col" style={{ background: "#050505" }}>
      {/* Text block — pure black, blends with navbar */}
      <div className="relative pt-28 pb-8 px-6 text-center overflow-hidden">
        {/* soft accent glow */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-10 w-[380px] h-[380px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,224,184,0.16), transparent 70%)" }}
        />
        <div className="relative">
          <p className="text-white/45 font-bold uppercase tracking-[0.28em] text-[10px] mb-3">
            Elite Fitness &amp; Nutrition Coaching
          </p>
          <h1 className="display text-accent" style={{ fontSize: "clamp(2.6rem, 13vw, 6rem)" }}>
            Ola Voloshina
          </h1>
          <p className="text-white/45 text-sm mt-4 max-w-xs mx-auto leading-relaxed">
            Level up your body and mindset with training that delivers real, lasting change.
          </p>
          <div className="flex items-center justify-center gap-3 mt-7">
            <a
              href="#contact"
              className="bg-white text-black display text-sm px-9 py-4 hover:bg-accent transition-colors"
              style={{ letterSpacing: "0.12em" }}
            >
              Join Now
            </a>
            <a
              href="#transformations"
              className="border border-white/20 text-white display text-sm px-9 py-4 hover:border-white/60 transition-colors"
              style={{ letterSpacing: "0.12em" }}
            >
              See Results
            </a>
          </div>
        </div>
      </div>

      {/* Photo — full-bleed, no text on it */}
      <div className="relative" style={{ background: "#050505" }}>
        <img
          src="/hero-photo.jpg"
          alt="Ola Voloshina"
          className="w-full object-cover object-top"
          style={{ display: "block", maxHeight: "82vh" }}
        />
        {/* fade base into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(transparent, #050505)" }} />
      </div>
    </section>
  );
}
