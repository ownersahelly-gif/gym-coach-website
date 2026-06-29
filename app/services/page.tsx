import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { serviceDetails } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services — Ola Voloshina",
  description: "Coaching programs, pricing and how to join.",
};

export default function ServicesPage() {
  return (
    <main style={{ background: "#000000", minHeight: "100vh" }}>
      <PageHeader />

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-white/40 text-[11px] font-bold uppercase tracking-[0.25em] mb-2">Choose your plan</p>
          <h1 className="display text-white text-4xl sm:text-5xl mb-8">Services</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {serviceDetails.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="lift group relative block rounded-2xl overflow-hidden border" style={{ borderColor: "#1c1c1c" }}>
                <img src={s.image} alt={s.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-[600ms]" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.94), rgba(0,0,0,0.25) 55%, transparent)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="display text-white text-2xl">{s.title}</h2>
                  <p className="text-white/55 text-sm mt-1">{s.tagline}</p>
                  <span className="inline-flex items-center gap-2 text-white text-sm font-bold mt-3 group-hover:gap-3 transition-all">
                    View &amp; join <span>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
