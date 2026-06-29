import type { Service } from "@/lib/types";

const serviceImages = [
  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop&q=80",
];

export default function Services({ services }: { services: Service[] }) {
  return (
    <section id="services" className="py-16 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-black text-white text-center mb-10 uppercase tracking-wide">
          Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <a
              key={s.id}
              href="#contact"
              className="group relative rounded-xl overflow-hidden block"
            >
              {/* Photo */}
              <img
                src={serviceImages[i]}
                alt={s.title}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              {/* Text at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-black text-lg uppercase tracking-wide">{s.title}</h3>
                <p className="text-white/60 text-xs mt-1 leading-relaxed line-clamp-2">{s.description}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Banner */}
        <div className="mt-10 rounded-xl overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1581009137042-c552e485697a?w=800&h=200&fit=crop&q=80"
            alt="Start today"
            className="w-full h-36 object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <div className="text-center">
              <p className="text-white/60 text-xs uppercase tracking-widest">Your Strongest Self</p>
              <p className="text-white font-black text-2xl uppercase tracking-wide">Starts Today</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
