"use client";
import { motion } from "motion/react";
import { useState } from "react";

export default function ExpandCard() {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setExpanded((e) => !e)}
      className={`cursor-pointer rounded-2xl bg-gray-800 text-white ${
        expanded ? "h-40 w-64" : "h-24 w-24"
      }`}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <motion.p layout className="p-4 text-lg font-semibold">
        {expanded ? "Expanded" : "Small"}
      </motion.p>
    </motion.div>
  );
}
