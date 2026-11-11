import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { AnswerBox } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { getPost, posts } from "@/lib/content";
import { articleJsonLd, pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return pageMeta({ title: `${p.title} | SDY Interior`, description: p.description, path: `/blog/${p.slug}/`, type: "article" });
}

const fmt = (d: string) => new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const path = `/blog/${p.slug}/`;
  const others = posts.filter((x) => x.slug !== p.slug);
  return (
    <>
      <JsonLd data={articleJsonLd({ title: p.title, description: p.description, path, date: p.date })} />
      <PageHero
        eyebrow="Journal"
        title={p.title}
        crumbs={[
          { name: "Journal", path: "/blog/" },
          { name: p.title, path },
        ]}
      >
        <p className="mt-8 text-sm text-ivory-100/60">
          By {site.designer.displayName} · <time dateTime={p.date}>{fmt(p.date)}</time> · {p.readMinutes} min read
        </p>
      </PageHero>
      <article className="bg-ivory-100 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <AnswerBox label="Quick answer">{p.answer}</AnswerBox>
          <div className="prose-sdy mt-6 text-lg">
            {p.sections.map((s) => (
              <Reveal key={s.heading}>
                <h2>{s.heading}</h2>
                {s.body.map((b) => <p key={b}>{b}</p>)}
                {s.list && <ul>{s.list.map((l) => <li key={l}>{l}</li>)}</ul>}
              </Reveal>
            ))}
          </div>
          <div className="mt-16 rounded-[1.5rem] bg-forest-800 p-8 text-ivory-100">
            <p className="text-xs uppercase tracking-[0.3em] text-gold-500">Keep reading</p>
            <ul className="mt-4 space-y-3">
              {others.map((o) => (
                <li key={o.slug}><Link href={`/blog/${o.slug}/`} className="font-display text-2xl hover:text-gold-400">{o.title}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </article>
      <CTASection />
    </>
  );
}
