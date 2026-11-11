import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { AnswerBox } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { locations } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Areas We Serve | SDY Interior, Mumbai",
  description: "SDY Interior is a Mumbai-based home interior design studio. See the areas we serve and how to check coverage for your project.",
  path: "/locations/",
});

export default function LocationsPage() {
  return (
    <>
      <PageHero eyebrow="Locations" title="Where we design" crumbs={[{ name: "Locations", path: "/locations/" }]} />
      <section className="bg-ivory-100 px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <AnswerBox>SDY Interior is based in Mumbai, Maharashtra. Share your location when you enquire and we will confirm whether we can take on your project.</AnswerBox>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {locations.map((l) => (
              <Reveal key={l.slug}>
                <Link href={`/locations/${l.slug}/`} className="group block rounded-[1.5rem] bg-forest-800 p-10 text-ivory-100">
                  <p className="text-xs uppercase tracking-[0.35em] text-gold-500">Primary market</p>
                  <h2 className="mt-3 font-display text-5xl transition-colors group-hover:text-gold-400">{l.name}</h2>
                  <p className="mt-3 text-ivory-100/65">Home interior design across {l.name}.</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
