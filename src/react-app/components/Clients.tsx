interface Client {
  name: string;
  logo: string;
}

const corporate: Client[] = [
  { name: "RTVS / STVR", logo: "./images/logos/rtvs.png" },
  { name: "Ticketportal", logo: "./images/logos/ticketportal.png" },
  { name: "Mendel University", logo: "./images/logos/mendel.png" },
  { name: "Karlova univerzita", logo: "./images/logos/karlova-univerzita.png" },
  { name: "Správa železnic", logo: "./images/logos/sprava-zeleznic.jpg" },
  { name: "Praha 4", logo: "./images/logos/praha4.png" },
  { name: "NSZ", logo: "./images/logos/nsz.png" },
  //{ name: "Národní geoportál územního plánování", logo: "./images/logos/lion-white.svg" },
  { name: "Sukl", logo: "./images/logos/sukl.png" },

];

const freelance: Client[] = [
  { name: "Actosens", logo: "./images/logos/actosens.png" },

  { name: "Rooster Riders", logo: "./images/logos/rr.svg" },
  { name: "Na vlnách Valorantu", logo: "./images/logos/valorant.png" },
  { name: "PudlShop", logo: "./images/logos/pudlshop.png" },
  { name: "ResinStudio", logo: "./images/logos/resinstudio.webp" },
  { name: "WattTech", logo: "./images/logos/watttech.png" },
  { name: "Gym Permonik", logo: "./images/logos/logo.svg" },
  //{ name: "Delmonico1894", logo: "./images/logos/logo_delmonico1894.png" },
  { name: "NataliCat", logo: "./images/logos/natalihair.png" },

  //  { name: "Terkeit Lashes", logo: "./images/logos/terkeit.png" },

];

// Logos that are white / light-coloured and need a dark card background
const darkBgLogos = new Set(["./images/logos/lion-white.svg", "./images/logos/watttech.png", "./images/logos/logo_delmonico1894.png", "./images/logos/natalihair.png", "./images/logos/logo.svg", "./images/logos/rr.png"]);

function ClientCard({ client }: { client: Client }) {
  const needsDark = darkBgLogos.has(client.logo);

  return (
    <div
      className="group relative flex flex-col items-center gap-3 p-5 rounded-xl
                 hover:bg-warm-white/60 hover:shadow-md
                 transition-all duration-300"
    >
      <div
        className={`w-24 h-24 rounded-xl border border-border/40
                    flex items-center justify-center overflow-hidden
                    group-hover:border-brown-light/30 group-hover:shadow-sm
                    transition-all duration-300
                    ${needsDark ? "bg-black" : "bg-warm-white"}`}
      >
        <img
          src={client.logo}
          alt={`${client.name} logo`}
          className="max-w-[80%] max-h-[80%] object-contain opacity-70
                     group-hover:opacity-100 transition-opacity duration-300"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = "none";
            const fallback = target.nextElementSibling;
            if (fallback) (fallback as HTMLElement).style.display = "flex";
          }}
        />
        {/* Fallback initials — hidden by default, shown only on img error */}
        <span
          className="font-heading text-xl text-brown/40
                     group-hover:text-brown/70 transition-colors duration-300
                     items-center justify-center"
          style={{ display: "none" }}
        >
          {client.name
            .split(/[\s/]+/)
            .map((w) => w[0])
            .join("")
            .slice(0, 2)
            .toUpperCase()}
        </span>
      </div>

      {/* Tooltip — visible on hover */}
      <span
        className="absolute -bottom-1 left-1/2 -translate-x-1/2 translate-y-full
                   pointer-events-none whitespace-nowrap
                   bg-foreground text-background text-[11px] font-medium
                   px-2.5 py-1 rounded-md shadow-md
                   opacity-0 group-hover:opacity-100
                   scale-95 group-hover:scale-100
                   transition-all duration-200 z-10"
      >
        {client.name}
      </span>
    </div>
  );
}


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

        {/* Corporate / institutional */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-start justify-items-center">
          {corporate.map((c) => (
            <ClientCard key={c.name} client={c} />
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-12">
          <div className="flex-1 h-px bg-border/60" />
          <span className="text-xs tracking-widest uppercase text-muted-foreground/60">
            Freelance &amp; side projects
          </span>
          <div className="flex-1 h-px bg-border/60" />
        </div>

        {/* Freelance / smaller */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-start justify-items-center">
          {freelance.map((c) => (
            <ClientCard key={c.name} client={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
