import Reveal from "./Reveal";
import {
  Globe2,
  ShieldCheck,
  PackageCheck,
  Handshake,
} from "lucide-react";

const features = [
  {
    icon: Globe2,
    title: "Global Sourcing",
    description: "Reliable sourcing through an international supplier network.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Every procurement is verified for quality and compliance.",
  },
  {
    icon: PackageCheck,
    title: "Complete Procurement",
    description: "From RFQ to delivery, we manage the complete procurement cycle.",
  },
  {
    icon: Handshake,
    title: "Trusted Partnership",
    description: "Building long-term relationships through reliable service.",
  },
];

export default function About() {
  return (
    <Reveal>
      <section
        id="about"
        className="bg-[#050505] py-24 px-5 sm:px-8 lg:px-6 text-white"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm font-semibold">
              About NORVEX
            </p>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
              Global Procurement.
              <br />
              Reliable Partnerships.
            </h2>

            <p className="mt-8 text-gray-400 leading-8 text-lg">
              NORVEX (Network Of Resources, Ventures & Exports) delivers
              professional procurement and sourcing solutions for industrial,
              commercial and infrastructure projects worldwide.
            </p>

            <p className="mt-6 text-gray-400 leading-8">
              We specialize in OEM sourcing, MRO supplies, engineering
              materials, industrial equipment, import & export services and
              complete supply chain management. Our mission is to connect
              businesses with trusted manufacturers while ensuring quality,
              competitive pricing and on-time delivery.
            </p>

          </div>

          {/* Right */}

          <div className="grid sm:grid-cols-2 gap-6">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="
                    group
                    rounded-3xl
                    border
                    border-yellow-500/20
                    bg-[#111]
                    p-7
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-yellow-400
                    hover:shadow-[0_20px_50px_rgba(250,204,21,0.12)]
                  "
                >
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400/10">

                    <Icon
                      size={32}
                      className="text-yellow-400 transition-transform group-hover:scale-110"
                    />

                  </div>

                  <h3 className="text-xl font-bold mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 leading-7">
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