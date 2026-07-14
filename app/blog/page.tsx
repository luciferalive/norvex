import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="pt-40 pb-20 px-6">

        <div className="max-w-7xl mx-auto text-center">

          <p className="uppercase tracking-[0.3em] text-yellow-400">
            NORVEX Insights
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-6">
            Procurement News & Industry Insights
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-gray-400 text-xl leading-9">
            Stay updated with procurement strategies, sourcing guides, supply chain trends, and industrial insights.
          </p>

        </div>

        <div className="mt-24 text-center">

          <h2 className="text-3xl font-bold">
            Articles Coming Soon
          </h2>

          <p className="text-gray-400 mt-4">
            We are preparing industry articles and procurement guides.
          </p>

        </div>

      </section>

      <Footer />

    </main>
  );
}