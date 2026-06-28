import type { Service } from "@/lib/types";

export default function Services({ services }: { services: Service[] }) {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-3">
            What I Offer
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-dark">
            My Coaching Packages
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Every package is built around your goals, your schedule, and your lifestyle.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
            >
              {/* Image area */}
              <div className="relative h-48 bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center overflow-hidden">
                {/*
                  REPLACE with an actual image per service:
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                */}
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {s.icon}
                </span>
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-dark text-lg mb-2 leading-snug">
                  {s.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {s.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-primary font-bold text-sm hover:gap-3 transition-all"
                >
                  Learn more
                  <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
