import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import SakuraParticles from "@/components/SakuraParticles";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <SakuraParticles />
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
};

export default Index;
