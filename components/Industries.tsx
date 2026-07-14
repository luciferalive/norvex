import Image from "next/image";
import Reveal from "./Reveal";

const industries = [
  {
    image: "/images/oil-gas.jpg",
    title: "Oil & Gas",
    description:
      "Supporting upstream, downstream, and energy projects with reliable industrial procurement solutions.",
  },
  {
    image: "/images/aviation.jpg",
    title: "Aviation",
    description:
      "Providing sourcing support for aviation components, tools, equipment, and technical requirements.",
  },
  {
    image: "/images/marine.jpg",
    title: "Marine",
    description:
      "Supplying marine equipment, consumables, and solutions for offshore operations.",
  },
  {
    image: "/images/epc.jpg",
    title: "EPC Projects",
    description:
      "Complete procurement assistance for engineering, construction, and infrastructure projects.",
  },
  {
    image: "/images/manufacturing.jpg",
    title: "Manufacturing",
    description:
      "Helping manufacturers source industrial materials and specialized components.",
  },
  {
    image: "/images/Construction.jpg",
    title: "Construction",
    description:
      "Reliable supply solutions for construction companies and large-scale developments.",
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="bg-[#050505] px-5 py-20 text-white sm:px-8 lg:px-6"
    >
      <Reveal>
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400 sm:text-sm">
              Industries We Serve
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Solutions Across Multiple Sectors
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg">
              Delivering procurement expertise to industries that require
              reliability, quality, and global sourcing capabilities.
            </p>

          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

            {industries.map((industry, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#111] transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-[0_15px_40px_rgba(250,204,21,0.12)]"
              >
                <div className="relative overflow-hidden">

                  <Image
                    src={industry.image}
                    alt={industry.title}
                    width={500}
                    height={300}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                </div>

                <div className="flex h-[220px] flex-col p-6">

                  <h3 className="mb-3 text-2xl font-bold">
                    {industry.title}
                  </h3>

                  <p className="flex-grow leading-7 text-gray-400">
                    {industry.description}
                  </p>

                  <div className="mt-5 h-[2px] w-14 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-24" />

                </div>
              </div>
            ))}

          </div>

        </div>
      </Reveal>
    </section>
  );
}