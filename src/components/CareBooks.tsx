import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { Locale } from "@/lib/copy";

type CareBooksProps = {
  locale: Locale;
};

type CategoryId = "outils" | "roches" | "contenants" | "kusamono" | "guides";

type Category = { id: CategoryId; labelFr: string; labelEn: string; image: string };

const CATEGORIES: Category[] = [
  { id: "outils", labelFr: "Outils & Accessoires", labelEn: "Tools & Accessories", image: "/images/shop/shop-tools.jpg" },
  { id: "roches", labelFr: "Roches & Sables", labelEn: "Rocks & Sands", image: "/images/shop/shop-rocks.jpg" },
  { id: "contenants", labelFr: "Contenants & Plateaux", labelEn: "Pots & Trays", image: "/images/shop/shop-dish.jpg" },
  { id: "kusamono", labelFr: "Kusamono & Kokedama", labelEn: "Kusamono & Kokedama", image: "/images/shop/shop-moss.jpg" },
  { id: "guides", labelFr: "Guides", labelEn: "Guides", image: "/images/inbound/inbound-01.jpg" },
];

type Book = { id: string; titleFr: string; titleEn: string; descFr: string; descEn: string; price: number; image: string };

const BOOKS: Book[] = [
  { id: "orchidees", titleFr: "Guide Orchidées", titleEn: "Orchid Guide", descFr: "Maîtrisez les secrets des orchidées.\nArrosage, floraison, rempotage.", descEn: "Master the secrets of orchids.\nWatering, blooming, repotting.", price: 5, image: "/images/inbound/inbound-01.jpg" },
  { id: "zen", titleFr: "Guide Jardin Zen", titleEn: "Zen Garden Guide", descFr: "Créez et entretenez votre jardin zen.\nEquilibre, mousse et pierres.", descEn: "Create and maintain your zen garden.\nBalance, moss, and stones.", price: 5, image: "/images/inbound/inbound-02.jpg" },
  { id: "terrarium", titleFr: "Guide Terrarium de Mousse", titleEn: "Moss Terrarium Guide", descFr: "Construisez un écosystème de mousse vivant.\nTechniques et entretien saisonnier.", descEn: "Build a living moss ecosystem.\nTechniques and seasonal care.", price: 5, image: "/images/inbound/inbound-03.jpg" },
  { id: "succulentes", titleFr: "Guide Succulentes", titleEn: "Succulent Guide", descFr: "Tout sur les succulentes et cactées.\nRésistance, style et multiplication.", descEn: "Everything on succulents and cacti.\nResilience, style, and propagation.", price: 5, image: "/images/inbound/inbound-04.jpg" },
];

type Product = { id: string; titleFr: string; titleEn: string; descFr: string; descEn: string; price: string; image: string; amazonQuery: string; asin?: string };

const OUTILS: Product[] = [
  { id: "bonsai-set-13", titleFr: "Coffret 13 Outils Bonsaï", titleEn: "13-Piece Bonsai Tools Set", descFr: "Kit complet pour tailler, former et entretenir vos bonsaïs.", descEn: "Complete kit to prune, shape, and care for your bonsai trees.", price: "~35–45 CAD", image: "/images/shop/shop-tools.jpg", asin: "B0868BSJ2Y", amazonQuery: "MOSFiATA+13+Piece+Bonsai+Tools+Set" },
  { id: "wazakura-4pc", titleFr: "Kit Essentiel Wazakura 4 pcs", titleEn: "Wazakura Essential Tool Kit 4PCS", descFr: "Outils japonais de qualité professionnelle pour le bonsaï.", descEn: "Professional-grade Japanese bonsai tools.", price: "~70–95 CAD", image: "/images/shop/shop-wire.jpg", asin: "B09J4W5V1J", amazonQuery: "Wazakura+Essential+Tool+Kit+4PCS+Bonsai" },
  { id: "scissors-hanafubuki", titleFr: "Ciseaux Bonsaï Hanafubuki 7\"", titleEn: "Hanafubuki Twig Bonsai Scissors 7\"", descFr: "Ciseaux japonais précis pour les petites branches.", descEn: "Precise Japanese scissors for fine branches.", price: "~35–50 CAD", image: "/images/shop/shop-mister.jpg", asin: "B08C9QTJV5", amazonQuery: "Hanafubuki+Wazakura+Twig+Bonsai+Scissors" },
  { id: "tweezers-kakuri", titleFr: "Pinces Bonsaï KaKUrI 8.8\"", titleEn: "KaKUrI Bonsai Tweezers 8.8\"", descFr: "Pinces inoxydables professionnelles pour un travail délicat.", descEn: "Professional stainless steel tweezers for delicate work.", price: "~25–40 CAD", image: "/images/shop/shop-tools.jpg", asin: "B08JKBQ5BT", amazonQuery: "KaKUrI+Bonsai+Tweezers+Professional+Stainless" },
  { id: "wire-zelarman", titleFr: "Fils Aluminium Bonsaï 4 Rouleaux", titleEn: "ZELARMAN 4 Rolls Aluminum Bonsai Wire", descFr: "Fil aluminium souple pour façonner branches et troncs.", descEn: "Soft aluminum wire for shaping branches and trunks.", price: "~12–20 CAD", image: "/images/shop/shop-wire.jpg", asin: "B07S7PPJ22", amazonQuery: "ZELARMAN+4+Rolls+Aluminum+Bonsai+Wire+Set" },
  { id: "mister-loopseed", titleFr: "Vaporisateur Inox LOOPSEED", titleEn: "LOOPSEED Stainless Steel Plant Mister", descFr: "Vaporisateur élégant en acier inoxydable pour humidifier vos plantes.", descEn: "Elegant stainless steel mister to keep plants hydrated.", price: "~20–30 CAD", image: "/images/shop/shop-mister.jpg", asin: "B09KLMFHF9", amazonQuery: "LOOPSEED+Stainless+Steel+Plant+Mister" },
];

