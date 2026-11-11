import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { AnswerBox, SectionHeading } from "@/components/Section";
import { Stagger, StaggerItem, Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { MaterialOrbs } from "@/components/three";
import { materials } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Interior Materials & Finishes Guide | SDY Interior",
  description:
    "A plain-language guide to plywood, laminates, veneers, acrylic and PU finishes, stone, quartz and hardware: durability, maintenance and where to use each.",
  path: "/materials-finishes/",
});

export default function MaterialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Materials & finishes"
        title="What your home is made of matters"
        crumbs={[{ name: "Materials & Finishes", path: "/materials-finishes/" }]}
      />
      <section className="relative bg-forest-900">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2">
          <Reveal className="text-ivory-100">
            <p className="text-xs uppercase tracking-[0.35em] text-gold-500">Touch the palette</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">Brass, lacquer, marble, oak and glass</h2>
            <p className="mt-4 max-w-md text-ivory-100/65">Move your cursor to turn the samples. In the studio we always finalise materials with real samples in your home&apos;s light.</p>
          </Reveal>
          <div className="h-[380px] sm:h-[460px]">
            <MaterialOrbs />
          </div>
        </div>
      </section>
      <section className="bg-ivory-100 px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <AnswerBox>
            The right material depends on where it is used. Moisture resistance matters in kitchens and bathrooms, scratch resistance on daily-use shutters,
            and heat and stain resistance on countertops. Ask for brands and grades to be named in your quotation.
          </AnswerBox>
        </div>
        <div className="mx-auto mt-20 max-w-7xl">
          <SectionHeading eyebrow="Guide" title="Common interior materials, explained" />
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {materials.map((m) => (
              <StaggerItem key={m.name} className="rounded-[1.5rem] border border-forest-800/10 bg-ivory-50 p-8">
                <h3 className="font-display text-3xl text-forest-800">{m.name}</h3>
                <p className="mt-3 leading-relaxed text-ink/70">{m.text}</p>
                <p className="mt-5 border-t border-forest-800/10 pt-4 text-sm text-ink/60"><span className="font-semibold text-gold-700">Care: </span>{m.care}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <CTASection />
    </>
  );
}
