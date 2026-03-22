import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import type { Locale } from "@/lib/copy";
import { copy } from "@/lib/copy";

type HeroProps = {
  locale: Locale;
};

export function Hero({ locale }: HeroProps) {
  const t = copy[locale].hero;
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoError, setVideoError] = useState(false);

  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 600], [0, -24]);

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1] as const,
        delay,
      },
    }),
  };

  return (
    <section className="hero" id="hero" ref={containerRef}>
      {/* Media layer — video with Ken Burns fallback */}
      {!videoError ? (
        <motion.video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-v6.jpg"
          aria-hidden="true"
          style={{ y: parallaxY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          onError={() => setVideoError(true)}
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </motion.video>
      ) : (
        /* Ken Burns fallback — slow scale 1.0 → 1.08, infinite */
        <motion.img
          className="hero__kenburns"
          src="/images/hero-v6.jpg"
          alt=""
          aria-hidden="true"
          initial={{ scale: 1.0 }}
          animate={{ scale: 1.08 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      )}

      {/* Overlay stack */}
      <div className="hero__overlay" />

      {/* Content */}
      <div className="hero__content">
        <motion.span
          className="hero__eyebrow"
          initial="hidden"
          animate="visible"
          custom={0.2}
          variants={fadeUp}
        >
          {t.eyebrow}
        </motion.span>

        <motion.h1
          className="hero__headline"
          initial="hidden"
          animate="visible"
          custom={0.4}
          variants={fadeUp}
        >
          {t.headline}
        </motion.h1>

        <motion.p
          className="hero__sub"
          initial="hidden"
          animate="visible"
          custom={0.6}
          variants={fadeUp}
        >
          {t.subheadline}
        </motion.p>

        <motion.div
          className="hero__ctas"
          initial="hidden"
          animate="visible"
          custom={0.78}
          variants={fadeUp}
        >
          <button
            type="button"
            className="btn-primary"
            onClick={() => {
              const el = document.getElementById("collection");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t.ctaPrimary}
          </button>
          <button
            type="button"
            className="btn-ghost"
            onClick={() => {
              const el = document.getElementById("a-propos");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t.ctaSecondary}
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator" aria-hidden="true">
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
