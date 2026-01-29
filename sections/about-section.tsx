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
            {/* <p className="text-center md:text-left text-sm text-slate-700 max-w-lg mt-2">
            presso Unità Operativa di Chirurgia Protesica Mininvasiva e Robotica di Anca e Ginocchio dell’IRCCS San Raffaele di Milano.
          </p>
          <div className="flex items-center gap-4 mt-8 text-sm">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white active:scale-95 transition px-7 h-11 cursor-pointer">
              Get started
            </button>
            <button className="flex items-center gap-2 border border-slate-600 active:scale-95 hover:bg-white/10 transition text-slate-600 px-6 h-11 cursor-pointer">
              <Video className="w-5 h-5" strokeWidth={1} />
              <span>Watch demo</span>
            </button>
          </div> */}
          </div>
          <div className="relative">
            <CardGlowing />
          </div>
        </div>
      </main>
    </Section>
  );
};
