import { motion } from "motion/react";
import type { Locale } from "@/lib/copy";
import { copy } from "@/lib/copy";

type FooterProps = {
  locale: Locale;
  onQuoteFormOpen?: () => void;
};

const STAGGER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const COL_REVEAL = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Footer({ locale, onQuoteFormOpen }: FooterProps) {
  const t = copy[locale].footer;

  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(245,237,214,0.12)",
        paddingTop: "5rem",
        paddingBottom: "3rem",
      }}
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        src="/video/hero.mp4"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
        aria-hidden="true"
      />
      {/* Overlay */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(10,10,10,0.84)", zIndex: 1 }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "0 2rem" }}>
        <motion.div
          variants={STAGGER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2.5rem",
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <motion.div variants={COL_REVEAL}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", fontWeight: 400, letterSpacing: "0.04em", color: "#FAF8F2", marginBottom: "0.5rem" }}>
              Mossä
            </p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", fontStyle: "italic", color: "rgba(250,248,242,0.72)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
              {t.tagline}
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "rgba(250,248,242,0.65)", marginBottom: "0.25rem", fontStyle: "italic" }}>
              Stéphanie De Cesare
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "rgba(250,248,242,0.65)", marginBottom: "0.25rem" }}>
              Centre du Québec
            </p>
            <a href="mailto:contact@mossä.com" style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "rgba(250,248,242,0.65)", textDecoration: "none", marginBottom: "0.25rem", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FAF8F2")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(250,248,242,0.65)")}>
              contact@mossä.com
            </a>
            <a href="tel:8198162816" style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "rgba(250,248,242,0.65)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FAF8F2")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(250,248,242,0.65)")}>
              819-816-2816
            </a>
          </motion.div>

          {/* Contact + Social */}
          <motion.div variants={COL_REVEAL}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A67C52", marginBottom: "1.25rem" }}>
              {t.contact}
            </p>
            <a
              href="mailto:contact@mossä.com"
              style={{ display: "inline-flex", padding: "10px 20px", fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#191714", background: "#F5EDD6", border: "1px solid transparent", borderRadius: 999, textDecoration: "none", marginBottom: "0.75rem", transition: "all 0.22s ease" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#FAF8F2"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(166,124,82,0.6)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#F5EDD6"; (e.currentTarget as HTMLElement).style.borderColor = "transparent"; }}
            >
              contact@mossä.com
            </a>
            <br />
            <button
              type="button"
              onClick={() => onQuoteFormOpen?.()}
              style={{ display: "inline-flex", padding: "10px 20px", fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#FAF8F2", background: "transparent", border: "1px solid rgba(245,237,214,0.35)", borderRadius: 999, cursor: "pointer", marginBottom: "1.5rem", transition: "all 0.22s ease" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,237,214,0.65)"; (e.currentTarget as HTMLElement).style.color = "#FAF8F2"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,237,214,0.35)"; }}
            >
              {locale === "fr" ? "Demander un devis" : "Request a Quote"}
            </button>

            {/* Social */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {["Instagram", "TikTok", "Facebook"].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "rgba(250,248,242,0.55)", textDecoration: "none", transition: "color 0.2s", letterSpacing: "0.04em" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FAF8F2")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(250,248,242,0.55)")}
                >
                  {s}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div style={{ marginTop: "4rem", paddingTop: "1.75rem", borderTop: "1px solid rgba(245,237,214,0.1)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "0.75rem" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "rgba(250,248,242,0.45)" }}>{t.rights}</p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "rgba(250,248,242,0.45)" }}>Créations végétales · Sur commande · Québec</p>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 1.4fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
