"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/lib/content";
import { RoomIllustration } from "@/components/RoomIllustration";

/** Sticky horizontal scroll through featured projects (vertical list on mobile). */
export function ProjectsRail({ projects }: { projects: Project[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const track = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  useEffect(() => {
    const measure = () => track.current && setDistance(Math.max(0, track.current.scrollWidth - window.innerWidth + 64));
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);
  const x = useTransform(scrollYProgress, [0.05, 0.95], [0, -distance]);
  const bar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <div ref={ref} className="relative hidden lg:block" style={{ height: `${projects.length * 70}vh` }}>
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <motion.div ref={track} style={{ x }} className="flex w-max gap-8 pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
            {projects.map((p, i) => (
              <ProjectCard key={p.slug} p={p} i={i} />
            ))}
          </motion.div>
          <div className="mx-auto mt-12 h-px w-full max-w-7xl bg-gold-500/20 px-8">
            <motion.div className="h-px bg-gold-500" style={{ width: bar }} />
          </div>
        </div>
      </div>
      <div className="grid gap-8 px-5 sm:grid-cols-2 sm:px-8 lg:hidden">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} p={p} i={i} />
        ))}
      </div>
    </>
  );
}

function ProjectCard({ p, i }: { p: Project; i: number }) {
  return (
    <Link href={`/projects/${p.slug}/`} className="group block w-full shrink-0 lg:w-[38vw] lg:max-w-[36rem]">
      <div className="relative overflow-hidden rounded-[1.5rem]">
        <RoomIllustration kind={p.illustration} className="aspect-[4/3] transition-transform duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]" />
        <span className="absolute left-5 top-5 rounded-full border border-gold-500/40 bg-forest-900/70 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-gold-400 backdrop-blur">
          Design concept
        </span>
        <span className="absolute right-5 top-5 font-display text-5xl text-gold-500/30">0{i + 1}</span>
        <div className="absolute inset-x-5 bottom-5 flex gap-1.5">
          {p.palette.map((c) => (
            <span key={c} className="size-5 rounded-full border border-white/30" style={{ background: c }} />
          ))}
        </div>
      </div>
      <div className="mt-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold-500">
            {p.configuration} · {p.style}
          </p>
          <h3 className="mt-2 font-display text-3xl text-ivory-100 transition-colors group-hover:text-gold-400">{p.title}</h3>
        </div>
        <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-gold-500/40 text-gold-500 transition-all duration-500 group-hover:rotate-[-45deg] group-hover:bg-gold-500 group-hover:text-forest-900">
          <svg viewBox="0 0 16 16" className="size-4" fill="none" aria-hidden><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
      </div>
    </Link>
  );
}
