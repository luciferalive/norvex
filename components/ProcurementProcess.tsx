import {
  FileText,
  Search,
  Factory,
  ShieldCheck,
  Truck,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Requirement Analysis",
    description:
      "We review technical specifications, quantities, certifications and delivery expectations before procurement begins.",
  },
  {
    icon: Search,
    title: "Global Supplier Search",
    description:
      "Our procurement specialists identify qualified OEMs, manufacturers and trusted suppliers worldwide.",
  },
  {
    icon: Factory,
    title: "Supplier Evaluation",
    description:
      "Commercial offers, technical compliance and supplier capabilities are carefully evaluated.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Verification",
    description:
      "Products are verified to ensure compliance with customer specifications and quality standards.",
  },
  {
    icon: Truck,
    title: "Delivery & Logistics",
    description:
      "Complete coordination of documentation, freight, customs and worldwide delivery.",
  },
];

export default function ProcurementProcess() {
  return (
    <section className="bg-slate-50 py-28 px-6">

      <div className="mx-auto max-w-7xl">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full bg-emerald-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#0E8F66]">
            Procurement Process
          </span>

          <h2 className="mt-6 text-5xl font-black text-[#123E63]">
            How We Deliver
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every procurement request follows a structured workflow to ensure
            speed, transparency and quality from RFQ to final delivery.
          </p>

        </div>

        <div className="space-y-8">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="group flex flex-col gap-8 rounded-[32px] border border-slate-200 bg-white p-8 transition duration-300 hover:border-[#0E8F66] hover:shadow-xl lg:flex-row lg:items-center"
              >

                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-[#123E63]/10">

                  <Icon
                    size={42}
                    className="text-[#123E63]"
                  />

                </div>

                <div className="flex-1">

                  <div className="mb-2 text-sm font-bold uppercase tracking-[0.3em] text-[#0E8F66]">
                    Step {index + 1}
                  </div>

                  <h3 className="text-3xl font-bold text-[#123E63]">
                    {step.title}
                  </h3>

                  <p className="mt-4 max-w-4xl leading-8 text-slate-600">
                    {step.description}
                  </p>

                </div>

                <ArrowRight
                  size={28}
                  className="hidden text-[#0E8F66] transition group-hover:translate-x-2 lg:block"
                />

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}