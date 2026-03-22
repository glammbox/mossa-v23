import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CareGuide } from "@/components/CareGuide";
import type { Locale } from "@/lib/copy";

type CareGuideModalProps = {
  isOpen: boolean;
  onClose: () => void;
  locale: Locale;
};

export function CareGuideModal({ isOpen, onClose, locale }: CareGuideModalProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) {
      window.addEventListener("keydown", handleKey);
    }
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="care-guide-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50"
            style={{ background: "rgba(10, 13, 16, 0.75)", backdropFilter: "blur(4px)" }}
            onClick={onClose}
          />

          {/* Modal panel */}
          <motion.div
            key="care-guide-panel"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-x-0 bottom-0 top-16 z-50 overflow-y-auto md:inset-x-8 md:top-12 md:rounded-t-none"
            style={{ background: "var(--bg)" }}
          >
            {/* Close button */}
            <div className="sticky top-0 z-10 flex justify-end px-5 py-4" style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
              <button
                type="button"
                onClick={onClose}
                className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] transition-opacity hover:opacity-70"
                style={{ color: "var(--text-muted)", background: "transparent", border: "none" }}
              >
                {locale === "fr" ? "Fermer" : "Close"} ✕
              </button>
            </div>

            {/* CareGuide content */}
            <CareGuide locale={locale} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
