"use client";
import { motion } from "motion/react";

export default function GestureCard() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0f0f0f]">
      <motion.div
        className="w-64 cursor-pointer rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 text-white shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        // Hover: lift + deeper shadow
        whileHover={{
          y: -8,
          boxShadow:
            "0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(168,85,247,0.3)",
        }}
        // Tap: press down slightly
        whileTap={{ scale: 0.98, y: 0 }}
      >
        <h3 className="text-xl font-bold">Premium Plan</h3>
        <p className="mt-2 text-sm text-gray-400">
          All the gestures you need for a tactile UI.
        </p>
        <div className="mt-4 text-3xl font-bold">$9/mo</div>
      </motion.div>
    </div>
  );
}
