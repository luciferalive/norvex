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
      "Complete solutions for MRO materials, industrial equipment, tools and consumables.",
    icon: Package,
  },
  {
    title: "Project Procurement",
    description:
      "End-to-end procurement support for EPC, Oil & Gas, Marine and industrial projects.",
    icon: Building2,
  },
  {
    title: "Logistics Support",
    description:
      "Supplier coordination, shipment management and delivery support worldwide.",
    icon: Ship,
  },
  {
    title: "Custom Sourcing",
    description:
      "Specialized sourcing based on technical requirements, specifications and project needs.",
    icon: Search,
  },
];


export default function Services() {

  return (

    <Reveal>

      <section
        id="services"
        className="bg-slate-50 px-6 py-28"
      >

        <div className="mx-auto max-w-7xl">


          {/* HEADER */}

          <div className="mx-auto max-w-3xl text-center">


            <span className="rounded-full bg-emerald-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#0E8F66]">

              What We Do

            </span>



            <h1 className="mt-8 text-5xl font-black text-[#123E63]">

              Our Procurement
              <br />
              Services

            </h1>



            <p className="mt-6 text-lg leading-8 text-slate-600">

              Comprehensive sourcing solutions designed to support businesses
              worldwide through reliable suppliers, OEM partnerships and
              complete procurement management.

            </p>


          </div>



          {/* SERVICES GRID */}


          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">


            {services.map((service,index)=>{

              const Icon = service.icon;


              return (

                <div

                  key={index}

                  className="
                  group
                  rounded-[32px]
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-[#0E8F66]
                  hover:shadow-2xl
                  "

                >



                  <div
                    className="
                    mb-7
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#123E63]
                    text-white
                    transition
                    duration-300
                    group-hover:bg-[#0E8F66]
                    "
                  >

                    <Icon size={34}/>

                  </div>




                  <h2 className="text-2xl font-bold text-[#123E63]">

                    {service.title}

                  </h2>




                  <p className="mt-5 leading-8 text-slate-600">

                    {service.description}

                  </p>




                  <div className="mt-8 flex items-center font-semibold text-[#0E8F66]">


                    Learn More


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


      </section>


    </Reveal>

  );

}