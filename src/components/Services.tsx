import { useState } from "react";
import { motion } from "motion/react";
import type { Locale } from "@/lib/copy";
import { copy } from "@/lib/copy";
import { Lightbox } from "@/components/Lightbox";
import type { LightboxImage } from "@/components/Lightbox";

type ServicesProps = {
  locale: Locale;
  onQuoteFormOpen?: () => void;
};

const BOTANICAL_IMAGES: LightboxImage[] = [
  { src: "/images/inbound/inbound-01.jpg", altFr: "Arrangement végétal Mossä", altEn: "Mossä botanical arrangement", captionFr: "Arrangement Végétal", captionEn: "Botanical Arrangement" },
  { src: "/images/inbound/inbound-02.jpg", altFr: "Composition végétale sur mesure", altEn: "Custom botanical composition", captionFr: "Composition sur Mesure", captionEn: "Custom Composition" },
  { src: "/images/inbound/inbound-03.jpg", altFr: "Art végétal Mossä", altEn: "Mossä botanical art", captionFr: "Art Végétal", captionEn: "Botanical Art" },
  { src: "/images/inbound/inbound-04.jpg", altFr: "Jardin miniature Mossä", altEn: "Mossä miniature garden", captionFr: "Jardin Miniature", captionEn: "Miniature Garden" },
  { src: "/images/product-1.jpg", altFr: "Jardin Zen Noir", altEn: "Black Zen Garden", captionFr: "Jardin Zen Noir", captionEn: "Black Zen Garden" },
  { src: "/images/product-2.jpg", altFr: "Jardin de Céramique", altEn: "Ceramic Garden", captionFr: "Jardin de Céramique", captionEn: "Ceramic Garden" },
];

const HOTEL_IMAGES: LightboxImage[] = [
  { src: "/images/inbound/inbound-05.jpg", altFr: "Installation hôtel Mossä", altEn: "Mossä hotel installation", captionFr: "Hôtel & Lobby", captionEn: "Hotel & Lobby" },
  { src: "/images/inbound/inbound-06.jpg", altFr: "Espace professionnel Mossä", altEn: "Mossä professional space", captionFr: "Espace Professionnel", captionEn: "Professional Space" },
  { src: "/images/inbound/inbound-07.jpg", altFr: "Design botanique professionnel", altEn: "Professional botanical design", captionFr: "Design Botanique", captionEn: "Botanical Design" },
  { src: "/images/product-4.jpg", altFr: "Zen Suspendu", altEn: "Suspended Zen", captionFr: "Zen Suspendu", captionEn: "Suspended Zen" },
];

const ARCHITECTURE_IMAGES: LightboxImage[] = [
  { src: "/images/inbound/inbound-08.jpg", altFr: "Architecture végétale Mossä", altEn: "Mossä botanical architecture", captionFr: "Architecture Végétale", captionEn: "Botanical Architecture" },
  { src: "/images/inbound/inbound-10.jpg", altFr: "Mur végétal Mossä", altEn: "Mossä living wall", captionFr: "Mur Végétal", captionEn: "Living Wall" },
  { src: "/images/inbound/inbound-11.jpg", altFr: "Jardin intérieur Mossä", altEn: "Mossä indoor garden", captionFr: "Jardin Intérieur", captionEn: "Indoor Garden" },
  { src: "/images/product-7.jpg", altFr: "Composition Vivante", altEn: "Living Composition", captionFr: "Composition Vivante", captionEn: "Living Composition" },
];

const TAPIS_IMAGES: LightboxImage[] = [
  { src: "/images/tapis-01-walnut-plants.jpg", altFr: "Noyer & Végétaux", altEn: "Walnut & Plants", captionFr: "Noyer & Végétaux", captionEn: "Walnut & Plants" },
  { src: "/images/tapis-02-black-rose-gold.jpg", altFr: "Noir & Rose Gold", altEn: "Black & Rose Gold", captionFr: "Noir & Rose Gold", captionEn: "Black & Rose Gold" },
  { src: "/images/tapis-03-pine-flowers-colorful.jpg", altFr: "Pin & Fleurs de Chapelle", altEn: "Pine & Chapel Flowers", captionFr: "Pin & Fleurs de Chapelle", captionEn: "Pine & Chapel Flowers" },
  { src: "/images/tapis-04-walnut-crystal-calla.jpg", altFr: "Noyer & Calla Crystal", altEn: "Walnut & Crystal Calla", captionFr: "Noyer & Calla Crystal", captionEn: "Walnut & Crystal Calla" },
  { src: "/images/tapis-05-zen-japanese-orchid.jpg", altFr: "Zen Japonais & Orchidée", altEn: "Japanese Zen & Orchid", captionFr: "Zen Japonais & Orchidée", captionEn: "Japanese Zen & Orchid" },
  { src: "/images/tapis-06-marble-gold-ornate.jpg", altFr: "Marbre & Or Orné", altEn: "Marble & Ornate Gold", captionFr: "Marbre & Or Orné", captionEn: "Marble & Ornate Gold" },
];

