import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RFQ from "@/components/RFQ";

export default function RFQPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="pt-40 pb-20 text-center px-6">

        <p className="uppercase tracking-[0.3em] text-yellow-400">
          Request A Quote
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mt-6">
          Start Your Procurement Request
        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-gray-400 text-xl leading-9">
          Submit your RFQ and our procurement specialists will review your requirements and get back to you as soon as possible.
        </p>

      </section>

      <RFQ />

      <Footer />

    </main>
  );
}