import PageHeader from "./PageHeader";
import Footer from "./Footer";

export default function PolicyPage({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <main style={{ background: "#000000", minHeight: "100vh" }}>
      <PageHeader />
      <section className="py-12">
        <div className="max-w-2xl mx-auto px-6">
          <h1 className="display text-white text-4xl sm:text-5xl mb-2">{title}</h1>
          <p className="text-white/35 text-xs uppercase tracking-wider mb-10">Last updated: {updated}</p>

          <div className="flex flex-col gap-8">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-white font-bold text-lg mb-2">{s.heading}</h2>
                <p className="text-white/55 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
