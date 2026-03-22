import { motion } from "motion/react";
import type { Locale } from "@/lib/copy";
import { copy } from "@/lib/copy";

type CollectionProps = {
  locale: Locale;
};

const collectionItems = [
  { src: "/images/product-1.jpg", nameFr: "Jardin Zen Noir", nameEn: "Black Zen Garden", descFr: "Composition minimaliste sur socle ardoise, mousse et plantes épurées.", descEn: "Minimalist composition on slate base, moss and refined plants." },
  { src: "/images/product-2.jpg", nameFr: "Jardin de Céramique", nameEn: "Ceramic Garden", descFr: "Plantes vivantes en coupe céramique, galets et mousse verte.", descEn: "Living plants in ceramic cup, pebbles and green moss." },
  { src: "/images/product-3.jpg", nameFr: "Trio Botanical", nameEn: "Botanical Trio", descFr: "Trois plantes complémentaires dans un caisson de bois naturel.", descEn: "Three complementary plants in a natural wood case." },
  { src: "/images/product-4.jpg", nameFr: "Zen Suspendu", nameEn: "Suspended Zen", descFr: "Arrangement aérien, mousse et plantes grasses en suspension.", descEn: "Aerial arrangement, moss and succulents in suspension." },
  { src: "/images/product-5.jpg", nameFr: "Collection Naturelle", nameEn: "Natural Collection", descFr: "Mélange organique de textures végétales sur plateau de bois.", descEn: "Organic blend of botanical textures on a wooden tray." },
  { src: "/images/product-6.jpg", nameFr: "Paysage de Mousse", nameEn: "Moss Landscape", descFr: "Paysage végétal miniature, plantes indigènes et pierres naturelles.", descEn: "Miniature botanical landscape, native plants and natural stones." },
  { src: "/images/product-7.jpg", nameFr: "Composition Vivante", nameEn: "Living Composition", descFr: "Plantes vivaces et mousse fraîche dans un contenant design.", descEn: "Perennial plants and fresh moss in a designer container." },
  { src: "/images/product-8.jpg", nameFr: "Kusamono Contemporain", nameEn: "Contemporary Kusamono", descFr: "Inspiration japonaise, plantes fines et galets polis à la main.", descEn: "Japanese inspiration, fine plants and hand-polished pebbles." },
];

export function Collection({ locale }: CollectionProps) {
  const t = copy[locale].gallery;

  return (
    <section id="collection" style={{ background: "#0D0D0D", padding: "120px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "4rem" }}
        >
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "#A67C52", marginBottom: "1rem" }}>
            {t.eyebrow}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.4rem, 4.2vw, 4.5rem)", fontWeight: 400, lineHeight: 0.98, letterSpacing: "-0.025em", color: "#FAF8F2", margin: 0 }}>
              {t.title}
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", lineHeight: 1.75, color: "rgba(250,248,242,0.55)", maxWidth: 360 }}>
              {t.subtitle}
            </p>
          </div>
        </motion.div>

        {/* Product grid — 2 col mobile, 4 col desktop */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.75rem" }}
          className="lg-gallery-grid"
        >
          {collectionItems.map((item, index) => (
            <motion.article
              key={item.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: (index % 4) * 0.07 }}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 16,
                border: "1px solid rgba(245,237,214,0.1)",
              }}
            >
              {/* IMAGE CROPPING LAW: object-fit contain for plant images */}
              <div style={{ background: "#EDE8DC", aspectRatio: "3/4", position: "relative", overflow: "hidden" }}>
                <img
                  src={item.src}
                  alt={locale === "fr" ? item.nameFr : item.nameEn}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                    display: "block",
                  }}
                  loading="lazy"
                />
              </div>

              {/* Text overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "1.25rem 1rem",
                  background: "linear-gradient(to top, rgba(13,13,13,0.88) 0%, transparent 100%)",
                }}
              >
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", fontWeight: 400, color: "#FAF8F2", margin: "0 0 0.25rem" }}>
                  {locale === "fr" ? item.nameFr : item.nameEn}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", lineHeight: 1.5, color: "rgba(250,248,242,0.62)", margin: 0 }}>
                  {locale === "fr" ? item.descFr : item.descEn}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .lg-gallery-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
