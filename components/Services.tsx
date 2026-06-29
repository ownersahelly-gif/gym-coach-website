import Reveal from "./Reveal";

const cards = [
  {
    title: "1-on-1 Training",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=650&fit=crop&q=80",
  },
  {
    title: "Nutrition Planning",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&h=650&fit=crop&q=80",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12" style={{ background: "#000000" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Two photos at top */}
        <Reveal>
          <div className="grid grid-cols-2 gap-2.5 mb-8">
            <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&h=300&fit=crop&q=80" alt="" className="w-full h-36 object-cover rounded-lg" />
            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=300&fit=crop&q=80" alt="" className="w-full h-36 object-cover rounded-lg" />
          </div>
        </Reveal>

        {/* Heading */}
        <Reveal delay={80}>
          <h2 className="display text-white text-3xl sm:text-4xl text-center mb-8">Services</h2>
        </Reveal>

        {/* Two service cards */}
        <div className="grid grid-cols-2 gap-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <a href="#contact" className="group relative block rounded-xl overflow-hidden">
                <img src={c.image} alt={c.title} className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-[600ms]" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.92), rgba(0,0,0,0.2) 55%, transparent)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <h3 className="display text-white text-lg sm:text-xl leading-tight">{c.title}</h3>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
