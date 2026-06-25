"use client";
import { motion } from "motion/react";

const lesson1 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 500, damping: 30, mass: 3 }}
      className="w-80 h-80 flex justify-center items-center bg-green-500"
    >
      lesson-1
    </motion.div>
  );
};

export default lesson1;
