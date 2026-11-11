import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { AnswerBox, SectionHeading } from "@/components/Section";
import { ProcessLine } from "@/components/home/ProcessLine";
import { FAQList } from "@/components/FAQList";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { processSteps } from "@/lib/content";
import { absoluteUrl, faqJsonLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Our Interior Design & Execution Process | SDY Interior",
  description:
    "How SDY Interior works: consultation, site assessment, concept, design development, material selection, execution and handover, explained stage by stage.",
  path: "/our-process/",
});

const faqs = [
  { q: "When do I need to make decisions?", a: "The main decision points are the concept and layout approval, the design development sign-off and the material selection. Your schedule shows when each is due." },
  { q: "How will I know how the work is progressing?", a: "During execution SDY shares regular progress updates and site visits are planned around key milestones." },
  { q: "What happens at handover?", a: "We complete final quality checks, fix any snags, arrange cleaning and walk you through the finished home and its care." },
];

export default function ProcessPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How SDY Interior designs and delivers a home interior",
            url: absoluteUrl("/our-process/"),
            step: processSteps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.text })),
          },
          faqJsonLd(faqs),
        ]}
      />
      <PageHero
        eyebrow="Our process"
        title="Seven stages, from first conversation to handover"
        crumbs={[{ name: "Our Process", path: "/our-process/" }]}
      />
      <section className="bg-ivory-100 px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <AnswerBox>
            SDY Interior works in seven stages: consultation, site assessment, concept and layout, design development, material selection, execution and
            handover. Each stage ends with a clear output, so you always know what has been agreed and what comes next.
          </AnswerBox>
        </div>
        <div className="mx-auto mt-24 max-w-6xl">
          <ProcessLine steps={processSteps} />
        </div>
      </section>
      <section className="bg-ivory-100 px-5 pb-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="FAQs" title="About the process" />
          <FAQList faqs={faqs} />
        </div>
      </section>
      <CTASection title="Ready for stage one?" text="The first step is a conversation. Tell us about your home." />
    </>
  );
}
