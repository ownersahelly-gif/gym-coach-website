import type { Service } from "@/lib/types";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const serviceImages = [
  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop&q=80",
];

export default function Services({ services }: { services: Service[] }) {
  return (
    <section id="services" className="py-20" style={{ background: "#050505" }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader num="02" label="What I offer" title="Coaching programs" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-12">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 90}>
              <a
                href="#contact"
                className="group relative rounded-2xl overflow-hidden block border"
                style={{ borderColor: "#1c1f24" }}
              >
                <img src={serviceImages[i]} alt={s.title} className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-[600ms]" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,5,5,0.96) 8%, rgba(5,5,5,0.35) 55%, transparent)" }} />
                <span className="absolute top-4 right-5 display text-white/15 text-4xl">0{i + 1}</span>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="display text-white text-2xl">{s.title}</h3>
                  <p className="text-white/55 text-sm mt-2 leading-relaxed">{s.description}</p>
                  <span className="inline-flex items-center gap-2 text-accent text-sm font-bold mt-4 group-hover:gap-3 transition-all">
                    Learn more <span>→</span>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
