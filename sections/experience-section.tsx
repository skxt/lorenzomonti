import { SectionTitle } from "@/components/section-title";
import { experiences, education } from "@/data/experiences";
import {
  ArrowUpRightIcon,
  MinusIcon,
  PlusIcon,
  FileTextIcon,
} from "lucide-react";
import { SectionContainer } from "@/components/section-container";
import { IExperience } from "@/types";
import { AnimatedContent } from "@/components/animated-content";

const ExperienceList = ({ items }: { items: IExperience[] }) => (
  <div>
    {items.map((item, index) => (
      <details
        key={index}
        className="flex flex-col border-blue-100 border-b group last:border-b-0"
      >
        <summary className="flex cursor-pointer items-start justify-between gap-4 py-5 px-4 select-none">
          <div className="flex flex-col gap-1">
            <span className="font-medium">{item.title}</span>
            <div className="flex flex-wrap items-center gap-x-2 text-xs text-gray-500">
              {item.company && <span>{item.company}</span>}
              {item.company && item.location && (
                <span className="text-gray-300">·</span>
              )}
              {item.location && <span>{item.location}</span>}
              {(item.company || item.location) && (
                <span className="text-gray-300">·</span>
              )}
              <span>
                {item.start}
                {item.end && item.end !== item.start ? ` – ${item.end}` : ""}
              </span>
            </div>
          </div>
          <div className="mt-1 shrink-0">
            <MinusIcon className="size-5 text-gray-500 hidden group-open:block" />
            <PlusIcon className="size-5 text-gray-500 group-open:hidden" />
          </div>
        </summary>
        {item.description && item.description.length > 0 && (
          <div className="pb-5 px-4 pr-10 space-y-1">
            {item.description.map((line, i) => (
              <p key={i} className="text-base text-gray-500">
                {line}
              </p>
            ))}
          </div>
        )}
      </details>
    ))}
  </div>
);

export const ExperienceSection = () => {
  return (
    <div className="mt-30 border-y border-blue-100">
      <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x divide-blue-100 border-b border-blue-100">
        <SectionContainer>
          <SectionTitle
            title="Esperienze"
            description="Percorso professionale in ortopedia, traumatologia e consulenza medico-legale."
            leftAlign
          />
          <AnimatedContent className="w-full mt-12">
            <a
              href="#"
              className="bg-white w-max hover:bg-gray-100 px-5 py-2 rounded-full mt-6 flex items-center gap-1"
            >
              Visualizza le Attività Scientifiche
              <ArrowUpRightIcon size={20} />
            </a>
          </AnimatedContent>
        </SectionContainer>
        <ExperienceList items={experiences} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x divide-blue-100 border-b border-blue-100">
        <SectionContainer>
          <SectionTitle
            title="Formazione"
            description="Titoli accademici e percorso di specializzazione."
            leftAlign
          />
        </SectionContainer>
        <ExperienceList items={education} />
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x divide-blue-100">
        <SectionContainer>
          <SectionTitle
            title="Corsi e Premi"
            description="Formazione continua, certificazioni e riconoscimenti."
            leftAlign
          />
        </SectionContainer>
        <ExperienceList items={courses} />
      </div> */}
    </div>
  );
};
