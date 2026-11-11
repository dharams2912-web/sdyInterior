import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { AnswerBox } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { pageMeta } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Client Reviews | SDY Interior",
  description: "Verified client reviews of SDY Interior, a Mumbai home interior design studio. Worked with us? Share your experience.",
  path: "/reviews/",
});

/**
 * Only genuine, permissioned reviews belong here (blueprint §10, §15).
 * Add them to an array and render them as cards when SDY supplies them.
 */
export default function ReviewsPage() {
  return (
    <>
      <PageHero eyebrow="Reviews" title="In our clients' words" crumbs={[{ name: "Reviews", path: "/reviews/" }]} />
      <section className="bg-ivory-100 px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <AnswerBox label="Our policy">
            We publish only genuine reviews from SDY Interior clients, shared with their permission. We never buy, write or edit reviews.
          </AnswerBox>
          <Reveal className="mt-14 rounded-[1.75rem] border border-dashed border-gold-500/60 bg-ivory-50 p-10 text-center sm:p-14">
            <span aria-hidden className="mx-auto block size-3 rotate-45 bg-gold-500" />
            <h2 className="mt-6 font-display text-4xl text-forest-800">Client stories are on their way</h2>
            <p className="mx-auto mt-4 max-w-lg text-ink/65">
              We are collecting reviews from recently completed homes. If SDY has designed your home, we would be grateful to hear about your experience.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href={whatsappLink("Hello SDY Interior, I would like to share a review of my home project.")} variant="dark">Share your experience</Button>
            </div>
          </Reveal>
        </div>
      </section>
      <CTASection />
    </>
  );
}
