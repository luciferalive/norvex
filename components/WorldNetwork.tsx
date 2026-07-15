"use client";

import { motion } from "framer-motion";

const countries = [
  { x: "18%", y: "28%", name: "USA" },
  { x: "47%", y: "20%", name: "Germany" },
  { x: "60%", y: "36%", name: "UAE" },
  { x: "68%", y: "48%", name: "India" },
  { x: "80%", y: "62%", name: "Singapore" },
];

export default function WorldNetwork() {
  return (
    <div className="relative flex h-[620px] w-[620px] items-center justify-center overflow-hidden">

      {/* Background Glow */}

      <div className="absolute h-[560px] w-[560px] rounded-full bg-[#0E8F66]/10 blur-[90px]" />

      {/* Rotating Globe */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[470px] w-[470px] rounded-full border border-[#123E63]/20"
      >

        {[1,2,3,4].map((i)=>(
          <div
            key={i}
            className="absolute inset-0 rounded-full border border-[#123E63]/10"
            style={{
              transform:`scale(${1-i*0.15})`
            }}
          />
        ))}

        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#123E63]/10" />
        <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-[#123E63]/10" />

      </motion.div>

      {/* Lines */}

      <svg
        viewBox="0 0 650 650"
        className="absolute inset-0 h-full w-full"
      >

        <line x1="120" y1="190" x2="325" y2="325" stroke="#0E8F66" strokeOpacity=".25" strokeWidth="2"/>

        <line x1="300" y1="140" x2="325" y2="325" stroke="#0E8F66" strokeOpacity=".25" strokeWidth="2"/>

        <line x1="390" y1="240" x2="325" y2="325" stroke="#0E8F66" strokeOpacity=".25" strokeWidth="2"/>

        <line x1="450" y1="315" x2="325" y2="325" stroke="#0E8F66" strokeOpacity=".25" strokeWidth="2"/>

        <line x1="520" y1="390" x2="325" y2="325" stroke="#0E8F66" strokeOpacity=".25" strokeWidth="2"/>

      </svg>

      {/* Moving Dot */}

      <motion.div
        animate={{
          x: [-170, -40, 70, 150],
          y: [-110, -20, 60, 120],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute z-30 h-4 w-4 rounded-full bg-[#0E8F66] shadow-[0_0_25px_#0E8F66]"
      />

      {/* Center Card */}

      <motion.div
        animate={{
          y:[0,-8,0]
        }}
        transition={{
          duration:4,
          repeat:Infinity
        }}
        className="absolute z-20 w-[340px] rounded-[30px] border border-slate-200 bg-white p-8 text-center shadow-2xl"
      >

        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0E8F66]">
          GLOBAL PROCUREMENT
        </p>

        <h2 className="mt-4 text-5xl font-black text-[#123E63]">
          NORVEX
        </h2>

        <p className="mt-5 leading-7 text-slate-500">
          Connecting industries with trusted suppliers and manufacturers worldwide.
        </p>

      </motion.div>

      {/* Country Nodes */}

      {countries.map((country,index)=>(

        <motion.div
          key={country.name}
          animate={{
            y:[0,-5,0],
            opacity:[0.7,1,0.7]
          }}
          transition={{
            duration:3,
            repeat:Infinity,
            delay:index*0.4
          }}
          className="absolute"
          style={{
            left:country.x,
            top:country.y
          }}
        >

          <div className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-lg">

            <div className="flex items-center gap-2">

              <div className="h-2.5 w-2.5 rounded-full bg-[#0E8F66]" />

              <span className="text-sm font-medium text-[#123E63]">
                {country.name}
              </span>

            </div>

          </div>

        </motion.div>

      ))}

      {/* KPI */}

      <div className="absolute right-0 top-8 rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-xl">

        <p className="text-xs text-slate-500">
          Suppliers
        </p>

        <h3 className="mt-2 text-4xl font-black text-[#123E63]">
          500+
        </h3>

      </div>

      <div className="absolute bottom-8 left-0 rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-xl">

        <p className="text-xs text-slate-500">
          Countries
        </p>

        <h3 className="mt-2 text-4xl font-black text-[#123E63]">
          50+
        </h3>

      </div>

    </div>
  );
}