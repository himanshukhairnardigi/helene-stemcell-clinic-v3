import { differenceSection } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardIcon } from "@/components/ui/CardIcon";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Reveal } from "@/components/ui/Reveal";

export function DifferenceSection() {
  return (
    <section className="bg-secondary/50 py-16 sm:py-24" id="beta-msc">
      <div className="section-container">
        <SectionHeading eyebrow={differenceSection.eyebrow} heading={differenceSection.heading} intro={differenceSection.intro} />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {differenceSection.therapies.map((therapy, i) => (
            <Reveal key={therapy.title} delay={i * 0.08}>
              <div className="card-surface h-full text-left">
                <CardIcon name={therapy.icon} />
                <h3 className="text-lg font-bold leading-snug text-teal-dark">{therapy.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{therapy.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-14 text-center">
          <h3 className="text-xl font-bold text-teal-dark sm:text-2xl">{differenceSection.supportHeading}</h3>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {differenceSection.support.map((item, i) => (
            <Reveal key={item.title} delay={0.2 + i * 0.08}>
              <div className="h-full rounded-2xl border border-primary/15 bg-card/60 p-6 text-center">
                <div className="flex justify-center">
                  <CardIcon name={item.icon} />
                </div>
                <h4 className="text-base font-semibold leading-snug text-teal-dark">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4} className="mt-10 flex justify-center">
          <WhatsAppButton label={differenceSection.ctaLabel} />
        </Reveal>
      </div>
    </section>
  );
}
