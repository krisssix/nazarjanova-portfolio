import { Mail, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 data-reveal className="font-display text-4xl md:text-5xl text-foreground mb-4">
          Let's <span className="font-elegant italic">connect</span>
        </h2>
        <p data-reveal data-delay="1" className="text-xl text-foreground/50 mb-12 font-light max-w-xl mx-auto">
          I'm always open to new opportunities and interesting projects. Feel free to reach out.
        </p>

        <div data-reveal data-delay="2" className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:nazarjanovak@gmail.com"
            className="group flex items-center gap-3 px-8 py-4 bg-white rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500 group-hover:scale-110 transition-transform">
              <Mail size={20} />
            </div>
            <div className="text-left">
              <p className="text-[11px] uppercase tracking-wider text-foreground/40 font-bold">Email</p>
              <p className="text-[15px] font-medium">nazarjanovak@gmail.com</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/kristina-nazarjanova/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-white rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
              <Linkedin size={20} />
            </div>
            <div className="text-left">
              <p className="text-[11px] uppercase tracking-wider text-foreground/40 font-bold">LinkedIn</p>
              <p className="text-[15px] font-medium">kristina-nazarjanova</p>
            </div>
          </a>
        </div>

        <div className="mt-16 flex justify-center" aria-hidden="true">
          <img src="/FAVICON.png" alt="" className="w-20 h-20 object-contain opacity-[0.12] select-none" />
        </div>
      </div>
    </section>
  );
}