import { CtaSection } from "@/sections/cta-section";
import { FaqSection } from "@/sections/faq-section";
import { FeatureSection } from "@/sections/feature-section";
import { HeroSection } from "@/sections/hero-section";
import { LogoMarquee } from "@/sections/logo-marquee";
import { ServiceSection } from "@/sections/service-section";
import { WorkSection } from "@/sections/work-section";
import { AboutSection } from "@/sections/about-section";
import { WhereSection } from "@/sections/where-section";
import { ExperienceSection } from "@/sections/experience-section";

export default function Page() {
  return (
    <main className="mx-4 md:mx-16 lg:mx-24 xl:mx-32 border-x border-blue-100">
      <AboutSection />
      {/* <LogoMarquee /> */}
      <ExperienceSection />
      <ServiceSection />
      <FeatureSection />
      <WorkSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
