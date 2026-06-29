import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Transformations from "@/components/Transformations";
import Testimonials from "@/components/Testimonials";
import Posts from "@/components/Posts";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { services, transformations, posts } from "@/lib/data";

/*
  TO SWAP IN SUPABASE DATA LATER:
  1. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local
  2. import { supabase } from "@/lib/supabase"
  3. Replace the static imports with async fetches in this server component:
     const { data: services } = await supabase.from("services").select("*").order("order");
*/

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services services={services} />
      <Process />
      <Transformations transformations={transformations} />
      <Marquee />
      <Testimonials />
      <Posts posts={posts} />
      <ContactSection />
      <Footer />
    </main>
  );
}
