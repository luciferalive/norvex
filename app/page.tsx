import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AboutPreview from "@/components/AboutPreview";
import ServicesPreview from "@/components/ServicesPreview";
import IndustriesPreview from "@/components/IndustriesPreview";
import ProcurementProcess from "@/components/ProcurementProcess";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#F8FAFC] text-slate-900">

      {/* Background Decorations */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-80 top-0 h-[900px] w-[900px] rounded-full bg-[#0E8F66]/5 blur-[180px]" />

        <div className="absolute right-[-300px] top-[900px] h-[900px] w-[900px] rounded-full bg-[#123E63]/5 blur-[180px]" />

        <div className="absolute left-1/2 top-[2200px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#0E8F66]/5 blur-[180px]" />

      </div>

      <Navbar />

      <div className="relative z-10">

        <Hero />

        <Stats />

        <AboutPreview />

        <ServicesPreview />

        <IndustriesPreview />

        <ProcurementProcess />

        <WhyChooseUs />

        <Contact />

      </div>

      <Footer />

    </main>
  );
}