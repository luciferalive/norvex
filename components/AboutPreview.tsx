import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="bg-[#050505] text-white py-28 px-6">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}

        <div>

          <p className="uppercase tracking-[0.35em] text-yellow-400 mb-5">
            ABOUT NORVEX
          </p>

          <h2 className="text-5xl font-bold leading-tight">
            Global Procurement
            <br />
            <span className="text-yellow-400">
              Built On Trust
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-9 mt-8">
            NORVEX connects industries with reliable manufacturers,
            OEMs, and suppliers worldwide. We specialize in industrial
            procurement, project sourcing, MRO supply, and complete
            procurement management.
          </p>

          <Link
            href="/about"
            className="inline-flex mt-10 bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition"
          >
            Learn More →
          </Link>

        </div>

        {/* Right */}

        <div className="grid grid-cols-2 gap-6">

          <div className="bg-[#111] rounded-2xl border border-yellow-500/20 p-8">

            <h3 className="text-4xl font-bold text-yellow-400">
              35+
            </h3>

            <p className="text-gray-400 mt-3">
              Countries Served
            </p>

          </div>

          <div className="bg-[#111] rounded-2xl border border-yellow-500/20 p-8">

            <h3 className="text-4xl font-bold text-yellow-400">
              500+
            </h3>

            <p className="text-gray-400 mt-3">
              Global Suppliers
            </p>

          </div>

          <div className="bg-[#111] rounded-2xl border border-yellow-500/20 p-8">

            <h3 className="text-4xl font-bold text-yellow-400">
              OEM
            </h3>

            <p className="text-gray-400 mt-3">
              Sourcing Network
            </p>

          </div>

          <div className="bg-[#111] rounded-2xl border border-yellow-500/20 p-8">

            <h3 className="text-4xl font-bold text-yellow-400">
              24/7
            </h3>

            <p className="text-gray-400 mt-3">
              Procurement Support
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}