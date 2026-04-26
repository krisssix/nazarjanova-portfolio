import { MapPin, Code2, Layers, Figma } from "lucide-react";
import { useParallaxMouse } from "../hooks/useParallaxMouse";

const tags = [
  { icon: Figma, label: "UX / Product Design" },
  { icon: Code2, label: "Frontend Development" },
  { icon: Layers, label: "Design Systems" },
  { icon: MapPin, label: "Brno, Czech Republic" },
];

export default function Hero() {
  const slow = useParallaxMouse(0.06, 0.05);
  const fast = useParallaxMouse(0.14, 0.08);

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-200/50 via-rose-100/50 to-amber-500/40" />

      {/* Parallax blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-400/30 rounded-full blur-3xl will-change-transform"
          style={{ transform: `translate(${slow.x * 120}px, ${slow.y * 120}px)` }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-200/40 rounded-full blur-3xl will-change-transform"
          style={{ transform: `translate(${fast.x * 160}px, ${fast.y * 160}px)` }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-rose-100/60 to-transparent rounded-full blur-2xl will-change-transform"
          style={{ transform: `translate(calc(-50% + ${slow.x * 80}px), calc(-50% + ${slow.y * 80}px))` }}
        />
      </div>

      {/* Content — two columns */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Photo ── */}
          <div className="flex justify-center lg:justify-end opacity-0 animate-fade-in-up">
            <div className="relative">
              {/* Decorative rings — layered with blue accents */}
              {/* Outer warm-to-blue conic halo */}
              <div className="absolute -inset-6 rounded-[2rem] opacity-60 blur-2xl bg-[conic-gradient(from_220deg,theme(colors.rose.200),theme(colors.rose.300),theme(colors.amber.200),theme(colors.rose.300),theme(colors.rose.400))]" />
              {/* Mid blue-indigo bloom offset top-right */}
              <div className="absolute -top-8 -right-8 w-48 h-48 rounded-full bg-gradient-to-br from-sky-400/40 via-indigo-300/30 to-transparent blur-2xl" />
              {/* Warm base glow — original rose/amber */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-rose-100/40 via-rose-200/30 to-amber-200/35 blur-md" />
              <div className="relative w-72 h-96 sm:w-80 sm:h-[26rem] lg:w-96 lg:h-[40rem] rounded-3xl overflow-hidden border border-white/40 shadow-2xl">
                <img
                  src="/me.png"
                  alt="Kristina Nazarjanová"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  decoding="async"
                />
                {/* Subtle overlay gradient at bottom */}
                <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Floating badge — "Available" */}
              <div className="absolute -top-4 -right-4 flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-background/85 backdrop-blur-sm text-xs text-muted-foreground shadow-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Available for work
              </div>

              {/* Floating badge — "5+ yrs" */}
              <div className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-full border border-border/60 bg-background/85 backdrop-blur-sm text-xs text-muted-foreground shadow-md">
                5+ years experience
              </div>
            </div>
          </div>

          {/* ── Right: Copy ── */}
          <div className="space-y-7 opacity-0 animate-fade-in-up animation-delay-200">
            {/* Eyebrow */}
            <p className="text-sm tracking-[0.18em] uppercase text-muted-foreground/80 font-medium">
              Designer · Developer · Problem Solver
            </p>

            {/* Headline */}
            <h1 className="font-elegant text-4xl md:text-5xl lg:text-[3.25rem] italic text-foreground leading-[1.2]">
              I design products that <em className="not-italic font-display text-rose-500/80">work</em>
              {" "}— and then{" "}
              <em className="not-italic font-display">build them.</em>
            </h1>

            {/* Sub-copy */}
            <div className="space-y-3 text-muted-foreground leading-[1.75] max-w-lg">
              <p>
                Most designers hand off Figma files. I hand off{" "}
                <span className="text-foreground font-medium">production-ready code.</span>{" "}
                With a background in both UX and frontend development, I understand
                what's feasible, what's fast, and what actually ships.
              </p>
              <p>
                I've led design on enterprise tools, data-heavy dashboards, and
                complex backoffice systems — always working{" "}
                <span className="text-foreground font-medium">directly with dev teams</span>,
                never in a vacuum.
              </p>
            </div>

            {/* Tag pills */}
            <div className="flex flex-wrap gap-2.5 opacity-0 animate-fade-in-up animation-delay-400">
              {tags.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
                             border border-border/60 bg-background/70 backdrop-blur-sm
                             text-xs text-muted-foreground"
                >
                  <Icon size={13} className="text-rose-400 shrink-0" />
                  {label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2 opacity-0 animate-fade-in-up animation-delay-600">
              <button
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-2.5 bg-foreground text-background text-sm font-medium
                           rounded-xl hover:opacity-85 transition-opacity duration-200 shadow-sm"
              >
                See my work
              </button>
              <button
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-2.5 border border-foreground/40 text-sm font-medium
                           rounded-xl hover:bg-foreground/5 transition-colors duration-200"
              >
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up animation-delay-800"
        style={{ willChange: "transform" }}
      >
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}