import type { Metadata } from "next";
import { site } from "./site";
import type { FAQ } from "./content";

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();

export function pageMeta({
  title,
  description,
  path,
  type = "website",
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  absoluteTitle?: boolean;
}): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      locale: "en_IN",
      type,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export const businessId = `${site.url}/#business`;
export const designerId = `${site.url}/#designer`;

export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": businessId,
    name: site.name,
    slogan: site.tagline,
    description: site.description,
    url: site.url,
    logo: absoluteUrl("/logo.svg"),
    image: absoluteUrl("/opengraph-image"),
    telephone: site.phones.map((p) => p.tel),
    areaServed: { "@type": "City", name: site.primaryCity, containedInPlace: { "@type": "State", name: site.region } },
    founder: { "@id": designerId },
    employee: { "@id": designerId },
    knowsAbout: [
      "Interior design",
      "Full home interiors",
      "Modular kitchen design",
      "Bedroom interior design",
      "Living room interior design",
      "Wardrobe and storage design",
    ],
    ...(site.address
      ? { address: { "@type": "PostalAddress", streetAddress: site.address.street, addressLocality: site.address.locality, addressRegion: site.address.region, postalCode: site.address.postalCode, addressCountry: site.country } }
      : {}),
    ...(site.sameAs.length ? { sameAs: site.sameAs } : {}),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    publisher: { "@id": businessId },
    inLanguage: "en-IN",
  };
}

export function designerJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": designerId,
    name: site.designer.name,
    honorificPrefix: "ID.",
    jobTitle: site.designer.role,
    worksFor: { "@id": businessId },
    url: absoluteUrl("/about/"),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

export function faqJsonLd(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceJsonLd(s: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    serviceType: s.name,
    description: s.description,
    url: absoluteUrl(s.path),
    provider: { "@id": businessId },
    areaServed: { "@type": "City", name: site.primaryCity },
  };
}

export function articleJsonLd(p: { title: string; description: string; path: string; date: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.description,
    datePublished: p.date,
    dateModified: p.date,
    mainEntityOfPage: absoluteUrl(p.path),
    image: absoluteUrl("/opengraph-image"),
    author: { "@id": designerId, "@type": "Person", name: site.designer.name },
    publisher: { "@id": businessId, "@type": "Organization", name: site.name, logo: absoluteUrl("/logo.svg") },
  };
}
