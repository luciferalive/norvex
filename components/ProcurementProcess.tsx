export default function ProcurementProcess() {
  const steps = [
    {
      number: "01",
      title: "Understand Requirement",
      description:
        "We analyze your technical requirements, specifications, quantity, and delivery expectations.",
    },
    {
      number: "02",
      title: "Global Sourcing",
      description:
        "Our sourcing network helps identify suitable OEMs and reliable suppliers worldwide.",
    },
    {
      number: "03",
      title: "Technical Evaluation",
      description:
        "We verify product specifications, certifications, compliance, and commercial feasibility.",
    },
    {
      number: "04",
      title: "Quality & Logistics",
      description:
        "We coordinate quality checks, documentation, shipping, and delivery management.",
    },
    {
      number: "05",
      title: "Complete Solution",
      description:
        "From inquiry to delivery, NORVEX manages the complete procurement cycle.",
    },
  ];

  return (
    <section className="bg-[#0d0d0d] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-14">
          Our Procurement Process
        </h2>

        <div className="grid md:grid-cols-5 gap-6">

          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#151515] border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500 transition"
            >

              <div className="text-yellow-400 text-3xl font-bold mb-4">
                {step.number}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {step.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}