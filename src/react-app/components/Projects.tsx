import { ArrowUpRight, Clock, Users, Layers } from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  duration: string;
  team?: string;
  description: string;
  challenges: string;
  figmaUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  tags: string[];
  gradient: string;
  image: string;
}

const projects: Project[] = [
  {
    id: "rtvs",
    title: "RTVS Redesign",
    subtitle: "Television Portal Transformation",
    role: "UX Designer",
    duration: "8 months",
    description:
      "Complete redesign of the Slovak public television portal during its transition from RTVS to STVR. Conducted comprehensive UX analysis including user interviews, pain point identification, and persona development.",
    challenges:
      "Navigating disagreements between multiple stakeholders while maintaining user-centered design principles.",
    figmaUrl:
      "https://www.figma.com/design/YGPl0XwzXFz4WMtHdEo1Tl/RTVS---Final-v%C3%BDstupy",
    tags: ["UX Research", "User Interviews", "Personas", "Wireframing"],
    gradient: "from-rose-100 to-amber-50",
    image: "/images/project-rtv.jpg",
  },
  {
    id: "ticketportal",
    title: "Ticket Portal Backoffice",
    subtitle: "Enterprise Management System",
    role: "Lead Designer",
    duration: "3 months",
    team: "1 designer, 4 developers",
    description:
      "Designed the complete backoffice system for Ticketportal including inventory management, catering operations, partner collaboration tools, and form builders.",
    challenges:
      "Creating an intuitive interface for complex workflows across multiple business domains.",
    figmaUrl:
      "https://www.figma.com/design/JVFaiTlOGdcpfpQ4ehaZgo/Ticketportal-backoffice?node-id=1195-260768",
    tags: ["Product Design", "Design Systems", "Enterprise UX", "Prototyping"],
    gradient: "from-amber-50 to-orange-100",
    image: "/images/ticketportal.jpeg",
  },
  {
    id: "lims",
    title: "LIMS — Laboratory Management",
    subtitle: "Master's Thesis Project",
    role: "Lead Designer & Developer & Analyst",
    duration: "Academic Project",
    team: "Supervisor: Ing. David Procházka, Ph.D.",
    description:
      "Laboratory Information Management System designed for research on plastic-eating organisms. A complete end-to-end project including research, design, and development — contributing to environmental sustainability.",
    challenges:
      "Balancing academic requirements with real-world usability for scientific researchers.",
    liveUrl: "https://nazarjanova.my.canva.site/lims",
    githubUrl: "https://github.com/krisssix/lims-project",
    tags: ["Full Stack", "UX Design", "Development", "Research"],
    gradient: "from-emerald-50 to-teal-100",
    image: "/images/lims.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Selected <span className="font-elegant italic">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my most impactful projects spanning UX research,
            product design, and development.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <article
      tabIndex={0}
      className={`group relative bg-gradient-to-br ${project.gradient} rounded-2xl overflow-hidden border border-border/50 hover:border-brown-light/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none`}
    >
      <div
        className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 p-8 lg:p-12`}
      >
        {/* Content */}
        <div className="flex-1 space-y-6">
          <div>
            <span className="text-xs tracking-widest text-muted-foreground uppercase">
              {project.subtitle}
            </span>
            <h3 className="font-display text-3xl md:text-4xl text-foreground mt-2">
              {project.title}
            </h3>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Layers size={16} className="text-brown-light" />
              <span>{project.role}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-brown-light" />
              <span>{project.duration}</span>
            </div>
            {project.team && (
              <div className="flex items-center gap-2">
                <Users size={16} className="text-brown-light" />
                <span>{project.team}</span>
              </div>
            )}
          </div>

          {/* Challenge */}
          <div className="bg-warm-white/50 rounded-xl p-4 border border-border/30">
            <span className="text-xs tracking-widest text-muted-foreground uppercase">
              Key Challenge
            </span>
            <p className="text-foreground mt-1">{project.challenges}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs bg-brown/15 text-foreground rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4 pt-4">
            {project.figmaUrl && (
              <a
                href={project.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brown text-warm-white text-sm hover:bg-brown-light transition-colors rounded-lg group/btn"
              >
                View in Figma
                <ArrowUpRight
                  size={16}
                  className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brown text-warm-white text-sm hover:bg-brown-light transition-colors rounded-lg group/btn"
              >
                Live Demo
                <ArrowUpRight
                  size={16}
                  className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-brown text-brown text-sm hover:bg-brown hover:text-warm-white transition-colors rounded-lg group/btn"
              >
                GitHub
                <ArrowUpRight
                  size={16}
                  className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                />
              </a>
            )}
          </div>
        </div>

        {/* Project Image */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-[4/3] rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300">
            <img
              src={project.image}
              alt={`${project.title} mockup`}
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </article>
  );
}
