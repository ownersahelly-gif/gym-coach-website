import type { Transformation } from "@/lib/types";

export default function Transformations({ transformations }: { transformations: Transformation[] }) {
  // duplicate the list so the slide loops seamlessly
  const items = [...transformations, ...transformations];

  return (
    <section id="transformations" className="py-12" style={{ background: "#000000" }}>
      <h2 className="display text-white text-3xl sm:text-4xl text-center mb-8">Transformations</h2>

      {/* Full-width sliding strip */}
      <div className="w-full overflow-hidden">
        <div className="strip-track">
          {items.map((t, i) => (
            <div key={i} className="flex flex-shrink-0" style={{ width: "100vw" }}>
              {/* Before — left half */}
              <div className="relative w-1/2">
                <img src={t.before_image} alt={`${t.name} before`} className="w-full h-72 sm:h-96 object-cover" />
                <span className="absolute top-3 left-3 bg-black/60 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">Before</span>
              </div>
              {/* After — right half */}
              <div className="relative w-1/2">
                <img src={t.after_image} alt={`${t.name} after`} className="w-full h-72 sm:h-96 object-cover" />
                <span className="absolute top-3 right-3 bg-white text-black text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">After</span>
                <span className="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full">{t.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
