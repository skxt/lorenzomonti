import { Video } from "lucide-react";
import Image from "next/image";
import { CardGlowing } from "../components/card-glowing";

export const About = () => {
  return (
    <section>
      <main className="flex flex-col max-md:gap-20 md:flex-row pb-20 items-center justify-between mt-20 px-4 md:px-16 lg:px-24 xl:px-32">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-center md:text-left text-4xl leading-[46px] md:text-5xl md:leading-[68px] font-semibold max-w-xl text-slate-900">
            AI-powered <br />
            influencer marketing made simple.
          </h1>
          <p className="text-center md:text-left text-sm text-slate-700 max-w-lg mt-2">
            Unlock smarter workflows with AI tools designed to boost
            productivity, simplify tasks and help you do more with less effort.
          </p>
          <div className="flex items-center gap-4 mt-8 text-sm">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white active:scale-95 transition rounded-md px-7 h-11 cursor-pointer">
              Get started
            </button>
            <button className="flex items-center gap-2 border border-slate-600 active:scale-95 hover:bg-white/10 transition text-slate-600 rounded-md px-6 h-11 cursor-pointer">
              <Video className="w-5 h-5" strokeWidth={1} />
              <span>Watch demo</span>
            </button>
          </div>
        </div>
        <div className="relative">
          <CardGlowing />
        </div>
      </main>
    </section>
  );
};
