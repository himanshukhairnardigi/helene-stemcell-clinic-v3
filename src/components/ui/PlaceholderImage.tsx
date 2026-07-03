import { HiOutlinePhotograph } from "react-icons/hi";
import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  label: string;
  className?: string;
}

export function PlaceholderImage({ label, className }: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-border bg-secondary/60 text-center",
        className,
      )}
    >
      <HiOutlinePhotograph className="h-10 w-10 text-muted-foreground/50" aria-hidden="true" />
      <p className="px-4 text-xs font-medium leading-snug text-muted-foreground/70">{label}</p>
    </div>
  );
}
