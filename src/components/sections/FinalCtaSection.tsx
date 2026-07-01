import { finalCta } from "@/data/content";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCtaSection() {
  return (
    <section className="bg-teal-dark py-16 sm:py-20">
      <div className="section-container text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl">
            {finalCta.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/75 sm:text-lg">{finalCta.subheading}</p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton label={finalCta.ctaLabel} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
