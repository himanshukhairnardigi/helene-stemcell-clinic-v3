import { journeySection } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardIcon } from "@/components/ui/CardIcon";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Reveal } from "@/components/ui/Reveal";

export function JourneySection() {
  return (
    <section className="bg-secondary/50 py-16 sm:py-24" id="journey">
      <div className="section-container">
        <SectionHeading eyebrow={journeySection.eyebrow} heading={journeySection.heading} />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {journeySection.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <div className="card-surface h-full text-center">
                <div className="flex justify-center">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                </div>
                <div className="mt-4 flex justify-center">
                  <CardIcon name={step.icon} />
                </div>
                <h3 className="text-base font-semibold leading-snug text-teal-dark">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4} className="mt-10 flex justify-center">
          <WhatsAppButton label={journeySection.ctaLabel} />
        </Reveal>
      </div>
    </section>
  );
}
