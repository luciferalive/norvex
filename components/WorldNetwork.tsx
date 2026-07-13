"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const locations = [
  { x: "69%", y: "49%", label: "India" },
  { x: "61%", y: "43%", label: "UAE" },
  { x: "52%", y: "29%", label: "Germany" },
  { x: "23%", y: "33%", label: "USA" },
  { x: "76%", y: "57%", label: "Singapore" },
];

export default function WorldNetwork() {
  return (
    <div className="relative w-[700px] h-[500px] flex items-center justify-center">

      {/* Background Glow */}
      <motion.div
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute w-[520px] h-[520px] rounded-full bg-yellow-500 blur-[140px]"
      />

      {/* World Map */}
      <Image
        src="/map/world.svg"
        alt="World Map"
        width={700}
        height={450}
        className="opacity-30 select-none"
        priority
      />

      {/* Supplier Locations */}
      {locations.map((point, index) => (
        <motion.div
          key={index}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.4, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.4,
          }}
          className="absolute"
          style={{
            left: point.x,
            top: point.y,
          }}
        >
          <div className="relative flex items-center justify-center">

            <div className="absolute w-6 h-6 rounded-full bg-yellow-400/20 animate-ping"></div>

            <div className="w-3 h-3 rounded-full bg-yellow-400 border border-white"></div>

          </div>
        </motion.div>
      ))}

    </div>
  );
}