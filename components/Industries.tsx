import Image from "next/image";
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
      className="
      bg-[#050505]
      text-white
      py-24
      px-6
      "
    >

      <div className="max-w-7xl mx-auto">


        <div className="text-center mb-16">


          <p className="text-yellow-400 uppercase tracking-widest">
            Industries We Serve
          </p>


          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Solutions Across Multiple Sectors
          </h2>


          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Delivering procurement expertise to industries that require
            reliability, quality, and global sourcing capabilities.
          </p>


        </div>



        <div className="
          grid
          md:grid-cols-3
          gap-8
        ">


          {industries.map((industry,index)=>(

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
              hover:-translate-y-2
              transition
              duration-300
              "
            >


             <Image
  src={industry.image}
  alt={industry.title}
  width={500}
  height={300}
  className="w-full h-48 object-cover rounded-xl mb-6 group-hover:scale-105 transition duration-300"
/>



              <h3 className="
                text-2xl
                font-bold
                mb-4
              ">
                {industry.title}
              </h3>



              <p className="
                text-gray-400
                leading-relaxed
              ">
                {industry.description}
              </p>


            </div>


          ))}


        </div>


      </div>


    </section>

  );
}