const ROCHES: Product[] = [
  { id: "jade-pebbles", titleFr: "Galets Jade 6lb", titleEn: "ZENFUN Jade Bean Pebbles 6LB", descFr: "Galets décoratifs teintés jade pour jardins zen et bonsaïs.", descEn: "Jade-tinted decorative pebbles for zen gardens and bonsai.", price: "~22–35 CAD", image: "/images/shop/shop-rocks.jpg", amazonQuery: "ZENFUN+Jade+Bean+Pebbles+decorative+rocks" },
  { id: "maifanitum", titleFr: "Roches Décoratives Maifanitum 3lb", titleEn: "Maifanitum Decorative Rocks 3lb", descFr: "Pierres naturelles poreuses idéales pour le drainage bonsaï.", descEn: "Natural porous stones ideal for bonsai drainage.", price: "~15–22 CAD", image: "/images/shop/shop-sand.jpg", asin: "B0BKS2K322", amazonQuery: "Maifanitum+Decorative+Rocks+bonsai" },
  { id: "tumbled-chips", titleFr: "Graviers Tumbled T4U 1lb", titleEn: "T4U Tumbled Chips Stones Gravel 1lb", descFr: "Graviers polis assortis pour compositions et terrariums.", descEn: "Assorted polished gravel for arrangements and terrariums.", price: "~12–18 CAD", image: "/images/shop/shop-rocks.jpg", asin: "B08Y886N7H", amazonQuery: "T4U+Tumbled+Chips+Stones+Gravel+bonsai" },
  { id: "river-pebbles", titleFr: "Galets de Rivière Naturels", titleEn: "Natural Mixed River Pebbles", descFr: "Galets de rivière mélangés pour décor de jardins et terrariums.", descEn: "Mixed river pebbles for garden and terrarium décor.", price: "~15–25 CAD", image: "/images/shop/shop-sand.jpg", asin: "B08HS4BN11", amazonQuery: "Natural+Mixed+River+Pebbles+Decorative+Gravel" },
];