const NEWBORN_IMAGES: LightboxImage[] = [
  { src: "/images/inbound/inbound-12.jpg", altFr: "Composition naissance Mossä", altEn: "Mossä newborn composition", captionFr: "Composition Naissance", captionEn: "Newborn Composition" },
  { src: "/images/product-2.jpg", altFr: "Cadeau naissance végétal", altEn: "Botanical newborn gift", captionFr: "Cadeau Naissance", captionEn: "Newborn Gift" },
  { src: "/images/product-5.jpg", altFr: "Jardin de naissance", altEn: "Birth garden", captionFr: "Jardin de Naissance", captionEn: "Birth Garden" },
];

type ServiceCardId = "botanical" | "hotels" | "architecture" | "tapis" | "newborns";

function MemorialContent({ locale, tapisUrne }: { locale: Locale; tapisUrne: { eyebrow: string; title: string; subtitle: string; cta: string } }) {
  return (
    <div>
      <div className="mb-10">
        <p className="mb-4 text-[10px] uppercase tracking-[0.4em]" style={{ color: "var(--accent)" }}>
          {tapisUrne.eyebrow}
        </p>
        <h3 className="mb-5 font-serif text-4xl font-light leading-tight text-white md:text-5xl" style={{ whiteSpace: "pre-line" }}>
          {tapisUrne.title}
        </h3>
        <p className="max-w-xl text-base leading-relaxed" style={{ color: "rgba(242,236,226,0.72)" }}>
          {tapisUrne.subtitle}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 mb-10">
        {TAPIS_IMAGES.map((img) => (
          <div key={img.src} className="relative overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            <img
              src={img.src}
              alt={locale === "fr" ? img.altFr : img.altEn}
              className="aspect-[3/4] w-full"
              style={{ objectFit: "contain", objectPosition: "center", background: "#EDE8DC" }}
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-end p-3" style={{ background: "linear-gradient(to top, rgba(10,13,16,0.80) 0%, transparent 60%)" }}>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white">{locale === "fr" ? img.captionFr : img.captionEn}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const STAGGER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const CARD_REVEAL = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Services({ locale, onQuoteFormOpen }: ServicesProps) {
  const t = copy[locale].rituels;
  const tapisUrne = copy[locale].tapisUrne;
  const [openLightbox, setOpenLightbox] = useState<ServiceCardId | null>(null);

  const cards: { id: ServiceCardId; image: string; label: string; name: string; desc: string }[] = [
    { id: "botanical", image: "/images/inbound/inbound-01.jpg", label: t.botanical.label, name: t.botanical.name, desc: t.botanical.desc },
    { id: "hotels", image: "/images/inbound/inbound-05.jpg", label: t.hotels.label, name: t.hotels.name, desc: t.hotels.desc },
    { id: "architecture", image: "/images/inbound/inbound-08.jpg", label: t.architecture.label, name: t.architecture.name, desc: t.architecture.desc },
    { id: "tapis", image: "/images/tapis-01-walnut-plants.jpg", label: t.tapis.label, name: t.tapis.name, desc: t.tapis.desc },
    { id: "newborns", image: "/images/inbound/inbound-12.jpg", label: t.newborns.label, name: t.newborns.name, desc: t.newborns.desc },
  ];

  function getLightboxImages(id: ServiceCardId): LightboxImage[] {
    switch (id) {
      case "botanical": return BOTANICAL_IMAGES;
      case "hotels": return HOTEL_IMAGES;
      case "architecture": return ARCHITECTURE_IMAGES;
      case "tapis": return [];
      case "newborns": return NEWBORN_IMAGES;
      default: return [];
    }
  }

  return (
    <>
      <section
        id="services"
        style={{ background: "#171717", padding: "120px 0" }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem" }}>
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: "4rem", maxWidth: 640 }}
          >
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "#A67C52", marginBottom: "1rem" }}>
              {t.eyebrow}
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.4rem, 4.2vw, 4.5rem)", fontWeight: 400, lineHeight: 0.98, letterSpacing: "-0.025em", color: "#FAF8F2", whiteSpace: "pre-line", margin: 0 }}>
              {t.title}
            </h2>
          </motion.div>

          {/* Top 3 cards */}
          <motion.div
            variants={STAGGER}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
              marginBottom: "2rem",
            }}
          >
            {cards.slice(0, 3).map((card) => (
              <ServiceCard key={card.id} card={card} onClick={() => setOpenLightbox(card.id)} />
            ))}
          </motion.div>

          {/* Bottom 2 cards — landscape */}
          <motion.div
            variants={STAGGER}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {cards.slice(3).map((card) => (
              <motion.div
                key={card.id}
                variants={CARD_REVEAL}
                onClick={() => setOpenLightbox(card.id)}
                style={{
                  position: "relative",
                  height: 220,
                  borderRadius: 24,
                  overflow: "hidden",
                  border: "1px solid rgba(245,237,214,0.12)",
                  cursor: "pointer",
                }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.28 }}
              >
                <img
                  src={card.image}
                  alt={card.name}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                  loading="lazy"
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,13,13,0.88) 0%, rgba(13,13,13,0.4) 55%, transparent 100%)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "1.5rem" }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#A67C52", marginBottom: "0.375rem" }}>{card.label}</span>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 400, color: "#FAF8F2", margin: 0 }}>{card.name}</h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", lineHeight: 1.6, color: "rgba(250,248,242,0.65)", marginTop: "0.375rem", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical" as const }}>{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightboxes */}
      {(["botanical", "hotels", "architecture", "newborns"] as const).map((id) => (
        <Lightbox
          key={id}
          isOpen={openLightbox === id}
          onClose={() => setOpenLightbox(null)}
          title={cards.find((c) => c.id === id)?.name ?? ""}
          locale={locale}
          images={getLightboxImages(id)}
          onQuoteFormOpen={onQuoteFormOpen}
        />
      ))}

      <Lightbox
        isOpen={openLightbox === "tapis"}
        onClose={() => setOpenLightbox(null)}
        title={cards.find((c) => c.id === "tapis")?.name ?? ""}
        locale={locale}
        content={<MemorialContent locale={locale} tapisUrne={tapisUrne} />}
        onQuoteFormOpen={onQuoteFormOpen}
      />
    </>
  );
}

