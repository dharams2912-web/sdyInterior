import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { AnswerBox, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { LeadForm } from "@/components/LeadForm";
import { FAQList } from "@/components/FAQList";
import { JsonLd } from "@/components/JsonLd";
import { generalFaqs, locations, services } from "@/lib/content";
import { businessId, faqJsonLd, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps<"/locations/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const l = locations.find((x) => x.slug === slug);
  if (!l) return {};
  return pageMeta({ title: l.metaTitle, description: l.metaDescription, path: `/locations/${l.slug}/` });
}

export default async function LocationPage({ params }: PageProps<"/locations/[slug]">) {
  const { slug } = await params;
  const l = locations.find((x) => x.slug === slug);
  if (!l) notFound();
  const faqs = generalFaqs.filter((f) => /areas|cost|start|long/i.test(f.q));
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Interior design in ${l.name}`,
            serviceType: "Interior design",
            provider: { "@id": businessId },
            areaServed: { "@type": "City", name: l.name },
          },
          faqJsonLd(faqs),
        ]}
      />
      <PageHero
        eyebrow={`Interiors in ${l.name}`}
        title={l.h1}
        crumbs={[
          { name: "Locations", path: "/locations/" },
          { name: l.name, path: `/locations/${l.slug}/` },
        ]}
      />
      <section className="bg-ivory-100 px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <AnswerBox>{l.answer}</AnswerBox>
          <div className="mt-12 space-y-5 text-lg leading-relaxed text-ink/70">
            {l.body.map((p) => <Reveal key={p}><p>{p}</p></Reveal>)}
          </div>
          {/* TODO: add local project examples and testimonials when available (blueprint §12). */}
        </div>
      </section>
      <section className="bg-ivory-100 px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Services" title={`Interior services in ${l.name}`} />
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => <ServiceCard key={s.slug} s={s} index={i} />)}
          </div>
        </div>
      </section>
      <section className="bg-ivory-100 px-5 pb-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <SectionHeading eyebrow="FAQs" title={`Interior design in ${l.name}: FAQs`} />
            <p className="mt-6 text-ink/60">More answers on our <Link href="/faqs/" className="text-gold-700 underline">FAQ page</Link>.</p>
          </div>
          <FAQList faqs={faqs} />
        </div>
      </section>
      <section id="enquire" className="bg-forest-800 bg-lattice px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading tone="dark" eyebrow="Enquire" title={`Start your ${l.name} home project`} intro="Share a few details and we will get back to you." />
          <div className="rounded-[1.75rem] bg-ivory-100 p-6 sm:p-10"><LeadForm source={`location-${l.slug}`} /></div>
        </div>
      </section>
    </>
  );
}
