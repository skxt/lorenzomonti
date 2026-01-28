"use client";
import { SectionTitle } from "@/components/section-title";
import { testimonials } from "@/data/testimonials";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const TestimonialSection = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonial = testimonials[currentIndex];

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  return (
    <div className="mt-30 border-y border-blue-100">
      <div className="p-6 md:p-24">
        <SectionTitle
          title="Esperienze e Formazione"
          leftAlign={true}
        >
          <div className="text-base text-zinc-500 max-w-lg mt-2 md:text-left text-center">
            <p>
              Il Dott. Lorenzo Monti è medico specialista in Ortopedia e Traumatologia, con particolare competenza nella <span className="underline underline-offset-4">Chirurgia Protesica Mininvasiva e Robotica di Anca e Ginocchio</span>.
            </p>
            <p className="mt-4">
              Attualmente ricopre il ruolo di Aiuto presso l’<span className="underline underline-offset-4">Unità Operativa di Chirurgia Protesica Mininvasiva e Robotica</span> dell’IRCCS San Raffaele di Milano, diretta dal Dott. Francesco Verde. Svolge lo stesso incarico anche presso l’Unità Operativa di Ortopedia 1 dell’Istituto Clinico Villa Aprica di Como.
            </p>
          </div>
        </SectionTitle>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-gray-800 border-t border-blue-100">
        <div
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
          className="cursor-pointer"
        >
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              onMouseEnter={() => setCurrentIndex(index)}
              className={`flex items-center gap-4 py-8 px-12 border-b border-blue-100 last:border-b-0
                                ${index === currentIndex ? "bg-white/5" : "hover:bg-white/5"}`}
            >
              {/* <Image
                src={item.avatar}
                alt={item.name}
                width={64}
                height={64}
                className="rounded-full"
              /> */}
              <div>
                <p className="text-lg font-medium">{item.name}</p>
                <p className="text-gray-500">{item.handle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 md:p-10 max-md:border-t border-blue-100 flex flex-col items-start">

          <p className="mb-4 text-lg font-medium">
            {testimonial.title}
          </p>

          <p className="text-base/7 text-gray-400">{testimonial.quote}</p>

          {/* <Link href="/" className="mt-8">
            Read more
            <ArrowRightIcon className="inline-block size-4 ml-1" />
          </Link> */}
        </div>
      </div>
    </div>
  );
};
