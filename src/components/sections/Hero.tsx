import { motion } from "framer-motion";
import { hero } from "@/data/content";
import { useTypewriter } from "@/hooks/useTypewriter";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Reveal } from "@/components/ui/Reveal";
import heroImage from "@/assets/hero-consultation.png";

export function Hero() {
  const typedWord = useTypewriter(hero.typewriterWords);

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-secondary/70 via-background to-background py-14 sm:py-20">
      <div className="section-container grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-4"
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-extrabold leading-[1.15] text-teal-dark sm:text-5xl"
          >
            <span className="block">{hero.headingPrefix}</span>
            <span
              className="relative mt-1 block min-w-[13ch] whitespace-nowrap text-primary"
              aria-live="polite"
            >
              &ldquo;{typedWord}
              <span className="typewriter-cursor" aria-hidden="true">
                |
              </span>
              &rdquo;
            </span>
            <span className="mt-1 block">{hero.headingSuffix}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-lg text-lg text-muted-foreground"
          >
            {hero.subheading}
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 space-y-2.5"
          >
            {hero.bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-3 text-[15px] font-medium text-foreground/85">
                <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                {bullet}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <WhatsAppButton label={hero.ctaLabel} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="overflow-hidden rounded-3xl shadow-[0_24px_60px_-20px_rgba(15,45,40,0.35)]">
            <img
              src={heroImage}
              alt={hero.imageAlt}
              className="h-full w-full object-cover"
              loading="eager"
              width={560}
              height={430}
            />
          </div>
        </motion.div>
      </div>

      <div className="section-container mt-14">
        <Reveal>
          <p className="mb-5 text-center text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            {hero.trustBadgesHeading}
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {hero.trustBadges.map((badge, i) => (
            <Reveal key={badge} delay={i * 0.1}>
              <div className="flex h-full items-start gap-3 rounded-xl border border-border bg-card/80 p-4 shadow-sm">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  ✓
                </span>
                <span className="text-sm font-medium leading-snug text-foreground/85">{badge}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
