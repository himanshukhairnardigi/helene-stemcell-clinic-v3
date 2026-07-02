import { HiOutlineExternalLink } from "react-icons/hi";
import { researchSection } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Reveal } from "@/components/ui/Reveal";

function StudyCard({
  title,
  intro,
  stats,
  footnote,
  footnote2,
  reportUrl,
  delay,
}: {
  title: string;
  intro: string;
  stats: { value: string; label: string }[];
  footnote: string;
  footnote2?: string;
  reportUrl: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="card-surface flex h-full flex-col text-left">
        <h3 className="text-xl font-bold text-teal-dark">{title}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{intro}</p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl bg-primary/5 p-4 text-center">
              <p className="text-2xl font-extrabold text-primary">{stat.value}</p>
              <p className="mt-1 text-xs font-medium leading-snug text-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>

        {footnote2 && <p className="mt-5 text-[15px] font-medium text-foreground/80">{footnote2}</p>}
        <p className="mt-3 text-sm italic leading-relaxed text-muted-foreground">{footnote}</p>

        <a
          href={reportUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary-outline mt-6 self-start px-5 py-2.5 text-sm"
        >
          View Report
          <HiOutlineExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </Reveal>
  );
}

export function ResearchSection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="section-container">
        <SectionHeading eyebrow={researchSection.eyebrow} heading={researchSection.heading} />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <StudyCard {...researchSection.safetyStudy} delay={0} />
          <StudyCard {...researchSection.diabetesStudy} delay={0.1} />
        </div>

        <Reveal delay={0.2} className="mt-10 flex justify-center">
          <WhatsAppButton label={researchSection.ctaLabel} />
        </Reveal>
      </div>
    </section>
  );
}
