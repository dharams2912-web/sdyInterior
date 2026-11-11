"use client";

import { motion } from "framer-motion";
import type { Illustration } from "@/lib/content";
import { cn } from "@/lib/cn";

/**
 * Fine-line room drawings in the brand gold, used where project photography
 * is not yet available. Lines draw themselves when scrolled into view.
 */
const scenes: Record<Illustration, string[]> = {
  living: [
    "M20 230 H380", // floor
    "M60 40 V230 M340 40 V230", // wall edges
    "M150 60 Q150 40 170 40 H230 Q250 40 250 60 V150 H150 Z", // arched window
    "M200 40 V150 M150 95 H250",
    "M90 180 H310 V215 H90 Z", // sofa base
    "M95 180 V150 Q95 140 105 140 H295 Q305 140 305 150 V180", // sofa back
    "M80 165 Q80 158 88 158 H95 V215 H80 Z M305 158 H312 Q320 158 320 165 V215 H305 Z", // arms
    "M100 215 V226 M300 215 V226",
    "M150 245 H250 M165 245 V258 M235 245 V258", // coffee table
    "M318 40 V75 M300 95 L318 75 L336 95 Z", // pendant
    "M72 230 V205 Q72 198 79 198 Q86 198 86 205 V230", // planter
    "M79 198 Q65 170 74 150 M79 198 Q90 165 84 140 M79 198 Q100 180 98 160",
  ],
  kitchen: [
    "M20 230 H380",
    "M40 150 H360 M40 150 V230 M360 150 V230",
    "M40 160 H360",
    "M100 160 V230 M170 160 V230 M240 160 V230 M300 160 V230",
    "M80 190 H90 M150 190 H160 M220 190 H230 M280 190 H290 M340 190 H350",
    "M40 40 H360 V100 H40 Z",
    "M110 40 V100 M180 40 V100 M250 40 V100",
    "M260 100 L280 125 H320 L340 100", // chimney hood
    "M285 150 Q285 145 290 145 H310 Q315 145 315 150",
    "M130 150 V142 Q130 132 140 132 M140 132 H146",
    "M60 120 H96 M190 120 H240",
  ],
  bedroom: [
    "M20 230 H380",
    "M90 60 H310 V150 H90 Z",
    "M110 75 H290 V140 H110 Z",
    "M70 150 H330 V200 H70 Z",
    "M70 175 H330",
    "M110 150 Q110 135 125 135 H180 Q195 135 195 150 M205 150 Q205 135 220 135 H275 Q290 135 290 150",
    "M80 200 V215 M320 200 V215",
    "M20 165 H60 V215 H20 M340 165 H380 V215 H340",
    "M40 165 V140 M28 140 H52 L46 120 H34 Z",
    "M360 165 V140 M348 140 H372 L366 120 H354 Z",
  ],
  wardrobe: [
    "M20 230 H380",
    "M50 30 H350 V220 H50 Z",
    "M50 60 H350",
    "M125 30 V220 M200 30 V220 M275 30 V220",
    "M118 130 V150 M132 130 V150 M268 130 V150 M282 130 V150",
    "M210 80 H265 M215 80 L215 100 M230 80 L230 105 M245 80 L245 98 M260 80 L260 102",
    "M210 160 H265 M210 190 H265",
    "M60 45 H115 M135 45 H190 M210 45 H265 M285 45 H340",
  ],
  home: [
    "M40 40 H360 V260 H40 Z",
    "M40 140 H170 V260",
    "M170 40 V110 M170 130 V140",
    "M250 40 V170 H360",
    "M250 190 V260",
    "M80 70 H140 V110 H80 Z",
    "M280 70 H340 V130 H280 Z M280 85 H340",
    "M60 170 H150 V240 H60 Z M60 190 H150",
    "M195 200 m-25 0 a25 25 0 1 0 50 0 a25 25 0 1 0 -50 0",
    "M270 205 H340 V240 H270 Z",
    "M200 260 V275 M195 275 H205",
  ],
  dining: [
    "M20 230 H380",
    "M200 40 V80 M170 100 L200 80 L230 100 Z",
    "M110 160 H290 M120 160 V225 M280 160 V225",
    "M80 225 V170 Q80 150 95 150 V225 M80 195 H120",
    "M320 225 V170 Q320 150 305 150 V225 M320 195 H280",
    "M175 160 V148 Q175 140 183 140 Q191 140 191 148 V160 M209 160 V150 H225 V160",
    "M40 40 V230 M360 40 V230",
    "M60 70 H130 V130 H60 Z M270 70 H340 V130 H270 Z",
  ],
  study: [
    "M20 230 H380",
    "M60 140 H340 M80 140 V230 M320 140 V230",
    "M240 140 V230 M240 170 H320 M240 200 H320",
    "M150 140 V100 H230 V140 M150 108 H230",
    "M120 175 Q120 165 130 165 H170 Q180 165 180 175 V200 H120 Z M125 200 V228 M175 200 V228",
    "M60 40 H340 V80 H60 Z M130 40 V80 M200 40 V80 M270 40 V80",
    "M90 140 V118 M85 118 H105 L100 100 H90 Z",
  ],
};

export function RoomIllustration({
  kind,
  className,
  tone = "dark",
  animate = true,
}: {
  kind: Illustration;
  className?: string;
  tone?: "dark" | "light";
  animate?: boolean;
}) {
  const paths = scenes[kind];
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        tone === "dark" ? "bg-gradient-to-br from-forest-700 via-forest-800 to-forest-900 bg-lattice" : "bg-gradient-to-br from-ivory-50 to-ivory-200 bg-lattice-dark",
        className,
      )}
    >
      <div aria-hidden className="absolute -right-1/4 -top-1/4 size-3/4 rounded-full bg-gold-500/10 blur-3xl" />
      <svg viewBox="0 0 400 290" className="relative h-full w-full" fill="none" role="img" aria-label={`Line drawing of a ${kind} interior`}>
        {paths.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke={tone === "dark" ? "#d9ae62" : "#1d3d35"}
            strokeWidth={1.3}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={animate ? { pathLength: 0, opacity: 0 } : false}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -15% 0px" }}
            transition={{ duration: 1.6, delay: i * 0.08, ease: [0.65, 0, 0.35, 1] }}
          />
        ))}
      </svg>
    </div>
  );
}
