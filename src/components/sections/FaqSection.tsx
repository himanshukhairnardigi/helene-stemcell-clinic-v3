import { faqSection } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export function FaqSection() {
  return (
    <section className="bg-background py-16 sm:py-24" id="faq">
      <div className="section-container">
        <SectionHeading eyebrow={faqSection.eyebrow} heading={faqSection.heading} />

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border bg-card px-6 shadow-sm sm:px-8">
          <Accordion type="single" collapsible>
            {faqSection.items.map((item, i) => (
              <AccordionItem key={item.question} value={`item-${i}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
