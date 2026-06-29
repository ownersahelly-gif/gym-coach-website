import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-12" style={{ background: "#000000" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Text */}
          <div className="flex-1">
            <Reveal>
              <p className="text-white/40 text-[11px] font-bold uppercase tracking-[0.25em] mb-2">Who I am</p>
              <h2 className="display text-white text-3xl sm:text-4xl mb-4">
                Meet Ola Voloshina
              </h2>
              <p className="text-white/55 text-sm leading-relaxed mb-4">
                A certified fitness coach and sports-nutrition expert who has helped hundreds of athletes and
                everyday people transform their health and performance. With years of experience in training,
                functional movement and nutrition, Ola brings a results-driven approach tailored to your body
                and your goals.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Customised nutrition & fitness coaching",
                  "Proven results with real transformations",
                  "Guidance, accountability & expert support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-white/60 text-sm">
                    <span className="text-white mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="/services" className="inline-block bg-white text-black display text-xs px-7 py-3 hover:bg-white/85 transition-colors" style={{ letterSpacing: "0.1em" }}>
                Work with me
              </a>
            </Reveal>
          </div>

          {/* Two photos */}
          <Reveal delay={140} className="flex-shrink-0 w-full lg:w-[42%]">
            <div className="grid grid-cols-2 gap-2.5">
              <img src="/about1.jpg" alt="" className="w-full h-52 object-cover rounded-lg" />
              <img src="/about2.jpg" alt="" className="w-full h-52 object-cover rounded-lg" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
