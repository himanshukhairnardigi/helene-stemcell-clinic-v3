import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { comparisonSection } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function ComparisonSection() {
  const [activeKey, setActiveKey] = useState(comparisonSection.tabs[0].key);
  const activeTab = comparisonSection.tabs.find((tab) => tab.key === activeKey) ?? comparisonSection.tabs[0];

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="section-container">
        <SectionHeading eyebrow={comparisonSection.eyebrow} heading={comparisonSection.heading} intro={comparisonSection.intro} />

        <Reveal delay={0.1} className="mx-auto mt-8 flex max-w-md justify-center">
          <div className="relative inline-flex rounded-full bg-secondary p-1.5" role="tablist" aria-label="Condition comparison toggle">
            {comparisonSection.tabs.map((tab) => {
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
                      layoutId="comparison-toggle-pill"
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

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.key}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="mt-10"
          >
            <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
              <table className="w-full min-w-[900px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-secondary">
                    {activeTab.columns.map((col) => (
                      <th key={col} className="whitespace-nowrap px-4 py-4 text-xs font-semibold uppercase tracking-wide text-foreground/70">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {activeTab.rows.map((row, rowIndex) => (
                    <tr
                      key={row[0]}
                      className={cn(
                        "border-t border-border",
                        rowIndex === activeTab.highlightRow ? "bg-primary/5" : "bg-card",
                      )}
                    >
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className={cn(
                            "px-4 py-4 align-top leading-relaxed text-foreground/80",
                            cellIndex === 0 && "font-semibold text-teal-dark",
                            rowIndex === activeTab.highlightRow && cellIndex === 0 && "text-primary",
                          )}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:hidden">
              {activeTab.rows.map((row, rowIndex) => (
                <div
                  key={row[0]}
                  className={cn(
                    "rounded-2xl border border-border p-5 shadow-sm",
                    rowIndex === activeTab.highlightRow ? "border-primary/30 bg-primary/5" : "bg-card",
                  )}
                >
                  <h4 className={cn("text-base font-bold", rowIndex === activeTab.highlightRow ? "text-primary" : "text-teal-dark")}>
                    {row[0]}
                  </h4>
                  <dl className="mt-3 space-y-2 text-sm">
                    {activeTab.columns.slice(1).map((col, i) => (
                      <div key={col} className="flex justify-between gap-3">
                        <dt className="shrink-0 font-medium text-muted-foreground">{col}</dt>
                        <dd className="text-right text-foreground/85">{row[i + 1]}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div> */}
          </motion.div>
        </AnimatePresence>

        <Reveal delay={0.15} className="mx-auto mt-8 max-w-3xl space-y-3">
          <p className="text-xs leading-relaxed text-muted-foreground">{comparisonSection.costDisclaimer}</p>
          <p className="text-xs font-medium leading-relaxed text-foreground/70">{comparisonSection.smallDisclaimer}</p>
        </Reveal>
      </div>
    </section>
  );
}
