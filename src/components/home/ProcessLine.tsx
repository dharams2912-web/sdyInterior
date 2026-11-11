"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/Reveal";

/** Vertical timeline whose gold line fills as you scroll. */
export function ProcessLine({ steps, tone = "light" }: { steps: { title: string; text: string }[]; tone?: "light" | "dark" }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const dark = tone === "dark";
  return (
    <ol ref={ref} className="relative ml-4 sm:ml-0">
      <span aria-hidden className={`absolute left-0 top-2 bottom-2 w-px sm:left-1/2 ${dark ? "bg-gold-500/15" : "bg-forest-800/15"}`} />
      <motion.span aria-hidden style={{ scaleY }} className="absolute left-0 top-2 bottom-2 w-px origin-top bg-gold-500 sm:left-1/2" />
      {steps.map((s, i) => (
        <li key={s.title} className={`relative grid pb-14 pl-10 last:pb-0 sm:grid-cols-2 sm:gap-16 sm:pl-0`}>
          <span aria-hidden className={`absolute left-0 top-2 flex size-4 -translate-x-1/2 items-center justify-center sm:left-1/2`}>
            <span className={`size-3 rotate-45 border border-gold-500 ${dark ? "bg-forest-800" : "bg-ivory-100"}`} />
          </span>
          <Reveal className={i % 2 ? "sm:col-start-2" : "sm:text-right"}>
            <p className="font-display text-5xl text-gold-500/50">{String(i + 1).padStart(2, "0")}</p>
            <h3 className={`mt-2 font-display text-3xl ${dark ? "text-ivory-100" : "text-forest-800"}`}>{s.title}</h3>
            <p className={`mt-3 leading-relaxed ${dark ? "text-ivory-100/65" : "text-ink/65"} ${i % 2 ? "" : "sm:ml-auto"} max-w-md`}>{s.text}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
