"use client";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left — text */}
          <div className="flex-1">
            <p className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-3">
              Get Started
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-dark leading-tight mb-6">
              Ready to Build
              <br />
              Your Best Body?
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Fill in your details and I&apos;ll get back to you within 24 hours
              with a plan built around your goals.
            </p>

            {/* What you get */}
            <ul className="space-y-4">
              {[
                "Personalised training program",
                "Custom nutrition plan",
                "Weekly check-ins & accountability",
                "Direct access via WhatsApp",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-600">
                  <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 12 12" className="w-3 h-3 fill-none stroke-white" strokeWidth="2">
                      <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Social links */}
            <div className="flex gap-4 mt-10">
              <a
                href="https://instagram.com/REPLACE_WITH_HANDLE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-pink-500 transition-colors text-sm font-medium"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Instagram
              </a>
              <a
                href="https://wa.me/REPLACE_WITH_NUMBER"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-green-500 transition-colors text-sm font-medium"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="flex-1 w-full">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-black text-dark mb-6">Send Me a Message</h3>
              <form
                className="flex flex-col gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Message sent! I'll be in touch within 24 hours.");
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    className="bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-dark text-sm placeholder:text-gray-300 focus:outline-none focus:border-primary transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    required
                    className="bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-dark text-sm placeholder:text-gray-300 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="WhatsApp number"
                  className="bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-dark text-sm placeholder:text-gray-300 focus:outline-none focus:border-primary transition-colors"
                />
                <select className="bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-400 focus:outline-none focus:border-primary transition-colors">
                  <option value="">My goal is...</option>
                  <option>Lose weight &amp; get lean</option>
                  <option>Build muscle &amp; bulk up</option>
                  <option>Improve fitness &amp; endurance</option>
                  <option>General health &amp; lifestyle</option>
                </select>
                <textarea
                  placeholder="Tell me more about yourself (optional)"
                  rows={4}
                  className="bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-dark text-sm placeholder:text-gray-300 focus:outline-none focus:border-primary transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-white font-black text-base py-4 rounded-xl transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  Join Now — It&apos;s Free to Start
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
