"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { AnimatePresence } from "framer-motion";

const ToggleBox = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.4 }}
            className="w-80 h-80 flex justify-center items-center bg-green-500"
          >
            Hello
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ToggleBox;
