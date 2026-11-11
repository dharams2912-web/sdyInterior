import { cn } from "@/lib/cn";
import { Reveal, SplitHeading } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  className,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", "max-w-3xl", className)}>
      <Reveal>
        <p className={cn("flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em]", align === "center" && "justify-center", tone === "light" ? "text-gold-700" : "text-gold-500")}>
          <span aria-hidden className="size-1.5 rotate-45 bg-current" />
          {eyebrow}
        </p>
      </Reveal>
      <SplitHeading text={title} className={cn("mt-5 font-display text-4xl leading-[1.05] text-balance sm:text-6xl", tone === "light" ? "text-forest-800" : "text-ivory-100")} />
      {intro && (
        <Reveal delay={0.15}>
          <p className={cn("mt-6 text-lg leading-relaxed", tone === "light" ? "text-ink/70" : "text-ivory-100/70")}>{intro}</p>
        </Reveal>
      )}
    </div>
  );
}

/** Direct 1-3 sentence answer block at the top of key pages (GEO, answer-first). */
export function AnswerBox({ children, label = "In short" }: { children: React.ReactNode; label?: string }) {
  return (
    <Reveal className="relative rounded-2xl border border-gold-500/30 bg-ivory-50 p-7 sm:p-9">
      <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gold-700">{label}</p>
      <p className="mt-3 font-display text-2xl leading-snug text-forest-800 sm:text-[1.7rem]">{children}</p>
    </Reveal>
  );
}
