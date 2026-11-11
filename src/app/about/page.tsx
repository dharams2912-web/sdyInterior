import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading, AnswerBox } from "@/components/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { Corners, GoldRule } from "@/components/Logo";
import { RoomIllustration } from "@/components/RoomIllustration";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "About SDY Interior & Interior Designer Dharamraj Yadav",
  description:
    "Meet SDY Interior, the Mumbai home interior design studio led by Interior Designer Dharamraj Yadav, and the “Design Beyond Walls” philosophy behind every project.",
  path: "/about/",
});

const values = [
  { t: "Listen first", d: "A design is only as good as the brief. We spend time understanding how your family lives before drawing a single line." },
  { t: "Beyond the walls", d: "We think about light, air, movement and maintenance, not only the finishes you see on day one." },
  { t: "Honest detail", d: "Clear scope, named materials and realistic timelines. No surprises at handover." },
  { t: "Crafted to last", d: "Practical materials and quality hardware chosen for Mumbai's climate and everyday family life." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About SDY Interior"
        title="Design that goes beyond walls."
        intro="SDY Interior is a Mumbai home interior design studio led by ID. Dharamraj Yadav, Interior Designer."
        crumbs={[{ name: "About", path: "/about/" }]}
      />

      <section className="bg-ivory-100 px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <AnswerBox label="Who we are">
            SDY Interior designs homes in Mumbai: full homes, modular kitchens, bedrooms, living rooms and custom storage. Every project is led by Interior
            Designer Dharamraj Yadav, from the first consultation to handover.
          </AnswerBox>
        </div>
      </section>

      <section className="bg-ivory-100 px-5 pb-28 sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-t-full rounded-b-[2rem]">
              <RoomIllustration kind="study" className="aspect-[4/5]" />
            </div>
            <div className="absolute -bottom-8 -right-4 rounded-2xl bg-forest-800 px-7 py-6 text-ivory-100 shadow-2xl sm:-right-8">
              <p className="font-display text-2xl">{site.designer.displayName}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.35em] text-gold-500">{site.designer.role}</p>
            </div>
          </Reveal>
          <div>
            <SectionHeading eyebrow="The designer" title="Led personally by Dharamraj Yadav" />
            <Reveal delay={0.15} className="mt-8 space-y-5 text-lg leading-relaxed text-ink/70">
              <p>
                SDY Interior was founded on a simple belief: that good interiors are not only about how a room looks in a photograph, but how it works every day
                for the people who live in it.
              </p>
              <p>
                Dharamraj Yadav leads each project personally, so the person who listens to your brief is the same person who designs your home and
                follows it through on site.
              </p>
              {/* TODO: add approved biography, qualifications and experience (blueprint §19). Do not add unverified claims. */}
            </Reveal>
            <GoldRule className="mt-10" />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest-800 bg-lattice px-5 py-24 text-ivory-100 sm:px-8 sm:py-32">
        <Corners className="inset-8 hidden sm:block" />
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold-500">Our philosophy</p>
          <Reveal>
            <blockquote className="mt-8 font-display text-4xl leading-tight text-balance sm:text-6xl">
              “Walls define a room. <span className="italic text-gold-400">Design</span> defines how you live in it.”
            </blockquote>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-sm uppercase tracking-[0.35em] text-ivory-100/60">SDY Interior · {site.tagline}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory-100 px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="What we value" title="Four principles behind every SDY home" align="center" />
          <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <StaggerItem key={v.t} className="rounded-[1.5rem] border border-forest-800/10 bg-ivory-50 p-8">
                <span aria-hidden className="block size-3 rotate-45 bg-gold-500" />
                <p className="mt-6 font-display text-sm text-gold-700">0{i + 1}</p>
                <h3 className="mt-1 font-display text-3xl text-forest-800">{v.t}</h3>
                <p className="mt-3 leading-relaxed text-ink/65">{v.d}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTASection />
    </>
  );
}
