"use client";
import { motion } from "motion/react";
import { useState } from "react";

export default function LayoutToggle() {
  const [right, setRight] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0f0f0f]">
      <div className="relative flex h-40 w-80 items-center rounded-3xl bg-gray-900 p-4">
        <motion.div
          layout
          className={`h-24 w-24 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-xl cursor-pointer ${
            right ? "ml-auto" : "mr-auto"
          }`}
          onClick={() => setRight((r) => !r)}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      </div>
    </div>
  );
}
