import { motion } from "motion/react";
import type { Locale } from "@/lib/copy";
import { copy } from "@/lib/copy";

type EngagementProps = {
  locale: Locale;
  onQuoteFormOpen?: () => void;
};

export function Engagement({ locale, onQuoteFormOpen }: EngagementProps) {
  const t = copy[locale].engagement;

  return (
    <section
      id="engagement"
      style={{ background: "#0D0D0D", padding: "120px 0" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem" }}>
        {/* Cream inset panel */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: "#F5EDD6",
            borderRadius: 32,
            border: "1px solid rgba(25,23,20,0.1)",
            overflow: "hidden",
            boxShadow: "0 24px 80px rgba(0,0,0,0.22)",
          }}
        >
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0" }}
            className="engagement-grid"
          >
            {/* Image panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: "relative", minHeight: 340, overflow: "hidden" }}
            >
              <img
                src="/images/product-5.jpg"
                alt={locale === "fr" ? "Arrangement végétal sur commande Mossä" : "Custom Mossä botanical arrangement"}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  objectPosition: "center",
                  display: "block",
                  background: "#EDE8DC",
                  minHeight: 340,
                }}
                loading="lazy"
              />
            </motion.div>

            {/* Content panel */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
              style={{ padding: "3rem 2.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}
            >
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] as const } } }}
                style={{ width: 40, height: 1, background: "#A67C52", marginBottom: "1.5rem" }}
              />

              <motion.p
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] as const } } }}
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "#A67C52", marginBottom: "1.25rem" }}
              >
                {t.eyebrow}
              </motion.p>

              <motion.h2
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] as const } } }}
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 4vw, 3.75rem)", fontWeight: 400, lineHeight: 0.98, letterSpacing: "-0.025em", color: "#191714", whiteSpace: "pre-line", marginBottom: "1.5rem" }}
              >
                {t.title}
              </motion.h2>

              <motion.p
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] as const } } }}
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.0625rem", fontWeight: 300, lineHeight: 1.85, color: "rgba(25,23,20,0.75)", marginBottom: "1.75rem" }}
              >
                {t.body}
              </motion.p>

              <motion.blockquote
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] as const } } }}
                style={{ margin: "0 0 2.5rem", paddingLeft: "1.5rem", borderLeft: "2px solid #A67C52", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", fontStyle: "italic", fontWeight: 400, lineHeight: 1.5, color: "#191714" }}
              >
                &ldquo;{t.quote}&rdquo;
              </motion.blockquote>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] as const } } }}
              >
                <button
                  type="button"
                  onClick={() => onQuoteFormOpen?.()}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "13px 32px",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#FAF8F2",
                    background: "#191714",
                    border: "none",
                    borderRadius: 999,
                    cursor: "pointer",
                    transition: "all 0.22s ease",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(25,23,20,0.22)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
                >
                  {locale === "fr" ? "Demander un devis" : "Request a Quote"}
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .engagement-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
