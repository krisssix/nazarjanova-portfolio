const clients = [
  { name: "RTVS / STVR", logo: "./images/logos/rtvs.png" },
  { name: "Ticketportal", logo: "./images/logos/ticketportal.png" },
  { name: "Mendel University", logo: "./images/logos/mendel.png" },
];

export default function Clients() {
  return (
    <section
      id="clients"
      className="py-20 bg-gradient-to-b from-background to-cream/40"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Trusted <span className="font-elegant italic">by</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Companies and institutions I've had the pleasure to design for.
          </p>
        </div>

        {/* Logo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 items-center justify-items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group flex flex-col items-center gap-4 p-6 rounded-xl
                         hover:bg-warm-white/60 hover:shadow-md
                         transition-all duration-300"
            >
              {/* Logo placeholder — will render actual image once logos are added */}
              <div className="w-28 h-28 rounded-xl bg-warm-white border border-border/40 flex items-center justify-center overflow-hidden
                              group-hover:border-brown-light/30 group-hover:shadow-sm transition-all duration-300">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-w-[80%] max-h-[80%] object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    // Hide the broken image and show initials instead
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling;
                    if (fallback) (fallback as HTMLElement).style.display = "flex";
                  }}
                />
                {/* Fallback initials — visible until logo images are added */}
                <span
                  className="font-heading text-2xl text-brown/40 group-hover:text-brown/70 transition-colors duration-300 items-center justify-center"
                  style={{ display: "flex" }}
                >
                  {client.name
                    .split(/[\s/]+/)
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </span>
              </div>

              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
