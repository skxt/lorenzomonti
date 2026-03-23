"use client";
import { Section } from "@/components/section";
import { SectionTitle } from "@/components/section-title";
import { SectionContainer } from "@/components/section-container";
import { services } from "@/data/service";
import { ArrowDownLeft } from "lucide-react";
import { useState } from "react";

export const ServiceSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const service = hoveredIndex !== null ? services[hoveredIndex] : null;

  return (
    <Section>
      <SectionContainer>
        <SectionTitle
          title="Aree di Competenza"
          leftAlign={true}
        ></SectionTitle>
      </SectionContainer>

      <div className="grid grid-cols-1 md:grid-cols-2 border-t divide-x divide-blue-100 border-blue-100">
        <div>
          {services.map((item, index) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`cursor-pointer flex items-center justify-between py-8 px-12 border-b border-blue-100 last:border-b-0 transition-colors duration-200 ${
                index === hoveredIndex ? "bg-primary/10" : "hover:bg-primary/10"
              }`}
            >
              <p className="text-xl font-bold">{item.title}</p>
              <ArrowDownLeft height={24} width={24} />
            </div>
          ))}
        </div>

        <div className="p-6 md:px-15 md:py-15 max-md:border-t border-blue-100 flex flex-col items-start">
          <p
            className="text-xl text-gray-500 max-w-3xl my-auto font-light transition-opacity duration-300"
            style={{ opacity: service ? 1 : 0 }}
          >
            {service?.description ?? ""}
          </p>
        </div>
      </div>
    </Section>
  );
};
