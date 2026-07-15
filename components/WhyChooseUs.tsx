import Image from "next/image";
import Reveal from "./Reveal";
import {
  Globe2,
  Factory,
  ShieldCheck,
 Clock3,
  BadgeCheck,
  Truck,
} from "lucide-react";

const reasons = [
  {
    image: "/images/supplier-network.jpg",
    title: "Global Supplier Network",
    description:
      "Access a worldwide network of trusted manufacturers, OEMs and industrial suppliers.",
    icon: Globe2,
  },
  {
    image: "/images/OEM&ManufacturerConnections.jpg",
    title: "OEM Partnerships",
    description:
      "Reliable sourcing through strong relationships with verified manufacturers.",
    icon: Factory,
  },
  {
    image: "/images/QualityAssurance.jpg",
    title: "Quality Assurance",
    description:
      "Products sourced according to your technical requirements and quality expectations.",
    icon: ShieldCheck,
  },
  {
    image: "/images/TechnicalProcurement.jpg",
    title: "Technical Procurement",
    description:
      "Engineering-focused procurement support for complex industrial requirements.",
    icon: BadgeCheck,
  },
  {
    image: "/images/FastRFQResponse.jpg",
    title: "Fast RFQ Response",
    description:
      "Quick quotations with efficient supplier coordination and communication.",
    icon: Clock3,
  },
  {
    image: "/images/IndustryExperience.jpg",
    title: "Worldwide Logistics",
    description:
      "Complete procurement support from sourcing to international delivery.",
    icon: Truck,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-28 px-6">

      <Reveal>

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-20 max-w-3xl text-center">

            <span className="rounded-full bg-emerald-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#0E8F66]">
              Why NORVEX
            </span>

            <h2 className="mt-6 text-5xl font-black text-[#123E63]">
              Why Businesses Choose NORVEX
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Combining technical expertise, global supplier relationships and
              responsive procurement services to deliver dependable sourcing
              solutions worldwide.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {reasons.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white transition duration-300 hover:-translate-y-3 hover:border-[#0E8F66] hover:shadow-2xl"
                >

                  <div className="relative h-60 overflow-hidden">

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#123E63]/90 via-[#123E63]/20 to-transparent" />

                    <div className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white">

                      <Icon
                        size={28}
                        className="text-[#123E63]"
                      />

                    </div>

                  </div>

                  <div className="p-8">

                    <h3 className="text-2xl font-bold text-[#123E63]">
                      {item.title}
                    </h3>

                    <p className="mt-5 leading-8 text-slate-600">
                      {item.description}
                    </p>

                    <div className="mt-8 h-1 w-16 rounded-full bg-[#0E8F66] transition-all duration-300 group-hover:w-28" />

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