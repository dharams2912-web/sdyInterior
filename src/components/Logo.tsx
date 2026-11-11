import { cn } from "@/lib/cn";

/** Typographic SDY wordmark, recreated from the visiting card. */
export function Logo({ className, compact = false, tone = "light" }: { className?: string; compact?: boolean; tone?: "light" | "dark" }) {
  return (
    <span className={cn("inline-flex flex-col items-center leading-none select-none", className)} aria-label="SDY Interior">
      <span aria-hidden className="font-display font-semibold tracking-[0.18em] text-gold-500">
        S<span className={tone === "light" ? "text-olive-500" : "text-[#7c7a52]"} style={{ textShadow: tone === "light" ? "0 0 1px rgba(217,174,98,.25)" : undefined }}>D</span>Y
      </span>
      {!compact && (
        <span aria-hidden className="mt-1 text-[0.32em] font-medium tracking-[0.55em] pl-[0.55em] text-gold-500">
          INTERIOR
        </span>
      )}
    </span>
  );
}

export function Diamond({ className }: { className?: string }) {
  return <span aria-hidden className={cn("inline-block size-2 rotate-45 bg-gold-500", className)} />;
}

export function GoldRule({ className }: { className?: string }) {
  return (
    <span aria-hidden className={cn("flex items-center gap-3 text-gold-500", className)}>
      <span className="h-px w-12 bg-current opacity-70" />
      <Diamond />
      <span className="h-px w-12 bg-current opacity-70" />
    </span>
  );
}

export function Corners({ className }: { className?: string }) {
  const c = "absolute size-8 border-gold-500/70";
  return (
    <span aria-hidden className={cn("pointer-events-none absolute inset-4", className)}>
      <span className={cn(c, "left-0 top-0 border-l border-t")} />
      <span className={cn(c, "right-0 top-0 border-r border-t")} />
      <span className={cn(c, "left-0 bottom-0 border-l border-b")} />
      <span className={cn(c, "right-0 bottom-0 border-r border-b")} />
    </span>
  );
}
