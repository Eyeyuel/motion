"use client";
import { motion } from "motion/react";
import { useState } from "react";

const initialItems = ["🍎 Apple", "🍌 Banana", "🍒 Cherry"];

export default function ReorderList() {
  const [items, setItems] = useState(initialItems);

  const shuffle = () => {
    setItems([...items].sort(() => Math.random() - 0.5));
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-[#0f0f0f]">
      <button
        onClick={shuffle}
        className="rounded-xl bg-indigo-500 px-6 py-3 font-semibold text-white"
      >
        Shuffle
      </button>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <motion.li
            key={item}
            layout
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-48 cursor-pointer rounded-xl bg-gray-800 px-5 py-3 text-white shadow-lg"
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
