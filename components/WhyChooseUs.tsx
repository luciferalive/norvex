import Image from "next/image";
import Reveal from "./Reveal";

const reasons = [
  {
    image: "/images/supplier-network.jpg",
    title: "Global Supplier Network",
    description:
      "Access to trusted manufacturers, OEMs, and suppliers across international markets.",
  },
  {
    image: "/images/OEM&ManufacturerConnections.jpg",
    title: "OEM & Manufacturer Connections",
    description:
      "Strong relationships with verified suppliers to ensure competitive pricing and reliability.",
  },
  {
    image: "/images/QualityAssurance.jpg",
    title: "Quality Assurance",
    description:
      "We focus on sourcing reliable products meeting required specifications and standards.",
  },
  {
    image: "/images/TechnicalProcurement.jpg",
    title: "Technical Procurement",
    description:
      "Our team understands technical requirements and helps source the right solutions.",
  },
  {
    image: "/images/FastRFQResponse.jpg",
    title: "Fast RFQ Response",
    description:
      "Quick quotation support with accurate sourcing and supplier coordination.",
  },
  {
    image: "/images/IndustryExperience.jpg",
    title: "Industry Experience",
    description:
      "Supporting Oil & Gas, Aviation, Marine, EPC, and industrial sectors.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#050505] px-5 py-20 text-white sm:px-8 lg:px-6">
      <Reveal>
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400 sm:text-sm">
              Why NORVEX
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Why Choose Us
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg">
              Delivering reliable procurement solutions through global sourcing,
              technical expertise and trusted supplier partnerships.
            </p>

          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

            {reasons.map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#111] transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-[0_15px_40px_rgba(250,204,21,0.12)]"
              >
                <div className="relative overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={320}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                </div>

                <div className="flex h-[220px] flex-col p-6">

                  <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="flex-grow leading-7 text-gray-400">
                    {item.description}
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