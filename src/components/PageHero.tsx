import Link from "next/link";
import { SplitHeading, Reveal } from "./Reveal";
import { JsonLd } from "./JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import { Corners, GoldRule } from "./Logo";

export type Crumb = { name: string; path: string };

export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  crumbs: Crumb[];
  children?: React.ReactNode;
}) {
  const trail = [{ name: "Home", path: "/" }, ...crumbs];
  return (
    <section className="relative overflow-hidden bg-forest-800 bg-lattice pt-36 pb-20 text-ivory-100 grain sm:pt-44 sm:pb-28">
      <Corners className="hidden sm:block inset-8 top-28" />
      <div aria-hidden className="absolute -right-40 top-10 size-[30rem] rounded-full bg-gold-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <JsonLd data={breadcrumbJsonLd(trail)} />
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-xs tracking-wide text-ivory-100/55">
            {trail.map((c, i) => (
              <li key={c.path} className="flex items-center gap-2">
                {i < trail.length - 1 ? (
                  <Link href={c.path} className="transition hover:text-gold-400">{c.name}</Link>
                ) : (
                  <span aria-current="page" className="text-gold-400">{c.name}</span>
                )}
                {i < trail.length - 1 && <span aria-hidden className="size-1 rotate-45 bg-gold-500/50" />}
              </li>
            ))}
          </ol>
        </nav>
        <Reveal delay={0.1}>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.4em] text-gold-500">{eyebrow}</p>
        </Reveal>
        <SplitHeading as="h1" immediate delay={0.2} text={title} className="mt-5 max-w-4xl font-display text-5xl leading-[1.02] text-balance sm:text-7xl" />
        <GoldRule className="mt-8" />
        {intro && (
          <Reveal delay={0.4}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ivory-100/75">{intro}</p>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
