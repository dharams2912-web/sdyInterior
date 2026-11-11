import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { LeadForm } from "@/components/LeadForm";
import { Reveal } from "@/components/Reveal";
import { GoldRule } from "@/components/Logo";
import { GlobeIcon, PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import { pageMeta } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Contact SDY Interior | Interior Designer in Mumbai",
  description: "Contact SDY Interior in Mumbai. Call +91 91679 55625 or +91 83690 03578, WhatsApp us, or send an enquiry to request a consultation.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your home"
        intro="Call, WhatsApp or send an enquiry. SDY Interior will get back to you to arrange a consultation."
        crumbs={[{ name: "Contact", path: "/contact/" }]}
      />
      <section className="bg-ivory-100 px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.5fr]">
          <Reveal className="space-y-6">
            <div className="rounded-[1.75rem] bg-forest-800 bg-lattice p-9 text-ivory-100">
              <p className="font-display text-3xl">{site.name}</p>
              <p className="mt-1 font-display italic text-gold-400">{site.tagline}</p>
              <GoldRule className="mt-6" />
              <p className="mt-6 text-sm text-ivory-100/60">{site.designer.displayName}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-gold-500">{site.designer.role}</p>
              <ul className="mt-8 space-y-4">
                {site.phones.map((p) => (
                  <li key={p.tel}>
                    <a href={`tel:${p.tel}`} className="flex items-center gap-4 text-lg hover:text-gold-400" data-event="click_to_call">
                      <span className="flex size-11 items-center justify-center rounded-full bg-gold-500 text-forest-900"><PhoneIcon className="size-5" /></span>
                      {p.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg hover:text-gold-400" data-event="whatsapp_click">
                    <span className="flex size-11 items-center justify-center rounded-full bg-gold-500 text-forest-900"><WhatsAppIcon className="size-5" /></span>
                    WhatsApp SDY
                  </a>
                </li>
                <li>
                  <a href={site.url} className="flex items-center gap-4 text-lg hover:text-gold-400">
                    <span className="flex size-11 items-center justify-center rounded-full bg-gold-500 text-forest-900"><GlobeIcon className="size-5" /></span>
                    {site.domain}
                  </a>
                </li>
              </ul>
            </div>
            <div className="rounded-[1.75rem] border border-forest-800/10 bg-ivory-50 p-9">
              <h2 className="font-display text-2xl text-forest-800">Service area</h2>
              <p className="mt-2 text-ink/65">{site.primaryCity}, {site.region}. Share your location in the form and we will confirm coverage.</p>
              {/* TODO: add studio address, map embed, email and opening hours once confirmed. */}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="rounded-[1.75rem] border border-forest-800/10 bg-ivory-50 p-6 sm:p-10">
            <h2 className="font-display text-4xl text-forest-800">Request a consultation</h2>
            <p className="mt-2 mb-8 text-ink/60">Only name and phone are required.</p>
            <LeadForm source="contact" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
