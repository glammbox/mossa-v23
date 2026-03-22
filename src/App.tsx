import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Collection } from "@/components/Collection";
import { Entretiens } from "@/components/Entretiens";
import { CareBooks } from "@/components/CareBooks";
import { Engagement } from "@/components/Engagement";
import { Footer } from "@/components/Footer";
import { QuoteFormModal } from "@/components/QuoteFormModal";
import { CareGuideModal } from "@/components/CareGuideModal";

export default function App() {
  const [locale, toggleLocale] = useLanguage("fr");
  const [quoteFormOpen, setQuoteFormOpen] = useState(false);
  const [careGuideOpen, setCareGuideOpen] = useState(false);

  return (
    <div style={{ background: "#0D0D0D", color: "#FAF8F2", overflowX: "hidden" }}>
      <SiteHeader
        locale={locale}
        onLocaleToggle={toggleLocale}
      />
      <Hero locale={locale} />
      <About locale={locale} />
      <Services locale={locale} onQuoteFormOpen={() => setQuoteFormOpen(true)} />
      <Collection locale={locale} />
      <Entretiens locale={locale} onCareGuideOpen={() => setCareGuideOpen(true)} />
      <CareBooks locale={locale} />
      <Engagement locale={locale} onQuoteFormOpen={() => setQuoteFormOpen(true)} />
      <Footer locale={locale} onQuoteFormOpen={() => setQuoteFormOpen(true)} />

      <QuoteFormModal
        isOpen={quoteFormOpen}
        onClose={() => setQuoteFormOpen(false)}
        locale={locale}
      />

      <CareGuideModal
        isOpen={careGuideOpen}
        onClose={() => setCareGuideOpen(false)}
        locale={locale}
      />
    </div>
  );
}
