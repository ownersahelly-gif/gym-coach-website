import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Transformations from "@/components/Transformations";
import Posts from "@/components/Posts";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { services, transformations, posts } from "@/lib/data";

/*
  TO SWAP IN SUPABASE DATA LATER:
  1. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your .env.local
  2. Import supabase from "@/lib/supabase"
  3. Replace the imports above with async fetches:

  const { data: services } = await supabase.from("services").select("*").order("order");
  const { data: transformations } = await supabase.from("transformations").select("*");
  const { data: posts } = await supabase.from("posts").select("*").order("created_at", { ascending: false });
*/

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services services={services} />
      <Transformations transformations={transformations} />
      <Posts posts={posts} />
      <ContactSection />
      <Footer />
    </main>
  );
}
