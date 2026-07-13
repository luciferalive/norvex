import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Contact from "@/components/Contact";
import RFQ from "../components/RFQ";
import Stats from "../components/Stats";
import ProcurementProcess from "../components/ProcurementProcess";
import WhyChooseUs from "../components/WhyChooseUs";
import Industries from "../components/Industries";
import Services from "../components/Services";
import About from "../components/About";
import Navbar from "../components/Navbar";


export default function Home() {
  return (

    <main className="min-h-screen bg-black">

      <Navbar />

      <Hero />

      <About />

      <Services />

      <Industries />

      <WhyChooseUs />

      <ProcurementProcess />

      <Stats />

      <RFQ />

      <Contact />

      <Footer />

    </main>

  );
}