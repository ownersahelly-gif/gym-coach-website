import { testimonials } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Testimonials() {
  return (
    <section className="py-20" style={{ background: "#0b0b0d" }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader num="05" label="Client love" title="What they say" center />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 110}>
              <div className="rounded-2xl p-7 h-full border flex flex-col" style={{ background: "#050505", borderColor: "#1c1f24" }}>
                <span className="display text-accent text-5xl leading-none">&ldquo;</span>
                <p className="text-white/70 text-sm leading-relaxed flex-1 -mt-2">{t.quote}</p>
                <div className="flex items-center gap-3 mt-6 pt-5 border-t" style={{ borderColor: "#1c1f24" }}>
                  <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
                  <div>
                    <p className="text-white font-bold text-sm">{t.name}</p>
                    <p className="text-accent text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
