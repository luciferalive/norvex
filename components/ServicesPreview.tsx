import Link from "next/link";
import {
  Globe,
  Factory,
  Wrench,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Global Procurement",
    description:
      "End-to-end procurement solutions connecting businesses with trusted international suppliers.",
  },
  {
    icon: Factory,
    title: "OEM & Industrial Sourcing",
    description:
      "Authorized manufacturers, OEM sourcing, technical products and industrial equipment procurement.",
  },
  {
    icon: Wrench,
    title: "MRO & Project Supply",
    description:
      "Reliable sourcing of maintenance, repair, operations materials and complete project requirements.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="relative py-32 px-6 bg-white">

      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">

          <div>

            <span className="rounded-full bg-emerald-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#0E8F66]">
              Our Services
            </span>

            <h2 className="mt-8 text-5xl font-black text-[#123E63]">
              Complete Procurement
              <br />
              Solutions
            </h2>

          </div>

          <Link
            href="/services"
            className="flex items-center gap-2 font-semibold text-[#0E8F66] hover:gap-4 transition-all"
          >
            View All Services

            <ArrowRight size={18} />

          </Link>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-10 transition-all duration-500 hover:-translate-y-3 hover:border-[#0E8F66] hover:shadow-2xl"
              >

                <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#0E8F66]/5 transition-all duration-500 group-hover:scale-150" />

                <div className="relative">

                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#123E63] text-white transition-all duration-300 group-hover:bg-[#0E8F66]">

                    <Icon size={34} />

                  </div>

                  <h3 className="text-3xl font-bold text-[#123E63]">
                    {service.title}
                  </h3>

                  <p className="mt-6 leading-8 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-10 flex items-center gap-2 font-semibold text-[#0E8F66]">

                    Learn More

                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-2"
                    />

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}