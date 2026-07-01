import { footer, nav } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-background py-10">
      <div className="section-container">
        <div className="flex flex-col items-center gap-6 border-b border-border pb-8 sm:flex-row sm:justify-between">
          <span className="font-heading text-xl font-extrabold text-primary">{nav.logo}</span>
          <nav className="flex flex-wrap justify-center gap-5">
            {nav.links.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-foreground/70 hover:text-primary">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
          {footer.disclaimer}
        </p>
        <p className="mt-4 text-center text-xs text-muted-foreground">{footer.copyright}</p>
      </div>
    </footer>
  );
}
