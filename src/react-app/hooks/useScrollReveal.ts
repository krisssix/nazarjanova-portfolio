import { useEffect } from "react";

/**
 * Attaches a single global IntersectionObserver that watches every
 * element with a [data-reveal] attribute and adds "is-visible" when
 * the element enters the viewport.
 *
 * Usage in JSX: <div data-reveal>…</div>
 *               <div data-reveal="left">…</div>
 *               <div data-reveal data-delay="2">…</div>
 */
export function useRevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    // Observe all current + future elements via MutationObserver
    const attach = () => {
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        if (!el.classList.contains("is-visible")) {
          observer.observe(el);
        }
      });
    };

    attach();

    const mutObs = new MutationObserver(attach);
    mutObs.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutObs.disconnect();
    };
  }, []);
}
