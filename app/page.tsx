import { CollaborationsSection } from "@/sections/collaborations-section";
import { ServiceSection } from "@/sections/service-section";
import { AboutSection } from "@/sections/about-section";
import { WhereSection } from "@/sections/where-section";
import { ExperienceSection } from "@/sections/experience-section";

export default function Page() {
  return (
    <main className="mx-4 md:mx-16 lg:mx-24 xl:mx-32 border-x border-blue-100">
      <AboutSection />
      <ServiceSection />
      <WhereSection />
      <CollaborationsSection />
      <ExperienceSection />
    </main>
  );
}
