import Link from "next/link";

export default function PageHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5" style={{ background: "#000000" }}>
      <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full border border-white/25 flex items-center justify-center">
            <span className="display text-white text-[10px]">OV</span>
          </div>
          <span className="text-white font-bold text-sm tracking-wide">OLA VOLOSHINA</span>
        </Link>
        <Link href="/" className="text-xs text-white/55 hover:text-white transition-colors uppercase tracking-wider">
          ← Home
        </Link>
      </div>
    </header>
  );
}
