import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { RoomIllustration } from "@/components/RoomIllustration";
import { CTASection } from "@/components/CTASection";
import { posts } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Interior Design Ideas & Guides | SDY Interior Journal",
  description: "Practical guides from SDY Interior on planning, costing and designing your Mumbai home: hiring a designer, kitchens, materials and more.",
  path: "/blog/",
});

const fmt = (d: string) => new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export default function BlogPage() {
  const [first, ...rest] = posts;
  return (
    <>
      <PageHero eyebrow="Journal" title="Ideas and guides for your home" crumbs={[{ name: "Journal", path: "/blog/" }]} />
      <section className="bg-ivory-100 px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <Link href={`/blog/${first.slug}/`} className="group grid overflow-hidden rounded-[2rem] border border-forest-800/10 bg-ivory-50 lg:grid-cols-2">
              <RoomIllustration kind={first.illustration} className="aspect-[16/11] lg:aspect-auto lg:h-full" />
              <div className="flex flex-col justify-center p-9 sm:p-14">
                <p className="text-xs uppercase tracking-[0.3em] text-gold-700">Featured · {first.readMinutes} min read</p>
                <h2 className="mt-4 font-display text-4xl text-forest-800 transition-colors group-hover:text-gold-700 sm:text-5xl">{first.title}</h2>
                <p className="mt-4 leading-relaxed text-ink/65">{first.description}</p>
                <p className="mt-6 text-sm text-ink/45"><time dateTime={first.date}>{fmt(first.date)}</time></p>
              </div>
            </Link>
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.1}>
                <Link href={`/blog/${p.slug}/`} className="group block">
                  <RoomIllustration kind={p.illustration} className="aspect-[16/10] rounded-[1.5rem]" />
                  <p className="mt-5 text-xs uppercase tracking-[0.3em] text-gold-700">{p.readMinutes} min read · <time dateTime={p.date}>{fmt(p.date)}</time></p>
                  <h2 className="mt-2 font-display text-3xl text-forest-800 transition-colors group-hover:text-gold-700">{p.title}</h2>
                  <p className="mt-2 text-ink/65">{p.description}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
