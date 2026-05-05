import { Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-black mb-10" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-lg text-foreground/70">
            <span>© {currentYear} Kristina Nazarjanová</span>
            <span className="hidden md:inline text-foreground/30">|</span>
            <div className="flex items-center gap-1">
              <span>Get In Touch</span>
              <a href="mailto:nazarjanovak@gmail.com" className="text-foreground border-b border-foreground/30 hover:border-foreground transition-all">
                nazarjanovak@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/kristina-nazarjanova/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:opacity-70 transition-opacity"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} fill="currentColor" strokeWidth={0} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}