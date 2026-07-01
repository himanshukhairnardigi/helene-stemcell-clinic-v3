import { HiOutlineLocationMarker } from "react-icons/hi";
import { locationSection } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function LocationSection() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(locationSection.mapQuery)}&z=15&output=embed`;

  return (
    <section className="bg-secondary/50 py-16 sm:py-24" id="location">
      <div className="section-container">
        <SectionHeading eyebrow={locationSection.eyebrow} heading={locationSection.heading} intro={locationSection.intro} />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe
                title="Helene Clinic location map"
                src={mapSrc}
                className="h-[320px] w-full lg:h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card-surface flex h-full flex-col justify-center text-left">
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <HiOutlineLocationMarker className="h-6 w-6" aria-hidden="true" />
              </span>
              <address className="space-y-1 text-[15px] not-italic leading-relaxed text-foreground/85">
                {locationSection.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </address>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
