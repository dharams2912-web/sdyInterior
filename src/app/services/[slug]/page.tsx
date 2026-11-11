import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { AnswerBox, SectionHeading } from "@/components/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { RoomIllustration } from "@/components/RoomIllustration";
import { FAQList } from "@/components/FAQList";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/Button";
import { getService, processSteps, projects, services } from "@/lib/content";
import { faqJsonLd, pageMeta, serviceJsonLd } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return pageMeta({ title: s.metaTitle, description: s.metaDescription, path: `/services/${s.slug}/` });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const path = `/services/${s.slug}/`;
  const relatedProjects = projects.filter((p) => p.services.includes(s.slug));
  const related = s.related.map(getService).filter(Boolean);

  return (
    <>
      <JsonLd data={[serviceJsonLd({ name: s.name, description: s.metaDescription, path }), faqJsonLd(s.faqs)]} />
      <PageHero
        eyebrow={s.name}
        title={s.h1}
        crumbs={[
          { name: "Services", path: "/services/" },
          { name: s.name, path },
        ]}
      >
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="#enquire">Request a Consultation</Button>
          <Button href={whatsappLink(`Hello SDY Interior, I would like to discuss ${s.name.toLowerCase()} for my home.`)} variant="outline">WhatsApp SDY</Button>
        </div>
      </PageHero>

      <section className="bg-ivory-100 px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <AnswerBox>{s.answer}</AnswerBox>
            <Reveal delay={0.1}>
              <p className="mt-10 text-lg leading-relaxed text-ink/70">{s.intro}</p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <RoomIllustration kind={s.illustration} className="aspect-[4/3] rounded-[2rem]" />
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory-100 px-5 pb-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <Reveal className="rounded-[1.5rem] bg-forest-800 p-9 text-ivory-100">
            <h2 className="font-display text-3xl">Ideal for</h2>
            <ul className="mt-6 space-y-3">
              {s.idealFor.map((x) => (
                <li key={x} className="flex gap-3 text-ivory-100/80"><span aria-hidden className="mt-2 size-1.5 shrink-0 rotate-45 bg-gold-500" />{x}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="rounded-[1.5rem] border border-forest-800/10 bg-ivory-50 p-9">
            <h2 className="font-display text-3xl text-forest-800">What&apos;s included</h2>
            <ul className="mt-6 space-y-3">
              {s.includes.map((x) => (
                <li key={x} className="flex gap-3 text-ink/75"><span aria-hidden className="mt-2 size-1.5 shrink-0 rotate-45 bg-gold-500" />{x}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.2} className="rounded-[1.5rem] border border-gold-500/40 bg-ivory-50 p-9">
            <h2 className="font-display text-3xl text-forest-800">Good to know</h2>
            <ul className="mt-6 space-y-3">
              {s.clarify.map((x) => (
                <li key={x} className="flex gap-3 text-ink/75"><span aria-hidden className="mt-2 size-1.5 shrink-0 rotate-45 bg-forest-800" />{x}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-forest-900 bg-lattice px-5 py-24 text-ivory-100 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading tone="dark" eyebrow="Our approach" title={`How we approach ${s.name.toLowerCase()}`} />
          <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
            {s.approach.map((a, i) => (
              <StaggerItem key={a.title} className="rounded-[1.5rem] border border-gold-500/20 p-9">
                <p className="font-display text-5xl text-gold-500/50">0{i + 1}</p>
                <h3 className="mt-4 font-display text-3xl">{a.title}</h3>
                <p className="mt-3 leading-relaxed text-ivory-100/65">{a.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-20 grid gap-10 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-4xl">Milestones</h2>
              <ol className="mt-6 space-y-4">
                {processSteps.map((p, i) => (
                  <li key={p.title} className="flex items-baseline gap-4 border-b border-gold-500/15 pb-4">
                    <span className="font-display text-xl text-gold-500">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-ivory-100/85">{p.title}</span>
                  </li>
                ))}
              </ol>
              <Link href="/our-process/" className="mt-6 inline-block text-sm text-gold-400 underline-offset-4 hover:underline">Read about each stage</Link>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl">What affects the budget</h2>
              <p className="mt-4 text-ivory-100/65">Every estimate is itemised after the site visit. These are the main variables for {s.name.toLowerCase()}:</p>
              <ul className="mt-6 space-y-3">
                {s.budgetFactors.map((b) => (
                  <li key={b} className="flex gap-3 text-ivory-100/85"><span aria-hidden className="mt-2 size-1.5 shrink-0 rotate-45 bg-gold-500" />{b}</li>
                ))}
              </ul>
              <Link href="/interior-design-cost/" className="mt-6 inline-block text-sm text-gold-400 underline-offset-4 hover:underline">Read the full cost guide</Link>
            </Reveal>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="bg-ivory-100 px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Related work" title="Design concepts" />
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {relatedProjects.map((p) => (
                <Link key={p.slug} href={`/projects/${p.slug}/`} className="group block">
                  <RoomIllustration kind={p.illustration} className="aspect-[16/10] rounded-[1.5rem]" />
                  <h3 className="mt-4 font-display text-3xl text-forest-800 group-hover:text-gold-700">{p.title}</h3>
                  <p className="text-sm text-ink/60">{p.configuration} · {p.style}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-ivory-100 px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="FAQs" title={`${s.name}: common questions`} />
          <FAQList faqs={s.faqs} />
        </div>
      </section>

      <section id="enquire" className="bg-forest-800 bg-lattice px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeading tone="dark" eyebrow="Enquire" title={`Plan your ${s.name.toLowerCase()}`} intro="Share a few details and we will get back to you to arrange a consultation." />
            <div className="mt-10">
              <p className="text-xs uppercase tracking-[0.35em] text-gold-500">Related services</p>
              <ul className="mt-4 space-y-2">
                {related.map((r) => (
                  <li key={r!.slug}>
                    <Link href={`/services/${r!.slug}/`} className="font-display text-2xl text-ivory-100 hover:text-gold-400">{r!.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rounded-[1.75rem] bg-ivory-100 p-6 sm:p-10">
            <LeadForm source={`service-${s.slug}`} />
          </div>
        </div>
      </section>
    </>
  );
}
