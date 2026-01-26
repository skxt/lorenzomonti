import { CtaSection } from "@/sections/cta-section";
import { FaqSection } from "@/sections/faq-section";
import { FeatureSection } from "@/sections/feature-section";
import { HeroSection } from "@/sections/hero-section";
import { LogoMarquee } from "@/sections/logo-marquee";
import { TestimonialSection } from "@/sections/testimonial-section";
import { WorkSection } from "@/sections/work-section";
import { About } from "@/sections/about";

export default function Page() {
  return (
    <main className="mx-4 md:mx-16 lg:mx-24 xl:mx-32 border-x border-blue-100">
      <About />
      <HeroSection />
      <LogoMarquee />
      <FeatureSection />
      <WorkSection />
      <TestimonialSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
