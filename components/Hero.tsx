import WorldNetwork from "./WorldNetwork";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-center px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <div>

          <p className="text-yellow-400 uppercase tracking-[0.35em] font-semibold mb-5">
            GLOBAL PROCUREMENT SOLUTIONS
          </p>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">

            Connecting

            <br />

            <span className="text-yellow-400">
              Global Industries
            </span>

            <br />

            With Trusted Suppliers

          </h1>

          <p className="text-gray-400 text-xl leading-9 mt-8 max-w-xl">
            NORVEX delivers industrial procurement, OEM sourcing,
            project supply, MRO procurement and global supplier
            management for Oil & Gas, Aviation, Marine,
            EPC and Manufacturing industries.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="#rfq"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition"
            >
              Request Quote
            </a>

            <a
              href="/services"
              className="border border-yellow-400 px-8 py-4 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              Explore Services
            </a>

          </div>

          <div className="grid grid-cols-3 gap-6 mt-14">

            <div>

              <h2 className="text-3xl font-bold text-yellow-400">
                35+
              </h2>

              <p className="text-gray-500 text-sm">
                Countries
              </p>

            </div>

            <div>

              <h2 className="text-3xl font-bold text-yellow-400">
                500+
              </h2>

              <p className="text-gray-500 text-sm">
                Suppliers
              </p>

            </div>

            <div>

              <h2 className="text-3xl font-bold text-yellow-400">
                OEM
              </h2>

              <p className="text-gray-500 text-sm">
                Network
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="hidden lg:flex justify-center items-center">
          <WorldNetwork />
        </div>

      </div>
    </section>
  );
}