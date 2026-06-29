import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Divider from "@/components/Divider";
import Transformations from "@/components/Transformations";
import Posts from "@/components/Posts";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { transformations, posts } from "@/lib/data";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Divider />
      <Transformations transformations={transformations} />
      <Posts posts={posts} />
      <ContactSection />
      <Footer />
    </main>
  );
}
