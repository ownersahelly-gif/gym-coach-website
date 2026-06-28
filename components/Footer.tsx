export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#" className="font-black text-2xl tracking-tight text-white">
          COACH<span className="text-primary-light">FIT</span>
        </a>
        <div className="flex gap-8 text-sm text-white/25">
          <a href="#services" className="hover:text-white/60 transition-colors">Services</a>
          <a href="#transformations" className="hover:text-white/60 transition-colors">Transformations</a>
          <a href="#posts" className="hover:text-white/60 transition-colors">Posts</a>
          <a href="#contact" className="hover:text-white/60 transition-colors">Contact</a>
        </div>
        <p className="text-white/20 text-sm">© {new Date().getFullYear()} CoachFit. All rights reserved.</p>
      </div>
    </footer>
  );
}
