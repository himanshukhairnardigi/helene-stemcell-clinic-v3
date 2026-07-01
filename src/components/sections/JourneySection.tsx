import { journeySection } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function JourneySection() {
  return (
    <section className="bg-secondary/50 py-16 sm:py-24" id="journey">
      <div className="section-container">
        <SectionHeading eyebrow={journeySection.eyebrow} heading={journeySection.heading} />

        <div className="mx-auto mt-14 max-w-2xl">
          {journeySection.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08} className="relative flex gap-5 pb-10 last:pb-0">
              <div className="flex flex-col items-center">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground">
                  {i + 1}
                </span>
                {i < journeySection.steps.length - 1 && (
                  <span className="mt-1 w-px flex-1 bg-border" aria-hidden="true" />
                )}
              </div>
              <div className="pt-2">
                <p className="text-[15px] font-semibold leading-snug text-teal-dark sm:text-base">{step.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
