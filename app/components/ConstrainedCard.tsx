"use client";
import { motion } from "motion/react";
import { useRef } from "react";

export default function ConstrainedCard() {
  const containerRef = useRef(null);

  return (
    <div className="flex h-screen items-center justify-center bg-[#0f0f0f]">
      {/* The boundary container */}
      <div
        ref={containerRef}
        className="relative h-80 w-80 overflow-hidden rounded-3xl border border-gray-700 bg-gray-900"
      >
        <motion.div
          drag
          dragConstraints={containerRef}
          // Elastic rubber‑band effect when hitting edges
          dragElastic={0.2}
          // Optional: only drag on x
          // drag="x"
          className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 cursor-grab rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl active:cursor-grabbing"
          whileDrag={{
            scale: 1.1,
            boxShadow:
              "0 20px 40px rgba(0,0,0,0.5), 0 0 30px rgba(168,85,247,0.4)",
          }}
        />
      </div>
    </div>
  );
}
