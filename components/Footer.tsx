export default function Footer() {
  return (
    <footer className="pt-14 pb-7" style={{ background: "#050505", borderTop: "1px solid #1c1f24" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Big brand line */}
        <p className="display text-white/10 text-5xl sm:text-7xl mb-12 leading-none">Ola Voloshina</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
          <div>
            <h4 className="text-white display text-sm tracking-widest mb-5">Say hello</h4>
            <ul className="space-y-3 text-sm text-white/40">
              <li className="flex items-center gap-2"><span className="text-accent">📞</span><span>+XX XXX XXX XXXX</span></li>
              <li className="flex items-center gap-2"><span className="text-accent">✉️</span><span>yourname@email.com</span></li>
              <li className="flex items-center gap-2"><span className="text-accent">📷</span><a href="https://instagram.com/REPLACE" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@olavoloshina</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white display text-sm tracking-widest mb-5">Explore</h4>
            <ul className="space-y-2.5 text-sm text-white/40">
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#process" className="hover:text-accent transition-colors">Process</a></li>
              <li><a href="#transformations" className="hover:text-accent transition-colors">Results</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white display text-sm tracking-widest mb-5">Resources</h4>
            <ul className="space-y-2.5 text-sm text-white/40">
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms &amp; Conditions</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderColor: "#1c1f24" }}>
          <p className="text-white/25 text-xs">© {new Date().getFullYear()} Ola Voloshina. All rights reserved.</p>
          <p className="text-white/25 text-xs">Built with passion 💪</p>
        </div>
      </div>
    </footer>
  );
}
