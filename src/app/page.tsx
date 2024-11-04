import HeroSection from "@/components/sections/HeroSection";
import ProjectSection from "@/components/sections/ProjectSection";
import TechSection from "@/components/sections/TechSection";
import CareerSection from "@/components/sections/CareerSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      {/* Full Page Animation */}
      <HeroSection />

      {/* Freeze Animation */}
      <ProjectSection />
      <TechSection />
      <CareerSection />
      <ContactSection />
    </>
  );
}
