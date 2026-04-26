import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", target: "projects" },
  { label: "About", target: "about" },
  { label: "Contact", target: "contact" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* SVG filter — liquid-glass refraction (Chrome backdrop-filter) */}
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <defs>
          <filter id="glass-blur" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
            {/* Frosted glass: blur the backdrop */}
            <feGaussianBlur stdDeviation="8" result="blur" />
            {/* Slight warm tint */}
            <feColorMatrix
              type="matrix"
              values="1.02 0    0    0  0.01
                      0    1.01 0    0  0
                      0    0    0.97 0  0
                      0    0    0    1  0"
              result="tinted"
            />
          </filter>
        </defs>
      </svg>

      <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
        <div className="max-w-7xl mx-auto">
          {/* ── Navbar pill ── */}
          <nav
            className="relative flex items-center justify-between px-6 py-3 rounded-2xl overflow-hidden"
            style={{
              /* Deep frosted glass backdrop */
              backdropFilter: "blur(28px) saturate(180%) brightness(1.08)",
              WebkitBackdropFilter: "blur(28px) saturate(180%) brightness(1.08)",
              /* Translucent warm fill */
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,245,235,0.42) 50%, rgba(255,255,255,0.38) 100%)",
              /* Specular highlight border — bright top-left edge fading to transparent */
              border: "1px solid transparent",
              backgroundClip: "padding-box",
              boxShadow:
                /* Outer drop shadow */
                "0 8px 32px -4px rgba(80,50,20,0.10), " +
                /* Inner top-left specular highlight (glass rim) */
                "inset 0 1.5px 0 rgba(255,255,255,0.85), " +
                /* Inner bottom-right shadow (depth) */
                "inset 0 -1px 0 rgba(180,140,100,0.18)",
            }}
          >
            {/* Gradient border ring (simulates glass edge refraction) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,220,190,0.25) 40%, rgba(200,180,160,0.15) 100%)",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                padding: "1px",
              }}
            />

            {/* Logotype */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="relative z-10 flex items-center hover:opacity-80 transition-opacity duration-200"
              aria-label="Kristina Nazarjanová — home"
            >
              <img src="/logo.png" alt="Kristina Nazarjanová" className="h-20 w-auto" />
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8 relative z-10">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.target)}
                  className="text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}

              <div className="flex items-center gap-2 ml-2">
                {/* Glass-style CTA buttons */}
                {[
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/kristina-nazarjanova/" },
                  { label: "GitHub", href: "https://github.com/krisssix" },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 text-sm text-foreground/80 hover:text-foreground rounded-xl transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.35)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                      boxShadow:
                        "inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -1px 0 rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.08)",
                      border: "1px solid rgba(255,255,255,0.5)",
                    }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden relative z-10 flex items-center justify-center w-11 h-11 rounded-xl transition-colors duration-200"
              style={{ background: "rgba(255,255,255,0.3)" }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>

          {/* Mobile dropdown — same glass treatment */}
          <div
            className={`md:hidden mt-2 overflow-hidden rounded-2xl transition-all duration-300 ${isMenuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
              }`}
            style={{
              backdropFilter: "blur(28px) saturate(180%)",
              WebkitBackdropFilter: "blur(28px) saturate(180%)",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.60) 0%, rgba(255,245,235,0.50) 100%)",
              border: "1px solid rgba(255,255,255,0.55)",
              boxShadow:
                "0 8px 32px -4px rgba(80,50,20,0.10), inset 0 1.5px 0 rgba(255,255,255,0.80)",
            }}
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => { scrollTo(link.target); setIsMenuOpen(false); }}
                  className="text-base text-foreground/70 hover:text-foreground px-4 py-2.5 rounded-xl transition-colors duration-200 text-left hover:bg-white/30"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex gap-3 mt-3 pt-3 border-t border-white/40">
                {[
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/kristina-nazarjanova/" },
                  { label: "GitHub", href: "https://github.com/krisssix" },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm text-foreground/80 hover:text-foreground rounded-xl transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.40)",
                      border: "1px solid rgba(255,255,255,0.55)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.75)",
                    }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}