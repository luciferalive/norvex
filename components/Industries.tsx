import Image from "next/image";
import Reveal from "./Reveal";

const industries = [
  {
    image: "/images/oil-gas.jpg",
    title: "Oil & Gas",
    description:
      "Supporting upstream, downstream and offshore operations with reliable industrial procurement solutions.",
  },
  {
    image: "/images/aviation.jpg",
    title: "Aviation",
    description:
      "Providing aviation components, MRO supplies, tools and technical sourcing solutions.",
  },
  {
    image: "/images/marine.jpg",
    title: "Marine",
    description:
      "Supplying marine equipment, consumables and offshore project requirements.",
  },
  {
    image: "/images/epc.jpg",
    title: "EPC Projects",
    description:
      "Complete procurement support for engineering, construction and infrastructure projects.",
  },
  {
    image: "/images/manufacturing.jpg",
    title: "Manufacturing",
    description:
      "Helping manufacturers source industrial materials, components and production requirements.",
  },
  {
    image: "/images/Construction.jpg",
    title: "Construction",
    description:
      "Reliable supply solutions supporting large-scale construction and development projects.",
  },
];


export default function Industries() {

  return (

    <Reveal>

      <section
        id="industries"
        className="bg-slate-50 px-6 py-28"
      >

        <div className="mx-auto max-w-7xl">


          {/* HEADER */}

          <div className="mx-auto max-w-3xl text-center">


            <span className="rounded-full bg-emerald-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#0E8F66]">

              Industries We Serve

            </span>



            <h1 className="mt-8 text-5xl font-black text-[#123E63]">

              Solutions Across
              <br />
              Multiple Industries

            </h1>



            <p className="mt-6 text-lg leading-8 text-slate-600">

              NORVEX supports critical industries through global sourcing,
              technical procurement and reliable supply chain solutions.

            </p>


          </div>



          {/* CARDS */}


          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">


            {industries.map((industry,index)=>(


              <div
                key={index}
                className="
                group
                overflow-hidden
                rounded-[32px]
                border
                border-slate-200
                bg-white
                shadow-sm
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-[#0E8F66]
                hover:shadow-2xl
                "
              >



                <div className="relative overflow-hidden">


                  <Image

                    src={industry.image}

                    alt={industry.title}

                    width={600}

                    height={350}

                    className="
                    h-64
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                    "

                  />



                  <div
                    className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#123E63]/80
                    via-transparent
                    "
                  />


                </div>



                <div className="p-8">


                  <h2 className="text-3xl font-bold text-[#123E63]">

                    {industry.title}

                  </h2>



                  <p className="mt-5 leading-8 text-slate-600">

                    {industry.description}

                  </p>



                  <div
                    className="
                    mt-6
                    h-1
                    w-14
                    rounded-full
                    bg-[#0E8F66]
                    transition-all
                    duration-300
                    group-hover:w-28
                    "
                  />


                </div>


              </div>


            ))}


          </div>


        </div>


      </section>


    </Reveal>

  );

}