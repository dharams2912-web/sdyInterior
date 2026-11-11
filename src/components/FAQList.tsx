"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { FAQ } from "@/lib/content";
import { cn } from "@/lib/cn";

export function FAQList({ faqs, tone = "light" }: { faqs: FAQ[]; tone?: "light" | "dark" }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className={cn("divide-y", tone === "light" ? "divide-forest-800/15 border-y border-forest-800/15" : "divide-gold-500/15 border-y border-gold-500/15")}>
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <h3>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className={cn("font-display text-xl sm:text-2xl", tone === "light" ? "text-forest-800" : "text-ivory-100")}>{f.q}</span>
                <span aria-hidden className={cn("relative flex size-9 shrink-0 items-center justify-center rounded-full border transition-colors", isOpen ? "border-gold-500 bg-gold-500" : "border-gold-500/50")}>
                  <span className={cn("absolute h-px w-3.5", isOpen ? "bg-forest-900" : "bg-gold-600")} />
                  <span className={cn("absolute h-3.5 w-px transition-transform duration-300", isOpen ? "scale-y-0 bg-forest-900" : "bg-gold-600")} />
                </span>
              </button>
            </h3>
            {/* Answer stays in the DOM (hidden) so it remains crawlable. */}
            <motion.div
                id={`faq-${i}`}
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className={cn("max-w-3xl pb-7 leading-relaxed", tone === "light" ? "text-ink/70" : "text-ivory-100/70")}>{f.a}</p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
