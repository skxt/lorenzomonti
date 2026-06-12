"use client";
import { Section } from "@/components/section";
import { SectionTitle } from "@/components/section-title";
import { SectionContainer } from "@/components/section-container";
import { services } from "@/data/service";
import { ArrowDownLeft } from "lucide-react";
import { useState } from "react";

export const ServiceSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeMobileIndex, setActiveMobileIndex] = useState<number | null>(
    null,
  );
  const service = hoveredIndex !== null ? services[hoveredIndex] : null;

  return (
    <Section id="services">
      <SectionContainer>
        <SectionTitle
          title="Aree di Competenza"
          leftAlign={true}
        ></SectionTitle>
      </SectionContainer>

      <div className="grid grid-cols-1 md:grid-cols-2 border-t divide-y md:divide-y-0 md:divide-x divide-blue-100 border-blue-100">
        <div>
          {services.map((item, index) => (
            <div
              key={item.id}
              className="border-b border-blue-100 last:border-b-0"
            >
              <div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() =>
                  setActiveMobileIndex(
                    activeMobileIndex === index ? null : index,
                  )
                }
                className={`cursor-pointer flex items-center justify-between py-8 px-6 md:px-12 transition-colors duration-200 ${
                  index === hoveredIndex
                    ? "bg-primary/10"
                    : "hover:bg-primary/5"
                } ${index === activeMobileIndex ? "bg-primary/5" : ""}`}
              >
                <p className="text-xl font-bold max-w-[150px] md:max-w-[300px]">
                  {item.title}
                </p>
                <ArrowDownLeft
                  height={24}
                  width={24}
                  className={`transition-transform duration-300 ${
                    activeMobileIndex === index
                      ? "-rotate-90 text-primary"
                      : "text-slate-600"
                  }`}
                />
              </div>
              <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${
                  activeMobileIndex === index
                    ? "md:max-h-48 opacity-100 py-6 px-6 bg-primary/5 border-t border-blue-100/50"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-base text-gray-500 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:flex p-6 md:px-15 md:py-15 border-blue-100 flex-col items-start">
          <p
            className="text-xl text-gray-500 max-w-3xl my-auto font-light leading-7 transition-opacity duration-300"
            style={{ opacity: service ? 1 : 0 }}
          >
            {service?.description ?? ""}
          </p>
        </div>
      </div>
    </Section>
  );
};
