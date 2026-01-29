"use client";
import { Section } from "@/components/section";
import { SectionTitle } from "@/components/section-title";
import { SectionContainer } from "@/components/section-container";
import { services } from "@/data/service";
import { ArrowDownRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const ServiceSection = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const service = services[currentIndex];

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  return (
    <Section>
      <SectionContainer>
        <SectionTitle title="Servizi" leftAlign={true}>
          <div className="text-lg tracking-wide text-zinc-500 max-w-lg mt-2 md:text-left text-center">
            <p>
              Il Dott. Lorenzo Monti è medico specialista in Ortopedia e
              Traumatologia, con particolare competenza nella{" "}
              <span className="underline underline-offset-4">
                Chirurgia Protesica Mininvasiva e Robotica di Anca e Ginocchio
              </span>
              .
            </p>
            <p className="mt-4">
              Attualmente ricopre il ruolo di Aiuto presso l’
              <span className="underline underline-offset-4">
                Unità Operativa di Chirurgia Protesica Mininvasiva e Robotica
              </span>{" "}
              dell’IRCCS San Raffaele di Milano, diretta dal Dott. Francesco
              Verde. Svolge lo stesso incarico anche presso l’Unità Operativa di
              Ortopedia 1 dell’Istituto Clinico Villa Aprica di Como.
            </p>
          </div>
        </SectionTitle>
      </SectionContainer>

      <div className="grid grid-cols-1 md:grid-cols-2 border-t divide-x divide-blue-100 border-blue-100">
        <div
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
          className="cursor-pointer"
        >
          {services.map((item, index) => (
            <div
              key={item.id}
              onMouseEnter={() => setCurrentIndex(index)}
              className={`flex items-center gap-4 py-8 px-12 border-b border-blue-100 last:border-b-0 ${index === currentIndex ? "bg-primary/10" : "hover:bg-primary/10"}`}
            >
              <ArrowDownRight height={24} width={24} />
              <p className="text-xl font-bold">{item.title}</p>
            </div>
          ))}
        </div>

        <div className="p-6 md:p-15 max-md:border-t border-blue-100 flex flex-col items-start">
          <p className="text-lg text-gray-500">{service.description}</p>
        </div>
      </div>
    </Section>
  );
};
