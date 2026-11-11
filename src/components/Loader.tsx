"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Intro loader built from the SDY visiting-card logo: corner brackets draw in,
 * the letters rise, the gold rule and diamond open, then the panel lifts away.
 */
export function Loader() {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("sdy-intro") === "1";
      sessionStorage.setItem("sdy-intro", "1");
    } catch {}
    const minTime = reduce ? 400 : seen ? 1100 : 2600;
    const start = performance.now();
    let raf = 0;
    const tick = () => {
      const p = Math.min(1, (performance.now() - start) / minTime);
      setProgress(p);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const ready = new Promise<void>((r) => (document.readyState === "complete" ? r() : window.addEventListener("load", () => r(), { once: true })));
    const wait = new Promise<void>((r) => setTimeout(r, minTime));
    // Never block the site for more than 5s, even on a slow connection.
    const cap = new Promise<void>((r) => setTimeout(r, 5000));
    Promise.race([Promise.all([ready, wait]), cap]).then(() => setDone(true));
    return () => cancelAnimationFrame(raf);
  }, [reduce]);

  useEffect(() => {
    document.documentElement.dataset.loading = done ? "false" : "true";
    window.dispatchEvent(new CustomEvent("sdy:loader", { detail: { done } }));
  }, [done]);

  const letters = ["S", "D", "Y"];

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          role="status"
          aria-label="Loading SDY Interior"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-forest-800 bg-lattice"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.9, ease }}
          style={{ clipPath: "inset(0 0 0% 0)" }}
        >
          {/* Corner brackets */}
          {[
            "left-6 top-6 border-l border-t sm:left-12 sm:top-12",
            "right-6 top-6 border-r border-t sm:right-12 sm:top-12",
            "left-6 bottom-6 border-l border-b sm:left-12 sm:bottom-12",
            "right-6 bottom-6 border-r border-b sm:right-12 sm:bottom-12",
          ].map((pos, i) => (
            <motion.span
              key={pos}
              className={`absolute size-10 border-gold-500/80 sm:size-16 ${pos}`}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.08, ease }}
            />
          ))}

          <div className="relative flex flex-col items-center text-center">
            <div className="flex font-display text-7xl font-semibold leading-none sm:text-9xl" aria-hidden>
              {letters.map((l, i) => (
                <span key={l} className="overflow-hidden px-[0.06em] pb-[0.08em]">
                  <motion.span
                    className={`inline-block ${l === "D" ? "bg-gradient-to-b from-[#7e7c55] to-olive-500 bg-clip-text text-transparent" : "text-gold-500"}`}
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1, delay: 0.25 + i * 0.12, ease }}
                  >
                    {l}
                  </motion.span>
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-4 text-gold-500" aria-hidden>
              <motion.span className="h-px w-20 origin-right bg-current sm:w-32" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.9, delay: 0.75, ease }} />
              <motion.span className="size-2.5 rotate-45 bg-current" initial={{ scale: 0, rotate: 0 }} animate={{ scale: 1, rotate: 45 }} transition={{ duration: 0.6, delay: 0.7, ease }} />
              <motion.span className="h-px w-20 origin-left bg-current sm:w-32" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.9, delay: 0.75, ease }} />
            </div>

            <motion.p
              className="mt-6 pl-[0.5em] text-lg font-medium tracking-[0.5em] text-gold-500 sm:text-2xl"
              initial={{ opacity: 0, letterSpacing: "0.9em" }}
              animate={{ opacity: 1, letterSpacing: "0.5em" }}
              transition={{ duration: 1.1, delay: 0.95, ease }}
            >
              INTERIOR
            </motion.p>
            <motion.p
              className="mt-3 font-display text-lg italic tracking-wide text-gold-400/90 sm:text-xl"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3, ease }}
            >
              Design Beyond Walls
            </motion.p>
          </div>

          <div className="absolute bottom-16 left-1/2 w-40 -translate-x-1/2 sm:bottom-24" aria-hidden>
            <div className="h-px w-full bg-gold-500/20">
              <div className="h-px bg-gold-500 transition-[width] duration-100" style={{ width: `${progress * 100}%` }} />
            </div>
            <p className="mt-3 text-center text-[10px] tracking-[0.4em] text-gold-500/70">{Math.round(progress * 100)}%</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
