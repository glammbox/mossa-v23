import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type { Locale } from "@/lib/copy";
import { copy } from "@/lib/copy";

type CareGuideProps = {
  locale: Locale;
};

function AccordionItem({
  title,
  items,
}: {
  title: string;
  items: { label: string; text: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="overflow-hidden"
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      <button
        type="button"
        className="flex w-full items-center justify-between py-5 text-left transition-all duration-200"
        onClick={() => setOpen((v) => !v)}
      >
        <span
          className="font-serif text-lg font-light"
          style={{ color: "var(--text-primary)" }}
        >
          {title}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ color: "var(--accent)" }}
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-5 space-y-3">
              {items.map((item) => (
                <div key={item.label} className="flex gap-3">
                  <span
                    className="mt-0.5 shrink-0 text-[10px] uppercase tracking-[0.2em] pt-0.5"
                    style={{ color: "var(--accent)", minWidth: "7rem" }}
                  >
                    {item.label}
                  </span>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function CareGuide({ locale }: CareGuideProps) {
  const t = copy[locale].careGuide;

  return (
    <section
      id="fiche-entretien"
      className="py-24 md:py-32"
      style={{ background: "var(--bg)" }}
    >
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Left: Card image + tip */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div
              className="overflow-hidden"
              style={{ border: "1px solid var(--border)" }}
            >
              <img
                src="/images/fiche-entretien-designed.jpg"
                alt={locale === "fr" ? "Fiche d'entretien Mossä" : "Mossä care guide"}
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Tip box */}
            <div
              className="p-5"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderLeft: "3px solid var(--accent)",
              }}
            >
              <p className="text-xs uppercase tracking-[0.2em] mb-2" style={{ color: "var(--accent)" }}>
                💡 {locale === "fr" ? "Conseil" : "Tip"}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {t.tip}
              </p>
            </div>
          </motion.div>

          {/* Right: Accordion content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <p
              className="mb-4 text-[10px] uppercase tracking-[0.35em]"
              style={{ color: "var(--accent)" }}
            >
              {t.eyebrow}
            </p>
            <h2
              className="mb-3 font-serif text-4xl font-light leading-tight md:text-5xl"
              style={{ color: "var(--text-primary)" }}
            >
              {t.title}
            </h2>
            <p
              className="mb-8 text-sm leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {t.subtitle}
            </p>
            <div style={{ borderTop: "1px solid var(--border)" }}>
              {t.sections.map((section) => (
                <AccordionItem
                  key={section.title}
                  title={section.title}
                  items={section.items as unknown as { label: string; text: string }[]}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
