import { FaWhatsapp } from "react-icons/fa";
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { finalCta, contact, whatsappLink } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCtaSection() {
  return (
    <section className="bg-primary py-16 sm:py-20">
      <div className="section-container grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <Reveal className="text-center lg:text-left">
          <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">{finalCta.heading}</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/85 sm:text-lg lg:mx-0">{finalCta.subheading}</p>
          <div className="mt-8 flex justify-center lg:justify-start">
            <a
              href={whatsappLink("Hi, I'd like to request a medical review.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-teal-dark shadow-lg transition-transform duration-300 hover:-translate-y-0.5"
            >
              <FaWhatsapp className="text-xl" aria-hidden="true" />
              {finalCta.ctaLabel}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="font-heading text-lg font-bold text-white">{finalCta.contactHeading}</h3>
          <ul className="mt-4 space-y-3.5 text-[15px] text-white/90">
            <li className="flex items-center gap-3">
              <HiOutlinePhone className="h-5 w-5 shrink-0" aria-hidden="true" />
              <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className="hover:underline">
                {contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <HiOutlineMail className="h-5 w-5 shrink-0" aria-hidden="true" />
              <a href={`mailto:${contact.email}`} className="hover:underline">
                {contact.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <HiOutlineLocationMarker className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
              <span className="leading-relaxed">
                {contact.postalCode}
                <br />
                {contact.addressLines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
