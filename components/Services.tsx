import type { Service } from "@/lib/types";

export default function Services({ services }: { services: Service[] }) {
  return (
    <section id="services" className="py-20 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-primary-light font-bold tracking-[0.2em] uppercase text-xs mb-3">What I Offer</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">My Coaching Packages</h2>
          <p className="text-white/30 mt-4 max-w-xl mx-auto text-sm">
            Every package is built around your goals, your schedule, and your lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div
              key={s.id}
              className="group bg-surface-2 border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Top image/icon area */}
              <div className="relative h-44 bg-gradient-to-br from-[#1a0a2e] to-[#0d0d0d] flex items-center justify-center overflow-hidden">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300 opacity-80">{s.icon}</span>
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <span className="text-primary-light text-xs font-black">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              </div>

              <div className="p-5">
                <h3 className="font-bold text-white text-base mb-2 leading-snug">{s.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-5">{s.description}</p>
                <a href="#contact" className="inline-flex items-center gap-1.5 text-primary-light font-bold text-sm hover:gap-3 transition-all">
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
