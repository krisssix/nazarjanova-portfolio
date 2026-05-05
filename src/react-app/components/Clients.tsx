
interface Client {
  name: string;
  logo: string;
}

const corporate: Client[] = [
  { name: "RTVS / STVR", logo: "./images/logos/rtvs.png" },
  { name: "Ticketportal", logo: "./images/logos/ticketportal.png" },
  { name: "Mendel University", logo: "./images/logos/mendel.png" },
  { name: "Karlova univerzita", logo: "./images/logos/karlova-univerzita.png" },
  { name: "Správa železnic", logo: "./images/logos/sprava-zeleznic.png" },
  { name: "Praha 4", logo: "./images/logos/praha4.png" },
  { name: "NSZ", logo: "./images/logos/nsz.png" },
  //{ name: "Národní geoportál územního plánování", logo: "./images/logos/lion-white.svg" },
  { name: "Sukl", logo: "./images/logos/sukl.png" },

];

const freelance: Client[] = [
  { name: "Actosens", logo: "./images/logos/actosens.png" },
  { name: "PudlShop", logo: "./images/logos/pudlshop.png" },
  { name: "NataliCat", logo: "./images/logos/natalihair.png" },
  { name: "Na vlnách Valorantu", logo: "./images/logos/valorant.png" },
  { name: "ResinStudio", logo: "./images/logos/resinstudio.png" },
  { name: "WattTech", logo: "./images/logos/watttech.png" },
  { name: "Gym Permonik", logo: "./images/logos/logo.svg" },
  //{ name: "Delmonico1894", logo: "./images/logos/logo_delmonico1894.png" },

  //  { name: "Terkeit Lashes", logo: "./images/logos/terkeit.png" },

];

function ClientCard({ client }: { client: Client }) {
  return (
    <div className="group relative flex items-center justify-center w-full h-24 p-4 transition-all duration-500">
      <img
        src={client.logo}
        alt={`${client.name} logo`}
        className="max-w-[120px] max-h-[50px] object-contain opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
        loading="lazy"
        decoding="async"
      />
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-[10px] uppercase tracking-widest text-black/40 pointer-events-none whitespace-nowrap">
        {client.name}
      </span>
    </div>
  );
}

export default function Clients() {
  return (
    <section id="clients" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div data-reveal className="mb-20 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Trusted <span className="font-elegant italic">by</span>
          </h2>
          <p className="text-muted-foreground/60 max-w-lg mx-auto text-sm tracking-wide">
            Collaboration with companies and institutions on diverse design challenges.
          </p>
        </div>

        <div className="space-y-20">
          <div data-reveal data-delay="2" className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 items-center">
            {corporate.map((c) => (
              <ClientCard key={c.name} client={c} />
            ))}
          </div>

          <div className="flex items-center gap-6 opacity-20">
            <div className="flex-1 h-px bg-black" />
            <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Freelance & Side Projects</span>
            <div className="flex-1 h-px bg-black" />
          </div>

          <div data-reveal data-delay="3" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-10 items-center">
            {freelance.map((c) => (
              <ClientCard key={c.name} client={c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
