import { Section } from "@/components/section";
import { SectionContainer } from "@/components/section-container";
import { CardGlowing } from "../components/card-glowing";

export const AboutSection = () => {
  return (
    <Section>
      <main className="flex justify-between">
        <div className="flex flex-col md:flex-row gap-10 justify-between items-center w-full">
          <div className="flex flex-col items-center md:items-start">
            <SectionContainer>
              <h1 className="text-center md:text-left text-4xl leading-[46px] md:text-5xl md:leading-[56px] font-light max-w-xl text-slate-900">
                Chirurgo Ortopedico
                <br />e Traumatologo
              </h1>
            </SectionContainer>
          </div>
          <div className="relative">
            <CardGlowing />
          </div>
        </div>
      </main>
    </Section>
  );
};
