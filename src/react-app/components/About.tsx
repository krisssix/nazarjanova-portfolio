import { Sparkles, Target, Lightbulb, Heart } from "lucide-react";

const skills = [
  {
    icon: Target,
    label: "UX Research",
    title: "UX Research",
    description: "User interviews, usability testing, pain point analysis, and persona development",
  },
  {
    icon: Sparkles,
    label: "Product Design",
    title: "Product Design",
    description: "Wireframing, prototyping, design systems, and visual design in Figma",
  },
  {
    icon: Lightbulb,
    label: "Problem Solving",
    title: "Problem Solving",
    description: "Translating complex requirements into intuitive user experiences",
  },
  {
    icon: Heart,
    label: "Collaboration",
    title: "Collaboration",
    description: "Working with developers, stakeholders, and cross-functional teams",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-background">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Content */}
          <div className="space-y-8">
            <div data-reveal>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
                About <span className="font-elegant italic">me</span>
              </h2>
              <div className="w-16 h-0.5 bg-foreground/30" />
            </div>

            <div data-reveal data-delay="2" className="space-y-5 text-muted-foreground leading-[1.75]">
              <p>
                Hi, I'm Kristina — a product designer based in Brno, Czech Republic, with a background in both design and frontend development.
                I believe that great design emerges from understanding people: their needs, frustrations, and aspirations.
              </p>
              <p>
                I specialize in complex workflow systems: backoffice tools, data-heavy dashboards, and enterprise applications where clarity isn't optional. My work spans from full UX research (interviews, personas, pain point mapping) through to implementation-ready Figma handoff — and sometimes the implementation itself.
              </p>
              <p>
                Most recently I led the design of a laboratory management system for environmental research at Mendel University, and a cashless payment backoffice for Ticketportal — working directly with development teams in both cases.
              </p>
              <p>
                I care about the gap between how software looks and how it actually works. That's where I spend most of my time.
              </p>
            </div>

            {/* Stats */}
            <div data-reveal data-delay="4" className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6">
              <div>
                <span className="font-heading text-3xl text-foreground">20</span>
                <p className="text-sm text-muted-foreground mt-1">User Interviews</p>
              </div>
              <div>
                <span className="font-heading text-3xl text-foreground">10+</span>
                <p className="text-sm text-muted-foreground mt-1">Devs Collaborated With</p>
              </div>
              <div>
                <span className="font-heading text-3xl text-foreground">35+</span>
                <p className="text-sm text-muted-foreground mt-1">Screens Shipped</p>
              </div>
              <div>
                <span className="font-heading text-3xl text-foreground">1</span>
                <p className="text-sm text-muted-foreground mt-1">System Live at Mendel Uni</p>
              </div>
            </div>
          </div>

          {/* Skills grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skill, i) => (
              <div
                key={skill.title}
                data-reveal="scale"
                data-delay={String(i + 1)}
                className="bg-card border border-border/30 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div role="img" aria-label={skill.label}>
                  <skill.icon className="w-8 h-8 text-rose-400 mb-4" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}