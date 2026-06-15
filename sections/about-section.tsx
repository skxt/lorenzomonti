import { Section } from "@/components/section";
import { SectionContainer } from "@/components/section-container";
import { CardGlowing } from "@/components/card-glowing";

export const AboutSection = () => {
  return (
    <Section id="about">
      <main className="flex justify-between">
        <div className="flex flex-col lg:flex-row gap-10 justify-between items-center w-full">
          <div className="flex flex-col items-center lg:items-start">
            <SectionContainer>
              <h1 className="text-center lg:text-left text-3xl lg:text-5xl leading-[38px] lg:leading-[56px] font-light max-w-xl text-slate-900">
                Chirurgo Ortopedico
                <br />e Traumatologo
              </h1>
              <div className="text-base lg:text-lg tracking-wide font-light text-zinc-500 max-w-lg mt-10 lg:text-left text-center">
                <p>
                  Il Dott. Lorenzo Monti è medico specialista in Ortopedia e
                  Traumatologia, con particolare competenza nella{" "}
                  <span className="underline underline-offset-4">
                    Chirurgia Protesica Mininvasiva e Robotica di Anca e
                    Ginocchio
                  </span>
                  .
                </p>
              </div>
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
