import IndustriesPreview from "@/components/IndustriesPreview";
import ServicesPreview from "@/components/ServicesPreview";
import AboutPreview from "@/components/AboutPreview";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcurementProcess from "@/components/ProcurementProcess";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">

      <Navbar />

      <Hero />

      <Stats />
      <AboutPreview />
      <ServicesPreview />
      <IndustriesPreview />

      <WhyChooseUs />

      <ProcurementProcess />

      <Footer />

    </main>
  );
}