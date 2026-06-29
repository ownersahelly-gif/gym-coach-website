export default function Footer() {
  return (
    <footer id="contact" className="pt-10 pb-6" style={{ background: "#000000", borderTop: "1px solid #1c1c1c" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-white display text-sm tracking-widest mb-4">Say Hello</h4>
            <ul className="space-y-2.5 text-sm text-white/40">
              <li>+XX XXX XXX XXXX</li>
              <li>yourname@email.com</li>
              <li><a href="https://instagram.com/REPLACE" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@olavoloshina</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white display text-sm tracking-widest mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-white/40">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#transformations" className="hover:text-white transition-colors">Results</a></li>
              <li><a href="#posts" className="hover:text-white transition-colors">Posts</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white display text-sm tracking-widest mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms &amp; Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t pt-5 text-center text-white/25 text-xs" style={{ borderColor: "#1c1c1c" }}>
          © {new Date().getFullYear()} Ola Voloshina. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
