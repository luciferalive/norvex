import Link from "next/link";
import {
  Globe2,
  Factory,
  ShieldCheck,
  Truck,
} from "lucide-react";

const features = [
  {
    icon: Globe2,
    title: "Global Supplier Network",
    text: "Connecting businesses with trusted manufacturers and suppliers worldwide.",
  },
  {
    icon: Factory,
    title: "OEM & Industrial Sourcing",
    text: "Reliable sourcing of industrial equipment, MRO materials and engineering products.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    text: "Every procurement requirement is handled with quality, compliance and reliability.",
  },
  {
    icon: Truck,
    title: "End-to-End Logistics",
    text: "From supplier identification to worldwide delivery, we manage the complete process.",
  },
];

export default function AboutPreview() {
  return (
    <section className="py-28 px-6 bg-slate-50">

      <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">

        {/* Left */}

        <div>

          <span className="rounded-full bg-emerald-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#0E8F66]">
            About NORVEX
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-[#123E63] lg:text-6xl">
            Building Strong
            <br />
            Procurement
            <br />
            Partnerships.
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
            NORVEX delivers strategic procurement and sourcing solutions
            for industries requiring dependable suppliers, technical
            products and efficient supply chain support.
          </p>

          <p className="mt-6 text-lg leading-9 text-slate-600">
            Our objective is simple — reduce procurement complexity,
            improve sourcing efficiency and provide dependable solutions
            that help businesses operate without interruption.
          </p>

          <Link
            href="/about"
            className="mt-10 inline-flex rounded-xl bg-[#123E63] px-8 py-4 font-semibold text-white transition hover:bg-[#0E8F66]"
          >
            Learn More
          </Link>

        </div>

        {/* Right */}

        <div className="grid gap-6 sm:grid-cols-2">

          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-[#0E8F66] hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#123E63]/10">

                  <Icon
                    size={30}
                    className="text-[#123E63]"
                  />

                </div>

                <h3 className="text-xl font-bold text-[#123E63]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.text}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}