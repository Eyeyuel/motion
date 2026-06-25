"use client";
import { motion } from "motion/react";

export default function BasicDrag() {
  return (
    <div className="flex h-screen items-center justify-center bg-[#0f0f0f]">
      <motion.div
        drag
        className="h-24 w-24 cursor-grab rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 shadow-xl"
      />
    </div>
  );
}
