import WorldNetwork from "./WorldNetwork";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-black text-white pt-28 pb-16 lg:min-h-screen lg:flex lg:items-center"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">

        {/* LEFT */}
        <div className="text-center lg:text-left">

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400 sm:text-sm">
            GLOBAL PROCUREMENT SOLUTIONS
          </p>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl">
            Connecting
            <br />
            <span className="text-yellow-400">
              Global Industries
            </span>
            <br />
            With Trusted Suppliers
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg lg:mx-0 lg:text-xl">
            NORVEX delivers industrial procurement, OEM sourcing,
            project supply, MRO procurement and global supplier
            management for Oil & Gas, Aviation, Marine,
            EPC and Manufacturing industries.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

            <a
              href="#rfq"
              className="rounded-full bg-yellow-400 px-8 py-4 text-center font-bold text-black transition duration-300 hover:scale-105 hover:bg-yellow-300"
            >
              Request Quote
            </a>

            <a
              href="/services"
              className="rounded-full border border-yellow-400 px-8 py-4 text-center transition duration-300 hover:bg-yellow-400 hover:text-black"
            >
              Explore Services
            </a>

          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-5 text-center lg:text-left">

            <div>
              <h2 className="text-3xl font-bold text-yellow-400 sm:text-4xl">
                35+
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Countries
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-yellow-400 sm:text-4xl">
                500+
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Suppliers
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-yellow-400 sm:text-4xl">
                OEM
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Network
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <div className="scale-[0.72] sm:scale-90 lg:scale-100 origin-center">
            <WorldNetwork />
          </div>
        </div>

      </div>
    </section>
  );
}