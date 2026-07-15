import Link from "next/link";
import WorldNetwork from "./WorldNetwork";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-[#F7FBFD] via-white to-[#EEF7F3]"
    >
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute -left-40 top-10 h-[700px] w-[700px] rounded-full bg-[#0E8F66]/10 blur-[140px]" />
        <div className="absolute -right-32 bottom-0 h-[700px] w-[700px] rounded-full bg-[#123E63]/10 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1700px] flex-col items-center justify-between gap-20 px-8 pt-36 pb-20 lg:flex-row lg:px-16 xl:px-24">

        {/* LEFT */}

        <div className="max-w-3xl">

          <span className="inline-flex rounded-full border border-[#0E8F66]/20 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#0E8F66] shadow-sm">
            GLOBAL PROCUREMENT • OEM SOURCING • INDUSTRIAL SUPPLY
          </span>

          <h1 className="mt-8 text-5xl font-black leading-[1.05] text-[#123E63] md:text-6xl xl:text-8xl">
            Building
            <br />
            Reliable
            <br />
            <span className="text-[#0E8F66]">
              Global Supply Chains
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600">
            NORVEX delivers end-to-end procurement solutions, connecting
            industries with trusted manufacturers, OEMs and global suppliers
            for technical products, MRO requirements and project sourcing.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              href="/contact"
              className="rounded-full bg-[#123E63] px-9 py-4 text-lg font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-[#0E8F66]"
            >
              Request Quote
            </Link>

            <Link
              href="/services"
              className="rounded-full border border-slate-300 bg-white px-9 py-4 text-lg font-semibold text-slate-700 transition hover:border-[#0E8F66] hover:text-[#0E8F66]"
            >
              Explore Services
            </Link>

          </div>

          {/* Stats */}

          <div className="mt-20 grid grid-cols-3 gap-10">

            <div>
              <h3 className="text-5xl font-black text-[#123E63]">
                50+
              </h3>

              <p className="mt-3 text-slate-500">
                Countries Served
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-[#123E63]">
                500+
              </h3>

              <p className="mt-3 text-slate-500">
                Supplier Network
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-[#123E63]">
                24/7
              </h3>

              <p className="mt-3 text-slate-500">
                Procurement Support
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative flex w-full justify-center lg:w-auto">

          <div className="absolute h-[650px] w-[650px] rounded-full bg-gradient-to-br from-[#123E63]/10 to-[#0E8F66]/10 blur-[120px]" />

          <div className="relative rounded-[40px] border border-white/70 bg-white/80 p-8 shadow-[0_30px_80px_rgba(18,62,99,0.15)] backdrop-blur-xl">

            <WorldNetwork />

          </div>

        </div>

      </div>
    </section>
  );
}