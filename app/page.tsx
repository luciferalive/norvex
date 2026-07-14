import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Stats from "@/components/Stats";
import AboutPreview from "@/components/AboutPreview";
import ServicesPreview from "@/components/ServicesPreview";
import IndustriesPreview from "@/components/IndustriesPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcurementProcess from "@/components/ProcurementProcess";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">

      <Navbar />

      <Hero />

      <div className="relative">

        {/* Background Glow */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          <div className="absolute left-[-250px] top-[350px] h-[500px] w-[500px] rounded-full bg-yellow-500/5 blur-[150px]" />

          <div className="absolute right-[-250px] top-[1200px] h-[600px] w-[600px] rounded-full bg-yellow-500/5 blur-[180px]" />

          <div className="absolute left-1/2 top-[2200px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-500/5 blur-[170px]" />

        </div>

        <section className="relative z-10">
          <Stats />
        </section>

        <section className="relative z-10">
          <AboutPreview />
        </section>

        <section className="relative z-10">
          <ServicesPreview />
        </section>

        <section className="relative z-10">
          <IndustriesPreview />
        </section>

        <section className="relative z-10">
          <WhyChooseUs />
        </section>

        <section className="relative z-10">
          <ProcurementProcess />
        </section>

      </div>

      <Footer />

    </main>
  );
}