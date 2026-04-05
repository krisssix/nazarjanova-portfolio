import { useEffect, useRef, useState } from "react";

interface ParallaxValues {
  x: number;
  y: number;
}

/**
 * Tracks the normalized mouse position (-0.5 … 0.5) and returns a spring-
 * lerped value so blobs glide smoothly instead of snapping.
 *
 * Respects `prefers-reduced-motion` — returns {x:0, y:0} when motion is off.
 *
 * @param speed  How much the blob moves relative to the cursor. 0.04 = subtle, 0.15 = aggressive.
 * @param lerp   Easing factor per frame (0…1). Lower = slower/smoother.
 */
export function useParallaxMouse(speed = 0.08, lerp = 0.06): ParallaxValues {
  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const [pos, setPos] = useState<ParallaxValues>({ x: 0, y: 0 });
  const target = useRef<ParallaxValues>({ x: 0, y: 0 });
  const current = useRef<ParallaxValues>({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const onMouseMove = (e: MouseEvent) => {
      // Normalize to -0.5 … 0.5
      target.current = {
        x: (e.clientX / window.innerWidth - 0.5) * speed,
        y: (e.clientY / window.innerHeight - 0.5) * speed,
      };
    };

    const animate = () => {
      // Spring lerp toward target
      current.current = {
        x: current.current.x + (target.current.x - current.current.x) * lerp,
        y: current.current.y + (target.current.y - current.current.y) * lerp,
      };
      setPos({ ...current.current });
      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf.current);
    };
  }, [prefersReducedMotion, speed, lerp]);

  if (prefersReducedMotion) return { x: 0, y: 0 };
  return pos;
}
