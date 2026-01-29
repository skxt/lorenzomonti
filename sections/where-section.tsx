import { SectionTitleAlt } from "@/components/section-title-alt";
import { ArrowUpRightIcon, SparkleIcon } from "lucide-react";
import { whereItems } from "@/data/where";
import { AnimatedContent } from "@/components/animated-content";
import { SectionContainer } from "@/components/section-container";

export const WhereSection = () => {
  return (
    <SectionContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x border-gray-200 divide-gray-200 mx-auto">
        <div>
          <div className="flex flex-col items-start md:sticky md:top-26">
            <SectionTitleAlt
              dir="left"
              icon={SparkleIcon}
              title="Core features"
              subtitle="Everything you need to build, deploy and scale AI agents - designed for speed, reliability and real-world production use."
            />
            <AnimatedContent className="p-4 md:p-6 bg-slate-100 w-full  mt-12">
              <p className="text-lg text-white">
                Trusted by teams building intelligent products with AI agents.
              </p>

              <a
                href="#"
                className="bg-white w-max hover:bg-gray-100 px-5 py-2 rounded-full mt-6 flex items-center gap-1"
              >
                Explore use cases
                <ArrowUpRightIcon size={20} />
              </a>
            </AnimatedContent>
          </div>
        </div>
        <div className="px-24 space-y-6">
          {whereItems.map((feature, index) => (
            <AnimatedContent
              key={index}
              className={`${feature.cardBg} flex flex-col items-start p-6 rounded-xl w-full md:sticky md:top-26`}
            >
              <div className={`${feature.iconBg} p-2 text-white rounded-md`}>
                <feature.icon />
              </div>
              <p className="text-base font-medium mt-4">{feature.title}</p>
              <p className="text-sm text-gray-600 mt-2">
                {feature.description}
              </p>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
