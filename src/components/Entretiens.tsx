import { motion } from "motion/react";
import type { Locale } from "@/lib/copy";

type EntretiensProps = {
  locale: Locale;
  onCareGuideOpen: () => void;
};

const CARE_ITEMS = [
  {
    titleFr: "Arrosage & Humidité",
    titleEn: "Watering & Humidity",
    descFr: "Un brumisateur léger deux fois par semaine suffit à maintenir la fraîcheur de la mousse et des végétaux stabilisés.",
    descEn: "A light mist twice a week is enough to keep moss and stabilized botanicals fresh.",
  },
  {
    titleFr: "Lumière Indirecte",
    titleEn: "Indirect Light",
    descFr: "Évitez l'exposition directe au soleil. Une lumière douce et diffuse préserve les couleurs et la texture naturelle.",
    descEn: "Avoid direct sunlight. Soft, diffused light preserves natural colours and texture.",
  },
  {
    titleFr: "Durabilité & Saisons",
    titleEn: "Longevity & Seasons",
    descFr: "Nos compositions stabilisées durent plusieurs années sans entretien intensif — simplement un environnement stable et sans poussière.",
    descEn: "Our stabilized compositions last for years with minimal care — just a stable, dust-free environment.",
  },
];

export function Entretiens({ locale, onCareGuideOpen }: EntretiensProps) {
  const isFr = locale === "fr";

  return (
    <section
      id="entretiens"
      style={{ background: "#EDE8DC", padding: "120px 0" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem" }}>

        {/* ── Header ──────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          style={{ marginBottom: "4rem", textAlign: "center", maxWidth: 760, margin: "0 auto 4rem" }}
        >
          {/* Brass accent line */}
          <div style={{ width: 40, height: 1, background: "#A67C52", margin: "0 auto 1.5rem" }} />

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#A67C52",
            marginBottom: "1.25rem",
          }}>
            {isFr ? "Prendre soin" : "Care"}
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.4rem, 4.2vw, 4.5rem)",
            fontWeight: 400,
            lineHeight: 0.98,
            letterSpacing: "-0.025em",
            color: "#191714",
            marginBottom: "1.5rem",
          }}>
            {isFr ? "Entretiens" : "Care"}
          </h2>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.25rem",
            fontStyle: "italic",
            fontWeight: 400,
            lineHeight: 1.55,
            color: "rgba(25,23,20,0.72)",
            marginBottom: "1rem",
          }}>
            {isFr
              ? "L'art de prendre soin de vos créations végétales"
              : "The art of caring for your botanical creations"}
          </p>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.0625rem",
            fontWeight: 300,
            lineHeight: 1.85,
            color: "rgba(25,23,20,0.72)",
          }}>
            {isFr
              ? "Chaque composition Mossä est accompagnée d'un guide d'entretien personnalisé. Nos ressources vous guident pour préserver la beauté de vos arrangements au fil des saisons."
              : "Each Mossä composition comes with a personalized care guide. Our resources guide you to preserve the beauty of your arrangements through the seasons."}
          </p>
        </motion.div>

        {/* ── Care Cards ──────────────────────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } }}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginBottom: "3.5rem" }}
        >
          {CARE_ITEMS.map((item) => (
            <motion.div
              key={item.titleFr}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] as const } } }}
              style={{
                padding: "2rem 2rem",
                background: "#F5EDD6",
                border: "1px solid rgba(25,23,20,0.12)",
                borderRadius: 24,
                textAlign: "center",
              }}
            >
              {/* Brass top rule */}
              <div style={{ width: 32, height: 1, background: "#A67C52", margin: "0 auto 1.25rem", opacity: 0.8 }} />
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.4rem",
                fontWeight: 400,
                lineHeight: 1.1,
                color: "#191714",
                marginBottom: "0.875rem",
              }}>
                {isFr ? item.titleFr : item.titleEn}
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9375rem",
                lineHeight: 1.75,
                color: "rgba(25,23,20,0.72)",
              }}>
                {isFr ? item.descFr : item.descEn}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── CTA Button ──────────────────────────────────────────────────────── */}
        <motion.div
          style={{ display: "flex", justifyContent: "center" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.3 }}
        >
          <button
            type="button"
            onClick={onCareGuideOpen}
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "13px 32px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8125rem",
              fontWeight: 500,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#191714",
              background: "transparent",
              border: "1px solid rgba(25,23,20,0.3)",
              borderRadius: 999,
              cursor: "pointer",
              transition: "all 0.22s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#191714";
              (e.currentTarget as HTMLElement).style.color = "#F5EDD6";
              (e.currentTarget as HTMLElement).style.borderColor = "#191714";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#191714";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(25,23,20,0.3)";
            }}
          >
            {isFr ? "Voir le guide d'entretien" : "View the care guide"}
          </button>
        </motion.div>

      </div>
    </section>
  );
}
