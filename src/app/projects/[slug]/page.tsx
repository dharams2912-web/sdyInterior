import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/Section";
import { RoomIllustration } from "@/components/RoomIllustration";
import { CTASection } from "@/components/CTASection";
import { getProject, getService, projects } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return pageMeta({
    title: `${p.title}: ${p.configuration} Interior Design Concept | SDY Interior`,
    description: `${p.summary} A ${p.style.toLowerCase()} ${p.configuration} interior design concept by SDY Interior, ${p.location}.`,
    path: `/projects/${p.slug}/`,
  });
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];

  const facts = [
    { k: "Location", v: p.location },
    { k: "Property", v: p.propertyType },
    { k: "Configuration", v: p.configuration },
    { k: "Style", v: p.style },
  ];

  return (
    <>
      <PageHero
        eyebrow="Design concept"
        title={p.title}
        intro={p.summary}
        crumbs={[
          { name: "Projects", path: "/projects/" },
          { name: p.title, path: `/projects/${p.slug}/` },
        ]}
      />
      <section className="bg-ivory-100 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <RoomIllustration kind={p.illustration} className="aspect-[16/8] rounded-[2rem]" />
          </Reveal>
          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-[1.5rem] border border-forest-800/10 bg-forest-800/10 md:grid-cols-4">
            {facts.map((f) => (
              <div key={f.k} className="bg-ivory-50 p-6">
                <dt className="text-[11px] uppercase tracking-[0.3em] text-gold-700">{f.k}</dt>
                <dd className="mt-2 font-display text-2xl text-forest-800">{f.v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-ink/50">
            This is an illustrative concept that shows SDY&apos;s design approach. It is not presented as a completed client project.
          </p>
        </div>
      </section>

      <section className="bg-ivory-100 px-5 pb-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionHeading eyebrow="The brief" title="What the home needed" />
            <Reveal delay={0.1}><p className="mt-6 text-lg leading-relaxed text-ink/70">{p.brief}</p></Reveal>
            <Reveal delay={0.15} className="mt-10">
              <h3 className="text-xs uppercase tracking-[0.3em] text-gold-700">Scope</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.scope.map((s) => <span key={s} className="rounded-full bg-forest-800 px-4 py-1.5 text-sm text-ivory-100">{s}</span>)}
              </div>
            </Reveal>
            <Reveal delay={0.2} className="mt-10">
              <h3 className="text-xs uppercase tracking-[0.3em] text-gold-700">Palette</h3>
              <div className="mt-4 flex gap-3">
                {p.palette.map((c) => <span key={c} className="size-12 rounded-full border border-forest-800/10 shadow-inner" style={{ background: c }} title={c} />)}
              </div>
            </Reveal>
          </div>
          <div>
            <SectionHeading eyebrow="The design solution" title="Decisions that made it work" />
            <ol className="mt-8 space-y-6">
              {p.solution.map((s, i) => (
                <Reveal as="li" key={s} delay={i * 0.06} className="flex gap-5 border-b border-forest-800/10 pb-6">
                  <span className="font-display text-3xl text-gold-600">{String(i + 1).padStart(2, "0")}</span>
                  <p className="pt-1 text-lg leading-relaxed text-ink/75">{s}</p>
                </Reveal>
              ))}
            </ol>
            <Reveal className="mt-10">
              <h3 className="text-xs uppercase tracking-[0.3em] text-gold-700">Materials</h3>
              <ul className="mt-4 grid grid-cols-2 gap-3">
                {p.materials.map((m) => <li key={m} className="rounded-xl border border-forest-800/10 bg-ivory-50 px-4 py-3 text-ink/75">{m}</li>)}
              </ul>
            </Reveal>
            <Reveal className="mt-10">
              <h3 className="text-xs uppercase tracking-[0.3em] text-gold-700">Related services</h3>
              <ul className="mt-4 flex flex-wrap gap-4">
                {p.services.map((slug) => {
                  const s = getService(slug)!;
                  return <li key={slug}><Link href={`/services/${slug}/`} className="font-display text-2xl text-forest-800 underline decoration-gold-500/50 underline-offset-4 hover:text-gold-700">{s.name}</Link></li>;
                })}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-forest-900 px-5 py-16 sm:px-8">
        <Link href={`/projects/${next.slug}/`} className="group mx-auto flex max-w-7xl items-center justify-between gap-6 text-ivory-100">
          <span>
            <span className="text-xs uppercase tracking-[0.35em] text-gold-500">Next concept</span>
            <span className="mt-2 block font-display text-4xl transition-colors group-hover:text-gold-400 sm:text-6xl">{next.title}</span>
          </span>
          <span className="flex size-16 shrink-0 items-center justify-center rounded-full border border-gold-500/50 text-gold-500 transition-all duration-500 group-hover:bg-gold-500 group-hover:text-forest-900">→</span>
        </Link>
      </section>
      <CTASection />
    </>
  );
}
