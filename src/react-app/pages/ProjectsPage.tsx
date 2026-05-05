import { useEffect, useState } from "react";
import Header from "@/react-app/components/Header";
import Footer from "@/react-app/components/Footer";
import Contact from "@/react-app/components/Contact";
import { ArrowRight, ArrowUp } from "lucide-react";

import { useNavigate } from "react-router";
import { Project, projects } from "@/react-app/data/projects";

export default function ProjectsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`min-h-screen bg-[#EDEDED] transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      <Header />
      
      <main className="pt-40 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div data-reveal className="mb-24">
            <h1 className="text-5xl md:text-7xl font-display text-foreground mb-6">
              Selected <span className="font-elegant italic">Projects</span>
            </h1>
            <p className="text-muted-foreground text-xl md:text-2xl font-light max-w-2xl leading-relaxed">
              A curated collection of digital experiences, focusing on 
              <span className="text-foreground"> user-centric design</span>, 
              information architecture, and visual storytelling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-32">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </main>

      <Contact />
      <Footer />

      {/* Floating Scroll Top */}
      <button
        onClick={scrollToTop}
        className={`fixed right-8 bottom-8 w-12 h-12 flex items-center justify-center rounded-full border border-border/50 bg-white/80 backdrop-blur-sm transition-all duration-300 z-50 hover:bg-white hover:shadow-lg ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={20} className="text-foreground" />
      </button>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const navigate = useNavigate();
  const staggerDelay = (index % 4) + 1;

  return (
    <div 
      className="group flex flex-col cursor-pointer"
      onClick={() => navigate(`/projects/${project.id}`)}
    >
      {/* Image Container */}
      <div 
        data-reveal="mask"
        data-delay={staggerDelay}
        className="relative aspect-[1.5/1] rounded-2xl overflow-hidden mb-10 bg-white shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-2"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 group-hover:rotate-1"
        />
        {/* Overlay gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      {/* Content */}
      <div 
        data-reveal 
        data-delay={staggerDelay + 1}
        className="flex flex-col flex-1"
      >
        {/* Tag */}
        <div className="mb-5">
          <span className="inline-block px-4 py-1.5 rounded-full border border-border/80 text-[10px] tracking-[0.1em] font-bold text-muted-foreground uppercase bg-white/50 backdrop-blur-sm group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500">
            {project.subtitle}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-3xl md:text-[32px] font-normal text-foreground leading-tight mb-4 group-hover:translate-x-1 transition-transform duration-500">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-lg leading-relaxed font-light mb-8 line-clamp-3 max-w-xl">
          {project.description}
        </p>

        {/* Link */}
        <div className="mt-auto">
          <div className="inline-flex items-center gap-3 text-[14px] font-bold uppercase tracking-wider text-foreground group-hover:gap-5 transition-all duration-500">
            <span className="relative">
              View Case Study
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-foreground group-hover:w-full transition-all duration-500" />
            </span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
}
