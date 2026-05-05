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
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
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

function ProjectCard({ project }: { project: Project }) {
  const navigate = useNavigate();

  return (
    <div 
      data-reveal 
      className="group flex flex-col cursor-pointer"
      onClick={() => navigate(`/projects/${project.id}`)}
    >
      {/* Image Container */}
      <div className="relative aspect-[1.5/1] rounded-2xl overflow-hidden mb-8 bg-gray-100 shadow-sm transition-shadow duration-500 group-hover:shadow-xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        {/* Tag */}
        <div className="mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full border border-border/60 text-[10px] tracking-[0.05em] font-medium text-muted-foreground uppercase">
            {project.subtitle}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-[26px] font-normal text-foreground leading-tight mb-4 group-hover:text-foreground/80 transition-colors">
          {project.title}
        </h3>

        {/* Description (Optional/Condensed) */}
        <p className="text-muted-foreground text-[15px] leading-relaxed font-light mb-6 line-clamp-3">
          {project.description}
        </p>

        {/* Link */}
        <div className="mt-auto">
          <span className="flex items-center gap-2 text-[13px] font-medium text-foreground group-hover:gap-3 transition-all duration-300">
            View Case Study
            <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </div>
  );
}
