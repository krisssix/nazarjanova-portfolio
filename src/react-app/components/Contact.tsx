import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { useParallaxMouse } from "../hooks/useParallaxMouse";

const links = [
  {
    href: "mailto:nazarjanovak@gmail.com",
    icon: Mail,
    label: "Get in Touch",
    external: false,
    gradient: "from-rose-100 to-amber-50",
    border: "border-rose-200/60",
  },
  {
    href: "https://www.linkedin.com/in/kristina-nazarjanova/",
    icon: Linkedin,
    label: "LinkedIn",
    external: true,
    gradient: "from-amber-50 to-orange-100",
    border: "border-amber-200/60",
  },
  {
    href: "https://github.com/krisssix",
    icon: Github,
    label: "GitHub",
    external: true,
    gradient: "from-emerald-50 to-teal-100",
    border: "border-emerald-200/60",
  },
];

export default function Contact() {
  const slow = useParallaxMouse(0.06, 0.05);
  const fast = useParallaxMouse(0.13, 0.08);

  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-gradient-to-br from-rose-50 via-amber-50 to-emerald-50">
      {/* Parallax blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl will-change-transform"
          style={{ transform: `translate(${slow.x * 110}px, ${slow.y * 110}px)` }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl will-change-transform"
          style={{ transform: `translate(${fast.x * 140}px, ${fast.y * 140}px)` }}
        />
        <div
          className="absolute top-1/2 left-2/3 w-56 h-56 bg-teal-100/40 rounded-full blur-2xl will-change-transform"
          style={{ transform: `translate(${fast.x * -100}px, ${fast.y * 80}px)` }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
          Let's <span className="font-elegant italic">connect</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <div className="flex flex-wrap justify-center gap-5">
          {links.map(({ href, icon: Icon, label, external, gradient, border }) => (
            <a
              key={label}
              href={href}
              {...(external && { target: "_blank", rel: "noopener noreferrer" })}
              className={`group flex items-center gap-3 px-8 py-4 bg-gradient-to-br ${gradient} border ${border} text-foreground rounded-xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
            >
              <Icon size={20} className="text-muted-foreground" />
              <span className="font-medium">{label}</span>
              <ArrowUpRight
                size={17}
                className="text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              />
            </a>
          ))}
        </div>

        {/* Decorative */}
        <div className="mt-16 flex justify-center" aria-hidden="true">
          <div className="font-elegant text-7xl italic text-foreground/[0.06] select-none">KN</div>
        </div>
      </div>
    </section>
  );
}