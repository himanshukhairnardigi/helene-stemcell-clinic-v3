import { FaWhatsapp } from "react-icons/fa";
import { footer, nav, whatsappLink } from "@/data/content";
import crestLogo from "@/assets/helene-crest.png";

export function Footer() {
  return (
    <footer className="bg-teal-dark pt-16 text-white/80">
      <div className="section-container grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#home" className="flex items-center gap-2.5">
            <img src={crestLogo} alt="Helene Clinic crest" className="h-10 w-10" width={40} height={40} />
            <span className="font-heading text-xl font-extrabold text-white">{nav.logo}</span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">{footer.tagline}</p>
        </div>

        {footer.columns.map((column) => (
          <div key={column.heading}>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">{column.heading}</h4>
            <ul className="mt-4 space-y-2.5">
              {column.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/60 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">{footer.contact.heading}</h4>
          <address className="mt-4 space-y-1 text-sm not-italic leading-relaxed text-white/60">
            {footer.contact.address.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </address>
          <a
            href={whatsappLink("Hi, I'd like to talk to your medical team.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-whatsapp transition-colors hover:text-white"
          >
            <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
            {footer.contact.whatsappLabel}
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-container py-8">
          <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-white/50">{footer.disclaimer}</p>
          <p className="mt-4 text-center text-xs text-white/40">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
