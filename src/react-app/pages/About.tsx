import { useEffect, useState } from "react";
import Header from "@/react-app/components/Header";
import Contact from "@/react-app/components/Contact";
import Footer from "@/react-app/components/Footer";

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      <Header />

      <main className="pt-32 pb-24">

        <section className="relative max-w-6xl mx-auto px-6 w-full mb-32">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-4 items-center">
            {/* ── Left: Copy ── */}
            <div data-reveal className="flex justify-start">
              <h1 className="text-3xl md:text-[2.75rem] lg:text-[3rem] font-normal text-foreground leading-[1.2] tracking-tight max-w-lg">
                UX/UI designer with a background in Frontend and Graphic design. Based in Brno, Czech Republic.
              </h1>
            </div>

            {/* ── Right: Photo ── */}
            <div data-reveal data-delay="2" className="flex justify-center lg:justify-start">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[480px] lg:h-[480px]">
                <img
                  src="/kristinaP.png"
                  alt="Kristina Nazarjanová"
                  className="w-full h-full object-contain"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bio, Skills, Education */}
        <section className="max-w-6xl mx-auto px-6 space-y-24 mb-32">

          {/* BIO */}
          <div data-reveal className="grid md:grid-cols-[140px_1fr] gap-6 md:gap-12 items-start">
            <h3 className="text-[17px] font-normal tracking-wide text-foreground uppercase pt-1">Bio</h3>
            <div className="text-muted-foreground font-light text-[15px] leading-relaxed space-y-6 max-w-4xl">
              <p>
                Hi, I'm Kristina — a UX/UI designer based in Brno, Czech Republic, with a background in both design and frontend development. I believe that great design emerges from understanding people: their needs, frustrations, and aspirations.
              </p>
              <p>
                I specialize in complex workflow systems: backoffice tools, data-heavy dashboards, and enterprise applications where clarity isn't optional. My work spans from full UX research through to implementation-ready Figma handoff — and sometimes the implementation itself.
              </p>
              <p>
                Most recently I led the design of a laboratory management system for environmental research at Mendel University, and a cashless payment backoffice for Ticketportal. I care about the gap between how software looks and how it actually works. That's where I spend most of my time.
              </p>
            </div>
          </div>

          {/* SKILLS */}
          <div data-reveal className="grid md:grid-cols-[140px_1fr] gap-6 md:gap-12 items-start">
            <h3 className="text-[17px] font-normal tracking-wide text-foreground uppercase pt-1">Skills</h3>
            <div className="grid sm:grid-cols-2 gap-12 w-full max-w-4xl">
              <ul className="space-y-3.5 text-muted-foreground font-light text-[15px]">
                <li>Visual Design & Branding</li>
                <li>User Interface Design</li>
                <li>User Experience Design</li>
                <li>Responsive Design</li>
                <li>Market & User Research</li>
                <li>Wire-framing & Prototyping</li>
                <li>Information Architecture</li>
                <li>User Flows</li>
              </ul>

              <div className="flex justify-between items-start pt-1 sm:pt-0">
                <h3 className="text-[17px] font-normal tracking-wide text-foreground uppercase">Design Tools</h3>
                <ul className="space-y-3.5 text-muted-foreground font-light text-[15px] text-right">
                  <li>Figma</li>
                  <li>Illustrator</li>
                  <li>Photoshop</li>
                  <li>React / Tailwind</li>
                </ul>
              </div>
            </div>
          </div>

          {/* EDUCATION */}
          <div data-reveal className="grid md:grid-cols-[140px_1fr] gap-6 md:gap-12 items-start">
            <h3 className="text-[17px] font-normal tracking-wide text-foreground uppercase pt-1">Education</h3>
            <div className="max-w-4xl w-full">
              <ul className="divide-y divide-border/50">
                <li className="py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <span className="text-muted-foreground font-light text-[15px]">Master's in Information Technology</span>
                  <span className="text-muted-foreground font-light text-[14px]">Mendel University in Brno (2024)</span>
                </li>
                <li className="py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <span className="text-muted-foreground font-light text-[15px]">Bachelor's Degree</span>
                  <span className="text-muted-foreground font-light text-[14px]">Mendel University in Brno (2022)</span>
                </li>
              </ul>

              <div className="pt-8">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-black text-white rounded-full text-[15px] font-normal hover:bg-black/90 transition-colors"
                >
                  Request Resume
                </a>
              </div>
            </div>
          </div>

        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
