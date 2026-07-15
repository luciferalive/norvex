import Link from "next/link";
import {
  Globe2,
  ShieldCheck,
 Factory,
Truck,
} from "lucide-react";

const features = [
  {
    icon: Globe2,
    title: "Global Supplier Network",
    text: "Access to trusted manufacturers, OEMs and authorized distributors worldwide.",
  },
  {
    icon: Factory,
    title: "Industrial Expertise",
    text: "Supporting Oil & Gas, Aviation, Marine, EPC, Manufacturing and Infrastructure projects.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Procurement",
    text: "Every sourcing request is evaluated for technical compliance and supplier reliability.",
  },
  {
    icon: Truck,
    title: "End-to-End Delivery",
    text: "From RFQ to logistics coordination, we manage the complete procurement cycle.",
  },
];

export default function AboutPreview() {
  return (
    <section className="relative py-32 px-6">

      <div className="mx-auto max-w-7xl grid items-center gap-20 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <span className="rounded-full bg-emerald-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#0E8F66]">
            About NORVEX
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-[#123E63]">
            Your Trusted Partner
            <br />
            For Global Procurement
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
            NORVEX is a global procurement and sourcing company connecting
            businesses with verified manufacturers, OEMs and industrial
            suppliers worldwide.
          </p>

          <p className="mt-6 text-lg leading-9 text-slate-600">
            We help organizations reduce procurement complexity through
            technical sourcing, supplier qualification, logistics coordination
            and complete project procurement solutions.
          </p>

          <Link
            href="/about"
            className="mt-10 inline-flex rounded-xl bg-[#123E63] px-8 py-4 font-semibold text-white transition hover:bg-[#0E8F66]"
          >
            Learn More
          </Link>

        </div>

        {/* RIGHT */}

        <div className="grid gap-6 sm:grid-cols-2">

          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#0E8F66] hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#123E63] text-white">

                  <Icon size={28} />

                </div>

                <h3 className="text-xl font-bold text-[#123E63]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
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