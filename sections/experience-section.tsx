import { Section } from "@/components/section";
import Image from "next/image";
import { experiences } from "@/data/experiences";

export const ExperienceSection = () => {
  return (
    <Section>
      <div className="flex flex-col md:flex-row items-center justify-around md:items-start gap-8 w-full p-10">
        <p className="text-xl text-center md:text-left md:text-lg font-medium pt-3 w-full md:max-w-42">
          Esperienze
        </p>
        <div>
          {experiences.map((experience) => (
            <div
              key={experience.title}
              className="w-full border-b border-blue-100 p-6 max-w-2xl"
            >
              <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                  {/* <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                                    <Image
                                        src={experience.image}
                                        alt={experience.title}
                                        width={25}
                                        height={25}
                                    />
                                </div> */}
                  <div>
                    <h3 className="text-base font-medium text-gray-800">
                      {experience.title}
                    </h3>
                    <div>{experience.company}</div>
                  </div>
                </div>
                <div>
                  {experience.start} - {experience.end}
                </div>
              </div>
              <ul className="list-disc px-5 mt-6 text-gray-500 space-y-2">
                {experience.description.map((description) => (
                  <li key={description}>{description}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
