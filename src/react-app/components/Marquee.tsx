export default function Marquee() {
  const text = "CASE STUDIES  ·  DESIGN PROCESS  ·  UX RESEARCH  ·  ";
  
  return (
    <div className="bg-cream border-y border-border overflow-hidden py-4">
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
