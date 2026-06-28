export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#" className="font-black text-lg tracking-tight">
          COACH<span className="text-accent">.</span>
        </a>
        <p className="text-white/30 text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
