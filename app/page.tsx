import { CollaborationsSection } from "@/sections/collaborations-section";
import { ServiceSection } from "@/sections/service-section";
import { AboutSection } from "@/sections/about-section";
import { WhereSection } from "@/sections/where-section";
import { ActivitySection } from "@/sections/activity-section";
import { GallerySection } from "@/sections/gallery-section";

export default function Page() {
  return (
    <main className="mx-4 md:mx-16 lg:mx-24 xl:mx-32 border-x border-blue-100 mt-[65px]">
      <AboutSection />
      <ServiceSection />
      <WhereSection />
      <GallerySection />
      <ActivitySection />
      <CollaborationsSection />
    </main>
  );
}
