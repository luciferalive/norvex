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
    <div className="relative w-[650px] h-[650px] flex items-center justify-center overflow-hidden">

      {/* Background Glow */}

      <div className="absolute w-[560px] h-[560px] rounded-full bg-yellow-500/10 blur-3xl" />

      {/* Connection Lines */}

      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 650 650"
      >

        <line
          x1="120"
          y1="220"
          x2="325"
          y2="325"
          stroke="#facc15"
          strokeOpacity="0.35"
          strokeWidth="2"
        />

        <line
          x1="315"
          y1="155"
          x2="325"
          y2="325"
          stroke="#facc15"
          strokeOpacity="0.35"
          strokeWidth="2"
        />

        <line
          x1="380"
          y1="250"
          x2="325"
          y2="325"
          stroke="#facc15"
          strokeOpacity="0.35"
          strokeWidth="2"
        />

        <line
          x1="430"
          y1="320"
          x2="325"
          y2="325"
          stroke="#facc15"
          strokeOpacity="0.35"
          strokeWidth="2"
        />

        <line
          x1="500"
          y1="390"
          x2="325"
          y2="325"
          stroke="#facc15"
          strokeOpacity="0.35"
          strokeWidth="2"
        />

      </svg>

      {/* Animated Shipment Dot */}

      <motion.div
        animate={{
          x: [-205, 0, 105, 175],
          y: [-105, 0, 70, 120],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute z-30 w-4 h-4 rounded-full bg-yellow-400 shadow-[0_0_25px_#facc15]"
      />

      {/* Center Card */}

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute z-20 bg-[#111]/95 backdrop-blur-xl border border-yellow-500/30 rounded-3xl px-10 py-8 shadow-2xl"
      >

        <p className="text-yellow-400 uppercase tracking-widest text-sm">
          Global Procurement
        </p>

        <h2 className="text-4xl font-bold mt-3 text-white">
          NORVEX
        </h2>

        <p className="text-gray-400 mt-4 max-w-xs">
          Connecting industries with trusted suppliers worldwide.
        </p>

      </motion.div>

      {/* Country Cards */}

      {nodes.map((node, index) => (
        <motion.div
          key={node.name}
          animate={{
            opacity: [0.6, 1, 0.6],
            y: [0, -6, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.4,
          }}
          className="absolute z-10"
          style={{
            left: node.x,
            top: node.y,
          }}
        >
          <div className="bg-[#111]/90 backdrop-blur-xl border border-yellow-500/20 rounded-xl px-4 py-2 shadow-lg">

            <div className="flex items-center gap-2">

              <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />

              <span className="text-white text-sm font-medium">
                {node.name}
              </span>

            </div>

          </div>

        </motion.div>
      ))}

      {/* KPI Card */}

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-8 right-0 bg-[#111]/90 backdrop-blur-xl border border-yellow-500/20 rounded-2xl p-5 shadow-xl"
      >

        <p className="text-gray-400 text-sm">
          Global Suppliers
        </p>

        <h3 className="text-3xl font-bold text-yellow-400 mt-2">
          500+
        </h3>

      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-8 left-0 bg-[#111]/90 backdrop-blur-xl border border-yellow-500/20 rounded-2xl p-5 shadow-xl"
      >

        <p className="text-gray-400 text-sm">
          Countries Served
        </p>

        <h3 className="text-3xl font-bold text-yellow-400 mt-2">
          35+
        </h3>

      </motion.div>

      <motion.div
        animate={{ x: [0, 6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
        className="absolute top-1/2 -left-10 bg-[#111]/90 backdrop-blur-xl border border-yellow-500/20 rounded-2xl p-5 shadow-xl"
      >

        <p className="text-gray-400 text-sm">
          OEM Network
        </p>

        <h3 className="text-3xl font-bold text-yellow-400 mt-2">
          Global
        </h3>

      </motion.div>

    </div>
  );
}