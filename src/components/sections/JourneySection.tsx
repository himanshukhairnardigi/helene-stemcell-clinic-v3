import { journeySection } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardIcon } from "@/components/ui/CardIcon";
import { Reveal } from "@/components/ui/Reveal";

export function JourneySection() {
  return (
    <section className="bg-background py-16 sm:py-24" id="journey">
      <div className="section-container">
        <SectionHeading eyebrow={journeySection.eyebrow} heading={journeySection.heading} />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {journeySection.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <div className="group card-surface relative h-full text-left">
                <span className="absolute right-6 top-6 text-3xl font-extrabold text-primary/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <CardIcon name={step.icon} />
                <h3 className="text-base font-semibold leading-snug text-teal-dark">{step.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
