import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({ title: "Website Terms | SDY Interior", description: "Terms of use for the SDY Interior website.", path: "/terms/" });

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Website Terms" crumbs={[{ name: "Terms", path: "/terms/" }]} />
      <section className="bg-ivory-100 px-5 py-20 sm:px-8">
        <div className="prose-sdy mx-auto max-w-3xl text-lg">
          <p>By using {site.domain} you agree to these terms.</p>
          <h2>Information on this site</h2>
          <p>Content is provided for general guidance. Design concepts are illustrative. Project scope, pricing and timelines are confirmed only in a written proposal from {site.name}.</p>
          <h2>Intellectual property</h2>
          <p>The SDY Interior name, logo, designs, drawings and text on this website belong to {site.name} and may not be reused without permission.</p>
          <h2>Contact</h2>
          <p>Questions about these terms? Call {site.phones[0].label} or {site.phones[1].label}.</p>
        </div>
      </section>
    </>
  );
}
