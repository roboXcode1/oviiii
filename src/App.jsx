import SmoothScroll from "./components/SmoothScroll";
import HeroContent from "./components/HeroContent";
import Navbar from "./components/Navbar";
import StatsSection from "./components/StatsSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import IntroductionVideo from "./components/IntroductionVideo";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <SmoothScroll>
      <div className="relative bg-black text-white selection:bg-cyan-400 selection:text-black">
        {/* Navigation Bar */}
        <Navbar />

        {/* 1. Intro Banner */}
        <HeroContent />

        {/* 2. Key Metrics & Impact */}
        <StatsSection />

        {/* 3. Work Experience & Leadership */}
        <ExperienceSection />

        {/* Introduction video, before skills */}
        <IntroductionVideo />

        {/* 5. Technical Stack & Skills */}
        <SkillsSection />

        {/* 6. Featured Projects */}
        <ProjectsSection />

        {/* 7. Solutions & Services */}
        <ServicesSection />

        {/* 8. Contact & Inquiry */}
        <ContactSection />

        {/* 9. Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
