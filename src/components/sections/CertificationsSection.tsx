import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineDocumentText, HiOutlineStar, HiOutlineAcademicCap, HiCheckCircle } from "react-icons/hi";
import type { IconType } from "react-icons";
import { certificationsSection } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const kindIcon: Record<string, IconType> = {
  license: HiOutlineDocumentText,
  award: HiOutlineStar,
  plaque: HiOutlineAcademicCap,
};

export function CertificationsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start", slidesToScroll: 1 });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-background py-16 sm:py-24" id="certifications">
      <div className="section-container">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-teal-dark sm:text-4xl">{certificationsSection.heading}</h2>
        </Reveal>

        <div className="relative mt-12">
          <button
            type="button"
            aria-label="Previous certificate"
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute -left-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-teal-dark shadow-sm transition-colors hover:bg-secondary sm:-left-5 sm:flex"
          >
            <HiOutlineChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {certificationsSection.slides.map((slide) => {
                const Icon = kindIcon[slide.kind] ?? HiOutlineDocumentText;
                return (
                  <div key={slide.title} className="min-w-0 shrink-0 grow-0 basis-full px-1 sm:basis-1/2 lg:basis-1/4">
                    <div className="card-surface flex h-full flex-col items-center text-center">
                      <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-primary/5 text-primary">
                        <Icon className="h-10 w-10" aria-hidden="true" />
                      </div>
                      <p className="mt-4 text-sm font-semibold leading-snug text-teal-dark">{slide.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            aria-label="Next certificate"
            onClick={() => emblaApi?.scrollNext()}
            className="absolute -right-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-teal-dark shadow-sm transition-colors hover:bg-secondary sm:-right-5 sm:flex"
          >
            <HiOutlineChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to certificate ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={cn(
                "h-2 w-2 rounded-full transition-colors",
                i === selectedIndex ? "bg-primary" : "bg-border hover:bg-primary/40",
              )}
            />
          ))}
        </div>

        <Reveal delay={0.15} className="mx-auto mt-10 max-w-2xl space-y-3">
          {certificationsSection.checklist.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <HiCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-[15px] leading-relaxed text-foreground/80">{item}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
