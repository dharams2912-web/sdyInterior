"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Service } from "@/lib/content";
import { RoomIllustration } from "./RoomIllustration";

export function ServiceCard({ s, index }: { s: Service; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.9, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-forest-800/10 bg-ivory-50 transition-shadow duration-500 hover:shadow-[0_30px_80px_-30px_rgba(29,61,53,.45)]"
    >
      <div className="relative overflow-hidden">
        <RoomIllustration kind={s.illustration} className="aspect-[16/10] transition-transform duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105" />
        <span className="absolute left-5 top-4 font-display text-4xl text-gold-500/40">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-display text-3xl text-forest-800">
          <Link href={`/services/${s.slug}/`} className="after:absolute after:inset-0">{s.name}</Link>
        </h3>
        <p className="mt-3 flex-1 leading-relaxed text-ink/65">{s.short}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-700">
          Explore service
          <svg viewBox="0 0 16 16" className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" aria-hidden><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
      </div>
      <span aria-hidden className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gold-500 transition-transform duration-700 group-hover:scale-x-100" />
    </motion.article>
  );
}
