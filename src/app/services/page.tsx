import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { AnswerBox } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { services } from "@/lib/content";
import { absoluteUrl, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Interior Design Services in Mumbai | SDY Interior",
  description:
    "Explore SDY Interior's services: full home interiors, residential interiors, modular kitchens, bedrooms, living rooms and custom wardrobes and storage in Mumbai.",
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "SDY Interior services",
          itemListElement: services.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.name, url: absoluteUrl(`/services/${s.slug}/`) })),
        }}
      />
      <PageHero
        eyebrow="Services"
        title="Interior design services for Mumbai homes"
        intro="From a single room to a complete home, every SDY service starts with a consultation and ends with a home that works the way you live."
        crumbs={[{ name: "Services", path: "/services/" }]}
      />
      <section className="bg-ivory-100 px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <AnswerBox>
            SDY Interior offers full home interiors, residential interiors, modular kitchens, bedroom and living room design, and custom wardrobes and storage
            in Mumbai. The exact scope of each project is agreed in writing after the consultation and site visit.
          </AnswerBox>
        </div>
        <div className="mx-auto mt-20 grid max-w-7xl gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} s={s} index={i} />
          ))}
        </div>
      </section>
      <CTASection title="Not sure which service you need?" text="Tell us about your home and we will recommend the right scope during your consultation." />
    </>
  );
}
