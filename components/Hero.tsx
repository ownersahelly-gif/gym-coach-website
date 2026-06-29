export default function Hero() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="flex flex-col bg-[#0d0d0d]">

        {/* Text block — pure black, NO photo behind it */}
        <div className="pt-28 pb-8 px-6 text-center">
          <p className="text-white/70 font-bold uppercase tracking-[0.15em] text-xs sm:text-sm">
            Elite Fitness &amp; Nutrition Coaching By
          </p>
          <h1 className="text-5xl sm:text-6xl font-black italic text-primary-light mt-2 leading-tight">
            OLA VOLOSHINA
          </h1>
          <p className="text-white/50 text-sm sm:text-base mt-4 max-w-xs mx-auto leading-relaxed">
            Level up your body and mindset with training that delivers real, and lasting change.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-white text-primary font-black text-sm uppercase px-10 py-4 mt-7 hover:bg-gray-100 transition-colors"
            style={{ letterSpacing: "0.15em" }}
          >
            → JOIN NOW
          </a>
        </div>

        {/* Photo — sits below text, NO overlay, NO text on it */}
        <div className="w-full">
          <img
            src="/hero-photo.jpg"
            alt="Ola Voloshina"
            className="w-full object-cover object-top"
            style={{ maxHeight: "75vh" }}
          />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-16 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-10">

            {/* Left — text */}
            <div className="flex-1">
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
                    <span className="text-primary-light mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-block bg-primary hover:bg-primary-dark text-white font-bold px-7 py-3 rounded-md transition-colors text-sm"
              >
                About Ola
              </a>
            </div>

            {/* Right — photo grid */}
            <div className="flex-shrink-0 w-full lg:w-[45%] grid grid-cols-2 gap-2">
              <img
                src="https://images.unsplash.com/photo-1549476464-37392f717541?w=300&h=400&fit=crop&q=80"
                alt="Training"
                className="w-full h-48 object-cover rounded-lg col-span-1"
              />
              <img
                src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300&h=400&fit=crop&q=80"
                alt="Coaching"
                className="w-full h-48 object-cover rounded-lg col-span-1"
              />
              <img
                src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&h=250&fit=crop&q=80"
                alt="Results"
                className="w-full h-36 object-cover rounded-lg col-span-2"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
