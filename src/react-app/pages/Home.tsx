import { useEffect, useState } from "react";
import Header from "@/react-app/components/Header";
import Hero from "@/react-app/components/Hero";
import Clients from "@/react-app/components/Clients";
import Marquee from "@/react-app/components/Marquee";
import Projects from "@/react-app/components/Projects";
import Contact from "@/react-app/components/Contact";
import Footer from "@/react-app/components/Footer";

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
    >
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <Clients />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}