export default function Hero() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        <img
          src="/hero-photo.jpg"
          alt="Coach"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        {/* Dark purple gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/70 via-[#1a0a2e]/60 to-[#0d0d0d]/80" />

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center pt-24 pb-16">
          <p className="text-purple-300/80 font-bold uppercase tracking-[0.2em] text-xs sm:text-sm">
            Elite Fitness &amp; Nutrition Coaching By
          </p>
          <h1 className="text-5xl sm:text-7xl font-black italic text-primary-light mt-2 leading-tight drop-shadow-lg">
            OLA VOLOSHINA
          </h1>
          <p className="text-white/60 text-base sm:text-lg mt-5 max-w-sm mx-auto leading-relaxed">
            Level up your body and mindset with training that delivers real, and lasting change.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-white text-primary font-black text-sm uppercase px-12 py-4 mt-8 hover:bg-purple-50 transition-colors"
            style={{ letterSpacing: "0.15em" }}
          >
            <span>→</span> Join Now
          </a>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            {/* Photo placeholder */}
            <div className="flex-shrink-0 w-full lg:w-auto">
              {/*
                REPLACE with your photo:
                <img src="/coach-photo.jpg" alt="Coach" className="w-full lg:w-[420px] h-[500px] object-cover rounded-2xl" />
              */}
              <div className="w-full lg:w-[420px] h-[460px] bg-surface-2 rounded-2xl flex flex-col items-center justify-center border border-border">
                <span className="text-6xl mb-3 opacity-30">📸</span>
                <p className="text-white/20 text-sm text-center px-8">Add your photo here</p>
              </div>
            </div>

            {/* Text */}
            <div className="flex-1">
              <p className="text-primary-light font-bold tracking-[0.2em] uppercase text-xs mb-3">
                Who I Am
              </p>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
                Your Coach,
                <br /><span className="text-primary-light">Your Partner</span> in Change
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-4">
                I&apos;m <strong className="text-white">Ola Voloshina</strong>, a certified personal
                trainer and nutrition coach with over 5 years of experience helping
                people transform their bodies and reclaim their confidence.
              </p>
              <p className="text-white/50 text-lg leading-relaxed mb-8">
                My method combines science-backed training, sustainable nutrition,
                and the mindset coaching that makes it all stick — so you don&apos;t
                just reach your goal, you stay there for life.
              </p>

              <div className="flex flex-wrap gap-3">
                {["Certified Personal Trainer", "Nutrition Coach", "Online Coaching", "Body Transformation"].map((b) => (
                  <span key={b} className="bg-primary/10 text-primary-light text-sm font-semibold px-4 py-1.5 rounded-full border border-primary/30">
                    {b}
                  </span>
                ))}
              </div>

              <a href="#contact" className="inline-block mt-8 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3.5 rounded-full transition-colors">
                Start Your Transformation
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
