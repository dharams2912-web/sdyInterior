"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { mainNav, site, whatsappLink } from "@/lib/site";
import { Logo } from "./Logo";
import { cn } from "@/lib/cn";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

const ease = [0.22, 1, 0.36, 1] as const;

export function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(v > 40);
    setHidden(v > 400 && v > prev && !open);
  });

  // Close menus when the route changes (state adjusted during render).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
    setDropdown(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:rounded focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-forest-900">
        Skip to content
      </a>
      <motion.header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500",
          scrolled || open ? "border-b border-gold-500/15 bg-forest-900/85 backdrop-blur-xl" : "border-b border-transparent",
        )}
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.5, ease }}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
          <Link href="/" className="text-3xl" aria-label="SDY Interior home">
            <Logo />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) =>
              item.children ? (
                <div key={item.href} className="relative flex" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                  <Link
                    href={item.href}
                    className={cn("relative px-3 py-2 text-[13px] font-medium tracking-wide text-ivory-100/85 transition-colors hover:text-gold-400", isActive(item.href) && "text-gold-400")}
                    aria-haspopup="true"
                    aria-expanded={dropdown}
                    onFocus={() => setDropdown(true)}
                  >
                    {item.label}
                  </Link>
                  <AnimatePresence>
                    {dropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.3, ease }}
                        className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3"
                      >
                        <ul className="overflow-hidden rounded-xl border border-gold-500/20 bg-forest-900/95 p-2 shadow-2xl backdrop-blur-xl">
                          {item.children.map((c) => (
                            <li key={c.href}>
                              <Link href={c.href} className="flex items-center justify-between rounded-lg px-4 py-2.5 text-sm text-ivory-100/85 transition hover:bg-forest-700/60 hover:text-gold-400" onBlur={(e) => { if (!e.currentTarget.closest("ul")?.contains(e.relatedTarget as Node)) setDropdown(false); }}>
                                {c.label}
                                <span aria-hidden className="size-1.5 rotate-45 bg-gold-500/60" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn("group relative px-3 py-2 text-[13px] font-medium tracking-wide text-ivory-100/85 transition-colors hover:text-gold-400", isActive(item.href) && "text-gold-400")}
                >
                  {item.label}
                  <span className={cn("absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-gold-500 transition-transform duration-500 group-hover:scale-x-100", isActive(item.href) && "scale-x-100")} />
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <a href={`tel:${site.phones[0].tel}`} className="hidden items-center gap-2 text-[13px] text-ivory-100/80 transition hover:text-gold-400 xl:flex" data-event="click_to_call">
              <PhoneIcon className="size-4 text-gold-500" />
              {site.phones[0].label}
            </a>
            <Link href="/contact/" className="hidden rounded-full bg-gold-500 px-5 py-2.5 text-[13px] font-semibold text-forest-900 transition hover:bg-gold-400 sm:inline-flex">
              Request a Consultation
            </Link>
            <button
              type="button"
              className="relative flex size-11 items-center justify-center rounded-full border border-gold-500/40 lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((o) => !o)}
            >
              <span className={cn("absolute h-px w-5 bg-gold-500 transition-transform duration-500", open ? "rotate-45" : "-translate-y-1.5")} />
              <span className={cn("absolute h-px w-5 bg-gold-500 transition-opacity duration-300", open && "opacity-0")} />
              <span className={cn("absolute h-px w-5 bg-gold-500 transition-transform duration-500", open ? "-rotate-45" : "translate-y-1.5")} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 overflow-y-auto bg-forest-900 bg-lattice pt-24 lg:hidden"
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.7, ease }}
            data-lenis-prevent
          >
            <nav aria-label="Mobile" className="px-6 pb-10">
              <ul className="space-y-1">
                {[{ label: "Home", href: "/" }, ...mainNav].map((item, i) => (
                  <motion.li key={item.href} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.05, duration: 0.6, ease }}>
                    <Link href={item.href} className={cn("block border-b border-gold-500/10 py-3 font-display text-3xl text-ivory-100", isActive(item.href) && "text-gold-400")}>
                      {item.label}
                    </Link>
                    {item.children && (
                      <ul className="grid grid-cols-2 gap-x-4 gap-y-1 py-3">
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link href={c.href} className="block py-1 text-sm text-ivory-100/70">
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 space-y-3">
                {site.phones.map((p) => (
                  <a key={p.tel} href={`tel:${p.tel}`} className="flex items-center gap-3 text-ivory-100">
                    <PhoneIcon className="size-5 text-gold-500" /> {p.label}
                  </a>
                ))}
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-ivory-100">
                  <WhatsAppIcon className="size-5 text-gold-500" /> WhatsApp SDY
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
