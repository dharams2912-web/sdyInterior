import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { AnswerBox, SectionHeading } from "@/components/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { FAQList } from "@/components/FAQList";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { faqJsonLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Home Interior Design Cost in Mumbai: What Decides It | SDY",
  description:
    "What decides the cost of home interiors in Mumbai: area, rooms, civil work, materials, hardware and furniture. How SDY Interior prepares a transparent estimate.",
  path: "/interior-design-cost/",
});

const drivers = [
  { t: "Carpet area & rooms", d: "More rooms and more running feet of joinery mean more material and labour." },
  { t: "Civil & services work", d: "Moving walls, plumbing, wet areas or electrical lines adds cost and time." },
  { t: "Material grade", d: "Laminate, veneer, acrylic, PU lacquer and stone differ widely in price and care." },
  { t: "Hardware & fittings", d: "Hinges, channels, lift-ups and kitchen accessories quietly add up." },
  { t: "Ceilings & lighting", d: "Profiles, coves, fixtures and smart controls change both look and budget." },
  { t: "Furniture & décor", d: "Whether loose furniture, curtains and décor are included or bought separately." },
];

const faqs = [
  { q: "Can you give me a price per square foot?", a: "A per-square-foot number hides what is actually included. SDY prepares an itemised estimate after the site visit, so you can see exactly where the money goes and adjust scope or materials if needed." },
  { q: "How can I reduce the cost without compromising quality?", a: "Keep civil changes to a minimum, use premium finishes only where they are seen and touched most, and phase loose furniture and décor. We can show options during material selection." },
  { q: "Are design fees separate from execution costs?", a: "How design and execution are priced is explained in your quotation. Ask during your consultation and it will be written into your scope." },
];

export default function CostPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <PageHero
        eyebrow="Cost guide"
        title="What does home interior design cost in Mumbai?"
        crumbs={[{ name: "Cost Guide", path: "/interior-design-cost/" }]}
      />
      <section className="bg-ivory-100 px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <AnswerBox>
            The cost of home interiors depends on six things: area and rooms in scope, civil work, material grade, hardware, ceilings and lighting, and how much
            furniture is included. SDY Interior gives an itemised estimate after the consultation and site visit, rather than a fixed package price.
          </AnswerBox>
          {/* TODO: add verified budget bands once SDY approves them (blueprint §19). */}
        </div>
        <div className="mx-auto mt-20 max-w-7xl">
          <SectionHeading eyebrow="Cost drivers" title="Six things that decide your budget" />
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {drivers.map((d, i) => (
              <StaggerItem key={d.t} className="rounded-[1.5rem] border border-forest-800/10 bg-ivory-50 p-8">
                <p className="font-display text-4xl text-gold-500/70">0{i + 1}</p>
                <h3 className="mt-3 font-display text-3xl text-forest-800">{d.t}</h3>
                <p className="mt-3 leading-relaxed text-ink/70">{d.d}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <section className="bg-forest-800 bg-lattice px-5 py-24 text-ivory-100 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl">How SDY prepares your estimate</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ol className="space-y-5 text-lg text-ivory-100/80">
              <li><span className="text-gold-500">1.</span> Consultation to understand rooms, priorities and budget comfort.</li>
              <li><span className="text-gold-500">2.</span> Site visit and measurement.</li>
              <li><span className="text-gold-500">3.</span> Layout and scope agreed in writing, with inclusions and exclusions.</li>
              <li><span className="text-gold-500">4.</span> Itemised quotation with named materials and hardware.</li>
            </ol>
            <p className="mt-8 text-ivory-100/60">Related: <Link href="/blog/questions-before-hiring-an-interior-designer/" className="text-gold-400 underline">What to check before hiring an interior designer</Link></p>
          </Reveal>
        </div>
      </section>
      <section className="bg-ivory-100 px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="FAQs" title="Budget questions" />
          <FAQList faqs={faqs} />
        </div>
      </section>
      <CTASection title="Get an estimate built for your home." />
    </>
  );
}
