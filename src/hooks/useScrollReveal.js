import { useEffect } from "react";

export const useScrollReveal = () => {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    // create thresholds 0 → 1 para smooth effect
    const thresholds = Array.from({ length: 101 }, (_, i) => i / 100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const ratio = entry.intersectionRatio; // 0 → 1
          // scale from 0.8 → 1
          const scale = 0.8 + 0.2 * ratio;
          entry.target.style.opacity = ratio;
          entry.target.style.transform = `scale(${scale})`;
        });
      },
      { threshold: thresholds }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};
