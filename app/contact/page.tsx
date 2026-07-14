import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="pt-40 pb-20 text-center px-6">

        <p className="uppercase tracking-[0.3em] text-yellow-400">
          Contact Us
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mt-6">
          Let's Discuss Your Requirements
        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-gray-400 text-xl leading-9">
          Reach out to our procurement team for quotations, sourcing assistance, or project requirements.
        </p>

      </section>

      <Contact />

      <Footer />

    </main>
  );
}