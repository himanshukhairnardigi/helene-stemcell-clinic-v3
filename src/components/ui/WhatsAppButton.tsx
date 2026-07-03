import { FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/data/content";

interface WhatsAppButtonProps {
  label: string;
  message?: string;
  className?: string;
  variant?: "solid" | "outline";
}

export function WhatsAppButton({
  label,
  message = "Hi, I'd like to talk to your medical team.",
  className,
  variant = "solid",
}: WhatsAppButtonProps) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(variant === "solid" ? "btn-whatsapp" : "btn-primary-outline", className)}
      aria-label={label}
    >
      {variant === "solid" && <FaWhatsapp className="text-xl" size={24} aria-hidden="true" />}
      <span>{label}</span>
    </a>
  );
}
