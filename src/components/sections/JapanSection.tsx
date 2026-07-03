import { japanSection } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardIcon } from "@/components/ui/CardIcon";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Reveal } from "@/components/ui/Reveal";

export function JapanSection() {
  return (
    <section className="bg-background py-16 sm:py-24" id="why-japan">
      <div className="section-container">
        <SectionHeading eyebrow={japanSection.eyebrow} heading={japanSection.heading} />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {japanSection.cards.map((card, i) => (
            <Reveal key={card.description} delay={i * 0.08}>
              <div className="group card-surface h-full text-center">
                <div className="flex justify-center">
                  <CardIcon name={card.icon} />
                </div>
                <p className="text-[15px] leading-relaxed text-foreground/80">{card.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 flex justify-center">
          <WhatsAppButton label={japanSection.ctaLabel} variant="outline" />
        </Reveal>
      </div>
    </section>
  );
}
