import { HiOutlineScale, HiOutlineClipboardCheck, HiOutlineBeaker, HiOutlineShieldCheck } from "react-icons/hi";
import type { IconType } from "react-icons";
import { certificationsSection } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const icons: IconType[] = [HiOutlineScale, HiOutlineClipboardCheck, HiOutlineBeaker, HiOutlineShieldCheck];

export function CertificationsSection() {
  return (
    <section className="bg-background py-16 sm:py-24" id="certifications">
      <div className="section-container">
        <SectionHeading eyebrow={certificationsSection.eyebrow} heading={certificationsSection.heading} intro={certificationsSection.intro} />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {certificationsSection.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="group card-surface flex h-full items-start gap-4 text-left">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold leading-snug text-teal-dark">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
