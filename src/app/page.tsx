import Link from "next/link";
import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import { ProjectsRail } from "@/components/home/ProjectsRail";
import { Marquee } from "@/components/home/Marquee";
import { ProcessLine } from "@/components/home/ProcessLine";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { FAQList } from "@/components/FAQList";
import { LeadForm } from "@/components/LeadForm";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { Corners, GoldRule } from "@/components/Logo";
import { PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import { designStyles, generalFaqs, processSteps, projects, services } from "@/lib/content";
import { site, whatsappLink } from "@/lib/site";
import { faqJsonLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "SDY Interior | Home Interior Designer in Mumbai",
  description:
    "SDY Interior designs thoughtful full-home, modular kitchen, bedroom, living room and storage interiors in Mumbai. Led by ID. Dharamraj Yadav. Request a consultation.",
  path: "/",
  absoluteTitle: true,
});

const trust = [
  { k: "Led by", v: "ID. Dharamraj Yadav", note: "Interior Designer" },
  { k: "Based in", v: "Mumbai", note: "Maharashtra" },
  { k: "Scope", v: "Design to handover", note: "One point of contact" },
  { k: "Approach", v: "Written scope", note: "Clear inclusions & exclusions" },
];

const why = [
  { t: "Designed around your routine", d: "Every project starts with a written brief about the people who live in the home: what you store, how you cook, how you host." },
  { t: "One coherent home", d: "Rooms share one material and lighting language, so the home feels calm and complete rather than assembled." },
  { t: "Clarity before commitment", d: "A scope that names what is included and excluded, and materials named by grade, so you compare like with like." },
  { t: "Execution, sequenced", d: "Civil, electrical, carpentry and finishing are scheduled in the right order to avoid rework and wasted days." },
];

