"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const duration = 1400;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(eased * to));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);

  return <span ref={ref}>{val}{suffix}</span>;
}

const stats = [
  { to: 200, suffix: "+", label: "Clients coached" },
  { to: 95, suffix: "%", label: "Success rate" },
  { to: 5, suffix: "+", label: "Years experience" },
  { to: 12, suffix: "k", label: "Workouts logged" },
];

export default function About() {
  return (
    <section id="about" className="py-20" style={{ background: "#0b0b0d" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Text */}
          <div className="flex-1">
            <Reveal>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-accent font-black text-sm tracking-widest">01</span>
                <span className="w-8 h-px bg-accent/50" />
                <span className="text-white/40 text-xs font-bold uppercase tracking-[0.25em]">Who I am</span>
              </div>
              <h2 className="display text-white text-4xl sm:text-6xl mb-6">
                Your coach,<br /><span className="text-accent">your partner</span> in change
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-white/55 text-base leading-relaxed mb-5">
                Meet <strong className="text-white">Ola Voloshina</strong> — a certified fitness coach and
                sports-nutrition expert who has helped hundreds of athletes and everyday people transform their
                health and performance. With years of experience in training, functional movement and nutrition,
                Ola brings a results-driven approach tailored to your body and your goals.
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  "Customised nutrition & fitness coaching",
                  "Proven results with real transformations",
                  "Guidance, accountability & expert support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/65 text-sm">
                    <span className="text-accent mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-block text-black display text-sm px-8 py-3.5 hover:bg-accent-dark transition-colors" style={{ background: "#00E0B8", letterSpacing: "0.1em" }}>
                Work with me
              </a>
            </Reveal>
          </div>

          {/* Photo grid */}
          <Reveal delay={180} className="flex-shrink-0 w-full lg:w-[44%]">
            <div className="grid grid-cols-2 gap-3">
              <img src="https://images.unsplash.com/photo-1549476464-37392f717541?w=300&h=400&fit=crop&q=80" alt="" className="w-full h-52 object-cover rounded-xl" />
              <img src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300&h=400&fit=crop&q=80" alt="" className="w-full h-52 object-cover rounded-xl mt-6" />
              <img src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&h=260&fit=crop&q=80" alt="" className="w-full h-32 object-cover rounded-xl col-span-2" />
            </div>
          </Reveal>
        </div>

        {/* Stats bar */}
        <Reveal delay={120}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 pt-12 border-t" style={{ borderColor: "#1c1f24" }}>
            {stats.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <p className="display text-accent text-4xl sm:text-5xl">
                  <Counter to={s.to} suffix={s.suffix} />
                </p>
                <p className="text-white/40 text-xs uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
