import { site, whatsappLink } from "@/lib/site";
import { Button } from "./Button";
import { Corners, GoldRule } from "./Logo";
import { SplitHeading, Reveal } from "./Reveal";

export function CTASection({
  title = "Let's design beyond walls.",
  text = "Tell us about your home. We will listen, visit, and show you what it could become.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-ivory-100 px-5 py-20 sm:px-8 sm:py-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-forest-800 bg-lattice px-6 py-20 text-center text-ivory-100 grain sm:px-16 sm:py-24">
        <Corners className="inset-6" />
        <div aria-hidden className="absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-gold-500/15 blur-3xl" />
        <div className="relative">
          <GoldRule className="justify-center" />
          <SplitHeading text={title} className="mx-auto mt-8 max-w-3xl font-display text-4xl leading-tight text-balance sm:text-6xl" />
          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-ivory-100/70">{text}</p>
          </Reveal>
          <Reveal delay={0.25} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact/">Request a Consultation</Button>
            <Button href={whatsappLink()} variant="outline">WhatsApp SDY</Button>
          </Reveal>
          <Reveal delay={0.35}>
            <p className="mt-8 text-sm text-ivory-100/55">
              Or call{" "}
              {site.phones.map((p, i) => (
                <span key={p.tel}>
                  <a href={`tel:${p.tel}`} className="text-gold-400 underline-offset-4 hover:underline" data-event="click_to_call">{p.label}</a>
                  {i === 0 ? " / " : ""}
                </span>
              ))}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
