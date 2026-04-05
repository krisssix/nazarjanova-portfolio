export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-elegant text-lg italic text-muted-foreground">
            Kristina Nazarjanová
          </p>

          <p className="text-sm text-muted-foreground">
            © {currentYear} All rights reserved
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/kristyna-nazarjanova/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Kristina's LinkedIn profile"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/krisssix"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Kristina's GitHub profile"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}