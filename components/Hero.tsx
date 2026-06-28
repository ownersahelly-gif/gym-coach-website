export default function Hero() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/*
          REPLACE THIS with your own photo:
          Add your image as public/hero-bg.jpg and uncomment the img below,
          then delete the gradient div.

          <img
            src="/hero-bg.jpg"
            alt="hero background"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        */}
        {/* Placeholder gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900" />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-primary font-bold tracking-[0.25em] uppercase text-sm mb-4">
            Elite Fitness &amp; Nutrition Coaching
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            Level Up Your Body
            <br />
            <span className="text-primary">&amp; Mindset</span>
          </h1>
          <p className="text-white/70 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Training that delivers real, and lasting change.
            No shortcuts — just a proven system built around you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-primary hover:bg-primary-dark text-white font-black text-lg px-10 py-4 rounded-full transition-all hover:scale-105 active:scale-95"
            >
              Join Now
            </a>
            <a
              href="#transformations"
              className="border-2 border-white/50 hover:border-white text-white font-semibold text-lg px-10 py-4 rounded-full transition-all"
            >
              See Results
            </a>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-12 mt-16 border-t border-white/15 pt-10">
            {[
              { n: "200+", label: "Clients Transformed" },
              { n: "95%", label: "Success Rate" },
              { n: "5+", label: "Years Experience" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-black text-primary">{s.n}</p>
                <p className="text-white/50 text-xs mt-1 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
          <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-white animate-pulse" />
        </div>
      </section>

      {/* ── ABOUT / WHO I AM ── */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            {/* Photo */}
            <div className="flex-shrink-0 w-full lg:w-auto">
              {/*
                REPLACE this placeholder with your actual photo:
                <img
                  src="/coach-photo.jpg"
                  alt="Coach [Your Name]"
                  className="w-full lg:w-[420px] h-[500px] object-cover rounded-2xl"
                />
              */}
              <div className="w-full lg:w-[420px] h-[460px] bg-gray-100 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-gray-200">
                <span className="text-6xl mb-3">📸</span>
                <p className="text-gray-400 text-sm text-center px-8">
                  Add your photo here
                  <br />
                  <span className="text-xs text-gray-300">420 × 460 px recommended</span>
                </p>
              </div>
            </div>

            {/* Text */}
            <div className="flex-1">
              <p className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-3">
                Who I Am
              </p>
              <h2 className="text-4xl sm:text-5xl font-black text-dark leading-tight mb-6">
                Your Coach,
                <br />Your Partner in Change
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-4">
                {/* REPLACE with your own bio */}
                I&apos;m <strong className="text-dark">[Your Name]</strong>, a certified personal
                trainer and nutrition coach with over 5 years of experience helping
                people transform their bodies and reclaim their confidence.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                My method combines science-backed training, sustainable nutrition,
                and the mindset coaching that makes it all stick — so you don&apos;t
                just reach your goal, you stay there for life.
              </p>

              {/* Credential badges */}
              <div className="flex flex-wrap gap-3">
                {[
                  "Certified Personal Trainer",
                  "Nutrition Coach",
                  "Online Coaching",
                  "Body Transformation",
                ].map((b) => (
                  <span
                    key={b}
                    className="bg-purple-50 text-primary text-sm font-semibold px-4 py-1.5 rounded-full border border-purple-100"
                  >
                    {b}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-block mt-8 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3.5 rounded-full transition-colors"
              >
                Start Your Transformation
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
