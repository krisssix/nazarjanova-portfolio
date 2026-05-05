export default function Marquee() {
  const text = "CASE STUDIES  ·  DESIGN PROCESS  ·  UX RESEARCH  ·  LOGO DESIGN · BRANDING · UI DESIGN · WEB DESIGN · GRAPHIC DESIGN · ";

  return (
    <div className="bg-background border-y border-border overflow-hidden py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="text-sm tracking-[0.3em] text-muted-foreground font-medium mx-4"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
