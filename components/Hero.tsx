export default function Hero() {
  return (
    <>
      {/* HERO — Section 1: Pure black */}
      <section className="flex flex-col" style={{ background: "#000000" }}>

        {/* Text — same black as navbar, seamless */}
        <div className="pt-24 pb-6 px-6 text-center" style={{ background: "#000000" }}>
          <p className="text-white/40 font-bold uppercase tracking-[0.2em] text-[10px]">
            Elite Fitness &amp; Nutrition Coaching By
          </p>
          <h1
            className="font-black italic leading-tight mt-1"
            style={{ fontSize: "clamp(2rem, 9vw, 3.5rem)", color: "#00C9A7" }}
          >
            OLA VOLOSHINA
          </h1>
          <p className="text-white/40 text-xs mt-3 max-w-xs mx-auto leading-relaxed">
            Level up your body and mindset with training that delivers real, and lasting change.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-white font-black text-xs uppercase hover:bg-gray-100 transition-colors mt-5"
            style={{ letterSpacing: "0.15em", padding: "0.85rem 2.5rem", display: "block", maxWidth: "260px", margin: "1.25rem auto 0", color: "#00C9A7" }}
          >
            → JOIN NOW
          </a>
        </div>

        {/* Photo — flush below text */}
        <div style={{ background: "#000000" }}>
          <img
            src="/hero-photo.jpg"
            alt="Ola Voloshina"
            className="w-full object-cover object-top"
            style={{ display: "block", maxHeight: "80vh" }}
          />
        </div>
      </section>

      {/* ABOUT — Section 2: Dark navy */}
      <section id="about" className="py-16" style={{ background: "#0f1923" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-10">
            <div className="flex-1">
              <p className="font-bold uppercase tracking-[0.2em] text-xs mb-3" style={{ color: "#00C9A7" }}>Who I Am</p>
              <p className="text-white/80 text-base leading-relaxed mb-5">
                Meet <strong className="text-white">Ola Voloshina</strong>, a certified fitness coach and
                sports nutrition expert who has helped hundreds of athletes and everyday
                individuals transform their health and performance. With years of experience in
                training, functional movement, and nutrition, Ola offers a results-driven approach
                tailored to your body and your goals.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Customised nutrition & fitness coaching",
                  "Proven results with real transformations",
                  "Guidance, accountability & expert support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-white/60 text-sm">
                    <span style={{ color: "#00C9A7" }} className="mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-block text-black font-bold px-7 py-3 rounded-md transition-colors text-sm" style={{ background: "#00C9A7" }}>
                About Ola
              </a>
            </div>

            <div className="flex-shrink-0 w-full lg:w-[45%] grid grid-cols-2 gap-2">
              <img src="https://images.unsplash.com/photo-1549476464-37392f717541?w=300&h=400&fit=crop&q=80" alt="Training" className="w-full h-48 object-cover rounded-lg" />
              <img src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300&h=400&fit=crop&q=80" alt="Coaching" className="w-full h-48 object-cover rounded-lg" />
              <img src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&h=250&fit=crop&q=80" alt="Results" className="w-full h-36 object-cover rounded-lg col-span-2" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