const CONTENANTS: Product[] = [
  { id: "artketty-ceramic", titleFr: "Pots Céramique Bonsaï 7.3\" (lot de 2)", titleEn: "ARTKETTY 7.3\" Ceramic Bonsai Pots (Set of 2)", descFr: "Pots céramique avec soucoupes, style japonais élégant.", descEn: "Ceramic pots with trays, elegant Japanese style.", price: "~35–50 CAD", image: "/images/shop/shop-dish.jpg", asin: "B0D1C7S18H", amazonQuery: "ARTKETTY+Ceramic+Bonsai+Pots+with+Trays" },
  { id: "shallow-ceramic-bonsai", titleFr: "Grand Pot Céramique Bonsaï Peu Profond", titleEn: "Large Shallow Ceramic Bonsai Pot with Stand", descFr: "Pot céramique plat sur support, idéal pour les compositions bonsaïs.", descEn: "Flat ceramic pot on stand, ideal for bonsai arrangements.", price: "~30–45 CAD", image: "/images/shop/shop-vessel.jpg", asin: "B09N8RDXD8", amazonQuery: "Large+Shallow+Ceramic+Bonsai+Pot+with+Stand" },
  { id: "homoyoyo-stand", titleFr: "Support Bonsaï en Bois Homoyoyo", titleEn: "Homoyoyo Wooden Bonsai Display Stand", descFr: "Socle en bois pour mettre en valeur votre bonsaï.", descEn: "Wooden pedestal to showcase your bonsai beautifully.", price: "~18–28 CAD", image: "/images/shop/shop-dish.jpg", asin: "B0C7LKS6FF", amazonQuery: "Homoyoyo+Wooden+Bonsai+Display+Stand" },
  { id: "orchid-pots-9pack", titleFr: "Pots à Orchidées Clairs Fendus (lot 9)", titleEn: "9-Pack Clear Slotted Orchid Pots", descFr: "Pots transparents aérés pour surveiller les racines d'orchidées.", descEn: "Slotted clear pots to monitor orchid roots easily.", price: "~18–30 CAD", image: "/images/shop/shop-vessel.jpg", asin: "B09N91C4GG", amazonQuery: "Clear+Slotted+Orchid+Pots+9+Pack" },
];

const KUSAMONO: Product[] = [
  { id: "supermoss-preserved", titleFr: "Mousse en Feuille Préservée 2oz", titleEn: "SuperMoss Sheet Moss Preserved Fresh Green 2oz", descFr: "Mousse naturelle préservée, prête à utiliser en décoration.", descEn: "Preserved natural moss, ready to use for decoration.", price: "~12–18 CAD", image: "/images/shop/shop-moss.jpg", asin: "B001E5U1UY", amazonQuery: "SuperMoss+Sheet+Moss+Preserved+Fresh+Green" },
  { id: "supermoss-dried", titleFr: "Mousse en Feuille Séchée 8oz", titleEn: "SuperMoss Sheet Moss Dried Natural 8oz", descFr: "Mousse séchée naturelle pour kokedama et terrarium.", descEn: "Natural dried moss for kokedama and terrarium.", price: "~18–28 CAD", image: "/images/shop/shop-moss.jpg", asin: "B004BFZY7O", amazonQuery: "SuperMoss+Sheet+Moss+Dried+Natural" },
  { id: "kokedama-kit", titleFr: "Kit DIY Kokedama Gift Republic", titleEn: "Gift Republic Art of Kokedama DIY Kit", descFr: "Tout le nécessaire pour créer vos premières boules de mousse.", descEn: "Everything you need to create your first moss ball art.", price: "~25–40 CAD", image: "/images/shop/shop-moss.jpg", asin: "B0CJ5JJ3N8", amazonQuery: "Gift+Republic+Art+of+Kokedama+DIY+Kit" },
  { id: "kokedama-ball", titleFr: "Boule Kokedama Mousse Arcadia", titleEn: "Arcadia Kokedama Moss Ball", descFr: "Boule de mousse prête à planter — style japonais authentique.", descEn: "Ready-to-plant moss ball — authentic Japanese style.", price: "~18–28 CAD", image: "/images/shop/shop-moss.jpg", asin: "B0927ZCXJ9", amazonQuery: "Arcadia+Garden+Products+Kokedama+Moss+Ball" },
];

type CartItem = { kind: "book"; item: Book; qty: number } | { kind: "product"; item: Product; qty: number };

function cartItemId(c: CartItem) {
  return `${c.kind}:${c.item.id}`;
}

function itemName(c: CartItem, isFr: boolean): string {
  return isFr ? c.item.titleFr : c.item.titleEn;
}

function itemPrice(c: CartItem): string {
  if (c.kind === "book") return `${c.item.price} CAD`;
  return c.item.price;
}

function bookTotal(cart: CartItem[]): number {
  return cart.reduce((sum, c) => { if (c.kind === "book") return sum + c.item.price * c.qty; return sum; }, 0);
}

const STAGGER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const CARD_REVEAL = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] as const } },
};

