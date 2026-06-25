"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export default function ModalExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0f0f0f]">
      <button
        onClick={() => setOpen(true)}
        className="rounded-xl bg-indigo-500 px-6 py-3 font-semibold text-white"
      >
        Open Modal
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Panel – stop click from bubbling to backdrop */}
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="z-50 w-80 rounded-3xl bg-gray-900 p-6 text-white shadow-2xl border border-gray-700"
            >
              <h2 className="text-xl font-bold">Premium Modal</h2>
              <p className="mt-2 text-gray-400">
                This modal fades its backdrop and slides the panel in/out.
              </p>
              <button
                onClick={() => setOpen(false)}
                className="mt-4 rounded-xl bg-indigo-500 px-5 py-2 font-semibold"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
