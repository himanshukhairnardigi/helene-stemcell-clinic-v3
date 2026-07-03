import { HiCheckCircle } from "react-icons/hi";
import { cellProcessingSection } from "@/data/content";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Reveal } from "@/components/ui/Reveal";

export function CellProcessingSection() {
  return (
    <section className="bg-secondary/50 py-16 sm:py-24" id="cell-processing">
      <div className="section-container">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <img
              src={cellProcessingSection.image}
              alt={cellProcessingSection.imageAlt}
              className="aspect-[4/3] w-full rounded-2xl border border-border object-cover shadow-[0_4px_20px_-6px_rgba(15,45,40,0.08)]"
              loading="lazy"
            />
          </Reveal>

          <Reveal delay={0.1} className="text-left">
            <p className="eyebrow mb-3">{cellProcessingSection.eyebrow}</p>
            <h2 className="text-3xl font-bold leading-tight text-teal-dark sm:text-4xl">
              {cellProcessingSection.heading}
            </h2>

            <div className="mt-5 space-y-4">
              {cellProcessingSection.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-[15px] leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>

            <ul className="mt-6 space-y-3">
              {cellProcessingSection.checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-foreground/85">
                  <HiCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <WhatsAppButton label={cellProcessingSection.ctaLabel} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
