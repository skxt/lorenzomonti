import { SectionTitle } from "@/components/section-title";
import {
  MapPinIcon,
  PhoneIcon,
  SquareArrowOutUpRight,
  MailIcon,
} from "lucide-react";
import { places } from "@/data/where";
import { AnimatedContent } from "@/components/animated-content";
import { SectionContainer } from "@/components/section-container";
import { Section } from "@/components/section";
import { WhatsAppIcon } from "@/components/icons";

export const WhereSection = () => {
  return (
    <Section>
      <SectionContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 border-gray-200 mx-auto">
          <div className="flex flex-col items-start md:sticky md:top-26">
            <SectionTitle title="Dove opero" />
            <AnimatedContent className="w-full">
              <a
                href="#"
                className="bg-transparent border border-slate-700 w-max hover:bg-gray-100 px-5 py-2 rounded-full mt-6 flex items-center gap-1"
              >
                Contattami su WhatsApp
                <WhatsAppIcon className="size-4 ms-2" />
              </a>
            </AnimatedContent>
            <AnimatedContent className="w-full">
              <a
                href="#"
                className="bg-transparent border border-slate-700 w-max hover:bg-gray-100 px-5 py-2 rounded-full mt-6 flex items-center gap-1"
              >
                Richiedi informazioni
                <MailIcon className="ms-1" size={16} />
              </a>
            </AnimatedContent>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {places.map((place, index) => (
              <AnimatedContent
                key={index}
                className={`bg-white relative flex flex-col justify-center p-6 w-full`}
              >
                <p className="text-base font-medium">{place.title}</p>
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
                <a
                  href={place.url ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 p-2 text-slate-300 rounded-md"
                >
                  <SquareArrowOutUpRight size={26} />
                </a>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </SectionContainer>
    </Section>
  );
};
