"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { services } from "@/lib/content";
import { site, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/cn";

type Errors = Partial<Record<"name" | "phone" | "consent", string>>;

const propertyTypes = ["Apartment / Flat", "Bungalow / Villa", "Row house", "Other"];
const configurations = ["1 BHK", "2 BHK", "3 BHK", "4 BHK+", "Single room"];
const timelines = ["Within 1 month", "1–3 months", "3–6 months", "Just exploring"];
// TODO: replace with SDY's confirmed budget bands.
const budgets = ["Prefer to discuss", "Up to ₹5 lakh", "₹5–10 lakh", "₹10–20 lakh", "₹20 lakh+"];

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Lead form from blueprint §13. Short first step, clear consent, validation
 * and a success state. On submit it opens WhatsApp with the enquiry prefilled.
 * To also capture leads in an inbox/CRM, POST `data` to your endpoint in onSubmit.
 */
export function LeadForm({ compact = false, source = "website" }: { compact?: boolean; source?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [waUrl, setWaUrl] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;
    const errs: Errors = {};
    if (!data.name?.trim()) errs.name = "Please enter your name.";
    if (!/^[+\d][\d\s-]{8,}$/.test(data.phone?.trim() ?? "")) errs.phone = "Please enter a valid phone number.";
    if (!data.consent) errs.consent = "Please agree so we can contact you.";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    const lines = [
      "Hello SDY Interior, I would like to discuss my home interior project.",
      "",
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      data.email && `Email: ${data.email}`,
      data.location && `Location / pincode: ${data.location}`,
      data.property && `Property: ${data.property}${data.config ? `, ${data.config}` : ""}`,
      data.service && `Service: ${data.service}`,
      data.timeline && `Timeline: ${data.timeline}`,
      data.budget && `Budget: ${data.budget}`,
      data.message && `Notes: ${data.message}`,
    ].filter(Boolean);
    const url = whatsappLink(lines.join("\n"));
    window.dataLayer?.push({ event: "form_submit", form_source: source, page: location.pathname });
    setWaUrl(url);
    setSent(true);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const field = "w-full rounded-xl border border-forest-800/15 bg-white/70 px-4 py-3.5 text-sm text-ink outline-none transition placeholder:text-ink/35 focus:border-gold-500 focus:bg-white focus:ring-4 focus:ring-gold-500/15";
  const label = "mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-forest-800/70";

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div key="ok" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-gold-500/40 bg-ivory-50 p-10 text-center" role="status">
            <span aria-hidden className="mx-auto block size-3 rotate-45 bg-gold-500" />
            <h3 className="mt-6 font-display text-3xl text-forest-800">Thank you.</h3>
            <p className="mx-auto mt-3 max-w-sm text-ink/70">
              Your enquiry is ready in WhatsApp. Press send there and SDY Interior will get back to you. If WhatsApp did not open,{" "}
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-gold-700 underline">tap here</a> or call{" "}
              <a href={`tel:${site.phones[0].tel}`} className="font-semibold text-gold-700 underline">{site.phones[0].label}</a>.
            </p>
            <button type="button" className="mt-6 text-sm text-forest-800/60 underline" onClick={() => setSent(false)}>Send another enquiry</button>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={onSubmit} noValidate initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -10 }} className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor={`${source}-name`} className={label}>Name *</label>
              <input id={`${source}-name`} name="name" autoComplete="name" className={cn(field, errors.name && "border-red-400")} placeholder="Your full name" aria-invalid={!!errors.name} aria-describedby={errors.name ? `${source}-name-err` : undefined} />
              {errors.name && <p id={`${source}-name-err`} className="mt-1.5 text-xs text-red-600">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor={`${source}-phone`} className={label}>Phone *</label>
              <input id={`${source}-phone`} name="phone" type="tel" autoComplete="tel" inputMode="tel" className={cn(field, errors.phone && "border-red-400")} placeholder="+91" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? `${source}-phone-err` : undefined} />
              {errors.phone && <p id={`${source}-phone-err`} className="mt-1.5 text-xs text-red-600">{errors.phone}</p>}
            </div>
            {!compact && (
              <div>
                <label htmlFor={`${source}-email`} className={label}>Email <span className="normal-case tracking-normal text-ink/40">(optional)</span></label>
                <input id={`${source}-email`} name="email" type="email" autoComplete="email" className={field} placeholder="you@example.com" />
              </div>
            )}
            <div>
              <label htmlFor={`${source}-location`} className={label}>Location / pincode</label>
              <input id={`${source}-location`} name="location" className={field} placeholder="e.g. Andheri West, 400053" />
            </div>
            <div>
              <label htmlFor={`${source}-property`} className={label}>Property type</label>
              <select id={`${source}-property`} name="property" className={field} defaultValue="">
                <option value="">Select</option>
                {propertyTypes.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor={`${source}-config`} className={label}>Configuration</label>
              <select id={`${source}-config`} name="config" className={field} defaultValue="">
                <option value="">Select</option>
                {configurations.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div className={compact ? "sm:col-span-2" : undefined}>
              <label htmlFor={`${source}-service`} className={label}>Service required</label>
              <select id={`${source}-service`} name="service" className={field} defaultValue="">
                <option value="">Select</option>
                {services.map((s) => <option key={s.slug}>{s.name}</option>)}
              </select>
            </div>
            {!compact && (
              <>
                <div>
                  <label htmlFor={`${source}-timeline`} className={label}>Expected timeline</label>
                  <select id={`${source}-timeline`} name="timeline" className={field} defaultValue="">
                    <option value="">Select</option>
                    {timelines.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor={`${source}-budget`} className={label}>Budget band</label>
                  <select id={`${source}-budget`} name="budget" className={field} defaultValue="">
                    <option value="">Select</option>
                    {budgets.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor={`${source}-message`} className={label}>Tell us about your home</label>
                  <textarea id={`${source}-message`} name="message" rows={4} className={field} placeholder="Rooms, style you like, possession date…" />
                </div>
              </>
            )}
            <div className="sm:col-span-2">
              <label className="flex items-start gap-3 text-sm text-ink/70">
                <input type="checkbox" name="consent" className="mt-1 size-4 accent-forest-800" aria-invalid={!!errors.consent} />
                <span>
                  I agree that SDY Interior may contact me about my enquiry by phone or WhatsApp. See our{" "}
                  <a href="/privacy-policy/" className="text-gold-700 underline">Privacy Policy</a>.
                </span>
              </label>
              {errors.consent && <p className="mt-1.5 text-xs text-red-600">{errors.consent}</p>}
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest-800 px-8 py-4 text-sm font-semibold tracking-wide text-ivory-100 transition hover:bg-forest-700 sm:w-auto">
                Request a Consultation
                <span aria-hidden className="size-1.5 rotate-45 bg-gold-500 transition-transform group-hover:rotate-[225deg]" />
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
