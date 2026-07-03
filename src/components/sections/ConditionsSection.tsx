import { conditionsSection } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Reveal } from "@/components/ui/Reveal";

export function ConditionsSection() {
  return (
    <section className="bg-background py-16 sm:py-24" id="conditions">
      <div className="section-container">
        <SectionHeading eyebrow={conditionsSection.eyebrow} heading={conditionsSection.heading} />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {conditionsSection.conditions.map((condition, i) => (
            <Reveal key={condition.title} delay={i * 0.08}>
              <div className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-[0_4px_20px_-6px_rgba(15,45,40,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_-10px_rgba(15,45,40,0.16)]">
                <img
                  src={condition.image}
                  alt={condition.imageAlt}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
                <div className="p-6 text-left">
                  <h3 className="text-lg font-semibold leading-snug text-teal-dark">{condition.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{condition.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mx-auto mt-6 max-w-2xl text-center">
          <p className="text-xs italic leading-relaxed text-muted-foreground">{conditionsSection.disclaimer}</p>
        </Reveal>

        <Reveal delay={0.25} className="mt-8 flex justify-center">
          <WhatsAppButton label={conditionsSection.ctaLabel} />
        </Reveal>
      </div>
    </section>
  );
}