// ── Boutique product card — full card clickable, no separate VOIR button ──────
function BoutiqueCard({ title, desc, price, image, href, label }: { title: string; desc: string; price: string; image: string; href: string; label?: string }) {
  return (
    <motion.a
      variants={CARD_REVEAL}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#F5EDD6",
        borderRadius: 28,
        border: "1px solid rgba(25,23,20,0.12)",
        overflow: "hidden",
        cursor: "pointer",
        textDecoration: "none",
        boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
      }}
      whileHover={{ y: -4, boxShadow: "0 24px 80px rgba(0,0,0,0.14)", borderColor: "rgba(166,124,82,0.4)" }}
      transition={{ duration: 0.28 }}
    >
      {/* Image zone — object-fit contain per IMAGE CROPPING LAW */}
      <div
        style={{
          background: "#EDE8DC",
          aspectRatio: "4/5",
          overflow: "hidden",
          position: "relative",
          flexShrink: 0,
          padding: "1rem",
        }}
      >
        <img
          src={image}
          alt={title}
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

      {/* Card body */}
      <div style={{ padding: "1.75rem 1.75rem 2rem", flex: 1, display: "flex", flexDirection: "column" }}>
        {label && (
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A67C52", marginBottom: "0.5rem" }}>
            {label}
          </p>
        )}
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.625rem", fontWeight: 400, lineHeight: 1.1, color: "#191714", marginBottom: "0.625rem" }}>
          {title}
        </h3>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", lineHeight: 1.75, color: "rgba(25,23,20,0.7)", flex: 1, marginBottom: "1rem", whiteSpace: "pre-line" }}>
          {desc}
        </p>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.125rem", fontWeight: 400, color: "#191714", letterSpacing: "0.06em" }}>
          {price}
        </p>
      </div>
    </motion.a>
  );
}

