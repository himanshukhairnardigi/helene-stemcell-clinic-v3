import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { videoSection } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal } from "@/components/ui/Reveal";

function TestimonialVideo({
  title,
  videoUrl,
  caption,
  delay,
}: {
  title: string;
  videoUrl: string;
  caption?: string;
  delay: number;
}) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <Reveal delay={delay} className="bg-white rounded-[28px] border border-slate-100 shadow-[0_18px_40px_rgba(15,23,42,0.08)] p-5 md:p-6">
      <h3 className="mb-4 text-center text-lg font-semibold text-teal-dark">{title}</h3>
      <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-black shadow-[0_20px_50px_-20px_rgba(15,45,40,0.35)]">
        {!videoUrl ? (
          <PlaceholderImage
            label={`Add ${title.toLowerCase()} patient testimonial video here`}
            className="h-full w-full rounded-2xl"
          />
        ) : (
          <>
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              src={videoUrl}
              controls={playing}
              playsInline
              preload="metadata"
              onEnded={() => setPlaying(false)}
              onPause={() => setPlaying(false)}
            />
            {!playing && (
              <button
                type="button"
                onClick={handlePlay}
                className="group absolute inset-0 flex h-full w-full items-center justify-center bg-black/25 transition-colors hover:bg-black/35"
                aria-label={`Play video: ${title}`}
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition-transform group-hover:scale-110">
                  <FaPlay className="ml-0.5 h-5 w-5" aria-hidden="true" />
                </span>
              </button>
            )}
          </>
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

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 max-w-4xl mx-auto">
          {videoSection.testimonials.map((testimonial, i) => (
            <TestimonialVideo
              key={testimonial.title}
              title={testimonial.title}
              videoUrl={testimonial.videoUrl}
              caption={testimonial.caption}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
