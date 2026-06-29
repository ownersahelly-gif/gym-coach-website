import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import ServiceSignupForm from "@/components/ServiceSignupForm";
import { serviceDetails } from "@/lib/data";

export function generateStaticParams() {
  return serviceDetails.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = serviceDetails.find((s) => s.slug === params.slug);
  return { title: service ? `${service.title} — Ola Voloshina` : "Service" };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = serviceDetails.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <main style={{ background: "#000000", minHeight: "100vh" }}>
      <PageHeader />

      {/* Hero image */}
      <div className="relative">
        <img src={service.image} alt={service.title} className="w-full h-56 sm:h-72 object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #000000, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.4))" }} />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-3xl mx-auto px-6 pb-6">
            <Link href="/services" className="text-white/50 text-xs uppercase tracking-wider hover:text-white transition-colors">← All services</Link>
            <h1 className="display text-white text-4xl sm:text-5xl mt-2">{service.title}</h1>
            <p className="text-white/60 text-sm mt-1">{service.tagline}</p>
          </div>
        </div>
      </div>

      <section className="py-10">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-white/55 text-base leading-relaxed mb-10">{service.about}</p>

          <h2 className="display text-white text-2xl mb-5">Plans &amp; pricing</h2>
          <ServiceSignupForm plans={service.plans} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
