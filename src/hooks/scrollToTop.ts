import { useEffect } from "react";

/**
 * Scrolls to the top of the page — simplified version (no router dependency)
 */
export function useScrollToTop(): void {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);
}

/**
 * Imperative helper — scroll to top with smooth animation.
 */
export function scrollToTop(behavior: ScrollBehavior = "smooth"): void {
  window.scrollTo({ top: 0, behavior });
}
