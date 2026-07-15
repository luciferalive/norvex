import Link from "next/link";
import {
  Globe2,
  Factory,
  Wrench,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Global Procurement",
    description:
      "Complete sourcing solutions for industrial equipment, engineering products and project requirements.",
    icon: Globe2,
  },
  {
    title: "OEM Sourcing",
    description:
      "Direct sourcing from trusted manufacturers and OEM partners across global markets.",
    icon: Factory,
  },
  {
    title: "MRO Supplies",
    description:
      "Reliable supply of maintenance, repair and operational products for uninterrupted business operations.",
    icon: Wrench,
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-white py-28 px-6">

      <div className="mx-auto max-w-7xl">

        <div className="mb-16 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">

          <div>

            <span className="rounded-full bg-emerald-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#0E8F66]">
              Our Services
            </span>

            <h2 className="mt-6 text-5xl font-black text-[#123E63]">
              Procurement Solutions
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Delivering dependable sourcing, procurement and industrial
              supply services tailored to the needs of modern businesses.
            </p>

          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-semibold text-[#123E63] transition hover:border-[#0E8F66] hover:text-[#0E8F66]"
          >
            View All Services

            <ArrowRight size={18} />
          </Link>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-[30px] border border-slate-200 bg-white p-10 transition duration-300 hover:-translate-y-3 hover:border-[#0E8F66] hover:shadow-2xl"
              >

                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#123E63]/10">

                  <Icon
                    size={38}
                    className="text-[#123E63] transition duration-300 group-hover:text-[#0E8F66]"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#123E63]">
                  {service.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {service.description}
                </p>

                <Link
                  href="/services"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-[#0E8F66]"
                >
                  Learn More

                  <ArrowRight size={18} />
                </Link>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}