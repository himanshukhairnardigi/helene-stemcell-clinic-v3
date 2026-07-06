import { differenceSection } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardIcon } from "@/components/ui/CardIcon";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Reveal } from "@/components/ui/Reveal";
import { FaCheck } from "react-icons/fa";

export function DifferenceSection() {
  return (
    <section className="bg-secondary/50 py-16 sm:py-24" id="beta-msc">
      <div className="section-container">
        <SectionHeading eyebrow={differenceSection.eyebrow} heading={differenceSection.heading} intro={differenceSection.intro} />

        <div className="mt-10 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {differenceSection.therapies.map((therapy, i) => (
            <Reveal key={therapy.title} delay={i * 0.08}>
              <div className="rounded-3xl border border-border bg-card p-7 shadow-lg">
                <CardIcon name={therapy.icon} />
                <h3 className="text-lg font-bold leading-snug text-teal-dark">{therapy.title}</h3>
                <p className="mt-3 text-[16px] leading-relaxed text-muted-foreground">{therapy.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-14 text-center">
          <h3 className="text-xl font-bold text-teal-dark sm:text-2xl">{differenceSection.supportHeading}</h3>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3 max-w-4xl mx-auto">
          {differenceSection.support.map((item, i) => (
        
              <div className="rounded-3xl border border-primary/20 bg-gradient-to-b from-primary/[0.08] to-primary/[0.03] p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 gap-2">
                 <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 gap-2">
<FaCheck className="text-primary text-xs"/>
                 </div>
                </div>
                <h4 className="text-base font-semibold leading-snug text-teal-dark">{item.title}</h4>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
      
          ))}
        </div>

        <Reveal delay={0.4} className="mt-10 flex justify-center">
          <WhatsAppButton label={differenceSection.ctaLabel} />
        </Reveal>
      </div>
    </section>
  );
}
