import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1a1a1a_0%,_#0a0a0a_70%)]" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 40px,#fff 40px,#fff 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,#fff 40px,#fff 41px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left — text */}
          <div className="flex-1 text-center lg:text-left">
            <p className="section-label mb-4">Online Fitness Coaching</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
              LEVEL UP YOUR
              <br />
              <span className="text-accent">BODY &amp;</span>
              <br />
              MINDSET
            </h1>
            <p className="text-white/60 text-lg max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
              Real plans. Real accountability. Real results.
              <br />
              No fluff — just a system that works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="bg-accent text-black font-black text-lg px-8 py-4 rounded-full hover:bg-yellow-300 transition-all hover:scale-105 active:scale-95 text-center"
              >
                JOIN NOW
              </a>
              <a
                href="#transformations"
                className="border border-white/30 text-white font-semibold text-lg px-8 py-4 rounded-full hover:border-white/70 transition-all text-center"
              >
                See Results
              </a>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 mt-12 justify-center lg:justify-start">
              {[
                { number: "200+", label: "Clients coached" },
                { number: "95%", label: "Success rate" },
                { number: "5+", label: "Years experience" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-black text-accent">{s.number}</p>
                  <p className="text-xs text-white/50 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — coach photo */}
          <div className="flex-shrink-0 relative">
            {/* Accent ring */}
            <div className="absolute -inset-3 rounded-3xl border border-accent/30" />
            <div className="absolute -inset-6 rounded-3xl border border-accent/10" />

            {/*
              REPLACE THIS DIV with your actual photo:
              <Image
                src="/your-photo.jpg"
                alt="Coach [Your Name]"
                width={400}
                height={520}
                className="rounded-2xl object-cover w-[320px] sm:w-[360px] lg:w-[400px] h-[420px] sm:h-[480px] lg:h-[520px]"
                priority
              />
            */}
            <div className="relative rounded-2xl overflow-hidden w-[320px] sm:w-[360px] lg:w-[400px] h-[420px] sm:h-[480px] lg:h-[520px] bg-zinc-900 flex flex-col items-center justify-center border border-white/10">
              <span className="text-6xl mb-4">📸</span>
              <p className="text-white/40 text-sm text-center px-8">
                Replace with your photo
                <br />
                <span className="text-xs text-white/25">400 × 520 px recommended</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bio strip below photo+text */}
        <div className="mt-16 border-t border-white/10 pt-10">
          <div className="max-w-2xl lg:mx-0 mx-auto">
            <p className="section-label mb-3">Who I am</p>
            {/*
              REPLACE the text below with your own bio.
            */}
            <p className="text-white/70 text-lg leading-relaxed">
              I&apos;m{" "}
              <span className="text-white font-semibold">[Your Name]</span>, a
              certified personal trainer and nutrition coach with over 5 years
              of experience transforming bodies and building confidence. My
              approach combines evidence-based training, sustainable nutrition,
              and the mindset work that makes it all stick — so you don&apos;t
              just reach your goal, you stay there.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
