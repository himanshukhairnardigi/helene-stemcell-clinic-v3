import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { nav } from "@/data/content";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { cn } from "@/lib/utils";
import crestLogo from "@/assets/helene-crest.png";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent bg-background/90 backdrop-blur-md transition-all duration-300",
        scrolled && "border-border shadow-[0_2px_16px_-8px_rgba(15,45,40,0.15)]",
      )}
    >
      <div className="section-container flex items-center justify-between gap-4 py-4">
        <a href="#home" className="flex items-center gap-3">
          <img src={crestLogo} alt="Helene Clinic crest" className="h-11 w-11 shrink-0" width={44} height={44} />
          <span className="flex flex-col leading-tight">
            <span className="font-heading text-2xl font-bold tracking-tight text-teal-dark">{nav.logo}</span>
            <span className="hidden text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:inline">
              {nav.logoSubtitle}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href={nav.suitabilityHref} className="max-w-[160px] text-sm leading-snug text-foreground/70 hover:text-primary">
            {nav.suitabilityLabel}
          </a>
          <WhatsAppButton label={nav.ctaLabel} className="whitespace-nowrap px-5 py-3 text-sm" />
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-teal-dark lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <HiOutlineX size={26} /> : <HiOutlineMenu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-2 py-3 text-base font-medium text-foreground/85 hover:bg-secondary hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={nav.suitabilityHref}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-foreground/70 hover:bg-secondary hover:text-primary"
              >
                {nav.suitabilityLabel}
              </a>
              <WhatsAppButton label={nav.ctaLabel} className="mt-2 w-full" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
