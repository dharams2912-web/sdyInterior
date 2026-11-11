import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({ title: "Privacy Policy | SDY Interior", description: "How SDY Interior collects and uses the information you share through this website.", path: "/privacy-policy/" });

// TODO: have this reviewed for compliance with India's DPDP Act before launch.
export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" crumbs={[{ name: "Privacy Policy", path: "/privacy-policy/" }]} />
      <section className="bg-ivory-100 px-5 py-20 sm:px-8">
        <div className="prose-sdy mx-auto max-w-3xl text-lg">
          <p>This policy explains how {site.name} (“we”) handles information you share through {site.domain}.</p>
          <h2>What we collect</h2>
          <p>When you send an enquiry we receive the details you choose to share, such as your name, phone number, email, location, property details and project notes. Enquiries are sent through WhatsApp from your own device.</p>
          <h2>How we use it</h2>
          <ul>
            <li>To respond to your enquiry and arrange a consultation.</li>
            <li>To prepare a design proposal or quotation you have asked for.</li>
            <li>To understand which pages help visitors, using privacy-respecting analytics where enabled.</li>
          </ul>
          <h2>What we do not do</h2>
          <p>We do not sell your information. We do not share it with third parties except where needed to deliver your project or where required by law.</p>
          <h2>Your choices</h2>
          <p>You can ask us to update or delete your information at any time by calling {site.phones[0].label}.</p>
        </div>
      </section>
    </>
  );
}
