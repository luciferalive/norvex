"use client";

import { Globe2, Factory, PackageCheck, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Globe2,
    number: "50+",
    title: "Countries Connected",
    description:
      "Supporting global procurement through an international sourcing network.",
  },
  {
    icon: Factory,
    number: "500+",
    title: "Verified Suppliers",
    description:
      "OEMs, manufacturers and authorized distributors across industries.",
  },
  {
    icon: PackageCheck,
    number: "1000+",
    title: "Industrial Products",
    description:
      "Mechanical, electrical, safety, MRO and project procurement solutions.",
  },
  {
    icon: ShieldCheck,
    number: "End-to-End",
    title: "Procurement Support",
    description:
      "From RFQ to delivery with quality assurance and logistics coordination.",
  },
];

export default function Stats() {
  return (
    <section className="relative py-28 px-6">

      <div className="mx-auto max-w-7xl">

        <div className="mb-20 text-center">

          <span className="rounded-full bg-emerald-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#0E8F66]">
            Why Businesses Choose NORVEX
          </span>

          <h2 className="mt-8 text-5xl font-black text-[#123E63]">
            Procurement Backed
            <br />
            By Experience
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            We connect industries with reliable suppliers and manufacturers,
            simplifying global sourcing through technical expertise,
            transparency and dependable execution.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-[#0E8F66] hover:shadow-2xl"
              >
                <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-emerald-50 blur-3xl transition-all duration-500 group-hover:bg-emerald-100" />

                <div className="relative">

                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#123E63] text-white transition-all duration-300 group-hover:bg-[#0E8F66]">

                    <Icon size={32} />

                  </div>

                  <h3 className="text-4xl font-black text-[#123E63]">
                    {item.number}
                  </h3>

                  <h4 className="mt-5 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h4>

                  <p className="mt-4 leading-8 text-slate-600">
                    {item.description}
                  </p>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}