"use client";

import { motion } from "framer-motion";

const nodes = [
  { x: "18%", y: "34%", name: "USA" },
  { x: "48%", y: "24%", name: "Germany" },
  { x: "58%", y: "39%", name: "UAE" },
  { x: "66%", y: "49%", name: "India" },
  { x: "76%", y: "58%", name: "Singapore" },
];

export default function WorldNetwork() {
  return (
    <div className="relative flex aspect-square w-full max-w-[520px] items-center justify-center overflow-hidden">

      {/* Glow */}
      <div className="absolute h-[82%] w-[82%] rounded-full bg-yellow-400/10 blur-3xl" />

      {/* Animated Globe */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[72%] w-[72%] rounded-full border border-yellow-500/25"
      >

        <div className="absolute inset-0 rounded-full border border-yellow-500/20 scale-90" />
        <div className="absolute inset-0 rounded-full border border-yellow-500/20 scale-75" />
        <div className="absolute inset-0 rounded-full border border-yellow-500/20 scale-60" />

        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-yellow-500/20" />
        <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-yellow-500/20" />

      </motion.div>

      {/* Connection Lines */}
      <svg
        viewBox="0 0 650 650"
        className="absolute inset-0 h-full w-full"
      >
        <line x1="120" y1="220" x2="325" y2="325" stroke="#facc15" strokeOpacity=".35" strokeWidth="2"/>
        <line x1="315" y1="155" x2="325" y2="325" stroke="#facc15" strokeOpacity=".35" strokeWidth="2"/>
        <line x1="380" y1="250" x2="325" y2="325" stroke="#facc15" strokeOpacity=".35" strokeWidth="2"/>
        <line x1="430" y1="320" x2="325" y2="325" stroke="#facc15" strokeOpacity=".35" strokeWidth="2"/>
        <line x1="500" y1="390" x2="325" y2="325" stroke="#facc15" strokeOpacity=".35" strokeWidth="2"/>
      </svg>

      {/* Shipment Dot */}
      <motion.div
        animate={{
          x: [-160, 0, 80, 140],
          y: [-80, 0, 55, 95],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute z-30 h-3 w-3 rounded-full bg-yellow-400 shadow-[0_0_20px_#facc15]"
      />

      {/* Center Card */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute z-20 w-[70%] rounded-3xl border border-yellow-500/30 bg-[#111]/95 px-5 py-5 text-center backdrop-blur-xl sm:px-8 sm:py-7"
      >
        <p className="text-[10px] uppercase tracking-[0.35em] text-yellow-400 sm:text-xs">
          Global Procurement
        </p>

        <h2 className="mt-2 text-2xl font-bold text-white sm:text-4xl">
          NORVEX
        </h2>

        <p className="mt-3 text-xs leading-6 text-gray-400 sm:text-sm">
          Connecting industries with trusted suppliers worldwide.
        </p>
      </motion.div>

      {/* Countries */}
      {nodes.map((node, index) => (
        <motion.div
          key={node.name}
          animate={{
            opacity: [0.6, 1, 0.6],
            y: [0, -4, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.3,
          }}
          className="absolute z-10"
          style={{
            left: node.x,
            top: node.y,
          }}
        >
          <div className="rounded-full border border-yellow-500/20 bg-[#111]/90 px-2 py-1 backdrop-blur-xl sm:px-4 sm:py-2">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-yellow-400" />
              <span className="text-[10px] font-medium text-white sm:text-sm">
                {node.name}
              </span>
            </div>
          </div>
        </motion.div>
      ))}

      {/* KPI */}
      <div className="absolute right-2 top-3 rounded-xl border border-yellow-500/20 bg-[#111]/90 px-3 py-2 backdrop-blur-xl sm:right-0 sm:top-6 sm:px-5 sm:py-4">
        <p className="text-[10px] text-gray-400 sm:text-xs">
          Suppliers
        </p>

        <h3 className="text-lg font-bold text-yellow-400 sm:text-3xl">
          500+
        </h3>
      </div>

      <div className="absolute bottom-3 left-2 rounded-xl border border-yellow-500/20 bg-[#111]/90 px-3 py-2 backdrop-blur-xl sm:bottom-6 sm:left-0 sm:px-5 sm:py-4">
        <p className="text-[10px] text-gray-400 sm:text-xs">
          Countries
        </p>

        <h3 className="text-lg font-bold text-yellow-400 sm:text-3xl">
          35+
        </h3>
      </div>

    </div>
  );
}