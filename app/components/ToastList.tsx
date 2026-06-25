"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState, useCallback } from "react";

function useToasts() {
  const [toasts, setToasts] = useState<{ id: number; message: string }[]>([]);
  const addToast = useCallback((message: string) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);
  return { toasts, addToast, setToasts };
}

export default function ToastList() {
  const { toasts, addToast, setToasts } = useToasts();

  return (
    <div className="flex min-h-screen flex-col items-center gap-6 bg-[#0f0f0f] pt-10">
      <button
        onClick={() => addToast("Default notification")}
        className="rounded-xl bg-indigo-500 px-6 py-3 font-semibold text-white"
      >
        Show Toast
      </button>

      {/* Toast container */}
      <div className="fixed right-4 top-4 z-50 flex flex-col gap-3">
        <AnimatePresence mode="popLayout">
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              layout
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.9 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-64 cursor-pointer rounded-2xl bg-gray-800 p-4 text-white shadow-xl border border-gray-700"
              onClick={() =>
                setToasts((prev) => prev.filter((t) => t.id !== toast.id))
              }
            >
              {toast.message}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
