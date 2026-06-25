"use client";
import { motion } from "motion/react";

const TweenComponent = () => {
  const boxClasses =
    "flex h-32 w-32 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-semibold shadow-xl";
  return (
    <div className="flex justify-center items-center gap-40">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "linear" }}
        className={boxClasses}
      >
        {" "}
        linear{" "}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeIn" }}
        className={boxClasses}
      >
        easeIn
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className={boxClasses}
      >
        easeInOut
      </motion.div>
    </div>
  );
};

export default TweenComponent;
