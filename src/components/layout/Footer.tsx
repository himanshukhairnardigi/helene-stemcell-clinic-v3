import { footer } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-footer-dark py-8">
      <div className="section-container text-center">
        <p className="text-sm text-white/80">{footer.copyright}</p>
        <p className="mt-2 text-sm text-white/50">{footer.locationLine}</p>
      </div>
    </footer>
  );
}
