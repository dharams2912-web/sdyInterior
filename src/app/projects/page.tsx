import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { RoomIllustration } from "@/components/RoomIllustration";
import { CTASection } from "@/components/CTASection";
import { projects } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Interior Design Projects in Mumbai | SDY Interior",
  description:
    "Explore SDY Interior's interior design projects and design concepts for Mumbai apartments: layouts, materials, storage and the thinking behind each home.",
  path: "/projects/",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Homes, and the thinking behind them"
        intro="Each project shows the brief, the scope and the design decisions, not just the pictures. We are adding SDY's completed case studies here as they are photographed and approved by clients."
        crumbs={[{ name: "Projects", path: "/projects/" }]}
      />
      <section className="bg-ivory-100 px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-x-10 gap-y-20 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.12} className={i % 2 ? "md:mt-24" : ""}>
              <Link href={`/projects/${p.slug}/`} className="group block">
                <div className="relative overflow-hidden rounded-[1.75rem]">
                  <RoomIllustration kind={p.illustration} className="aspect-[4/5] transition-transform duration-[1.4s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105" />
                  <span className="absolute left-5 top-5 rounded-full border border-gold-500/40 bg-forest-900/70 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-gold-400 backdrop-blur">Design concept</span>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {[p.location, p.configuration, p.style].map((t) => (
                    <span key={t} className="rounded-full border border-forest-800/15 px-3 py-1 text-xs text-ink/60">{t}</span>
                  ))}
                </div>
                <h2 className="mt-4 font-display text-4xl text-forest-800 transition-colors group-hover:text-gold-700">{p.title}</h2>
                <p className="mt-2 max-w-lg leading-relaxed text-ink/65">{p.summary}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection title="Your home could be the next story." />
    </>
  );
}
