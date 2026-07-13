import Image from "next/image";

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
    <section
      className="bg-[#050505] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="text-yellow-400 uppercase tracking-widest">
            Why NORVEX
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Why Choose Us
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Delivering reliable procurement solutions through global sourcing
            expertise and trusted partnerships.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reasons.map((item, index) => (

            <div
              key={index}
              className="
                group
                overflow-hidden
                bg-[#0b0b0b]
                border
                border-yellow-500/20
                rounded-2xl
                shadow-lg
                hover:border-yellow-400
                hover:shadow-yellow-500/20
                hover:-translate-y-3
                transition-all
                duration-500
              "
            >

              <div className="overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="
                    w-full
                    h-56
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}