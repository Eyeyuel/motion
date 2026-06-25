"use client";
import { motion } from "motion/react";
import React from "react";

const SpringComparision = () => {
  const boxClasses =
    "flex h-32 w-32 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 text-white font-semibold shadow-xl";
  return (
    <div className="flex justify-center items-center gap-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className={boxClasses}
      >
        Snappy
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 8 }}
        className={boxClasses}
      >
        Bouncy
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 150, damping: 12, mass: 2 }}
        className={boxClasses}
      >
        Heavy
      </motion.div>
    </div>
  );
};

export default SpringComparision;
