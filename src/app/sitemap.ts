import type { MetadataRoute } from "next";
import { locations, posts, projects, services } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    ["/", 1],
    ["/about/", 0.8],
    ["/services/", 0.9],
    ["/projects/", 0.8],
    ["/our-process/", 0.7],
    ["/interior-design-cost/", 0.8],
    ["/interior-design-styles/", 0.6],
    ["/materials-finishes/", 0.6],
    ["/locations/", 0.6],
    ["/reviews/", 0.5],
    ["/blog/", 0.6],
    ["/faqs/", 0.6],
    ["/contact/", 0.8],
    ["/privacy-policy/", 0.2],
    ["/terms/", 0.2],
  ] as const;
  return [
    ...staticPaths.map(([p, priority]) => ({ url: absoluteUrl(p), priority, changeFrequency: "monthly" as const })),
    ...services.map((s) => ({ url: absoluteUrl(`/services/${s.slug}/`), priority: 0.9, changeFrequency: "monthly" as const })),
    ...projects.map((p) => ({ url: absoluteUrl(`/projects/${p.slug}/`), priority: 0.6, changeFrequency: "yearly" as const })),
    ...locations.map((l) => ({ url: absoluteUrl(`/locations/${l.slug}/`), priority: 0.9, changeFrequency: "monthly" as const })),
    ...posts.map((p) => ({ url: absoluteUrl(`/blog/${p.slug}/`), lastModified: p.date, priority: 0.6, changeFrequency: "yearly" as const })),
  ];
}
