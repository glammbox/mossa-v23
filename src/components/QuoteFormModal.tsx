import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Locale } from "@/lib/copy";

type QuoteFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
  locale: Locale;
};

type FormState = "idle" | "submitting" | "success" | "error";

export function QuoteFormModal({ isOpen, onClose, locale }: QuoteFormModalProps) {
  const [formState, setFormState] = useState<FormState>("idle");
  

  // Prevent body scroll
  if (typeof document !== "undefined") {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/PLACEHOLDER_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  const isFr = locale === "fr";

  const labelStyle = {
    display: "block",
    fontSize: "10px",
    textTransform: "uppercase" as const,
    letterSpacing: "0.22em",
    color: "var(--text-muted)",
    marginBottom: "6px",
  };

  const inputStyle = {
    width: "100%",
    background: "var(--surface)",
    border: "1px solid var(--border)",
    color: "var(--text-primary)",
    padding: "10px 14px",
    fontSize: "14px",
    outline: "none",
  };

  const checkboxRowStyle = {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    marginBottom: "10px",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          style={{ background: "rgba(10, 13, 16, 0.97)", backdropFilter: "blur(10px)" }}
        >
          {/* Header */}
          <div
            className="shrink-0 flex items-center justify-between px-6 py-4"
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em]" style={{ color: "var(--accent)" }}>
                {isFr ? "Sur mesure" : "Custom order"}
              </p>
              <h2 className="font-serif text-2xl font-light text-white mt-1">
                {isFr ? "Demander un devis" : "Request a Quote"}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex items-center justify-center transition-opacity hover:opacity-70"
              style={{
                width: "44px",
                height: "44px",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "rgba(255,255,255,0.7)",
                background: "transparent",
                fontSize: "18px",
              }}
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div
            className="flex-1 overflow-y-auto"
            style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.2) transparent" }}
          >
            {formState === "success" ? (
              <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
                <div
                  className="mb-6 flex items-center justify-center rounded-full"
                  style={{ width: "64px", height: "64px", border: "2px solid var(--accent)", color: "var(--accent)", fontSize: "28px" }}
                >
                  ✓
                </div>
                <p className="font-serif text-2xl font-light text-white mb-3">
                  {isFr ? "Votre demande a été reçue !" : "Your request has been received!"}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)", maxWidth: "400px" }}>
                  {isFr
                    ? "Nous vous contacterons sous peu."
                    : "We will contact you shortly."}
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-8 px-8 py-3 text-[11px] uppercase tracking-[0.2em] transition-opacity hover:opacity-80"
                  style={{ border: "1px solid var(--accent)", color: "var(--accent)", background: "transparent" }}
                >
                  {isFr ? "Fermer" : "Close"}
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                action="https://formspree.io/f/PLACEHOLDER_ID"
                method="POST"
                className="mx-auto w-full max-w-2xl px-6 py-10 space-y-10"
              >
                {/* Hidden fields */}
                <input type="hidden" name="_subject" value="Nouvelle demande de devis — Mossä" />
                <input type="hidden" name="_replyto" id="replyto-hidden" value="" />

                {/* SECTION 1 — Client Info */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] mb-5" style={{ color: "var(--accent)" }}>
                    01 — {isFr ? "Vos coordonnées" : "Your contact info"}
                  </p>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label style={labelStyle}>{isFr ? "Prénom et nom" : "Full name"} *</label>
                      <input name="name" required style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>{isFr ? "Téléphone" : "Phone"} *</label>
                      <input name="phone" type="tel" required style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>{isFr ? "Courriel" : "Email"} *</label>
                      <input
                        name="email"
                        type="email"
                        required
                        style={inputStyle}
                        onChange={(e) => {
                          const hidden = document.getElementById("replyto-hidden") as HTMLInputElement;
                          if (hidden) hidden.value = e.target.value;
                        }}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>{isFr ? "Adresse / Ville" : "Address / City"}</label>
                      <input name="address" style={inputStyle} />
                    </div>
                  </div>
                </div>

                {/* SECTION 2 — Creation Type */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] mb-5" style={{ color: "var(--accent)" }}>
                    02 — {isFr ? "Type de création" : "Type of creation"}
                  </p>
                  <div className="space-y-3">
                    {[
                      { name: "type_kusamono", label: isFr ? "Kusamono / Arrangement de table" : "Kusamono / Table arrangement", hasSize: true },
                      { name: "type_plant", label: isFr ? "Plante stratégique" : "Strategic plant", hasSize: false },
                      { name: "type_tapis", label: isFr ? "Tapis d'Urne" : "Urn Rug", hasPots: true },
                      { name: "type_birth", label: isFr ? "Bouquet de naissance" : "Birth bouquet", hasSize: false },
                      { name: "type_commercial", label: isFr ? "Commercial / Bureau" : "Commercial / Office", hasSize: false },
                      { name: "type_outdoor", label: isFr ? "Pots extérieurs" : "Outdoor pots", hasSize: false },
                    ].map((item) => (
                      <div key={item.name} style={checkboxRowStyle}>
                        <input
                          type="checkbox"
                          name={item.name}
                          id={item.name}
                          value="oui"
                          style={{ marginTop: "2px", accentColor: "var(--accent)", flexShrink: 0 }}
                        />
                        <div className="flex-1 flex flex-wrap items-center gap-3">
                          <label htmlFor={item.name} className="text-sm cursor-pointer" style={{ color: "var(--text-secondary)" }}>
                            {item.label}
                          </label>
                          {item.hasSize && (
                            <input
                              name={`${item.name}_size`}
                              placeholder={isFr ? "Dimensions souhaitées" : "Desired dimensions"}
                              style={{ ...inputStyle, width: "auto", flex: "1", minWidth: "160px", padding: "6px 10px", fontSize: "12px" }}
                            />
                          )}
                          {item.hasPots && (
                            <input
                              name="tapis_pot_count"
                              type="number"
                              min="1"
                              placeholder={isFr ? "Nb de pots" : "Pot count"}
                              style={{ ...inputStyle, width: "100px", padding: "6px 10px", fontSize: "12px" }}
                            />
                          )}
                        </div>
                      </div>
                    ))}
                    <div>
                      <label style={labelStyle}>{isFr ? "Autre (précisez)" : "Other (specify)"}</label>
                      <input name="type_other" style={inputStyle} />
                    </div>
                  </div>
                </div>

                {/* SECTION 3 — Style */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] mb-5" style={{ color: "var(--accent)" }}>
                    03 — {isFr ? "Style & ambiance" : "Style & atmosphere"}
                  </p>
                  <div className="space-y-5">
                    <div>
                      <label style={labelStyle}>{isFr ? "Où sera placée la création ?" : "Where will the creation be placed?"}</label>
                      <input name="location" style={inputStyle} placeholder={isFr ? "Ex: salon, bureau, couloir, terrasse…" : "E.g. living room, office, hallway, terrace…"} />
                    </div>
                    <div>
                      <label style={{ ...labelStyle, marginBottom: "10px" }}>{isFr ? "Ambiance recherchée" : "Desired ambiance"}</label>
                      <div className="space-y-2.5">
                        {[
                          { name: "ambiance_zen", label: "Zen / Épuré" },
                          { name: "ambiance_organic", label: "Organique / Sauvage" },
                          { name: "ambiance_modern", label: "Structuré / Moderne" },
                        ].map((a) => (
                          <div key={a.name} style={checkboxRowStyle}>
                            <input type="checkbox" name={a.name} id={a.name} value="oui" style={{ marginTop: "2px", accentColor: "var(--accent)" }} />
                            <label htmlFor={a.name} className="text-sm cursor-pointer" style={{ color: "var(--text-secondary)" }}>{a.label}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle}>{isFr ? "Préférences (couleurs, plantes, style particulier)" : "Preferences (colors, plants, style)"}</label>
                      <textarea name="preferences" rows={3} style={{ ...inputStyle, resize: "vertical" }} />
                    </div>
                    <div>
                      <label style={labelStyle}>{isFr ? "Contraintes (allergies, exposition, animal)" : "Constraints (allergies, light exposure, pets)"}</label>
                      <textarea name="constraints" rows={2} style={{ ...inputStyle, resize: "vertical" }} />
                    </div>
                  </div>
                </div>

                {/* SECTION 4 — Special Occasion (optional) */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] mb-1" style={{ color: "var(--accent)" }}>
                    04 — {isFr ? "Occasion spéciale" : "Special occasion"}
                    <span className="ml-2 normal-case" style={{ color: "var(--text-muted)", fontSize: "9px" }}>
                      ({isFr ? "optionnel" : "optional"})
                    </span>
                  </p>
                  <p className="text-xs mb-5" style={{ color: "var(--text-muted)" }}>
                    {isFr ? "Naissance, anniversaire, deuil, inauguration…" : "Birth, anniversary, bereavement, inauguration…"}
                  </p>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label style={labelStyle}>{isFr ? "Nom du destinataire" : "Recipient name"}</label>
                      <input name="occasion_name" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>{isFr ? "Date de l'occasion" : "Occasion date"}</label>
                      <input name="occasion_date" type="date" style={inputStyle} />
                    </div>
                    <div className="sm:col-span-2">
                      <label style={labelStyle}>{isFr ? "Message pour la carte" : "Card message"}</label>
                      <textarea name="card_message" rows={3} style={{ ...inputStyle, resize: "vertical" }} />
                    </div>
                  </div>
                </div>

                {/* SECTION 5 — Logistics */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] mb-5" style={{ color: "var(--accent)" }}>
                    05 — {isFr ? "Logistique" : "Logistics"}
                  </p>
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label style={labelStyle}>{isFr ? "Budget estimé ($CAD)" : "Estimated budget ($CAD)"}</label>
                        <input name="budget" style={inputStyle} placeholder="Ex: 80–120$" />
                      </div>
                      <div>
                        <label style={labelStyle}>{isFr ? "Date souhaitée" : "Desired date"}</label>
                        <input name="desired_date" type="date" style={inputStyle} />
                      </div>
                    </div>
                    <div>
                      <label style={{ ...labelStyle, marginBottom: "10px" }}>
                        {isFr ? "Mode de réception" : "Delivery method"}
                      </label>
                      <div className="flex gap-6">
                        {[
                          { value: "pickup", label: isFr ? "Cueillette" : "Pickup" },
                          { value: "delivery", label: isFr ? "Livraison" : "Delivery" },
                        ].map((opt) => (
                          <label key={opt.value} className="flex items-center gap-2 text-sm cursor-pointer" style={{ color: "var(--text-secondary)" }}>
                            <input type="radio" name="delivery_method" value={opt.value} style={{ accentColor: "var(--accent)" }} />
                            {opt.label}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle}>{isFr ? "Notes supplémentaires" : "Additional notes"}</label>
                      <textarea name="notes" rows={3} style={{ ...inputStyle, resize: "vertical" }} />
                    </div>
                  </div>
                </div>

                {/* Submit */}
                {formState === "error" && (
                  <p className="text-sm text-red-400">
                    {isFr ? "Une erreur s'est produite. Veuillez réessayer." : "An error occurred. Please try again."}
                  </p>
                )}
                <div className="flex items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="px-10 py-3.5 text-[11px] uppercase tracking-[0.2em] font-medium transition-opacity hover:opacity-80 disabled:opacity-50"
                    style={{
                      background: "var(--accent)",
                      color: "var(--bg)",
                      border: "none",
                    }}
                  >
                    {formState === "submitting"
                      ? (isFr ? "Envoi…" : "Sending…")
                      : (isFr ? "Envoyer ma demande" : "Send my request")}
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="text-[11px] uppercase tracking-[0.2em] transition-opacity hover:opacity-70"
                    style={{ color: "var(--text-muted)", background: "transparent", border: "none" }}
                  >
                    {isFr ? "Annuler" : "Cancel"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
