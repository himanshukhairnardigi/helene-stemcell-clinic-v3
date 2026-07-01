import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ eyebrow, heading, intro, align = "center", className }: SectionHeadingProps) {
  return (
    <Reveal className={cn("mx-auto max-w-3xl", align === "center" ? "text-center" : "text-left", className)}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl font-bold leading-tight text-teal-dark sm:text-4xl">{heading}</h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{intro}</p>}
    </Reveal>
  );
}
