"use client";

import { motion } from "framer-motion";

const orbitItems = [
  { label: "✈ Aviation", top: "4%", left: "50%" },
  { label: "🛢 Oil & Gas", top: "25%", left: "8%" },
  { label: "🚢 Marine", top: "25%", left: "78%" },
  { label: "🏭 Manufacturing", top: "72%", left: "8%" },
  { label: "🏗 EPC", top: "72%", left: "78%" },
  { label: "🌍 Global Network", top: "92%", left: "50%" },
];

export default function AnimatedGlobe() {
  return (
    <div className="relative flex items-center justify-center w-[500px] h-[500px]">

      {/* Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute w-[340px] h-[340px] rounded-full bg-yellow-500/20 blur-3xl"
      />

      {/* Rotating Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 35,
          ease: "linear",
        }}
        className="absolute w-[420px] h-[420px] rounded-full border border-yellow-500/20"
      />

      {/* Globe */}
      <div className="relative w-[280px] h-[280px] rounded-full overflow-hidden border border-yellow-500/30 bg-gradient-to-br from-[#1b1b1b] via-[#111] to-black shadow-[0_0_80px_rgba(234,179,8,0.25)]">

        <motion.div
          animate={{ x: ["0%", "-10%"] }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "linear",
          }}
          className="absolute inset-0"
        >
          {[...Array(8)].map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute w-full border-t border-yellow-500/10"
              style={{ top: `${10 + i * 11}%` }}
            />
          ))}

          {[...Array(8)].map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute h-full border-l border-yellow-500/10"
              style={{ left: `${10 + i * 11}%` }}
            />
          ))}
        </motion.div>

        <div className="absolute inset-0 flex flex-col items-center justify-center">

          <h2 className="text-5xl font-black text-yellow-400">
            NORVEX
          </h2>

          <div className="w-20 h-[2px] bg-yellow-400 my-3" />

          <p className="text-gray-400 text-xs tracking-[0.4em] uppercase">
            Global Procurement
          </p>

        </div>

      </div>

      {/* Orbiting Labels */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
        className="absolute inset-0"
      >
        {orbitItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="absolute"
            style={{
              top: item.top,
              left: item.left,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="bg-[#1a1a1a] border border-yellow-500/20 rounded-full px-4 py-2 text-sm text-white shadow-lg">
              {item.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
}