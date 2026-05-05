import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import { Project, projects } from "@/react-app/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div data-reveal className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Selected <span className="font-elegant italic">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my most impactful projects spanning UX research,
            product design, and development.
          </p>
        </div>

        <div className="space-y-32">
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
  const navigate = useNavigate();

  return (
    <article
      data-reveal={isEven ? "left" : "right"}
      tabIndex={0}
      className={`group relative flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-16 lg:gap-24 cursor-pointer`}
      onClick={() => navigate(`/projects/${project.id}`)}
    >
      {/* Project Image */}
      <div className="w-full lg:w-[58%] aspect-[16/10] overflow-hidden rounded-2xl shadow-sm transition-all duration-700 hover:shadow-lg">
        <img
          src={project.image}
          alt={`${project.title} mockup`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Content */}
      <div className="w-full lg:w-[38%] flex flex-col items-start text-left">
        {/* Category Tag */}
        <div className="mb-6">
          <span className="px-5 py-1.5 border border-black/40 text-[10px] tracking-[0.2em] uppercase font-bold rounded-full text-black/80">
            {project.subtitle}
          </span>
        </div>

        <h3
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/projects/${project.id}`);
          }}
          className="font-display text-3xl md:text-4xl lg:text-5xl text-black mb-6 leading-tight tracking-tight hover:underline decoration-1 underline-offset-8 cursor-pointer"
        >
          {project.title}
        </h3>

        <p className="text-lg text-black/60 mb-8 max-w-lg leading-relaxed font-light">
          {project.description}
        </p>

        <div
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/projects/${project.id}`);
          }}
          className="inline-flex items-center gap-2 text-black text-[13px] font-bold uppercase tracking-[0.1em] group/link cursor-pointer"
        >
          <span className="hover:underline underline-offset-4 decoration-2">View Case Study</span>
          <ArrowRight size={18} className="transition-transform duration-300 group-hover/link:translate-x-1" />
        </div>
      </div>
    </article>
  );
}
