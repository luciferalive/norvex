import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Industries from "@/components/Industries";

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="pt-40 pb-20 text-center px-6">

        <p className="uppercase tracking-[0.3em] text-yellow-400">
          Industries We Serve
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mt-6">
          Supporting Industries Worldwide
        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-gray-400 text-xl leading-9">
          NORVEX supplies procurement solutions for Oil & Gas, Aviation, Marine, Manufacturing, Construction, Power, Healthcare and Infrastructure sectors.
        </p>

      </section>

      <Industries />

      <Footer />

    </main>
  );
}