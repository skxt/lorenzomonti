"use client";
import { SectionTitle } from "@/components/section-title";
import { experiences, education } from "@/data/experiences";
import { ChevronDown, ChevronUp, PlusIcon } from "lucide-react";
import { SectionContainer } from "@/components/section-container";
import { IExperience } from "@/types";
import { useState, useEffect, useRef } from "react";

const PAGE_SIZE = 3;

const ExperienceItem = ({
  item,
  animate,
}: {
  item: IExperience;
  animate: boolean;
}) => {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (!animate || !ref.current) return;
    const el = ref.current;
    el.style.opacity = "0";
    el.style.transform = "translateY(-12px)";
    const frame = requestAnimationFrame(() => {
      el.style.transition = "opacity 0.35s ease, transform 0.35s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
    return () => cancelAnimationFrame(frame);
  }, [animate]);

  const hasDescription = item.description && item.description.length > 0;

  return (
    <details
      ref={ref}
      className={`flex flex-col border-blue-100 border-b group last:border-b-0`}
    >
      <summary
        className={`flex ${
          hasDescription ? "cursor-pointer" : ""
        } items-start justify-between gap-4 py-5 px-4 select-none`}
      >
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
        {hasDescription && (
          <div className="mt-1 shrink-0">
            <ChevronUp className="size-5 text-gray-500 hidden group-open:block" />
            <ChevronDown className="size-5 text-gray-500 group-open:hidden" />
          </div>
        )}
      </summary>
      {hasDescription && (
        <div className="pb-5 px-4 pr-10 space-y-1">
          {item.description.map((line, i) => (
            <p key={i} className="text-base text-gray-500">
              {line}
            </p>
          ))}
        </div>
      )}
    </details>
  );
};

const ExperienceList = ({ items }: { items: IExperience[] }) => {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [newFromIndex, setNewFromIndex] = useState<number | null>(null);
  const visibleItems = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;

  const handleShowMore = () => {
    setNewFromIndex(visibleCount);
    setVisibleCount((prev) => prev + PAGE_SIZE);
  };

  return (
    <div>
      {visibleItems.map((item, index) => (
        <ExperienceItem
          key={index}
          item={item}
          animate={newFromIndex !== null && index >= newFromIndex}
        />
      ))}

      {hasMore && (
        <div className="flex justify-center py-4">
          <button
            onClick={handleShowMore}
            className="bg-white w-max hover:bg-gray-100 px-5 py-2 rounded-full flex items-center gap-1"
          >
            Visualizza di più
            <PlusIcon size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

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
    </div>
  );
};
