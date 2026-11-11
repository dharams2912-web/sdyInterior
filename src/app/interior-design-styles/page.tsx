import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { AnswerBox } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { designStyles } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Interior Design Styles for Indian Homes | SDY Interior",
  description:
    "Contemporary, warm minimal, modern luxe, Indian contemporary, Japandi and classic modern: how each interior style looks and which homes it suits.",
  path: "/interior-design-styles/",
});

export default function StylesPage() {
  return (
    <>
      <PageHero
        eyebrow="Design styles"
        title="Find the style that feels like home"
        crumbs={[{ name: "Design Styles", path: "/interior-design-styles/" }]}
      />
      <section className="bg-ivory-100 px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <AnswerBox>
            Most homes do not need one strict style. We use styles as a starting vocabulary, then adapt them to your light, layout, budget and the things you
            already love.
          </AnswerBox>
        </div>
        <div className="mx-auto mt-20 max-w-7xl space-y-6">
          {designStyles.map((s, i) => (
            <Reveal key={s.name}>
              <article className="group grid overflow-hidden rounded-[1.75rem] border border-forest-800/10 bg-ivory-50 md:grid-cols-[1fr_1.3fr]">
                <div className="relative min-h-56 overflow-hidden" style={{ background: `linear-gradient(135deg, ${s.tone[0]}, ${s.tone[1]})` }}>
                  <span className="absolute bottom-4 left-6 font-display text-8xl text-white/25 transition-transform duration-700 group-hover:-translate-y-2">0{i + 1}</span>
                </div>
                <div className="flex flex-col justify-center p-9 sm:p-12">
                  <h2 className="font-display text-4xl text-forest-800">{s.name}</h2>
                  <p className="mt-4 text-lg leading-relaxed text-ink/70">{s.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-14 max-w-2xl text-center text-ink/60">
          See how styles come together in our <Link href="/projects/" className="text-gold-700 underline">projects</Link>, or learn about{" "}
          <Link href="/materials-finishes/" className="text-gold-700 underline">materials and finishes</Link>.
        </p>
      </section>
      <CTASection />
    </>
  );
}
