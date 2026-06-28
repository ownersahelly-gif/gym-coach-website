export default function Hero() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">

        {/* Full background photo */}
        <img
          src="/hero-photo.jpg"
          alt="Coach"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        {/* Dark overlay so text is readable */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Text on top */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center pt-24 pb-16">
          <p className="text-white font-bold uppercase tracking-[0.15em] text-sm sm:text-base">
            Elite Fitness &amp; Nutrition Coaching By
          </p>
          <h1 className="text-5xl sm:text-7xl font-black italic text-primary mt-2 leading-tight">
            {/* REPLACE with your name */}
            COACH NAME
          </h1>
          <p className="text-white/70 text-base sm:text-lg mt-5 max-w-sm mx-auto leading-relaxed">
            Level up your body and mindset with training that delivers real, and lasting change.
          </p>

          {/* JOIN NOW button — white rectangle, no rounded corners */}
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-white text-primary font-black text-base uppercase px-12 py-4 mt-8 hover:bg-gray-100 transition-colors"
            style={{ letterSpacing: "0.15em" }}
          >
            <span>→</span> Join Now
          </a>
        </div>
      </section>

      {/* ── ABOUT / WHO I AM ── */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            {/* Photo */}
            <div className="flex-shrink-0 w-full lg:w-auto">
              {/*
                REPLACE with your photo:
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
