import { treatmentOptionsSection } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardIcon } from "@/components/ui/CardIcon";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Reveal } from "@/components/ui/Reveal";

export function TreatmentOptionsSection() {
  return (
    <section className="bg-background py-16 sm:py-24" id="treatment-options">
      <div className="section-container">
        <SectionHeading eyebrow={treatmentOptionsSection.eyebrow} heading={treatmentOptionsSection.heading} />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {treatmentOptionsSection.options.map((option, i) => (
            <Reveal key={option.title} delay={i * 0.08}>
              <div className="card-surface h-full text-left">
                <CardIcon name={option.icon} />
                <h3 className="text-lg font-bold leading-snug text-teal-dark">{option.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{option.description}</p>
                {option.footnote && (
                  <p className="mt-4 text-sm leading-relaxed text-foreground/70">{option.footnote}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mx-auto mt-8 max-w-2xl text-center">
          <p className="text-xs leading-relaxed text-muted-foreground">{treatmentOptionsSection.disclaimer}</p>
        </Reveal>

        <Reveal delay={0.25} className="mt-8 flex justify-center">
          <WhatsAppButton label={treatmentOptionsSection.ctaLabel} />
        </Reveal>
      </div>
    </section>
  );
}
