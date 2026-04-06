import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      {/* Floating navbar pill */}
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center justify-between px-6 py-3 bg-background/85 backdrop-blur-md border border-border/60 rounded-2xl shadow-sm transition-shadow duration-300">
          {/* Logotype */}
          <a
            href="#"
            className="font-heading text-xl text-foreground hover:text-muted-foreground transition-colors duration-200 tracking-tight"
            aria-label="Kristina Nazarjanová — home"
          >
            Kristina Nazarjanová
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3 ml-2">
              <a
                href="https://www.linkedin.com/in/kristina-nazarjanova/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 border border-foreground/50 text-sm rounded-lg hover:bg-foreground hover:text-background transition-all duration-200"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/krisssix"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 border border-foreground/50 text-sm rounded-lg hover:bg-foreground hover:text-background transition-all duration-200"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Mobile: hamburger — min 44×44 px tap target */}
          <button
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl hover:bg-muted/60 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile Navigation — animated */}
        <div
          className={`md:hidden mt-2 overflow-hidden rounded-2xl border border-border/60 bg-background/95 backdrop-blur-md transition-all duration-300 ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 border-none"
          }`}
        >
          <div className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base text-muted-foreground hover:text-foreground hover:bg-muted/40 px-4 py-2.5 rounded-xl transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 mt-3 pt-3 border-t border-border/50">
              <a
                href="https://www.linkedin.com/in/kristina-nazarjanova/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-foreground/50 text-sm rounded-lg hover:bg-foreground hover:text-background transition-all duration-200"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/krisssix"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-foreground/50 text-sm rounded-lg hover:bg-foreground hover:text-background transition-all duration-200"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}