import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { HiOutlineCheckCircle, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { certificationsSection } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function CertificationsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi]);

  return (
    <section className="bg-secondary/50 py-16 sm:py-24">
      <div className="section-container">
        <SectionHeading heading={certificationsSection.heading} />

        <div className="relative mt-12">
          <button
            type="button"
            aria-label="Previous certificate"
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-x-3 -translate-y-1/2 items-center justify-center rounded-full bg-card text-foreground shadow-md transition hover:bg-secondary sm:-translate-x-5"
          >
            <HiChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="-ml-6 flex">
              {certificationsSection.items.map((item) => (
                <div key={item.title} className="min-w-0 flex-[0_0_100%] pl-6 sm:flex-[0_0_50%] lg:flex-[0_0_25%]">
                  <div className="card-surface flex h-full flex-col items-center text-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-52 w-full rounded-lg object-cover object-top"
                    />
                    <p className="mt-5 text-[15px] font-medium leading-snug text-foreground/85">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Next certificate"
            onClick={scrollNext}
            className="absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 translate-x-3 items-center justify-center rounded-full bg-card text-foreground shadow-md transition hover:bg-secondary sm:translate-x-5"
          >
            <HiChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => scrollTo(index)}
              className={cn(
                "h-2.5 w-2.5 rounded-full transition-colors",
                index === selectedIndex ? "bg-primary" : "bg-border",
              )}
            />
          ))}
        </div>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-3xl space-y-4">
          {certificationsSection.checklist.map((point) => (
            <div key={point} className="flex items-start gap-3 text-left text-[15px] leading-relaxed text-foreground/85">
              <HiOutlineCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span>{point}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
