"use client";

import { motion } from "framer-motion";

export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-gold-500/20 bg-forest-900 py-6" aria-hidden>
      <motion.div className="flex w-max gap-12 whitespace-nowrap" animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 40 }}>
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12 font-display text-3xl italic text-ivory-100/80 sm:text-4xl">
            {t}
            <span className="size-2 rotate-45 bg-gold-500" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
