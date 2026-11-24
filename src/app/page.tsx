import { AboutSection } from "@/features/about/components/AboutSection";
// import { MissionVisionSection } from "@/features/about/components/MissionVisionSection";
import { ProcessSection } from "@/features/company/components/ProcessSection";
import { WhyChooseUsSection } from "@/features/company/components/WhyChooseUsSection";
import { ContactSection } from "@/features/contact/components/ContactSection";
import { HeroSection } from "@/features/home/components/HeroSection";
import { ProjectsSection } from "@/features/projects/components/ProjectsSection";
import { ServicesSection } from "@/features/services/components/ServicesSection";
import { TestimonialsSection } from "@/features/testimonials/components/TestimonialsSection";

/** The single-page site: every section lives here and is reached by anchor. */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
