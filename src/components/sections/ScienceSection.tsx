import { scienceSection } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function ScienceSection() {
  return (
    <section className="bg-secondary/50 py-16 sm:py-24">
      <div className="section-container">
        <SectionHeading eyebrow={scienceSection.eyebrow} heading={scienceSection.heading} intro={scienceSection.intro} />

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
          {scienceSection.points.map((point, i) => (
            <Reveal key={point} delay={i * 0.08}>
              <div className="flex items-center gap-4 rounded-2xl bg-card p-5 shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                  {i + 1}
                </span>
                <p className="text-[15px] font-medium leading-snug text-foreground/85">{point}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mx-auto mt-8 max-w-4xl">
          <div className="rounded-2xl border border-primary/20 bg-secondary/70 p-6">
            <p className="eyebrow mb-2">{scienceSection.noteLabel}</p>
            <p className="text-[15px] leading-relaxed text-foreground/80">{scienceSection.note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