export default function Home() {
  const homeFaqs = generalFaqs.slice(0, 6);
  return (
    <>
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <HomeHero />

      {/* Trust strip: documented facts only (blueprint §5.2) */}
      <section id="intro" className="bg-ivory-100">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-forest-800/10 lg:grid-cols-4">
          {trust.map((t, i) => (
            <Reveal key={t.k} delay={i * 0.08} className="bg-ivory-100 px-6 py-10 sm:px-10">
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold-700">{t.k}</p>
              <p className="mt-3 font-display text-2xl text-forest-800 sm:text-3xl">{t.v}</p>
              <p className="mt-1 text-sm text-ink/55">{t.note}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Intro / philosophy */}
      <section className="bg-ivory-100 px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <SectionHeading eyebrow="Design Beyond Walls" title="A home is more than the four walls around it." />
          <Reveal delay={0.2}>
            <p className="text-lg leading-relaxed text-ink/70">
              It is the light in the morning, the way the kitchen flows on a busy weekday, the drawer that holds exactly what it should. At SDY Interior
              we design for those moments. Beyond the walls, beyond the render, toward a home that keeps working beautifully for years.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/about/" variant="ghost">About SDY</Button>
              <Button href="/our-process/" variant="ghost">Our Process</Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="bg-ivory-100 px-5 pb-28 sm:px-8" aria-labelledby="services-h">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading eyebrow="Services" title="Interior design services" intro="Each service has its own detailed page with inclusions, process, budget factors and FAQs." />
            <Reveal><Button href="/services/" variant="ghost">All services</Button></Reveal>
          </div>
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} s={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Marquee items={["Full Home Interiors", "Modular Kitchens", "Bedrooms", "Living & Dining", "Wardrobes", "Design Beyond Walls"]} />

      {/* Featured projects */}
      <section className="bg-forest-800 bg-lattice py-24 text-ivory-100 sm:py-32" aria-labelledby="projects-h">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading tone="dark" eyebrow="Featured work" title="Design concepts that show how we think" intro="Concept studies of typical Mumbai homes, showing our planning and material approach. Completed SDY case studies are added as they are published." />
            <Reveal><Button href="/projects/" variant="outline">View all projects</Button></Reveal>
          </div>
        </div>
        <div className="mt-16">
          <ProjectsRail projects={projects} />
        </div>
      </section>

      {/* Why SDY */}
      <section className="relative overflow-hidden bg-ivory-100 px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Why SDY" title="Specific promises, not superlatives." align="center" />
          <Stagger className="mt-16 grid gap-px overflow-hidden rounded-[1.5rem] border border-forest-800/10 bg-forest-800/10 sm:grid-cols-2">
            {why.map((w, i) => (
              <StaggerItem key={w.t} className="group bg-ivory-50 p-8 transition-colors duration-500 hover:bg-forest-800 sm:p-12">
                <span className="font-display text-5xl text-gold-500/60">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-3xl text-forest-800 transition-colors group-hover:text-ivory-100">{w.t}</h3>
                <p className="mt-3 max-w-md leading-relaxed text-ink/65 transition-colors group-hover:text-ivory-100/70">{w.d}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-forest-900 bg-lattice px-5 py-24 text-ivory-100 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeading tone="dark" eyebrow="How it works" title="From first conversation to handover" align="center" intro="Seven clear stages, so you always know what happens next and when we need a decision from you." />
          <div className="mt-20">
            <ProcessLine steps={processSteps} tone="dark" />
          </div>
          <Reveal className="mt-16 text-center">
            <Button href="/our-process/" variant="outline">See the full process</Button>
          </Reveal>
        </div>
      </section>

      {/* Design styles */}
      <section className="bg-ivory-100 px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading eyebrow="Inspiration" title="Find the style that feels like home" />
            <Reveal><Button href="/interior-design-styles/" variant="ghost">Explore styles</Button></Reveal>
          </div>
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {designStyles.map((s) => (
              <StaggerItem key={s.name}>
                <Link href="/interior-design-styles/" className="group relative block overflow-hidden rounded-[1.5rem] p-8" style={{ background: `linear-gradient(135deg, ${s.tone[0]}, ${s.tone[1]})` }}>
                  <div className="absolute inset-0 bg-forest-900/0 transition-colors duration-500 group-hover:bg-forest-900/20" />
                  <div className="relative flex min-h-48 flex-col justify-end">
                    <h3 className="font-display text-3xl text-white drop-shadow-[0_2px_10px_rgba(0,0,0,.35)]">{s.name}</h3>
                    <p className="mt-2 max-h-0 overflow-hidden text-sm text-white/90 opacity-0 transition-all duration-700 group-hover:max-h-24 group-hover:opacity-100">{s.text}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Cost & timeline + service area */}
      <section className="bg-ivory-200/60 px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <Reveal className="relative overflow-hidden rounded-[1.5rem] bg-forest-800 p-10 text-ivory-100 sm:p-14">
            <Corners className="inset-5" />
            <p className="text-xs uppercase tracking-[0.35em] text-gold-500">Cost & timeline</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">What decides the cost of your interiors?</h2>
            <p className="mt-5 leading-relaxed text-ivory-100/70">
              Carpet area, rooms in scope, civil work, material grade, hardware and how much furniture is included. We prepare an itemised estimate after the
              consultation and site visit, never a one-size-fits-all package price.
            </p>
            <div className="mt-8"><Button href="/interior-design-cost/" variant="outline">Read the cost guide</Button></div>
          </Reveal>
          <Reveal delay={0.12} className="relative overflow-hidden rounded-[1.5rem] border border-forest-800/10 bg-ivory-50 p-10 sm:p-14">
            <p className="text-xs uppercase tracking-[0.35em] text-gold-700">Service area</p>
            <h2 className="mt-4 font-display text-4xl text-forest-800 sm:text-5xl">Interior designer in Mumbai</h2>
            <p className="mt-5 leading-relaxed text-ink/70">
              SDY Interior is based in Mumbai, Maharashtra and designs homes across the city. Share your location when you enquire and we will confirm
              coverage for your project.
            </p>
            <div className="mt-8"><Button href="/locations/mumbai/" variant="ghost">Interiors in Mumbai</Button></div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ivory-100 px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <SectionHeading eyebrow="FAQs" title="Questions homeowners ask us" />
            <Reveal delay={0.2} className="mt-8"><Button href="/faqs/" variant="ghost">All FAQs</Button></Reveal>
          </div>
          <FAQList faqs={homeFaqs} />
        </div>
      </section>

      {/* Final conversion */}
      <section className="relative overflow-hidden bg-forest-800 bg-lattice px-5 py-24 sm:px-8 sm:py-32" id="enquire">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.3fr]">
          <div className="text-ivory-100">
            <SectionHeading tone="dark" eyebrow="Start your project" title="Let's design beyond walls." intro="Tell us a little about your home. SDY Interior will get back to you to arrange a consultation." />
            <GoldRule className="mt-10" />
            <div className="mt-10 space-y-4">
              {site.phones.map((p) => (
                <a key={p.tel} href={`tel:${p.tel}`} className="flex items-center gap-4 text-xl transition hover:text-gold-400" data-event="click_to_call">
                  <span className="flex size-12 items-center justify-center rounded-full bg-gold-500 text-forest-900"><PhoneIcon className="size-5" /></span>
                  {p.label}
                </a>
              ))}
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xl transition hover:text-gold-400" data-event="whatsapp_click">
                <span className="flex size-12 items-center justify-center rounded-full bg-gold-500 text-forest-900"><WhatsAppIcon className="size-5" /></span>
                WhatsApp SDY
              </a>
            </div>
          </div>
          <Reveal delay={0.15} className="rounded-[1.75rem] bg-ivory-100 p-6 sm:p-10">
            <LeadForm source="home" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
