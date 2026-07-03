import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { clinicTourSection } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function ClinicTourSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="bg-secondary/50 py-16 sm:py-24" id="clinic-tour">
      <div className="section-container">
        <SectionHeading
          eyebrow={clinicTourSection.eyebrow}
          heading={clinicTourSection.heading}
          intro={clinicTourSection.intro}
        />

        <Reveal delay={0.15} className="mx-auto mt-10 max-w-3xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-black shadow-[0_20px_50px_-20px_rgba(15,45,40,0.35)]">
            {playing ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${clinicTourSection.youtubeId}?autoplay=1`}
                title={clinicTourSection.heading}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="group absolute inset-0 h-full w-full"
                aria-label={`Play video: ${clinicTourSection.heading}`}
              >
                <img
                  src={`https://img.youtube.com/vi/${clinicTourSection.youtubeId}/hqdefault.jpg`}
                  alt={clinicTourSection.caption}
                  className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
                  loading="lazy"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors group-hover:bg-black/35">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition-transform group-hover:scale-110">
                    <FaPlay className="ml-0.5 h-6 w-6" aria-hidden="true" />
                  </span>
                </span>
              </button>
            )}
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">{clinicTourSection.caption}</p>
        </Reveal>
      </div>
    </section>
  );
}
