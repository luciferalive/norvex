import {
  ClipboardCheck,
  Globe2,
  SearchCheck,
  Truck,
  CircleCheckBig,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    number: "01",
    title: "Understand Requirement",
    description:
      "We analyze technical specifications, quantities, certifications and delivery expectations before sourcing begins.",
  },
  {
    icon: Globe2,
    number: "02",
    title: "Global Sourcing",
    description:
      "Our international supplier network identifies trusted OEMs, manufacturers and authorized distributors.",
  },
  {
    icon: SearchCheck,
    number: "03",
    title: "Technical Evaluation",
    description:
      "Products are evaluated for compliance, certifications, commercial viability and technical suitability.",
  },
  {
    icon: Truck,
    number: "04",
    title: "Quality & Logistics",
    description:
      "Quality inspection, export documentation, freight coordination and delivery are managed efficiently.",
  },
  {
    icon: CircleCheckBig,
    number: "05",
    title: "Complete Solution",
    description:
      "From RFQ to final delivery, NORVEX provides a complete procurement solution under one roof.",
  },
];

export default function ProcurementProcess() {
  return (
    <section className="bg-[#050505] py-24 px-5 sm:px-8 lg:px-6 text-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm font-semibold">
            How We Work
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold">
            Our Procurement Process
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">
            Every procurement request follows a structured workflow to ensure
            quality, transparency and timely delivery.
          </p>

        </div>

        <div className="relative">

          {/* Desktop Line */}

          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-yellow-500/20 via-yellow-400 to-yellow-500/20" />

          <div className="grid gap-8 lg:grid-cols-5">

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative group"
                >
                  <div
                    className="
                    bg-[#111]
                    border
                    border-yellow-500/20
                    rounded-3xl
                    p-8
                    text-center
                    h-full
                    transition-all
                    duration-300
                    hover:-translate-y-3
                    hover:border-yellow-400
                    hover:shadow-[0_20px_50px_rgba(250,204,21,0.12)]
                  "
                  >

                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400/10 border border-yellow-500/20">

                      <Icon
                        size={36}
                        className="text-yellow-400"
                      />

                    </div>

                    <div className="text-yellow-400 text-sm font-bold tracking-widest mb-3">
                      STEP {step.number}
                    </div>

                    <h3 className="text-2xl font-bold mb-4">
                      {step.title}
                    </h3>

                    <p className="text-gray-400 leading-7 text-sm">
                      {step.description}
                    </p>

                  </div>
                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}