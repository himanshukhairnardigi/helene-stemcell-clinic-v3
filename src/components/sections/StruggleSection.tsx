import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { struggleSection } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function StruggleSection() {
  const [activeKey, setActiveKey] = useState(struggleSection.tabs[0].key);
  const activeTab = struggleSection.tabs.find((tab) => tab.key === activeKey) ?? struggleSection.tabs[0];

  return (
    <section className="bg-background py-16 sm:py-24" id="about">
      <div className="section-container">
        <SectionHeading eyebrow={struggleSection.eyebrow} heading={struggleSection.heading} intro={struggleSection.intro} />

        <Reveal delay={0.1} className="mx-auto mt-10 flex max-w-md justify-center">
          <div className="relative inline-flex rounded-full bg-secondary p-1.5" role="tablist" aria-label="Condition toggle">
            {struggleSection.tabs.map((tab) => {
              const isActive = tab.key === activeKey;
              return (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveKey(tab.key)}
                  className={cn(
                    "relative z-10 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors sm:px-7",
                    isActive ? "text-primary-foreground" : "text-foreground/70 hover:text-primary",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="struggle-toggle-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  {tab.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="relative mx-auto mt-10 max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.ul
              key={activeTab.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="space-y-4"
            >
              {activeTab.points.map((point) => (
                <li key={point} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-[15px] leading-relaxed text-foreground/85 shadow-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {point}
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>

        <Reveal delay={0.2} className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-base leading-relaxed text-foreground/80 sm:text-lg">{struggleSection.closing}</p>
          <div className="mt-7 flex justify-center">
            <WhatsAppButton label={struggleSection.ctaLabel} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
