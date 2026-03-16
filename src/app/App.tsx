import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown, Users, BookOpen, Brain, Heart, Flag, Home } from "lucide-react";
import { Hero } from "./components/Hero";
import { ConceptSection } from "./components/ConceptSection";
import { PrinciplesSection } from "./components/PrinciplesSection";
import { PsychologySection } from "./components/PsychologySection";
import { ConclusionSection } from "./components/ConclusionSection";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["#dc2626", "#b91c1c", "#7c2d12", "#991b1b", "#7f1d1d"]
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "concept", "principles", "psychology", "conclusion"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div 
      className="min-h-screen text-white overflow-x-hidden"
      style={{ backgroundColor }}
    >
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main>
        <section id="home">
          <Hero scrollToSection={scrollToSection} />
        </section>
        
        <section id="concept">
          <ConceptSection />
        </section>
        
        <section id="principles">
          <PrinciplesSection />
        </section>
        
        <section id="psychology">
          <PsychologySection />
        </section>
        
        <section id="conclusion">
          <ConclusionSection />
        </section>
      </main>

      {/* Floating scroll indicator */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: activeSection === "home" ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={() => scrollToSection("concept")}
          className="bg-white/10 backdrop-blur-md p-4 rounded-full hover:bg-white/20 transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      </motion.div>

      <BackToTop />
      <Footer />
    </motion.div>
  );
}