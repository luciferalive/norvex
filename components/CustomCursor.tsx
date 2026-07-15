"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [trail, setTrail] = useState<
    { x: number; y: number; id: number }[]
  >([]);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setTrail((prev) => [
        ...prev.slice(-10),
        {
          x: e.clientX,
          y: e.clientY,
          id: Date.now(),
        },
      ]);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="
            fixed
            pointer-events-none
            z-[-1]
            rounded-full
            bg-yellow-400
          "
          initial={{
            opacity: 0.8,
            scale: 1,
          }}
          animate={{
            opacity: 0,
            scale: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          style={{
            left: point.x,
            top: point.y,
            width: 5,
            height: 5,
            boxShadow:
              "0 0 10px rgba(250,204,21,0.8)",
          }}
        />
      ))}
    </>
  );
}