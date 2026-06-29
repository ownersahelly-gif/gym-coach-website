const WORDS = ["Strength", "Discipline", "Nutrition", "Mindset", "Results", "Consistency"];

export default function Marquee() {
  const items = [...WORDS, ...WORDS];
  return (
    <div className="overflow-hidden py-4 select-none" style={{ background: "#00E0B8" }}>
      <div className="marquee-track">
        {[0, 1].map((dup) => (
          <div key={dup} className="inline-flex items-center">
            {items.map((w, i) => (
              <span key={`${dup}-${i}`} className="inline-flex items-center">
                <span className="display text-black text-2xl sm:text-3xl px-6">{w}</span>
                <span className="text-black/40 text-xl">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
