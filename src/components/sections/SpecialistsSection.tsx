import { HiOutlineUser } from "react-icons/hi";
import { specialistsSection } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function SpecialistsSection() {
  return (
    <section className="bg-secondary/50 py-16 sm:py-24" id="specialists">
      <div className="section-container">
        <SectionHeading eyebrow={specialistsSection.eyebrow} heading={specialistsSection.heading} intro={specialistsSection.intro} />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specialistsSection.members.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.08}>
              <div className="card-surface h-full text-center">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="mx-auto mb-5 h-32 w-32 rounded-full object-cover"
                    loading="lazy"
                    width={128}
                    height={128}
                  />
                ) : (
                  <span className="mx-auto mb-5 flex h-32 w-32 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <HiOutlineUser className="h-14 w-14" aria-hidden="true" />
                  </span>
                )}
                <h3 className="text-lg font-semibold text-primary">{member.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
                <p className="mt-4 text-sm italic leading-relaxed text-foreground/70">{member.description}</p>
                <p className="mt-4 font-heading text-base font-bold text-teal-dark">{member.credentials}</p>
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
