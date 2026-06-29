export default function Hero() {
  return (
    <section className="flex flex-col" style={{ background: "#000000" }}>
      {/* Text — pure black, blends with navbar */}
      <div className="pt-20 pb-5 px-6 text-center" style={{ background: "#000000" }}>
        <p className="text-white/40 font-bold uppercase tracking-[0.25em] text-[9px] mb-2">
          Elite Fitness &amp; Nutrition Coaching By
        </p>
        <h1 className="display text-white" style={{ fontSize: "clamp(1.9rem, 8vw, 3rem)" }}>
          Ola Voloshina
        </h1>
        <p className="text-white/40 text-xs mt-2.5 max-w-xs mx-auto leading-relaxed">
          Level up your body and mindset with training that delivers real, lasting change.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-black display text-xs px-9 py-3 mt-4 hover:bg-white/85 transition-colors"
          style={{ letterSpacing: "0.12em" }}
        >
          → Join Now
        </a>
      </div>

      {/* Photo — full-bleed, no text on it */}
      <img
        src="/hero-photo.jpg"
        alt="Ola Voloshina"
        className="w-full object-cover object-top"
        style={{ display: "block", maxHeight: "68vh" }}
      />
    </section>
  );
}
