import Reveal from "./Reveal";
import {
  Settings,
  Globe,
  Package,
  Building2,
  Ship,
  Search,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "OEM Procurement",
    description:
      "Direct sourcing from verified OEM manufacturers and authorized suppliers worldwide.",
    icon: Settings,
  },
  {
    title: "Global Sourcing",
    description:
      "Connecting businesses with reliable suppliers across international markets.",
    icon: Globe,
  },
  {
    title: "Industrial Supplies",
    description:
      "Complete solutions for MRO, industrial equipment, tools, and consumables.",
    icon: Package,
  },
  {
    title: "Project Procurement",
    description:
      "End-to-end procurement support for EPC, Oil & Gas, Marine, and industrial projects.",
    icon: Building2,
  },
  {
    title: "Logistics Support",
    description:
      "Reliable coordination from supplier selection to final delivery.",
    icon: Ship,
  },
  {
    title: "Custom Sourcing",
    description:
      "Finding specialized products based on technical requirements and specifications.",
    icon: Search,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-black py-20 px-5 sm:px-8 lg:px-6"
    >
      <Reveal>
        <div className="max-w-7xl mx-auto">

          {/* Heading */}

          <div className="max-w-3xl mx-auto text-center mb-14">

            <p className="text-yellow-400 uppercase tracking-[0.35em] text-xs sm:text-sm font-semibold">
              What We Do
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Our Procurement Services
            </h2>

            <p className="mt-6 text-gray-400 text-base sm:text-lg leading-8">
              Comprehensive sourcing solutions designed to support businesses
              across industries worldwide with reliable suppliers and OEM
              partners.
            </p>

          </div>

          {/* Cards */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="group flex flex-col rounded-3xl border border-yellow-500/20 bg-[#111] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-[0_20px_50px_rgba(250,204,21,0.12)]"
                >

                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-400/10 mb-7">

                    <Icon
                      size={34}
                      strokeWidth={2}
                      className="text-yellow-400 transition-transform duration-300 group-hover:scale-110"
                    />

                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-7 flex-grow">
                    {service.description}
                  </p>

                  <div className="mt-8 flex items-center text-yellow-400 font-semibold">

                    <span>Learn More</span>

                    <ArrowRight
                      size={18}
                      className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
                    />

                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </Reveal>
    </section>
  );
}