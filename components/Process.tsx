import { process } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Process() {
  return (
    <section id="process" className="py-20" style={{ background: "#08130f" }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader num="03" label="How it works" title="Your path to results" center />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 110}>
              <div
                className="relative rounded-2xl p-7 h-full border transition-colors hover:border-accent/40"
                style={{ background: "#0b0b0d", borderColor: "#1c1f24" }}
              >
                <span className="display text-accent/25 text-6xl leading-none">{p.step}</span>
                <h3 className="display text-white text-xl mt-4">{p.title}</h3>
                <p className="text-white/50 text-sm mt-3 leading-relaxed">{p.desc}</p>
                {i < process.length - 1 && (
                  <span className="hidden lg:block absolute top-1/2 -right-4 text-accent/40 text-2xl">→</span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
