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
      className={`group relative flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-16 lg:gap-24 cursor-pointer`}
      onClick={() => navigate(`/projects/${project.id}`)}
    >
      {/* Project Image */}
      <div 
        data-reveal="mask"
        className="w-full lg:w-[58%] aspect-[16/10] overflow-hidden rounded-2xl shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-2 bg-white"
      >
        <img
          src={project.image}
          alt={`${project.title} mockup`}
          className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-1000 ease-out"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      {/* Content */}
      <div 
        data-reveal={isEven ? "right" : "left"}
        className="w-full lg:w-[38%] flex flex-col items-start text-left"
      >
        {/* Category Tag */}
        <div className="mb-6">
          <span className="px-5 py-2 border border-black/20 text-[10px] tracking-[0.2em] uppercase font-bold rounded-full text-black/60 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-500">
            {project.subtitle}
          </span>
        </div>

        <h3
          className="font-display text-4xl md:text-5xl lg:text-6xl text-black mb-6 leading-[1.1] tracking-tight group-hover:translate-x-2 transition-transform duration-500"
        >
          {project.title}
        </h3>

        <p className="text-xl text-black/60 mb-10 max-w-lg leading-relaxed font-light">
          {project.description}
        </p>

        <div
          className="inline-flex items-center gap-4 text-black text-[14px] font-bold uppercase tracking-[0.2em] group/link cursor-pointer"
        >
          <span className="relative">
            View Case Study
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-500" />
          </span>
          <ArrowRight size={20} className="transition-transform duration-500 group-hover/link:translate-x-2" />
        </div>
      </div>
    </article>
  );
}
