import { useCallback, useState } from "react";
import type { Locale } from "@/lib/copy";

export function useLanguage(initial: Locale = "fr"): [Locale, () => void] {
  const [locale, setLocale] = useState<Locale>(initial);

  const toggle = useCallback(() => {
    setLocale((l) => (l === "fr" ? "en" : "fr"));
  }, []);

  return [locale, toggle];
}
