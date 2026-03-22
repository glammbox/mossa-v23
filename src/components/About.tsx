import { motion } from "motion/react";
import type { Locale } from "@/lib/copy";
import { copy } from "@/lib/copy";

type AboutProps = {
  locale: Locale;
};

const REVEAL = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function About({ locale }: AboutProps) {
  const t = copy[locale].about;

  return (
    <section
      id="a-propos"
      style={{
        background: "#F5EDD6",
        padding: "120px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        {/* Two-column editorial split */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
          }}
          className="md-about-grid"
        >
          {/* Left: Text panel */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              order: 1,
            }}
          >
            {/* Brass accent line */}
            <motion.div
              variants={REVEAL}
              style={{
                width: 40,
                height: 1,
                background: "#A67C52",
                marginBottom: "1.5rem",
              }}
            />

            <motion.p
              variants={REVEAL}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#A67C52",
                marginBottom: "1.25rem",
              }}
            >
              {t.eyebrow}
            </motion.p>

            <motion.h2
              variants={REVEAL}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.3rem, 4vw, 4rem)",
                fontWeight: 400,
                lineHeight: 0.98,
                letterSpacing: "-0.025em",
                color: "#191714",
                whiteSpace: "pre-line",
                marginBottom: "2rem",
              }}
            >
              {t.title}
            </motion.h2>

            <motion.p
              variants={REVEAL}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.0625rem",
                fontWeight: 300,
                lineHeight: 1.85,
                color: "rgba(25,23,20,0.78)",
                marginBottom: "1.25rem",
              }}
            >
              {t.body1}
            </motion.p>

            <motion.p
              variants={REVEAL}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.0625rem",
                fontWeight: 300,
                lineHeight: 1.85,
                color: "rgba(25,23,20,0.78)",
                marginBottom: "2.5rem",
              }}
            >
              {t.body2}
            </motion.p>

            <motion.blockquote
              variants={REVEAL}
              style={{
                margin: 0,
                paddingLeft: "1.5rem",
                borderLeft: "2px solid #A67C52",
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.3rem",
                fontStyle: "italic",
                fontWeight: 400,
                lineHeight: 1.5,
                color: "#191714",
              }}
            >
              &ldquo;{t.quote}&rdquo;
            </motion.blockquote>
          </motion.div>

          {/* Right: Image panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "relative",
              order: 2,
            }}
          >
            <div
              style={{
                borderRadius: 28,
                overflow: "hidden",
                border: "1px solid rgba(25,23,20,0.1)",
                boxShadow: "0 24px 80px rgba(0,0,0,0.12)",
              }}
            >
              <img
                src="/images/product-7.jpg"
                alt={locale === "fr" ? "Création végétale Mossä" : "Mossä botanical creation"}
                style={{
                  width: "100%",
                  aspectRatio: "3/4",
                  objectFit: "contain",
                  objectPosition: "center",
                  background: "#EDE8DC",
                  display: "block",
                }}
                loading="lazy"
              />
            </div>

            {/* Floating quote card */}
            <div
              style={{
                position: "absolute",
                bottom: -20,
                right: -16,
                maxWidth: 200,
                padding: "1.25rem 1.5rem",
                background: "#0D0D0D",
                borderRadius: 16,
                border: "1px solid rgba(245,237,214,0.14)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.28)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "0.9375rem",
                  fontStyle: "italic",
                  lineHeight: 1.55,
                  color: "#F5EDD6",
                  margin: 0,
                }}
              >
                Art végétal. Fait au Québec.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Responsive grid hack */}
      <style>{`
        @media (min-width: 768px) {
          .md-about-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 5rem !important;
          }
          .md-about-grid > div:first-child { order: 1 !important; }
          .md-about-grid > div:last-child { order: 2 !important; }
        }
      `}</style>
    </section>
  );
}
