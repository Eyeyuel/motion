"use client";
import { motion } from "motion/react";
import { useRef } from "react";

export default function HorizontalSlider() {
  const trackRef = useRef(null);

  return (
    <div className="flex h-screen items-center justify-center bg-[#0f0f0f]">
      <div
        ref={trackRef}
        className="relative h-4 w-64 rounded-full bg-gray-800"
      >
        <motion.div
          drag="x"
          dragConstraints={trackRef}
          dragElastic={0}
          dragMomentum={false}
          className="absolute top-1/2 h-6 w-6 -translate-y-1/2 cursor-grab rounded-full bg-indigo-400 shadow-lg"
          whileDrag={{ scale: 1.2 }}
        />
      </div>
    </div>
  );
}
