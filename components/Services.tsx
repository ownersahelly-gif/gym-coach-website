import type { Service } from "@/lib/types";

export default function Services({ services }: { services: Service[] }) {
  return (
    <section id="services" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <p className="section-label mb-3">What I offer</p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
            SERVICES
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={s.id}
              className="group relative bg-zinc-900 border border-white/10 rounded-2xl p-7 hover:border-accent/50 transition-all duration-300"
            >
              {/* Index number */}
              <span className="absolute top-5 right-6 text-5xl font-black text-white/5 select-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="text-4xl mb-5 block">{s.icon}</span>
              <h3 className="font-bold text-lg mb-3 leading-snug">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {s.description}
              </p>

              <div className="mt-6 h-0.5 w-8 bg-accent/50 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
