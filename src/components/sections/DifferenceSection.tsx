import { differenceSection } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function DifferenceSection() {
  return (
    <section className="bg-secondary/50 py-16 sm:py-24" id="science">
      <div className="section-container">
        <SectionHeading eyebrow={differenceSection.eyebrow} heading={differenceSection.heading} intro={differenceSection.intro} />

        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
          {differenceSection.points.map((point, i) => (
            <Reveal key={point} delay={i * 0.08}>
              <div className="flex items-center gap-3 rounded-xl bg-card p-4 shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {i + 1}
                </span>
                <span className="text-[15px] font-medium text-foreground/85">{point}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mx-auto mt-8 max-w-2xl">
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              {differenceSection.disclaimerLabel}
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-foreground/80">{differenceSection.disclaimer}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
