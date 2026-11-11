"use client";

import { motion } from "framer-motion";
import { site, whatsappLink } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

export function FloatingActions() {
  return (
    <motion.div
      className="fixed bottom-5 right-5 z-40 flex flex-col gap-3"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3, duration: 0.8 }}
    >
      <a
        href={`tel:${site.phones[0].tel}`}
        aria-label={`Call SDY Interior on ${site.phones[0].label}`}
        className="flex size-12 items-center justify-center rounded-full border border-gold-500/40 bg-forest-800 text-gold-500 shadow-xl transition hover:scale-105 sm:hidden"
        data-event="click_to_call"
      >
        <PhoneIcon className="size-5" />
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp SDY Interior"
        className="group relative flex size-14 items-center justify-center rounded-full bg-gold-500 text-forest-900 shadow-[0_10px_30px_-5px_rgba(217,174,98,.6)] transition hover:scale-105"
        data-event="whatsapp_click"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-gold-500/40 [animation-duration:2.5s]" aria-hidden />
        <WhatsAppIcon className="relative size-7" />
      </a>
    </motion.div>
  );
}
