import { MapPin, Briefcase } from "lucide-react";
import { useParallaxMouse } from "../hooks/useParallaxMouse";

export default function Hero() {
  // Blobs move at different speeds → depth illusion
  const slow = useParallaxMouse(0.06, 0.05);   // far / large blob
  const fast = useParallaxMouse(0.14, 0.08);   // near / small blob

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-200/40 via-orange-100/50 to-amber-200/40" />

      {/* Parallax blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-300/30 rounded-full blur-3xl will-change-transform"
          style={{
            transform: `translate(${slow.x * 120}px, ${slow.y * 120}px)`,
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-200/40 rounded-full blur-3xl will-change-transform"
          style={{
            transform: `translate(${fast.x * 160}px, ${fast.y * 160}px)`,
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-rose-100/50 to-transparent rounded-full blur-2xl will-change-transform"
          style={{
            transform: `translate(calc(-50% + ${slow.x * 80}px), calc(-50% + ${slow.y * 80}px))`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Available badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-border/60 bg-background/70 backdrop-blur-sm text-sm text-muted-foreground opacity-0 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Available for new projects
        </div>

        {/* Heading */}
        <h1 className="font-elegant text-4xl md:text-5xl lg:text-6xl italic text-foreground leading-relaxed opacity-0 animate-fade-in-up animation-delay-200">
          Kristina Nazarjanová is a product designer with a passion for creating
          beautiful yet intuitive experiences at scale.
        </h1>

        {/* Meta pills */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12 opacity-0 animate-fade-in-up animation-delay-400">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin size={18} className="text-rose-400" />
            <span>Czech Republic</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Briefcase size={18} className="text-amber-500" />
            <span>UX Designer</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up animation-delay-600"
        style={{ willChange: "transform" }}
      >
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}