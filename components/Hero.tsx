export default function Hero() {
  return (
    <section
      className="flex flex-col lg:flex-row lg:items-center lg:min-h-screen lg:max-w-7xl lg:mx-auto lg:px-12 lg:gap-14"
      style={{ background: "#000000" }}
    >
      {/* Text — pure black, blends with navbar */}
      <div className="relative pt-20 pb-6 px-6 text-center overflow-hidden lg:flex-1 lg:pt-0 lg:pb-0 lg:px-0 lg:text-left lg:order-1">
        {/* soft accent glow */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-6 w-[320px] h-[320px] rounded-full pointer-events-none lg:left-0 lg:translate-x-0"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.06), transparent 70%)" }}
        />
        <div className="relative">
          <p className="fade-up text-white/40 font-bold uppercase tracking-[0.28em] text-[9px] mb-2 lg:text-[11px]" style={{ animationDelay: "0.05s" }}>
            Elite Fitness &amp; Nutrition Coaching By
          </p>
          <h1 className="fade-up hero-name display text-white" style={{ animationDelay: "0.15s" }}>
            Ola Voloshina
          </h1>
          <p className="fade-up text-white/45 text-xs mt-2.5 max-w-xs mx-auto leading-relaxed lg:text-base lg:mx-0 lg:mt-5 lg:max-w-md" style={{ animationDelay: "0.25s" }}>
            Level up your body and mindset with training that delivers real, lasting change.
          </p>
          <a
            href="/services"
            className="fade-up btn-arrow inline-flex items-center bg-white text-black display text-xs px-9 py-3 mt-5 hover:bg-white/85 transition-colors lg:text-sm lg:px-11 lg:py-4 lg:mt-8"
            style={{ letterSpacing: "0.12em", animationDelay: "0.35s" }}
          >
            <span className="arrow mr-2">→</span> Join Now
          </a>
        </div>
      </div>

      {/* Photo — full-bleed on mobile, right column on desktop. Fixed height
          reserves the box before load so the layout never jumps. */}
      <div className="lg:flex-1 lg:order-2">
        <img
          src="/hero-photo.jpg"
          alt="Ola Voloshina"
          className="fade-up hero-img w-full object-cover object-top bg-black lg:rounded-2xl"
          style={{ animationDelay: "0.2s" }}
        />
      </div>
    </section>
  );
}
