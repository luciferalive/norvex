const reasons = [
  {
    title: "Global Supplier Network",
    description:
      "Access to trusted manufacturers, OEMs, and suppliers across international markets.",
    icon: "🌍",
  },

  {
    title: "OEM & Manufacturer Connections",
    description:
      "Strong relationships with verified suppliers to ensure competitive pricing and reliability.",
    icon: "🏭",
  },

  {
    title: "Quality Assurance",
    description:
      "We focus on sourcing reliable products meeting required specifications and standards.",
    icon: "✅",
  },

  {
    title: "Technical Procurement",
    description:
      "Our team understands technical requirements and helps source the right solutions.",
    icon: "⚙️",
  },

  {
    title: "Fast RFQ Response",
    description:
      "Quick quotation support with accurate sourcing and supplier coordination.",
    icon: "⚡",
  },

  {
    title: "Industry Experience",
    description:
      "Supporting Oil & Gas, Aviation, Marine, EPC, and industrial sectors.",
    icon: "🚀",
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
            Delivering reliable procurement solutions through
            global sourcing expertise and trusted partnerships.
          </p>


        </div>



        <div className="grid md:grid-cols-3 gap-8">


          {reasons.map((item,index)=>(

            <div
              key={index}
              className="
              group
              bg-black
              border
              border-yellow-500/20
              rounded-2xl
              p-8
              hover:border-yellow-400
              transition
              duration-300
              "
            >


              <div
                className="
                text-5xl
                mb-6
                group-hover:scale-110
                transition
                "
              >
                {item.icon}
              </div>



              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>



              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>



            </div>

          ))}


        </div>


      </div>


    </section>

  );
}