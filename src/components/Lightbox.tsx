import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Locale } from "@/lib/copy";

export type LightboxImage = {
  src: string;
  altFr?: string;
  altEn?: string;
  captionFr?: string;
  captionEn?: string;
};

type LightboxProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  locale: Locale;
  images?: LightboxImage[];
  content?: React.ReactNode;
  onQuoteFormOpen?: () => void;
};

export function Lightbox({ isOpen, onClose, title, locale, images = [], content, onQuoteFormOpen }: LightboxProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"grid" | "single">("grid");

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && viewMode === "single") setActiveIndex((i) => Math.min(i + 1, images.length - 1));
      if (e.key === "ArrowLeft" && viewMode === "single") setActiveIndex((i) => Math.max(i - 1, 0));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose, viewMode, images.length]);

  // Reset to grid on open
  useEffect(() => {
    if (isOpen) {
      setViewMode("grid");
      setActiveIndex(0);
    }
  }, [isOpen]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  function openSingle(index: number) {
    setActiveIndex(index);
    setViewMode("single");
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          style={{ background: "rgba(10, 13, 16, 0.96)", backdropFilter: "blur(8px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          {/* Header — title centered, back button left */}
          <div
            className="relative flex items-center justify-center px-6 py-4 shrink-0"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          >
            {viewMode === "single" && images.length > 0 && (
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className="absolute left-6 text-[10px] uppercase tracking-[0.22em] transition-opacity hover:opacity-70"
                style={{ color: "rgba(242,236,226,0.55)" }}
              >
                ← {locale === "fr" ? "Retour" : "Back"}
              </button>
            )}
            <h2 className="font-serif text-xl font-light tracking-wide text-white text-center">
              {title}
              {viewMode === "single" && images.length > 0 && (
                <span className="ml-3 text-[10px] font-sans" style={{ color: "rgba(242,236,226,0.4)" }}>
                  {activeIndex + 1} / {images.length}
                </span>
              )}
            </h2>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto">
            {/* Custom content (e.g. Memorial Ritual) */}
            {content && (
              <div className="flex flex-col" style={{ height: "calc(100vh - 57px)" }}>
                <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.3) transparent" }}>
                  <div className="mx-auto w-full max-w-4xl px-6 py-10">
                    {content}
                  </div>
                </div>
                {/* Action bar — same for all lightboxes */}
                <div
                  className="shrink-0 flex items-center justify-center gap-4 px-6 py-5"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <button
                    type="button"
                    onClick={() => { onClose(); onQuoteFormOpen?.(); }}
                    className="px-8 py-3 text-[11px] uppercase tracking-[0.2em] font-medium transition-opacity hover:opacity-80"
                    style={{
                      background: "transparent",
                      color: "var(--accent)",
                      border: "1px solid var(--accent)",
                    }}
                  >
                    {locale === "fr" ? "Demander un devis" : "Request a Quote"}
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex items-center justify-center transition-opacity hover:opacity-70"
                    style={{
                      width: "44px",
                      height: "44px",
                      border: "1px solid rgba(255,255,255,0.35)",
                      color: "rgba(255,255,255,0.8)",
                      background: "transparent",
                      fontSize: "18px",
                    }}
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}

            {/* Grid view — fixed 2-row window (8 images), scrollable, action bar pinned below */}
            {!content && viewMode === "grid" && images.length > 0 && (
              <div className="flex flex-col" style={{ height: "calc(100vh - 57px)" }}>
                {/* Scrollable image grid — always shows 2 rows of 4, scroll reveals more */}
                <div
                  className="overflow-y-auto"
                  style={{
                    flex: "1 1 0",
                    scrollbarWidth: "thin",
                    scrollbarColor: "rgba(255,255,255,0.3) transparent",
                  }}
                >
                  <div className="mx-auto w-full max-w-6xl px-5 py-6">
                    <div className="grid grid-cols-4 gap-3">
                      {images.map((img, i) => (
                        <button
                          key={img.src}
                          type="button"
                          onClick={() => openSingle(i)}
                          className="group relative overflow-hidden focus:outline-none"
                          style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                        >
                          <img
                            src={img.src}
                            alt={locale === "fr" ? (img.altFr ?? "") : (img.altEn ?? "")}
                            className="aspect-[3/4] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                          {(img.captionFr || img.captionEn) && (
                            <div
                              className="absolute inset-0 flex items-end p-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                              style={{ background: "linear-gradient(to top, rgba(10,13,16,0.85) 0%, transparent 60%)" }}
                            >
                              <p className="text-[10px] uppercase tracking-[0.2em] text-white">
                                {locale === "fr" ? img.captionFr : img.captionEn}
                              </p>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Action bar — always visible below grid */}
                <div
                  className="shrink-0 flex items-center justify-center gap-4 px-6 py-5"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <button
                    type="button"
                    onClick={() => { onClose(); onQuoteFormOpen?.(); }}
                    className="px-8 py-3 text-[11px] uppercase tracking-[0.2em] font-medium transition-opacity hover:opacity-80"
                    style={{
                      background: "transparent",
                      color: "var(--accent)",
                      border: "1px solid var(--accent)",
                    }}
                  >
                    {locale === "fr" ? "Demander un devis" : "Request a Quote"}
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex items-center justify-center transition-opacity hover:opacity-70"
                    style={{
                      width: "44px",
                      height: "44px",
                      border: "1px solid rgba(255,255,255,0.35)",
                      color: "rgba(255,255,255,0.8)",
                      background: "transparent",
                      fontSize: "18px",
                    }}
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}

            {/* Single image view */}
            {!content && viewMode === "single" && images.length > 0 && (
              <div className="flex h-full min-h-[60vh] items-center justify-center px-4 py-8 relative">
                <button
                  type="button"
                  onClick={() => setActiveIndex((i) => Math.max(i - 1, 0))}
                  disabled={activeIndex === 0}
                  className="absolute left-4 z-10 flex items-center justify-center rounded-sm p-2 transition-opacity hover:opacity-70 disabled:opacity-20"
                  style={{ background: "rgba(255,255,255,0.08)", color: "white" }}
                >
                  <ChevronLeft size={20} />
                </button>

                <motion.img
                  key={images[activeIndex]?.src}
                  src={images[activeIndex]?.src}
                  alt={locale === "fr" ? (images[activeIndex]?.altFr ?? "") : (images[activeIndex]?.altEn ?? "")}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  className="max-h-[75vh] max-w-full object-contain"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                />

                <button
                  type="button"
                  onClick={() => setActiveIndex((i) => Math.min(i + 1, images.length - 1))}
                  disabled={activeIndex === images.length - 1}
                  className="absolute right-4 z-10 flex items-center justify-center rounded-sm p-2 transition-opacity hover:opacity-70 disabled:opacity-20"
                  style={{ background: "rgba(255,255,255,0.08)", color: "white" }}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}

            {/* Caption */}
            {!content && viewMode === "single" && images[activeIndex]?.captionFr && (
              <div className="pb-8 text-center">
                <p
                  className="text-[11px] uppercase tracking-[0.25em]"
                  style={{ color: "rgba(242,236,226,0.5)" }}
                >
                  {locale === "fr" ? images[activeIndex].captionFr : images[activeIndex].captionEn}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
