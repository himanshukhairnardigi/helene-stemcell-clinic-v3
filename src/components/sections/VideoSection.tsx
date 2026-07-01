import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { videoSection } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="bg-secondary/50 py-16 sm:py-24">
      <div className="section-container">
        <SectionHeading eyebrow={videoSection.eyebrow} heading={videoSection.heading} intro={videoSection.intro} />

        <Reveal delay={0.15} className="mx-auto mt-10 max-w-3xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-black shadow-[0_20px_50px_-20px_rgba(15,45,40,0.35)]">
            {playing ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${videoSection.youtubeId}?autoplay=1`}
                title={videoSection.heading}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="group absolute inset-0 h-full w-full"
                aria-label={`Play video: ${videoSection.heading}`}
              >
                <img
                  src={`https://img.youtube.com/vi/${videoSection.youtubeId}/hqdefault.jpg`}
                  alt={videoSection.caption}
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
          <p className="mt-4 text-center text-sm text-muted-foreground">{videoSection.caption}</p>
        </Reveal>
      </div>
    </section>
  );
}
