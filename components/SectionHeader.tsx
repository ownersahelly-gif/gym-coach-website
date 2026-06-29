import Reveal from "./Reveal";

export default function SectionHeader({
  num,
  label,
  title,
  center = false,
}: {
  num: string;
  label: string;
  title: string;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "text-center" : ""}>
      <div className={`flex items-center gap-3 mb-3 ${center ? "justify-center" : ""}`}>
        <span className="text-accent font-black text-sm tracking-widest">{num}</span>
        <span className="w-8 h-px bg-accent/50" />
        <span className="text-white/40 text-xs font-bold uppercase tracking-[0.25em]">
          {label}
        </span>
      </div>
      <h2 className="display text-white text-4xl sm:text-6xl">{title}</h2>
    </Reveal>
  );
}
