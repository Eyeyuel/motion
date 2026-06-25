"use client";
import { motion } from "motion/react";

const GustureButton = () => {
  return (
    <motion.button
      className="rounded-2xl bg-indigo-500 px-8 py-4 text-lg font-semibold text-white shadow-lg focus:outline-none"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(99,102,241,0.6)" }}
      whileTap={{ scale: 0.95 }}
      whileFocus={{ boxShadow: "0 0 0 4px rgba(99,102,241,0.5)" }}
    >
      Hover and click me!!
    </motion.button>
  );
};

export default GustureButton;
