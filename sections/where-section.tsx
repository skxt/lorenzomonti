import { SectionTitle } from "@/components/section-title";
import { ArrowUpRightIcon, MapPinIcon, PhoneIcon, ArrowDownLeftIcon } from "lucide-react";
import { places } from "@/data/where";
import { AnimatedContent } from "@/components/animated-content";
import { SectionContainer } from "@/components/section-container";

export const WhereSection = () => {
  return (
    <SectionContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 border-gray-200 mx-auto">
        <div>
          <div className="flex flex-col items-start md:sticky md:top-26">
            <SectionTitle
              title="Dove opero"
            />
            <AnimatedContent className="w-full mt-12">
              <a
                href="#"
                className="bg-white w-max hover:bg-gray-100 px-5 py-2 rounded-full mt-6 flex items-center gap-1"
              >
                Prenota una visita
                <ArrowUpRightIcon size={20} />
              </a>
            </AnimatedContent>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {places.map((place, index) => (
            <AnimatedContent
              key={index}
              className={`bg-white flex flex-col items-start p-6 w-full md:sticky md:top-26`}
            >
              <div className={`p-2 text-slate-300 rounded-md`}>
                <ArrowDownLeftIcon size={26} />
              </div>
              <p className="text-base font-medium mt-4">{place.title}</p>
              <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                <MapPinIcon size={13} />
                {place.location}
              </p>
              <a
                href={`tel:${place.phone}`}
                className="text-sm text-gray-600 mt-2 flex items-center gap-1 hover:underline"
              >
                <PhoneIcon size={13} />
                {place.phone}
              </a>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};