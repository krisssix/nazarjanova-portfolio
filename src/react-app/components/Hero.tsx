import { ArrowDownRight } from "lucide-react";
import { useParallaxMouse } from "../hooks/useParallaxMouse";

export default function Hero() {
  const verySlow = useParallaxMouse(0.02, 0.015);
  const slow = useParallaxMouse(0.045, 0.03);
  const medium = useParallaxMouse(0.09, 0.06);
  const fast = useParallaxMouse(0.14, 0.09);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#fff0f0]">

      {/* ── Background Blobs ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

        {/* Grain Overlay */}
        <div
          className="absolute inset-0 opacity-[0.035] mix-blend-soft-light z-10"
          style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
        />



        {/* Blob 2 — Peach (levá strana) */}
        <div
          className="absolute top-[25%] -left-[-5%] w-[48%] h-[32%] rounded-full blur-[65px]"
          style={{
            background: '#F7DBCE',
            opacity: 1,
            transform: `translate(${medium.x}px, ${medium.y}px)`,
          }}
        />

        {/* Blob 3 — Spodní pravá */}
        <div
          className="absolute -bottom-[15%] right-[5%] w-[35%] h-[50%] rounded-full blur-[72px]"
          style={{
            background: '#E9D6F8',
            opacity: 1,
            transform: `translate(${slow.x * 0.9}px, ${slow.y * 0.9}px)`,
          }}
        />

        {/* Blob 4 — Střed */}
        <div
          className="absolute top-[38%] left-[20%] w-[38%] h-[42%] rounded-full blur-[58px]"
          style={{
            background: '#ECBDC2',
            opacity: 1,
            transform: `translate(${medium.x * 1.1}px, ${medium.y * 1.1}px)`,
          }}
        />

        {/* Blob 5 — Levý spodní */}
        <div
          className="absolute -bottom-[12%] -left-[5%] w-[40%] h-[48%] rounded-full blur-[70px]"
          style={{
            background: '#E9D6F8',
            opacity: 1,
            transform: `translate(${verySlow.x}px, ${verySlow.y}px)`,
          }}
        />

        {/* Blob 6 — Malý highlight */}
        <div
          className="absolute -top-[20%] -right-[10%] w-[52%] h-[55%] rounded-full blur-[100px]"
          style={{
            background: '#FAAFBB',
            opacity: 0.75,
            transform: `translate(${fast.x * 1.3}px, ${fast.y * 1.3}px)`,
          }}
        />

        {/* 🔥 Blob 1 — Velký růžový vpravo nahoře (hlavní změna) */}
        <div
          className="absolute -top-[15%] -right-[85%] w-[65%] h-[65%] rounded-full blur-[5px]"
          style={{
            background: '#FAAFBB',
            opacity: 0.97,
            transform: `translate(${fast.x}px, ${fast.y}px)`,
          }}
        />
      </div>

      {/* Obsah */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl">
          <div className="mb-8 opacity-0 animate-fade-in-up">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-display font-bold text-black leading-[0.85] tracking-tight">
              ux/ui designer
            </h1>
          </div>

          <div className="mb-16 opacity-0 animate-fade-in-up animation-delay-200">
            <p className="text-2xl md:text-3xl lg:text-4xl font-normal text-black/80 leading-tight max-w-2xl">
              focused on simplifying complex ideas into clear, intuitive digital experiences
            </p>
          </div>

          <div className="opacity-0 animate-fade-in-up animation-delay-400">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-6"
            >
              <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full border border-black/20 group-hover:bg-black group-hover:border-black transition-all duration-500 overflow-hidden">
                <ArrowDownRight size={32} className="text-black group-hover:text-white transition-all duration-500 z-10 group-hover:rotate-45" />
                <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </div>
              <span className="text-sm md:text-base font-medium tracking-widest text-black/60 uppercase group-hover:text-black transition-colors duration-300">
                VIEW PROJECTS
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}