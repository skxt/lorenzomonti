import { Section } from "@/components/section";
import { SectionContainer } from "@/components/section-container";
import { CardGlowing } from "@/components/card-glowing";

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
              <div className="text-lg tracking-wide font-light text-zinc-500 max-w-lg mt-10 md:text-left text-center">
                <p>
                  Il Dott. Lorenzo Monti è medico specialista in Ortopedia e
                  Traumatologia, con particolare competenza nella{" "}
                  <span className="underline underline-offset-4">
                    Chirurgia Protesica Mininvasiva e Robotica di Anca e
                    Ginocchio
                  </span>
                  .
                </p>
                {/* <p className="mt-4">
              Attualmente ricopre il ruolo di Aiuto presso l’
              <span className="underline underline-offset-4">
                Unità Operativa di Chirurgia Protesica Mininvasiva e Robotica
              </span>{" "}
              dell’IRCCS San Raffaele di Milano, diretta dal Dott. Francesco
              Verde. Svolge lo stesso incarico anche presso l’Unità Operativa di
              Ortopedia 1 dell’Istituto Clinico Villa Aprica di Como.
            </p> */}
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
