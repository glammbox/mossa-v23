import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type { Locale } from "@/lib/copy";
import { copy } from "@/lib/copy";

type SiteHeaderProps = {
  locale: Locale;
  onLocaleToggle: () => void;
};

export function SiteHeader({ locale, onLocaleToggle }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const t = copy[locale].nav;

  const navItems = [
    { href: "#a-propos", label: t.aPropos },
    { href: "#services", label: t.rituels },
    { href: "#collection", label: t.collection },
    { href: "#entretiens", label: t.entretiens },
    { href: "#livres", label: t.livres },
    { href: "#engagement", label: t.engagement },
  ];

  function handleNav(href: string) {
    setOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <>
      <motion.header
        className="fixed z-50"
        style={{ top: 20, left: "50%", x: "-50%", width: "calc(100% - 48px)", maxWidth: 1240 }}
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          style={{
            background: scrolled ? "rgba(13,13,13,0.88)" : "rgba(13,13,13,0.72)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            border: "1px solid rgba(245,237,214,0.14)",
            borderRadius: 999,
            height: 68,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 28px",
            transition: "background 0.3s ease",
          }}
        >
          {/* Logo */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="focus:outline-none"
            aria-label="Mossä — retour en haut"
          >
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 26,
                fontWeight: 400,
                letterSpacing: "0.06em",
                color: "#FAF8F2",
              }}
            >
              Mossä
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <NavLink key={item.href} label={item.label} onClick={() => handleNav(item.href)} />
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              type="button"
              onClick={onLocaleToggle}
              className="hidden md:inline-flex"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(250,248,242,0.65)",
                background: "transparent",
                border: "1px solid rgba(245,237,214,0.22)",
                borderRadius: 999,
                padding: "5px 14px",
                cursor: "pointer",
                transition: "color 0.22s ease, border-color 0.22s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#FAF8F2";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,237,214,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "rgba(250,248,242,0.65)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,237,214,0.22)";
              }}
            >
              {locale === "fr" ? "EN" : "FR"}
            </button>

            {/* CTA */}
            <button
              type="button"
              onClick={() => handleNav("#engagement")}
              className="hidden md:inline-flex"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#191714",
                background: "#F5EDD6",
                border: "1px solid transparent",
                borderRadius: 999,
                padding: "8px 22px",
                cursor: "pointer",
                transition: "all 0.22s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#FAF8F2";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(166,124,82,0.6)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#F5EDD6";
                (e.currentTarget as HTMLElement).style.borderColor = "transparent";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {locale === "fr" ? "Nous joindre" : "Contact us"}
            </button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-1 md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              style={{ color: "#FAF8F2" }}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              style={{
                marginTop: 8,
                background: "rgba(13,13,13,0.95)",
                backdropFilter: "blur(18px)",
                border: "1px solid rgba(245,237,214,0.14)",
                borderRadius: 24,
                overflow: "hidden",
                transformOrigin: "top center",
              }}
            >
              <div className="flex flex-col gap-4 px-6 py-6">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => handleNav(item.href)}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.8125rem",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "rgba(250,248,242,0.78)",
                      background: "transparent",
                      border: "none",
                      padding: 0,
                      textAlign: "left",
                      cursor: "pointer",
                    }}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="mt-2 flex items-center gap-3 border-t pt-4" style={{ borderColor: "rgba(245,237,214,0.12)" }}>
                  <button
                    type="button"
                    onClick={() => { onLocaleToggle(); setOpen(false); }}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.75rem",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "rgba(250,248,242,0.65)",
                      background: "transparent",
                      border: "1px solid rgba(245,237,214,0.22)",
                      borderRadius: 999,
                      padding: "5px 14px",
                      cursor: "pointer",
                    }}
                  >
                    {locale === "fr" ? "EN" : "FR"}
                  </button>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer to push content below header */}
      <div style={{ height: 68 }} />
    </>
  );
}

function NavLink({ label, onClick }: { label: string; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <button
        type="button"
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.8125rem",
          fontWeight: 400,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: hovered ? "#FAF8F2" : "rgba(250,248,242,0.65)",
          background: "transparent",
          border: "none",
          padding: "4px 0",
          cursor: "pointer",
          transition: "color 0.22s ease",
        }}
      >
        {label}
      </button>
      <motion.div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: 1,
          background: "#A67C52",
        }}
        initial={{ width: 0 }}
        animate={{ width: hovered ? "100%" : 0 }}
        transition={{ duration: 0.24, ease: "easeOut" }}
      />
    </div>
  );
}
