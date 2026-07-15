import Link from "next/link";
import {
  ArrowRight,
  Factory,
  Plane,
  Ship,
  HardHat,
  Zap,
  HeartPulse,
} from "lucide-react";

const industries = [
  {
    title: "Oil & Gas",
    description:
      "Reliable procurement solutions for upstream, downstream and offshore operations.",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da",
    icon: Factory,
  },
  {
    title: "Aviation",
    description:
      "Aircraft parts, MRO supplies and technical procurement support for aviation industries.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
    icon: Plane,
  },
  {
    title: "Marine",
    description:
      "Marine equipment, consumables and project supply solutions.",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    icon: Ship,
  },
  {
    title: "Construction & EPC",
    description:
      "Supporting infrastructure projects with reliable industrial sourcing.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
    icon: HardHat,
  },
  {
    title: "Power & Utilities",
    description:
      "Electrical equipment and specialized procurement solutions.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
    icon: Zap,
  },
  {
    title: "Healthcare",
    description:
      "Medical and facility procurement solutions with quality assurance.",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
    icon: HeartPulse,
  },
];

export default function IndustriesPreview() {
  return (
    <section className="relative bg-slate-50 py-32 px-6">

      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="text-center">

          <span className="rounded-full bg-emerald-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#0E8F66]">
            Industries We Serve
          </span>


          <h2 className="mt-8 text-5xl font-black text-[#123E63]">
            Procurement Expertise
            <br />
            Across Multiple Industries
          </h2>


          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            From energy and aviation to infrastructure and manufacturing,
            NORVEX delivers reliable sourcing solutions for complex industrial
            requirements worldwide.
          </p>

        </div>


        {/* INDUSTRY GRID */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">


          {industries.map((industry) => {

            const Icon = industry.icon;


            return (

              <div
                key={industry.title}
                className="group relative h-[420px] overflow-hidden rounded-[32px]"
              >

                {/* IMAGE */}

                <img
                  src={industry.image}
                  alt={industry.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />


                {/* OVERLAY */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#123E63]/95 via-[#123E63]/40 to-transparent" />


                {/* CONTENT */}

                <div className="absolute bottom-0 p-8 text-white">


                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">

                    <Icon size={28}/>

                  </div>


                  <h3 className="text-3xl font-bold">
                    {industry.title}
                  </h3>


                  <p className="mt-4 leading-7 text-slate-200">
                    {industry.description}
                  </p>


                  <div className="mt-6 flex items-center gap-2 font-semibold text-emerald-300">

                    Explore

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


        <div className="mt-16 text-center">

          <Link
            href="/industries"
            className="inline-flex items-center gap-3 rounded-xl bg-[#123E63] px-8 py-4 font-semibold text-white transition hover:bg-[#0E8F66]"
          >

            View All Industries

            <ArrowRight size={18}/>

          </Link>

        </div>


      </div>

    </section>
  );
}