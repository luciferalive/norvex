import Reveal from "./Reveal";
const services = [
  {
    title: "OEM Procurement",
    description:
      "Direct sourcing from verified OEM manufacturers and authorized suppliers worldwide.",
    icon: "⚙️",
  },

  {
    title: "Global Sourcing",
    description:
      "Connecting businesses with reliable suppliers across international markets.",
    icon: "🌍",
  },

  {
    title: "Industrial Supplies",
    description:
      "Complete solutions for MRO, industrial equipment, tools, and consumables.",
    icon: "📦",
  },

  {
    title: "Project Procurement",
    description:
      "End-to-end procurement support for EPC, Oil & Gas, Marine, and industrial projects.",
    icon: "🏭",
  },

  {
    title: "Logistics Support",
    description:
      "Reliable coordination from supplier selection to final delivery.",
    icon: "🚢",
  },

  {
    title: "Custom Sourcing",
    description:
      "Finding specialized products based on technical requirements and specifications.",
    icon: "🔎",
  },
];


export default function Services() {
  return (

    <section
      id="services"
      className="bg-black text-white py-24 px-6"
    >

      <Reveal>

<div className="max-w-7xl mx-auto">


        <div className="text-center mb-16">

          <p className="text-yellow-400 uppercase tracking-widest">
            What We Do
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Our Procurement Services
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Comprehensive sourcing solutions designed to support
            businesses across industries worldwide.
          </p>

        </div>



        <div className="grid md:grid-cols-3 gap-8">


          {services.map((service,index)=>(

            <div
              key={index}
              className="
              bg-[#111]
              border
              border-yellow-500/20
              rounded-2xl
              p-8
              hover:border-yellow-400
              hover:-translate-y-2
              transition
              duration-300
              "
            >

              <div className="text-5xl mb-6">
                {service.icon}
              </div>


              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>


              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>


            </div>


          ))}


        </div>


      </div>
      </Reveal>



    </section>

  );
}