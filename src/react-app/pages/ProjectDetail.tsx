import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import Header from "@/react-app/components/Header";
import Footer from "@/react-app/components/Footer";
import Contact from "@/react-app/components/Contact";
import { projects } from "@/react-app/data/projects";
import { getAssetPath } from "@/react-app/utils/paths";
import {
  ArrowLeft,
  Figma,
  Github,
  ArrowRight,
  Check,
  Minus,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { useRevealObserver } from "@/react-app/hooks/useScrollReveal";

type SectionChapterProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  dataReveal?: boolean;
  variant?: "default" | "soft" | "white";
};

const SectionChapter = ({
  eyebrow,
  title,
  description,
  children,
  className = "",
  dataReveal = true,
  variant = "default",
}: SectionChapterProps) => {
  const variantClass = {
    default: "",
    soft: "bg-[#EEECEA]/50 border-y border-black/[0.04]",
    white: "bg-white border-y border-black/[0.05]",
  }[variant];

  return (
    <section
      data-reveal={dataReveal ? true : undefined}
      className={`py-20 md:py-28 ${variantClass} ${className}`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10 max-w-3xl">
          <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/35 font-bold mb-4 block">
            {eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground leading-[1.08] mb-5">
            {title}
          </h2>
          {description && (
            <p className="text-base md:text-lg text-foreground/55 leading-relaxed font-light max-w-2xl">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

const SoftCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-2xl border border-black/[0.06] shadow-sm hover:shadow-md transition-shadow duration-300 ${className}`}>
    {children}
  </div>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/30 mb-2.5 font-bold">
    {children}
  </p>
);

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.06] text-[11px] font-medium text-foreground/50 tracking-wide">
    {children}
  </span>
);

const getStateIcon = (title: string) => {
  const lower = title.toLowerCase();

  if (lower.includes("progress")) {
    return (
      <div className="flex gap-1.5">
        <span className="h-1.5 w-5 rounded-full bg-emerald-400" />
        <span className="h-1.5 w-5 rounded-full bg-black/10" />
        <span className="h-1.5 w-5 rounded-full bg-black/10" />
      </div>
    );
  }

  if (lower.includes("error")) {
    return <AlertCircle size={18} className="text-red-400" />;
  }

  if (lower.includes("success")) {
    return <Check size={18} className="text-emerald-500" />;
  }

  if (lower.includes("loading")) {
    return <Loader2 size={18} className="text-foreground/35" />;
  }

  return <Minus size={18} className="text-foreground/25" />;
};

export default function ProjectDetail() {
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);

  useRevealObserver();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, [id]);

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F6F6F4]">
        <div className="text-center">
          <h1 className="text-4xl font-display mb-4">Project not found</h1>
          <Link
            to="/projects"
            className="text-foreground/60 hover:text-foreground flex items-center gap-2 justify-center"
          >
            <ArrowLeft size={16} /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }



  return (
    <div className={`bg-[#F6F6F4] min-h-screen text-foreground selection:bg-black selection:text-white ${isLoaded ? "is-loaded" : ""}`}>
      <Header />

      <main className="pt-32 md:pt-40 pb-24 overflow-hidden">
        {/* Hero & Project Header Combined */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <div className="relative w-full h-[70vh] min-h-[500px] bg-[#0A0A0A] rounded-[40px] overflow-hidden group shadow-2xl">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={getAssetPath(project.image)}
              alt={project.title}
              className="w-full h-full object-cover opacity-50 transition-transform duration-[3s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </div>

          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-12 lg:px-20 lg:py-16">
            {/* Top Bar */}
            <div data-reveal data-delay="1">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-black text-[12px] font-bold shadow-lg hover:bg-white transition-all"
              >
                <ArrowLeft size={14} />
                All projects
              </Link>
            </div>

            {/* Bottom Content */}
            <div className="max-w-5xl">
              <div data-reveal data-delay="2" className="mb-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-[10px] tracking-[0.25em] font-bold text-white/80 uppercase">
                  {project.subtitle}
                </span>
              </div>

              <h1 data-reveal data-delay="3" className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.05] tracking-tight mb-8 max-w-4xl drop-shadow-xl">
                {project.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Floating Metadata Card */}
        <div
          data-reveal
          data-delay="4"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[90%] max-w-5xl z-20"
        >
          <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-black/[0.04] overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-black/[0.05]">
                <div className="p-8 md:p-10">
                  <Eyebrow>Role</Eyebrow>
                  <p className="text-[14px] font-bold text-black">{project.role}</p>
                </div>
                <div className="p-8 md:p-10">
                  <Eyebrow>Duration</Eyebrow>
                  <p className="text-[14px] font-bold text-black">{project.duration}</p>
                </div>
                <div className="p-8 md:p-10">
                  <Eyebrow>{project.team ? "Team" : "Platform"}</Eyebrow>
                  <p className="text-[14px] font-bold text-black">{project.team || "Mobile app"}</p>
                </div>
                <div className="p-8 md:p-10">
                  <Eyebrow>Links</Eyebrow>
                  <div className="flex flex-wrap gap-x-5 gap-y-2">
                    {project.figmaUrl && (
                      <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[13px] text-black/40 hover:text-black transition-colors font-medium">
                        <Figma size={12} /> Figma
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[13px] text-black/40 hover:text-black transition-colors font-medium">
                        <Github size={12} /> Github
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Summary Spacing */}
        <div className="pt-32 pb-16 px-6 max-w-4xl mx-auto" data-reveal data-delay="5">
          <p className="text-xl md:text-2xl text-foreground/60 leading-relaxed font-light">
            {project.content.summary ||
              "A case study focused on turning complex digital workflows into clearer, more consistent, and easier-to-use product experiences."}
          </p>
        </div>

        {/* Snapshot */}
        {project.content.snapshot && (
          <section data-reveal className="max-w-5xl mx-auto px-6 mb-24 md:mb-28">
            <div className="grid grid-cols-1 md:grid-cols-6 border-y border-black/[0.055] -mr-px -mb-px overflow-hidden">
              {project.content.snapshot.map((item, idx) => {
                // Ensure layout alignment by using consistent spans (total 6 per row)
                const isOutcome = item.key === "Outcome";
                const isUXFocus = item.key === "UX Focus";
                const spanClass = isOutcome ? "md:col-span-6" : isUXFocus ? "md:col-span-4" : "md:col-span-2";
                
                return (
                  <div
                    key={idx}
                    data-reveal
                    data-delay={idx + 1}
                    className={`py-8 md:py-10 px-0 md:px-8 border-b border-r border-black/[0.055] ${spanClass}`}
                  >
                    <Eyebrow>{item.key}</Eyebrow>
                    <p className={`${(isUXFocus || isOutcome) ? "text-lg md:text-xl font-light" : "text-[15px] font-medium"} text-foreground/72 leading-relaxed`}>
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* About */}
        <SectionChapter eyebrow="Overview" title="About the project" variant="soft">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-start">
            <p className="text-lg text-foreground/65 leading-relaxed font-light whitespace-pre-line">
              {project.content.about}
            </p>
            <div className="space-y-3">
              {project.tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)}
              {project.figmaUrl && (
                <div className="pt-2">
                  <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground/50 hover:text-foreground border border-black/10 rounded-full px-4 py-2 hover:border-black/20 transition-all">
                    <Figma size={13} /> Open in Figma
                  </a>
                </div>
              )}
            </div>
          </div>
        </SectionChapter>

        {/* Challenge / Solution */}
        <section data-reveal className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-10 md:p-12 bg-white rounded-2xl border border-black/[0.06] shadow-sm border-t-2 border-t-red-400/60">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <span className="text-[11px] uppercase tracking-widest font-bold text-red-400/70">The Challenge</span>
              </div>
              <p className="text-base text-foreground/60 leading-relaxed font-light">
                {project.content.problem}
              </p>
            </div>
            <div className="p-10 md:p-12 bg-white rounded-2xl border border-black/[0.06] shadow-sm border-t-2 border-t-emerald-400/60">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-[11px] uppercase tracking-widest font-bold text-emerald-500/70">The Solution</span>
              </div>
              <p className="text-base text-foreground/60 leading-relaxed font-light">
                {project.content.solution}
              </p>
            </div>
          </div>
        </section>

        {/* Optional Before / After: place earlier so the story gets visual faster */}
        {project.content.conceptualTransformation && (
          <SectionChapter eyebrow="Before → After" title="What changed" variant="white">
            <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-10 items-stretch">
              <SoftCard className="p-10 md:p-12">
                <Eyebrow>Before</Eyebrow>
                <ul className="space-y-4 mt-7">
                  {project.content.conceptualTransformation.before.map((item, idx) => (
                    <li key={idx} className="flex gap-4 text-[16px] text-foreground/45 leading-relaxed font-light">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-400/60 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </SoftCard>

              <div className="hidden md:flex items-center justify-center">
                <div className="h-12 w-12 rounded-full bg-black text-white flex items-center justify-center shadow-lg">
                  <ArrowRight size={18} />
                </div>
              </div>

              <SoftCard className="p-10 md:p-12">
                <Eyebrow>After</Eyebrow>
                <ul className="space-y-4 mt-7">
                  {project.content.conceptualTransformation.after.map((item, idx) => (
                    <li key={idx} className="flex gap-4 text-[16px] text-foreground/75 leading-relaxed font-medium">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </SoftCard>
            </div>
          </SectionChapter>
        )}

        {/* Product Context */}
        {project.content.productContext && (
          <SectionChapter eyebrow="Ecosystem" title="Product Context" description={project.content.productContext.text}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
              {project.content.productContext.cards.map((card, idx) => (
                <SoftCard key={idx} className="p-8 group hover:-translate-y-1 transition-transform duration-300">
                  <span className="text-4xl font-display text-black/[0.055] block mb-7">0{idx + 1}</span>
                  <h4 className="text-[15px] font-bold mb-3">{card.title}</h4>
                  <p className="text-[14px] text-foreground/50 leading-relaxed font-light">{card.description}</p>
                </SoftCard>
              ))}
            </div>
          </SectionChapter>
        )}

        {/* Research */}
        {project.content.research && (
          <SectionChapter eyebrow="Evidence" title="Research & Audit" description={project.content.research.text} variant="soft">
            <div className="grid md:grid-cols-2 gap-px bg-black/[0.055] border border-black/[0.055] rounded-[36px] overflow-hidden mt-14">
              {(project.content.research.cards || project.content.research.methods || []).map((card, idx) => (
                <div key={idx} data-reveal data-delay={idx + 1} className="p-9 md:p-10 bg-white hover:bg-[#FAFAF8] transition-colors">
                  <div className="flex items-start gap-5">
                    <div className="w-9 h-9 rounded-full bg-black/[0.045] flex items-center justify-center text-[11px] font-bold text-black/40">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-[16px] font-bold mb-2">{card}</h4>
                      <p className="text-[14px] text-foreground/45 leading-relaxed font-light">
                        {idx === 0
                          ? "Reviewed structure, labels, entry points, and user orientation."
                          : idx === 1
                            ? "Checked small-screen behavior, spacing, and interaction comfort."
                            : idx === 2
                              ? "Reviewed accessibility, focus behavior, contrast, and readable hierarchy."
                              : "Compared repeated components, patterns, states, and visual consistency."}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SectionChapter>
        )}

        {/* Core problems */}
        {project.content.problemDetails && (
          <SectionChapter eyebrow="Friction Points" title="Core UX Problems">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-10">
              {project.content.problemDetails.map((prob, idx) => (
                <SoftCard key={idx} className="p-9 md:p-10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-red-400/45" />
                  <p className="text-[11px] uppercase tracking-[0.2em] text-red-400/80 font-bold mb-6">Problem 0{idx + 1}</p>
                  <h4 className="text-xl font-bold mb-4">{prob.title}</h4>
                  <p className="text-[16px] text-foreground/52 leading-relaxed font-light">{prob.description}</p>
                </SoftCard>
              ))}
            </div>
          </SectionChapter>
        )}

        {/* Questions */}
        {project.content.questions && (
          <section data-reveal className="max-w-5xl mx-auto px-6 py-14">
            <div className="bg-black rounded-2xl p-10 md:p-14">
              <Eyebrow><span className="text-white/40">Design questions</span></Eyebrow>
              <p className="text-white/50 text-sm mb-8">The interface needed to answer these clearly and fast.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.content.questions.map((q, idx) => (
                  <div key={idx} className="flex items-start gap-4 bg-white/[0.05] rounded-xl p-5">
                    <span className="mt-0.5 text-[11px] font-bold text-white/25 w-5 flex-shrink-0">0{idx + 1}</span>
                    <p className="text-white/75 text-sm leading-relaxed font-light">{q}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Process */}
        {(project.content.process || project.content.goals) && (
          <SectionChapter eyebrow="Workflow" title="Design Process" variant="white">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {(project.content.process || project.content.goals).map((step: any, idx: number) => (
                <div key={idx} data-reveal data-delay={idx + 1} className="p-7 bg-[#F6F6F4] rounded-2xl border border-black/[0.05]">
                  <span className="text-3xl font-display text-black/[0.07] block mb-5 leading-none">0{idx + 1}</span>
                  <h4 className="text-[15px] font-semibold mb-2">{step.title}</h4>
                  <p className="text-[13px] text-foreground/45 leading-relaxed font-light">{step.description}</p>
                </div>
              ))}
            </div>
          </SectionChapter>
        )}

        {/* My Role */}
        <SectionChapter eyebrow="Contribution" title="My Role">
          <p className="text-lg md:text-xl text-foreground/66 leading-relaxed font-light mb-14 whitespace-pre-line max-w-3xl">
            {project.content.roleDescription ||
              "I worked on the analysis and redesign of several core user flows, with a focus on usability, consistency, accessibility, and scalable interaction patterns. My role included reviewing existing journeys, identifying UX issues, proposing improved structures, and designing clearer end-to-end flows."}
          </p>
          {project.content.responsibilities && (
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4 max-w-3xl">
              {project.content.responsibilities.map((item, idx) => (
                <div key={idx} data-reveal data-delay={(idx % 4) + 1} className="flex items-start gap-4 text-[15px] text-foreground/56 font-light">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black/18 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          )}
        </SectionChapter>

        {/* UX Approach */}
        {project.content.approach && (
          <SectionChapter eyebrow="Methodology" title="UX Approach" variant="soft">
            <div className="relative space-y-20 md:space-y-28">
              <div className="absolute left-[27px] top-4 bottom-4 w-px bg-black/[0.07] hidden md:block" />
              {project.content.approach.map((item, idx) => (
                <div key={idx} data-reveal className="relative md:grid md:grid-cols-[80px_1fr] md:gap-8">
                  <div className="hidden md:flex relative z-10 w-14 h-14 rounded-full bg-white border border-black/10 items-center justify-center text-lg font-display shadow-sm">
                    {idx + 1}
                  </div>
                  <div className="max-w-3xl">
                    <Eyebrow>Step 0{idx + 1}</Eyebrow>
                    <h3 className="text-2xl md:text-3xl font-display mb-5">{item.title}</h3>
                    <p className="text-[17px] md:text-lg text-foreground/58 leading-relaxed font-light mb-7">{item.description}</p>
                    <div className="bg-white p-7 md:p-8 rounded-3xl border border-black/[0.055] border-l-4 border-l-emerald-400 shadow-sm max-w-2xl">
                      <Eyebrow>Design decision</Eyebrow>
                      <p className="text-[15px] md:text-[16px] text-foreground/70 leading-relaxed font-light italic">“{item.decision}”</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SectionChapter>
        )}

        {/* Architecture */}
        {project.content.architecture && (
          <SectionChapter eyebrow="Structure" title="Information Architecture">
            <div className="grid md:grid-cols-3 gap-8 md:gap-10 mt-8">
              {project.content.architecture.map((section, idx) => (
                <SoftCard key={idx} className="p-8 md:p-9">
                  <Eyebrow>{section.title}</Eyebrow>
                  <div className="flex flex-col gap-3 mt-7">
                    {section.items.map((item, iidx) => (
                      <div key={iidx} className="group flex items-center gap-3">
                        <span className="w-6 h-px bg-black/10 group-hover:w-8 group-hover:bg-black/30 transition-all" />
                        <span className="px-4 py-2.5 bg-[#F6F6F4] rounded-full border border-black/[0.045] text-[14px] text-foreground/70 font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </SoftCard>
              ))}
            </div>
          </SectionChapter>
        )}

        {/* Modules */}
        {project.content.modules && (
          <SectionChapter eyebrow="System" title="Key Modules" variant="white">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
              {project.content.modules.map((mod, idx) => (
                <SoftCard key={idx} className={`p-7 md:p-8 ${idx < 3 ? "lg:col-span-2" : ""}`}>
                  <Eyebrow>{idx < 3 ? "Primary area" : "Supporting area"}</Eyebrow>
                  <h4 className="text-[16px] font-bold mb-3">{mod.title}</h4>
                  <p className="text-[14px] text-foreground/50 leading-relaxed font-light">{mod.description}</p>
                </SoftCard>
              ))}
            </div>
          </SectionChapter>
        )}

        {/* Features / States */}
        {project.content.features && (
          <SectionChapter eyebrow="Interaction" title={project.content.features.title} description={project.content.features.description}>
            <div className="grid sm:grid-cols-2 gap-5 mt-14">
              {project.content.features.items.map((item, idx) => (
                <SoftCard key={idx} className="p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-10 w-10 rounded-2xl bg-[#F6F6F4] border border-black/[0.04] flex items-center justify-center">
                      {getStateIcon(item.title)}
                    </div>
                    <h4 className="text-[16px] font-bold">{item.title}</h4>
                  </div>
                  <p className="text-[14px] text-foreground/50 leading-relaxed font-light">{item.description}</p>
                </SoftCard>
              ))}
            </div>
          </SectionChapter>
        )}

        {/* Data Table Design */}
        {project.content.dataTableDesign && (
          <SectionChapter eyebrow="Data" title="Data Table Design" description={project.content.dataTableDesign.text} variant="soft">
            <div className="grid sm:grid-cols-2 gap-5 mt-14">
              {project.content.dataTableDesign.cards.map((card, idx) => (
                <SoftCard key={idx} className="p-8 md:p-10">
                  <h4 className="text-[16px] font-bold mb-4">{card.title}</h4>
                  <p className="text-[14px] text-foreground/50 leading-relaxed font-light">{card.description}</p>
                </SoftCard>
              ))}
            </div>
          </SectionChapter>
        )}

        {/* Forms */}
        {project.content.formsDetail && (
          <SectionChapter eyebrow="Flows" title="Forms & Detail Pages" description={project.content.formsDetail.text}>
            <div className="grid sm:grid-cols-2 gap-5 mt-14">
              {project.content.formsDetail.cards.map((card, idx) => (
                <SoftCard key={idx} className="p-8 md:p-10">
                  <h4 className="text-[16px] font-bold mb-4">{card.title}</h4>
                  <p className="text-[14px] text-foreground/50 leading-relaxed font-light">{card.description}</p>
                </SoftCard>
              ))}
            </div>
          </SectionChapter>
        )}

        {/* Dashboard */}
        {project.content.dashboardDetail && (
          <SectionChapter eyebrow="Monitoring" title="Dashboard & Reporting" description={project.content.dashboardDetail.text} variant="white">
            <SoftCard className="p-10 md:p-14 mt-14">
              <Eyebrow>Focus Areas</Eyebrow>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 mt-8">
                {project.content.dashboardDetail.focusAreas.map((item, idx) => (
                  <div key={idx} data-reveal data-delay={(idx % 4) + 1} className="flex items-center gap-3 text-[14px] text-foreground/62 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
                    {item}
                  </div>
                ))}
              </div>
            </SoftCard>
          </SectionChapter>
        )}

        {/* Accessibility */}
        {project.content.accessibility && (
          <SectionChapter eyebrow="Inclusion" title="Accessibility" variant="soft">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 mt-8 items-start">
              <p className="text-lg md:text-xl text-foreground/58 leading-relaxed font-light">
                Accessibility was treated as part of the core UX direction, not as a final checklist. The interface needed to stay readable, predictable, and comfortable across devices and interaction methods.
              </p>
              <div className="grid gap-3">
                {project.content.accessibility.map((item, idx) => (
                  <div key={idx} data-reveal data-delay={(idx % 4) + 1} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-black/[0.055] shadow-sm">
                    <span className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 flex-shrink-0">
                      <Check size={14} />
                    </span>
                    <span className="text-[15px] text-foreground/70 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </SectionChapter>
        )}

        {/* Visual Design */}
        {project.content.visualDesign && (
          <SectionChapter eyebrow="Identity" title="Visual Design" description={project.content.visualDesign.description}>
            {project.content.visualDesign.principles && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16 mt-14">
                {project.content.visualDesign.principles.map((p, idx) => (
                  <SoftCard key={idx} className="p-8 md:p-9">
                    <span className="text-6xl font-display text-black/[0.04] mb-7 block leading-none">{p.title.charAt(0)}</span>
                    <h4 className="text-[16px] font-bold mb-4">{p.title}</h4>
                    <p className="text-[14px] text-foreground/50 leading-relaxed font-light">{p.description}</p>
                  </SoftCard>
                ))}
              </div>
            )}

            {project.content.visualDesign.colors && (
              <div className="grid sm:grid-cols-3 gap-5">
                {project.content.visualDesign.colors.map((c, idx) => (
                  <SoftCard key={idx} className="flex items-center gap-5 p-6 md:p-7">
                    <div className="w-14 h-14 rounded-2xl shadow-inner flex-shrink-0" style={{ backgroundColor: c.color }} />
                    <div>
                      <h4 className="text-[15px] font-bold mb-1">{c.name}</h4>
                      <p className="text-[13px] text-foreground/42 font-light leading-relaxed">{c.desc}</p>
                    </div>
                  </SoftCard>
                ))}
              </div>
            )}
          </SectionChapter>
        )}

        {/* Key Screens */}
        <SectionChapter eyebrow="Final UI" title="Key Screens" variant="soft">
          <div className="grid md:grid-cols-2 gap-4">
            <div data-reveal data-delay="1" className="aspect-video rounded-2xl overflow-hidden border border-black/[0.06] shadow-sm">
              <img src={getAssetPath(project.image)} alt="Primary screen" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div data-reveal data-delay="2" className="rounded-2xl overflow-hidden border border-black/[0.06] shadow-sm">
                <img src={getAssetPath(project.image)} alt="Secondary screen" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
              </div>
              <div data-reveal data-delay="3" className="rounded-2xl bg-[#F0EEE9] border border-black/[0.06] flex items-center justify-center p-8">
                <p className="text-sm text-foreground/35 italic text-center font-light max-w-xs leading-relaxed">
                  Final production screens, built for clarity and operational efficiency.
                </p>
              </div>
            </div>
          </div>
        </SectionChapter>

        {/* Outcome */}
        <section data-reveal className="py-20 md:py-28 bg-black">
          <div className="max-w-5xl mx-auto px-6">
            <Eyebrow><span className="text-white/30">Conclusion</span></Eyebrow>
            <h2 className="text-4xl md:text-5xl font-display text-white leading-tight mb-8 max-w-2xl">
              Outcome & Impact
            </h2>
            <p className="text-white/50 text-lg font-light leading-relaxed max-w-3xl mb-10">
              {project.content.outcomeText ||
                "The redesign resulted in a clearer, more consistent, and more scalable product experience built around better hierarchy, reusable patterns, and more predictable workflows."}
            </p>
            {project.content.impact && (
              <div className="grid sm:grid-cols-2 gap-3">
                {project.content.impact.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white/[0.04] rounded-xl px-5 py-4">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    <p className="text-white/65 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Learnings */}
        <SectionChapter eyebrow="Reflection" title="Key Takeaways">
          <div className="grid md:grid-cols-2 gap-3">
            {(Array.isArray(project.content.takeaways) ? project.content.takeaways : [project.content.takeaways]).map((item, idx) => (
              <div key={idx} data-reveal data-delay={(idx % 4) + 1}
                className="flex gap-5 p-6 bg-white rounded-2xl border border-black/[0.06] shadow-sm">
                <span className="text-xl font-display text-black/[0.08] flex-shrink-0 w-7 mt-0.5">{idx + 1}.</span>
                <p className="text-sm text-foreground/60 leading-relaxed font-light">{item}</p>
              </div>
            ))}
          </div>
        </SectionChapter>

        {/* Back to Projects */}
        <section data-reveal className="bg-[#EEECEA] border-t border-black/[0.05]">
          <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-xs text-foreground/35 uppercase tracking-widest mb-2">Next step</p>
              <h3 className="text-2xl md:text-3xl font-display text-foreground">Explore more work</h3>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-black text-white text-sm font-semibold hover:bg-black/80 hover:gap-5 transition-all duration-300"
            >
              View all projects <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>

      <Contact />
      <Footer />
    </div>
  );
}
