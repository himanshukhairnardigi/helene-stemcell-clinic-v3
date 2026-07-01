import { HiOutlineUser } from "react-icons/hi";
import { specialistsSection } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function SpecialistsSection() {
  return (
    <section className="bg-secondary/50 py-16 sm:py-24" id="specialists">
      <div className="section-container">
        <SectionHeading eyebrow={specialistsSection.eyebrow} heading={specialistsSection.heading} intro={specialistsSection.intro} />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {specialistsSection.members.map((member, i) => (
            <Reveal key={member.specialty} delay={i * 0.08}>
              <div className="group card-surface h-full text-center">
                <span className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <HiOutlineUser className="h-9 w-9" aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold text-teal-dark">{member.role}</h3>
                <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{member.specialty}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mx-auto mt-8 max-w-2xl text-center">
          <p className="text-xs italic text-muted-foreground">{specialistsSection.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
