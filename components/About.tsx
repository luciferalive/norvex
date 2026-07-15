import Reveal from "./Reveal";
import {
  Globe2,
  ShieldCheck,
  PackageCheck,
  Handshake,
  Factory,
  Truck,
} from "lucide-react";

const features = [
  {
    icon: Globe2,
    title: "Global Supplier Network",
    description:
      "Connecting businesses with verified manufacturers, OEMs and suppliers worldwide.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Supplier evaluation, technical verification and compliance-focused procurement.",
  },
  {
    icon: PackageCheck,
    title: "Complete Procurement",
    description:
      "Managing the complete cycle from RFQ, sourcing and documentation to delivery.",
  },
  {
    icon: Handshake,
    title: "Trusted Partnerships",
    description:
      "Building long-term relationships through transparency and reliable execution.",
  },
  {
    icon: Factory,
    title: "Industrial Expertise",
    description:
      "Supporting Oil & Gas, Aviation, Marine, EPC and manufacturing industries.",
  },
  {
    icon: Truck,
    title: "Logistics Support",
    description:
      "Coordinating shipments and supply chain requirements globally.",
  },
];


export default function About() {

  return (

    <Reveal>

      <section
        id="about"
        className="bg-slate-50 py-28 px-6"
      >

        <div className="mx-auto max-w-7xl">


          {/* HEADER */}

          <div className="max-w-4xl">

            <span className="rounded-full bg-emerald-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#0E8F66]">
              About NORVEX
            </span>


            <h1 className="mt-8 text-5xl font-black leading-tight text-[#123E63]">

              Global Procurement.
              <br />

              Reliable Partnerships.

            </h1>


            <p className="mt-8 text-lg leading-9 text-slate-600">

              NORVEX (Network Of Resources, Ventures & Exports) provides
              complete procurement and sourcing solutions for industrial,
              commercial and infrastructure projects worldwide.

            </p>


            <p className="mt-5 text-lg leading-9 text-slate-600">

              We specialize in OEM sourcing, MRO supplies, engineering
              materials, industrial equipment and complete supply chain
              solutions. Our goal is to simplify procurement by connecting
              businesses with reliable suppliers while ensuring quality,
              competitive pricing and timely delivery.

            </p>

          </div>



          {/* FEATURES */}


          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">


            {features.map((feature)=>{

              const Icon = feature.icon;


              return (

                <div
                  key={feature.title}
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
                    mb-6
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#123E63]
                    text-white
                    transition
                    group-hover:bg-[#0E8F66]
                    "
                  >

                    <Icon size={32}/>

                  </div>



                  <h3 className="text-2xl font-bold text-[#123E63]">

                    {feature.title}

                  </h3>



                  <p className="mt-4 leading-8 text-slate-600">

                    {feature.description}

                  </p>


                </div>

              );

            })}


          </div>


        </div>

      </section>


    </Reveal>

  );
}