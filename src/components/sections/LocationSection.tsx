import { HiOutlineLocationMarker } from "react-icons/hi";
import { locationSection } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import clinicRouteMap from "@/assets/clinic-route-map.png";

export function LocationSection() {
  return (
    <section className="bg-background py-16 sm:py-24" id="location">
      <div className="section-container">
        <SectionHeading eyebrow={locationSection.eyebrow} heading={locationSection.heading} intro={locationSection.intro} />

        <Reveal className="mt-12" delay={0.1}>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_4px_20px_-6px_rgba(15,45,40,0.08)]">
            <img
              src={clinicRouteMap}
              alt="Flight route from Mumbai, India to Helene Clinic in Tokyo, Japan"
              className="h-auto w-full"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-6 flex justify-center">
          <p className="flex items-center gap-2 text-[15px] text-muted-foreground">
            <HiOutlineLocationMarker className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            {locationSection.caption}
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-8 flex justify-center">
          <WhatsAppButton label={locationSection.ctaLabel} />
        </Reveal>
      </div>
    </section>
  );
}
