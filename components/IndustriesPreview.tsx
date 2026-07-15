import Link from "next/link";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    title: "Oil & Gas",
    image: "/industries/oil-gas.jpg",
  },
  {
    title: "Aviation",
    image: "/industries/aviation.jpg",
  },
  {
    title: "Marine",
    image: "/industries/marine.jpg",
  },
  {
    title: "Manufacturing",
    image: "/industries/manufacturing.jpg",
  },
];

export default function IndustriesPreview() {
  return (
    <section className="bg-slate-50 py-28 px-6">

      <div className="mx-auto max-w-7xl">

        <div className="mb-16 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">

          <div>

            <span className="rounded-full bg-emerald-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#0E8F66]">
              Industries We Serve
            </span>

            <h2 className="mt-6 text-5xl font-black text-[#123E63]">
              Delivering Solutions Across Critical Industries
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Supporting businesses with reliable procurement,
              sourcing and industrial supply solutions tailored to
              diverse sectors worldwide.
            </p>

          </div>

          <Link
            href="/industries"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-semibold text-[#123E63] transition hover:border-[#0E8F66] hover:text-[#0E8F66]"
          >
            View Industries

            <ArrowRight size={18} />
          </Link>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {industries.map((industry) => (

            <Link
              key={industry.title}
              href="/industries"
              className="group relative overflow-hidden rounded-[30px] shadow-xl"
            >

              <img
                src={industry.image}
                alt={industry.title}
                className="h-[430px] w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#123E63]/95 via-[#123E63]/30 to-transparent transition group-hover:from-[#0E8F66]/90" />

              <div className="absolute bottom-0 left-0 right-0 p-8">

                <h3 className="text-3xl font-bold text-white">
                  {industry.title}
                </h3>

                <div className="mt-6 inline-flex items-center gap-2 text-white">

                  <span className="font-medium">
                    Learn More
                  </span>

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-2"
                  />

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}