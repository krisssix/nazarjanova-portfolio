import { useState } from "react";
import { Menu, X, Linkedin, Github } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";

import { getAssetPath } from "@/react-app/utils/paths";

const navLinks = [
  { label: "About Me", path: "/about", target: "about" },
  { label: "Projects", path: "/projects", target: "projects" },
  { label: "Contact", path: "", target: "contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNav = (link: { label: string; path: string; target: string }) => {
    setIsMenuOpen(false);

    if (link.target === "contact") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    if (link.path && location.pathname !== link.path) {
      navigate(link.path);
      window.scrollTo(0, 0);
    } else if (link.target) {
      const el = document.getElementById(link.target);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 pt-10 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Logotype */}
        <div className="w-48">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center hover:opacity-80 transition-opacity duration-200"
            aria-label="Kristina Nazarjanová — home"
          >
            <img src={getAssetPath("/logo-bw.png")} alt="Kristina Nazarjanová" className="h-20 w-auto object-contain" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center justify-center gap-12">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path && link.target !== "contact";
            return (
              <button
                key={link.label}
                onClick={() => handleNav(link)}
                className={`relative text-[15px] transition-all duration-300 pb-1 group/nav ${isActive
                  ? 'text-foreground font-medium'
                  : 'text-foreground/80 hover:text-foreground'
                  }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 w-full h-[1.2px] bg-foreground transition-transform duration-150 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover/nav:scale-x-100'}`} />
              </button>
            );
          })}
        </nav>

        {/* Right Nav (Socials) */}
        <div className="hidden md:flex w-48 justify-end items-center gap-5">
          <a
            href="https://www.linkedin.com/in/kristina-nazarjanova/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:opacity-70 transition-opacity"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} fill="currentColor" strokeWidth={0} />
          </a>
          <a
            href="https://github.com/krisssix"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:opacity-70 transition-opacity"
            aria-label="GitHub"
          >
            <Github size={24} strokeWidth={1.5} />
          </a>

        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-11 h-11 transition-colors duration-200 text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden absolute top-full left-4 right-4 mt-2 overflow-hidden rounded-2xl bg-white shadow-xl border border-border/50 transition-all duration-300 ${isMenuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="flex flex-col gap-1 p-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link)}
              className="text-base text-foreground/80 hover:text-foreground px-4 py-3 rounded-xl transition-colors duration-200 text-left hover:bg-black/5"
            >
              {link.label}
            </button>
          ))}
          <div className="mt-2 pt-2 border-t border-border/50 px-4 flex flex-col gap-1">
            <a
              href="https://github.com/krisssix"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-3 text-foreground/80 hover:text-foreground transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/kristina-nazarjanova/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-3 text-foreground/80 hover:text-foreground transition-colors"
            >
              <Linkedin size={20} fill="currentColor" strokeWidth={0} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}