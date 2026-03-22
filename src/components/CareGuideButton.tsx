import type { Locale } from "@/lib/copy";

type CareGuideButtonProps = {
  locale: Locale;
  onOpen: () => void;
};

export function CareGuideButton({ locale, onOpen }: CareGuideButtonProps) {
  return (
    <div
      className="flex justify-center py-8"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <button
        type="button"
        onClick={onOpen}
        className="border px-8 py-4 text-[10px] uppercase tracking-[0.3em] transition-all duration-200"
        style={{
          borderColor: "var(--accent)",
          color: "var(--accent)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = "var(--accent)";
          (e.currentTarget as HTMLElement).style.color = "var(--bg)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "transparent";
          (e.currentTarget as HTMLElement).style.color = "var(--accent)";
        }}
      >
        {locale === "fr" ? "Fiche d'entretien →" : "Care guide →"}
      </button>
    </div>
  );
}
