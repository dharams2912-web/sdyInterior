"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RoomScene } from "@/components/three";
import { Button } from "@/components/Button";
import { whatsappLink, site } from "@/lib/site";
import { GoldRule } from "@/components/Logo";
import { useIntroDone } from "@/lib/useIntroDone";

const ease = [0.22, 1, 0.36, 1] as const;
const startDelay = 0.1;

export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const ready = useIntroDone();
  const go = <T,>(v: T) => (ready ? v : undefined);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const words = ["Thoughtfully", "designed", "home", "interiors", "in", "Mumbai."];

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-forest-800 bg-lattice text-ivory-100 grain">
      <div aria-hidden className="absolute -left-40 top-1/3 size-[36rem] rounded-full bg-gold-500/10 blur-3xl" />
      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-10 px-5 pt-28 pb-16 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:pt-24">
        <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]), opacity: fade }}>
          <motion.p
            className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-gold-500"
            initial={{ opacity: 0, x: -20 }}
            animate={go({ opacity: 1, x: 0 })}
            transition={{ duration: 0.9, delay: startDelay, ease }}
          >
            <span aria-hidden className="h-px w-10 bg-gold-500" /> {site.tagline}
          </motion.p>
          <h1 className="mt-6 font-display text-[clamp(2.9rem,7vw,6.3rem)] leading-[0.98] text-balance" aria-label="Thoughtfully designed home interiors in Mumbai.">
            {words.map((w, i) => (
              <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.1em] align-bottom">
                <motion.span
                  className={`inline-block ${w === "interiors" ? "italic text-gold-400" : ""}`}
                  initial={{ y: "110%" }}
                  animate={go({ y: "0%" })}
                  transition={{ duration: 1.1, delay: startDelay + 0.1 + i * 0.07, ease }}
                >
                  {w}&nbsp;
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.div initial={{ opacity: 0 }} animate={go({ opacity: 1 })} transition={{ duration: 1, delay: startDelay + 0.7 }}>
            <GoldRule className="mt-8" />
          </motion.div>
          <motion.p
            className="mt-8 max-w-xl text-lg leading-relaxed text-ivory-100/75"
            initial={{ opacity: 0, y: 20 }}
            animate={go({ opacity: 1, y: 0 })}
            transition={{ duration: 1, delay: startDelay + 0.8, ease }}
          >
            SDY Interior is a Mumbai interior design studio led by {site.designer.displayName}. We plan full homes, kitchens, bedrooms and
            storage around the way you live, then guide every detail through to handover.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={go({ opacity: 1, y: 0 })}
            transition={{ duration: 1, delay: startDelay + 0.95, ease }}
          >
            <Button href="/contact/">Request a Consultation</Button>
            <Button href={whatsappLink()} variant="outline">WhatsApp SDY</Button>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y, scale }}
          className="relative mx-auto aspect-[4/5] w-full max-w-[34rem] lg:aspect-[4/5.2]"
        >
          {/* Arch-shaped window into the 3D room */}
          <motion.div
            className="absolute inset-0 overflow-hidden rounded-t-full rounded-b-3xl border border-gold-500/40 shadow-[0_40px_120px_-30px_rgba(0,0,0,.6)]"
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={go({ clipPath: "inset(0% 0 0 0)" })}
            transition={{ duration: 1.6, delay: startDelay + 0.2, ease }}
          >
            <RoomScene />
          </motion.div>
          <div aria-hidden className="pointer-events-none absolute -inset-3 rounded-t-full rounded-b-[2rem] border border-gold-500/20" />
          <motion.div
            className="absolute -left-4 bottom-10 rounded-2xl border border-gold-500/30 bg-forest-900/80 px-5 py-4 backdrop-blur-md sm:-left-10"
            initial={{ opacity: 0, x: -20 }}
            animate={go({ opacity: 1, x: 0 })}
            transition={{ duration: 1, delay: startDelay + 1.3, ease }}
          >
            <p className="text-[10px] uppercase tracking-[0.35em] text-gold-500">Move to explore</p>
            <p className="mt-1 font-display text-xl">A room, in our palette</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#intro"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-ivory-100/50 sm:flex"
        style={{ opacity: fade }}
        aria-label="Scroll to introduction"
      >
        Scroll
        <span className="relative h-10 w-px overflow-hidden bg-gold-500/20">
          <motion.span className="absolute inset-x-0 top-0 h-1/2 bg-gold-500" animate={{ y: ["-100%", "200%"] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }} />
        </span>
      </motion.a>
    </section>
  );
}
