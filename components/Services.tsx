import Reveal from "./Reveal";

const cards = [
  {
    title: "1-on-1 Training",
    href: "/services/1-on-1-training",
    image: "/service-training.jpg",
  },
  {
    title: "Nutrition Planning",
    href: "/services/nutrition-planning",
    image: "/service-nutrition.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12" style={{ background: "#000000" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <Reveal>
          <h2 className="display text-white text-3xl sm:text-4xl text-center">Services</h2>
          <div className="heading-rule mb-8" />
        </Reveal>

        {/* Two service cards */}
        <div className="grid grid-cols-2 gap-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <a href={c.href} className="lift group relative block rounded-xl overflow-hidden border border-white/5">
                <img src={c.image} alt={c.title} className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-[600ms]" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.92), rgba(0,0,0,0.2) 55%, transparent)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <h3 className="display text-white text-lg sm:text-xl leading-tight">{c.title}</h3>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-6">
          <a href="/services" className="inline-block border border-white/25 text-white display text-xs px-7 py-3 hover:border-white/60 transition-colors" style={{ letterSpacing: "0.1em" }}>
            View all plans
          </a>
        </div>
      </div>
    </section>
  );
}
