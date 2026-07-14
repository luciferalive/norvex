import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="pt-40 pb-20 text-center px-6">

        <p className="uppercase tracking-[0.3em] text-yellow-400">
          Our Services
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mt-6">
          Procurement Solutions Built For Industry
        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-gray-400 text-xl leading-9">
          From OEM sourcing to complete project procurement, NORVEX provides reliable industrial supply solutions tailored to your business.
        </p>

      </section>

      <Services />

      <Footer />

    </main>
  );
}