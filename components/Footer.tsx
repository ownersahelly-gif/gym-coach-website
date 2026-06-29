export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-border pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">

          {/* Say Hello */}
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-5">Say Hello</h4>
            <ul className="space-y-3 text-sm text-white/40">
              <li className="flex items-center gap-2">
                <span className="text-primary-light">📞</span>
                {/* REPLACE with your number */}
                <span>+XX XXX XXX XXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary-light">✉️</span>
                {/* REPLACE with your email */}
                <span>yourname@email.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary-light">📘</span>
                {/* REPLACE with your Facebook */}
                <a href="#" className="hover:text-white transition-colors">olavoloshina</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary-light">📷</span>
                {/* REPLACE with your Instagram */}
                <a href="https://instagram.com/REPLACE" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">olavoloshina</a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-5">Links</h4>
            <ul className="space-y-2 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-5">Resources</h4>
            <ul className="space-y-2 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms &amp; Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund &amp; Returns Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center text-white/20 text-xs">
          © {new Date().getFullYear()} Ola Voloshina. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
