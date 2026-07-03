import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { videoSection } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal } from "@/components/ui/Reveal";

function TestimonialVideo({
  title,
  youtubeId,
  caption,
  delay,
}: {
  title: string;
  youtubeId: string;
  caption?: string;
  delay: number;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <Reveal delay={delay} className="mx-auto w-full max-w-[280px]">
      <h3 className="mb-4 text-center text-lg font-semibold text-teal-dark">{title}</h3>
      <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-black shadow-[0_20px_50px_-20px_rgba(15,45,40,0.35)]">
        {!youtubeId ? (
          <PlaceholderImage
            label={`Add ${title.toLowerCase()} patient testimonial video here`}
            className="h-full w-full rounded-2xl"
          />
        ) : playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 h-full w-full"
            aria-label={`Play video: ${title}`}
          >
            <img
              src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
              alt={caption || title}
              className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
              loading="lazy"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors group-hover:bg-black/35">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition-transform group-hover:scale-110">
                <FaPlay className="ml-0.5 h-5 w-5" aria-hidden="true" />
              </span>
            </span>
          </button>
        )}
      </div>
      {caption && <p className="mt-4 text-center text-sm text-muted-foreground">{caption}</p>}
    </Reveal>
  );
}

export function VideoSection() {
  return (
    <section className="bg-secondary/50 py-16 sm:py-24" id="why-choose-us">
      <div className="section-container">
        <SectionHeading eyebrow={videoSection.eyebrow} heading={videoSection.heading} />

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2">
          {videoSection.testimonials.map((testimonial, i) => (
            <TestimonialVideo
              key={testimonial.title}
              title={testimonial.title}
              youtubeId={testimonial.youtubeId}
              caption={testimonial.caption}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