function BookBoutiqueCard({ book, isFr, onAddToCart, inCartQty }: { book: Book; isFr: boolean; onAddToCart: () => void; inCartQty: number }) {
  return (
    <motion.div
      variants={CARD_REVEAL}
      onClick={onAddToCart}
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#F5EDD6",
        borderRadius: 28,
        border: "1px solid rgba(25,23,20,0.12)",
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
      }}
      whileHover={{ y: -4, boxShadow: "0 24px 80px rgba(0,0,0,0.14)", borderColor: inCartQty > 0 ? "rgba(166,124,82,0.6)" : "rgba(166,124,82,0.3)" }}
      transition={{ duration: 0.28 }}
    >
      <div style={{ background: "#EDE8DC", aspectRatio: "4/5", overflow: "hidden", padding: "1rem" }}>
        <img
          src={book.image}
          alt={isFr ? book.titleFr : book.titleEn}
          style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center", display: "block" }}
          loading="lazy"
        />
      </div>
      <div style={{ padding: "1.75rem 1.75rem 2rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A67C52", marginBottom: "0.5rem" }}>
          Made by Mossä
        </p>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.625rem", fontWeight: 400, lineHeight: 1.1, color: "#191714", marginBottom: "0.625rem" }}>
          {isFr ? book.titleFr : book.titleEn}
        </h3>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", lineHeight: 1.75, color: "rgba(25,23,20,0.7)", flex: 1, marginBottom: "1rem", whiteSpace: "pre-line" }}>
          {isFr ? book.descFr : book.descEn}
        </p>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.125rem", color: "#191714" }}>
          {book.price} <span style={{ fontSize: "0.75rem" }}>CAD</span>
        </p>
        {inCartQty > 0 && (
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#A67C52", marginTop: "0.5rem" }}>
            {isFr ? `✓ Ajouté (${inCartQty})` : `✓ Added (${inCartQty})`}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export function CareBooks({ locale }: CareBooksProps) {
  const [openCategory, setOpenCategory] = useState<CategoryId | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [checkoutSent, setCheckoutSent] = useState(false);

  const isFr = locale === "fr";

  function addBook(book: Book) {
    setCart((prev) => {
      const key = `book:${book.id}`;
      const existing = prev.find((c) => cartItemId(c) === key);
      if (existing) return prev.map((c) => cartItemId(c) === key ? { ...c, qty: c.qty + 1 } : c);
      return [...prev, { kind: "book" as const, item: book, qty: 1 }];
    });
  }

  function removeFromCart(key: string) {
    setCart((prev) => prev.filter((c) => cartItemId(c) !== key));
  }

  const totalItems = cart.reduce((sum, c) => sum + c.qty, 0);

  function handleCheckout() {
    if (cart.length === 0) return;
    const lines = cart.map((c) => `${itemName(c, isFr)} x${c.qty} — ${itemPrice(c)}`).join("%0A");
    const bt = bookTotal(cart);
    const subj = encodeURIComponent(isFr ? "Commande Boutique Mossä" : "Mossä Shop Order");
    const body = isFr
      ? `Bonjour,%0A%0AVoici ma commande:%0A%0A${lines}%0A%0A${bt > 0 ? `Sous-total guides numériques: ${bt} CAD%0A%0A` : ""}Merci de me contacter pour confirmer la commande et le paiement.%0A%0AMerci!`
      : `Hello,%0A%0AHere is my order:%0A%0A${lines}%0A%0A${bt > 0 ? `Digital guides subtotal: ${bt} CAD%0A%0A` : ""}Please contact me to confirm the order and payment.%0A%0AThank you!`;
    window.location.href = `mailto:mossa@hotmail.com?subject=${subj}&body=${body}`;
    setCheckoutSent(true);
  }

  function getProductsForCategory(id: CategoryId): Product[] {
    switch (id) {
      case "outils": return OUTILS;
      case "roches": return ROCHES;
      case "contenants": return CONTENANTS;
      case "kusamono": return KUSAMONO;
      default: return [];
    }
  }

  function getAmazonHref(p: Product): string {
    if (p.asin) return `https://www.amazon.ca/dp/${p.asin}?tag=mossa-20`;
    return `https://www.amazon.ca/s?k=${p.amazonQuery}&tag=mossa-20`;
  }

  return (
    <section id="livres" style={{ background: "#F5EDD6", padding: "120px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "4rem" }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem" }}>
            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "#A67C52", marginBottom: "1rem" }}>
                {isFr ? "Boutique" : "Boutique"}
              </p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.4rem, 4.2vw, 4.5rem)", fontWeight: 400, lineHeight: 0.98, letterSpacing: "-0.025em", color: "#191714", margin: 0 }}>
                {isFr ? "La Boutique Mossä" : "Mossä Shop"}
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.0625rem", fontWeight: 300, lineHeight: 1.8, color: "rgba(25,23,20,0.7)", marginTop: "1rem", maxWidth: 480 }}>
                {isFr ? "Guides, outils et accessoires sélectionnés par Mossä pour cultiver la beauté au quotidien." : "Guides, tools, and accessories curated by Mossä to grow beauty every day."}
              </p>
            </div>

            {/* Cart button */}
            <button
              type="button"
              onClick={() => setShowCart((v) => !v)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "10px 20px",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#191714",
                background: "transparent",
                border: "1px solid rgba(25,23,20,0.22)",
                borderRadius: 999,
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              <span style={{ fontSize: 16 }}>🛒</span>
              {isFr ? "Panier" : "Cart"}
              {totalItems > 0 && (
                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 20, height: 20, background: "#A67C52", color: "#FAF8F2", borderRadius: "50%", fontSize: "0.625rem", fontWeight: 600 }}>
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </motion.div>

        {/* Cart drawer */}
        <AnimatePresence>
          {showCart && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{ overflow: "hidden", marginBottom: "2.5rem" }}
            >
              <div style={{ background: "#EDE8DC", borderRadius: 24, border: "1px solid rgba(25,23,20,0.12)", padding: "1.5rem 2rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 400, color: "#191714", margin: 0 }}>{isFr ? "Votre panier" : "Your cart"}</h3>
                  <button type="button" onClick={() => setShowCart(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(25,23,20,0.55)", fontSize: "1rem" }}>✕</button>
                </div>
                {cart.length === 0 ? (
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", color: "rgba(25,23,20,0.55)" }}>{isFr ? "Votre panier est vide." : "Your cart is empty."}</p>
                ) : (
                  <>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1rem" }}>
                      {cart.map((c) => {
                        const key = cartItemId(c);
                        return (
                          <div key={key} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "rgba(25,23,20,0.78)" }}>{itemName(c, isFr)} ×{c.qty} — {itemPrice(c)}</span>
                            <button type="button" onClick={() => removeFromCart(key)} style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(25,23,20,0.45)", fontSize: "0.75rem", letterSpacing: "0.1em" }}>{isFr ? "Retirer" : "Remove"}</button>
                          </div>
                        );
                      })}
                    </div>
                    <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                      <button type="button" onClick={handleCheckout} style={{ padding: "10px 24px", fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "#FAF8F2", background: "#191714", border: "none", borderRadius: 999, cursor: "pointer" }}>
                        {isFr ? "Procéder au paiement" : "Checkout"}
                      </button>
                      <button type="button" onClick={() => { setCart([]); setCheckoutSent(false); }} style={{ padding: "10px 24px", fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(25,23,20,0.6)", background: "transparent", border: "1px solid rgba(25,23,20,0.2)", borderRadius: 999, cursor: "pointer" }}>
                        {isFr ? "Vider" : "Clear"}
                      </button>
                    </div>
                    {checkoutSent && <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", color: "#A67C52", marginTop: "0.75rem" }}>{isFr ? "✓ Commande envoyée. Stéphanie vous contactera sous peu." : "✓ Order sent. Stéphanie will contact you shortly."}</p>}
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category selector buttons */}
        <motion.div
          variants={STAGGER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem", marginBottom: "2rem" }}
          className="sm-cat-grid"
        >
          {CATEGORIES.map((cat) => {
            const isOpen = openCategory === cat.id;
            return (
              <motion.button
                key={cat.id}
                type="button"
                variants={CARD_REVEAL}
                onClick={() => setOpenCategory((prev) => (prev === cat.id ? null : cat.id))}
                style={{
                  position: "relative",
                  height: 180,
                  borderRadius: 20,
                  overflow: "hidden",
                  border: isOpen ? "2px solid #A67C52" : "1px solid rgba(25,23,20,0.12)",
                  cursor: "pointer",
                  outline: "none",
                  padding: 0,
                }}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.22 }}
              >
                <img src={cat.image} alt={isFr ? cat.labelFr : cat.labelEn} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
                <div style={{ position: "absolute", inset: 0, background: isOpen ? "rgba(25,23,20,0.55)" : "rgba(25,23,20,0.35)", transition: "background 0.3s" }} />
                <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", padding: "1.25rem", textAlign: "center" }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 400, color: "#FAF8F2", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>{isFr ? cat.labelFr : cat.labelEn}</span>
                  {isOpen && <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#F5EDD6", marginTop: "0.375rem" }}>↑</span>}
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Open category panel */}
        <AnimatePresence>
          {openCategory && (
            <motion.div
              key={openCategory}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem", paddingBottom: "1rem", borderBottom: "1px solid rgba(25,23,20,0.12)" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.75rem", fontWeight: 400, color: "#191714", margin: 0 }}>
                  {isFr ? CATEGORIES.find((c) => c.id === openCategory)?.labelFr : CATEGORIES.find((c) => c.id === openCategory)?.labelEn}
                </h3>
                <button type="button" onClick={() => setOpenCategory(null)} style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(25,23,20,0.5)", background: "none", border: "none", cursor: "pointer" }}>
                  {isFr ? "Fermer" : "Close"} ✕
                </button>
              </div>

              {/* BOUTIQUE GRID: 2 columns desktop, 1 column mobile — Iron Law */}
              {openCategory === "guides" ? (
                <motion.div
                  variants={STAGGER}
                  initial="hidden"
                  animate="visible"
                  style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}
                  className="boutique-grid"
                >
                  {BOOKS.map((book) => {
                    const key = `book:${book.id}`;
                    const inCart = cart.find((c) => cartItemId(c) === key);
                    return (
                      <BookBoutiqueCard key={book.id} book={book} isFr={isFr} onAddToCart={() => addBook(book)} inCartQty={inCart?.qty ?? 0} />
                    );
                  })}
                </motion.div>
              ) : (
                <motion.div
                  variants={STAGGER}
                  initial="hidden"
                  animate="visible"
                  style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}
                  className="boutique-grid"
                >
                  {getProductsForCategory(openCategory).map((p) => (
                    <BoutiqueCard
                      key={p.id}
                      title={isFr ? p.titleFr : p.titleEn}
                      desc={isFr ? p.descFr : p.descEn}
                      price={p.price}
                      image={p.image}
                      href={getAmazonHref(p)}
                    />
                  ))}
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        /* Boutique: 2 col desktop, 1 col mobile */
        @media (min-width: 768px) {
          .boutique-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .sm-cat-grid {
            grid-template-columns: repeat(5, 1fr) !important;
          }
        }
        @media (max-width: 767px) {
          .boutique-grid {
            grid-template-columns: 1fr !important;
          }
          .sm-cat-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
