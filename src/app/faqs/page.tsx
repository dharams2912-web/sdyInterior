import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/Section";
import { FAQList } from "@/components/FAQList";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { generalFaqs, services } from "@/lib/content";
import { faqJsonLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Interior Design FAQs | SDY Interior, Mumbai",
  description: "Answers to common questions about working with SDY Interior: services, process, cost, timelines, materials and getting started.",
  path: "/faqs/",
});

export default function FaqsPage() {
  const serviceFaqs = services.flatMap((s) => s.faqs);
  return (
    <>
      <JsonLd data={faqJsonLd([...generalFaqs, ...serviceFaqs])} />
      <PageHero eyebrow="FAQs" title="Frequently asked questions" crumbs={[{ name: "FAQs", path: "/faqs/" }]} />
      <section className="bg-ivory-100 px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.8fr]">
          <SectionHeading eyebrow="General" title="Working with SDY" />
          <FAQList faqs={generalFaqs} />
        </div>
        <div className="mx-auto mt-24 grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.8fr]">
          <SectionHeading eyebrow="Services" title="Kitchens, bedrooms, storage & more" />
          <FAQList faqs={serviceFaqs} />
        </div>
      </section>
      <CTASection title="Still have a question?" text="Call or WhatsApp us. We are happy to help." />
    </>
  );
}
