import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import * as Dialog from "@radix-ui/react-dialog";
import { HiOutlineCheckCircle, HiChevronLeft, HiChevronRight, HiOutlineX, HiOutlineZoomIn } from "react-icons/hi";
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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

  const total = certificationsSection.items.length;
  const activeItem = activeIndex !== null ? certificationsSection.items[activeIndex] : null;
  const showPrevCert = () => setActiveIndex((i) => (i === null ? i : (i - 1 + total) % total));
  const showNextCert = () => setActiveIndex((i) => (i === null ? i : (i + 1) % total));

  return (
    <section className="bg-secondary/50 py-16 sm:py-24" id="certification">
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
              {certificationsSection.items.map((item, index) => (
                <div key={item.title} className="min-w-0 flex-[0_0_100%] pl-6 sm:flex-[0_0_50%] lg:flex-[0_0_25%]">
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`View full certificate: ${item.title}`}
                    className="card-surface group flex h-full w-full flex-col items-center text-center"
                  >
                    <span className="relative w-full">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-52 w-full rounded-lg object-cover object-top"
                      />
                      <span className="absolute inset-0 flex items-center justify-center rounded-lg bg-foreground/0 opacity-0 transition-all duration-200 group-hover:bg-foreground/40 group-hover:opacity-100">
                        <HiOutlineZoomIn className="h-8 w-8 text-white" aria-hidden="true" />
                      </span>
                    </span>
                    <p className="mt-5 text-[15px] font-medium leading-snug text-foreground/85">{item.title}</p>
                  </button>
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

      <Dialog.Root open={activeIndex !== null} onOpenChange={(open) => !open && setActiveIndex(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-foreground/70 data-[state=open]:animate-in data-[state=open]:fade-in" />
          <Dialog.Content
            aria-describedby={undefined}
            className="fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-card p-4 shadow-xl outline-none sm:p-6"
          >
            {activeItem && (
              <>
                <Dialog.Title className="pr-10 text-lg font-bold text-teal-dark">{activeItem.title}</Dialog.Title>
                <div className="relative mt-4">
                  <img
                    src={activeItem.image}
                    alt={activeItem.title}
                    className="mx-auto max-h-[70vh] w-auto rounded-lg object-contain"
                  />
                  <button
                    type="button"
                    aria-label="Previous certificate"
                    onClick={showPrevCert}
                    className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-card/90 text-foreground shadow-md transition hover:bg-secondary"
                  >
                    <HiChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next certificate"
                    onClick={showNextCert}
                    className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-card/90 text-foreground shadow-md transition hover:bg-secondary"
                  >
                    <HiChevronRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </>
            )}
            <Dialog.Close
              aria-label="Close"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-foreground transition hover:bg-border"
            >
              <HiOutlineX className="h-5 w-5" aria-hidden="true" />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
