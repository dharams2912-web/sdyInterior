import Link from "next/link";
import { footerNav, site, whatsappLink } from "@/lib/site";
import { Logo, GoldRule } from "./Logo";
import { Year } from "./Year";
import { GlobeIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-900 bg-lattice text-ivory-100">
      <div className="mx-auto max-w-7xl px-5 pt-20 pb-10 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Link href="/" className="inline-block text-5xl" aria-label="SDY Interior home">
              <Logo />
            </Link>
            <p className="mt-4 font-display text-2xl italic text-gold-400">{site.tagline}</p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory-100/65">{site.description}</p>
            <div className="mt-8 space-y-3 text-sm">
              <p className="text-ivory-100/50">
                {site.designer.displayName}, {site.designer.role}
              </p>
              {site.phones.map((p) => (
                <a key={p.tel} href={`tel:${p.tel}`} className="flex items-center gap-3 transition hover:text-gold-400" data-event="click_to_call">
                  <span className="flex size-9 items-center justify-center rounded-full border border-gold-500/30"><PhoneIcon className="size-4 text-gold-500" /></span>
                  {p.label}
                </a>
              ))}
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition hover:text-gold-400" data-event="whatsapp_click">
                <span className="flex size-9 items-center justify-center rounded-full border border-gold-500/30"><WhatsAppIcon className="size-4 text-gold-500" /></span>
                WhatsApp enquiry
              </a>
              <a href={site.url} className="flex items-center gap-3 transition hover:text-gold-400">
                <span className="flex size-9 items-center justify-center rounded-full border border-gold-500/30"><GlobeIcon className="size-4 text-gold-500" /></span>
                {site.domain}
              </a>
            </div>
          </div>
          <div className="grid gap-10 sm:grid-cols-3">
            {footerNav.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-500">{col.title}</h2>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-sm text-ivory-100/70 transition hover:text-gold-400">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center gap-6 border-t border-gold-500/15 pt-10 text-center">
          <GoldRule />
          <p className="font-display whitespace-nowrap text-[clamp(2.2rem,9vw,8.5rem)] leading-none tracking-[0.12em] text-gold-500/10 select-none" aria-hidden>
            SDY INTERIOR
          </p>
          <div className="flex w-full flex-col items-center justify-between gap-3 text-xs text-ivory-100/45 sm:flex-row">
            <p>© <Year /> {site.name}. Interior design in {site.primaryCity}.</p>
            <div className="flex gap-5">
              <Link href="/privacy-policy/" className="hover:text-gold-400">Privacy Policy</Link>
              <Link href="/terms/" className="hover:text-gold-400">Terms</Link>
              <Link href="/faqs/" className="hover:text-gold-400">FAQs</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
