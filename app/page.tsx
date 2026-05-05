import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/Whatsapp";

export default function Home() {
  return (
    <main className="relative">
      <Cursor />
      <Nav />
      <Hero />
      <Marquee />
      <Manifesto />
      <Services />
      <Process />
      <Stats />
      <Contact />
      <Footer />
      <Whatsapp />
    </main>
  );
}
