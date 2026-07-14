import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="pt-40 pb-20 text-center px-6">

        <p className="uppercase tracking-[0.3em] text-yellow-400">
          About NORVEX
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mt-6">
          Your Global Procurement Partner
        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-gray-400 text-xl leading-9">
          NORVEX delivers industrial procurement,
          OEM sourcing,
          project supply,
          and global supplier management
          for businesses across multiple industries.
        </p>

      </section>

      <About />

      <Footer />

    </main>
  );
}