"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1"];

export default function SharedLayout() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0f0f0f]">
      {/* Grid of cards */}
      <div className="flex gap-4">
        {colors.map((color) => (
          <motion.div
            key={color}
            layoutId={color}
            onClick={() => setSelected(color)}
            className="h-20 w-20 cursor-pointer rounded-2xl shadow-lg"
            style={{ background: color }}
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </div>

      {/* Expanded modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="modal-backdrop"
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              layoutId={selected}
              onClick={(e) => e.stopPropagation()}
              className="h-40 w-40 rounded-3xl shadow-2xl"
              style={{ background: selected }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
