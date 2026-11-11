"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "gold" | "outline" | "ghost" | "dark";

const styles: Record<Variant, string> = {
  gold: "bg-gold-500 text-forest-900 hover:bg-gold-400",
  outline: "border border-gold-500/70 text-gold-500 hover:bg-gold-500 hover:text-forest-900",
  ghost: "text-forest-800 border border-forest-800/25 hover:border-forest-800 hover:bg-forest-800 hover:text-ivory-100",
  dark: "bg-forest-800 text-ivory-100 hover:bg-forest-700",
};

/** Magnetic call-to-action. Renders a Link for internal paths, <a> otherwise. */
export function Button({
  href,
  children,
  variant = "gold",
  className,
  onClick,
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  external?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });

  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.18);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.25);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const cls = cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-300",
    styles[variant],
    className,
  );
  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      <svg className="relative z-10 size-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );

  const isExternal = external ?? /^(https?:|tel:|mailto:)/.test(href);
  return (
    <motion.span ref={ref} style={{ x, y }} className="inline-block" onPointerMove={onMove} onPointerLeave={reset}>
      {isExternal ? (
        <a href={href} className={cls} onClick={onClick} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
          {inner}
        </a>
      ) : (
        <Link href={href} className={cls} onClick={onClick}>
          {inner}
        </Link>
      )}
    </motion.span>
  );
}
