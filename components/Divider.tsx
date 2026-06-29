export default function Divider() {
  return (
    <section className="relative overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1581009137042-c552e485697a?w=1000&h=240&fit=crop&q=80"
        alt=""
        className="w-full h-32 sm:h-40 object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.7)" }}>
        <div className="text-center">
          <p className="text-white/50 text-[10px] uppercase tracking-[0.3em] mb-1">Your strongest self</p>
          <p className="display text-white text-2xl sm:text-4xl">Starts Today</p>
        </div>
      </div>
    </section>
  );
}