function ServiceCard({ card, onClick }: { card: { image: string; label: string; name: string; desc: string }; onClick: () => void }) {
  return (
    <motion.div
      variants={CARD_REVEAL}
      onClick={onClick}
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: 24,
        overflow: "hidden",
        background: "#1C1C1C",
        border: "1px solid rgba(245,237,214,0.12)",
        cursor: "pointer",
      }}
      whileHover={{ y: -4, borderColor: "rgba(166,124,82,0.4)" }}
      transition={{ duration: 0.28 }}
    >
      {/* Brass top rule */}
      <div style={{ height: 1, background: "#A67C52", width: 40, margin: "0 0 0 0", opacity: 0.8 }} />

      {/* Card image — IMAGE CROPPING LAW: object-fit contain */}
      <div style={{ overflow: "hidden", aspectRatio: "4/5", background: "#EDE8DC", padding: "0.5rem" }}>
        <img
          src={card.image}
          alt={card.name}
          style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center", display: "block" }}
          loading="lazy"
        />
      </div>

      {/* Card body */}
      <div style={{ padding: "1.75rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#A67C52", marginBottom: "0.5rem" }}>{card.label}</span>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.625rem", fontWeight: 400, lineHeight: 1.1, color: "#FAF8F2", marginBottom: "0.75rem", margin: "0 0 0.75rem" }}>{card.name}</h3>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", lineHeight: 1.75, color: "rgba(250,248,242,0.65)", flex: 1 }}>{card.desc}</p>
      </div>
    </motion.div>
  );
}
