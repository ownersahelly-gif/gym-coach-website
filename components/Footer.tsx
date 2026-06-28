export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="font-black text-2xl tracking-tight">
            COACH<span className="text-primary">FIT</span>
          </a>
          <div className="flex gap-8 text-sm text-white/40">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#transformations" className="hover:text-white transition-colors">Transformations</a>
            <a href="#posts" className="hover:text-white transition-colors">Posts</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} CoachFit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
