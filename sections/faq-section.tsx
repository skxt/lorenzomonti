import { SectionTitle } from "@/components/section-title";
import { faqs } from "@/data/faqs";
import { MinusIcon, PlusIcon } from "lucide-react";
import { SectionContainer } from "@/components/section-container";

export const FaqSection = () => {
  return (
    <div className="mt-30 grid grid-cols-1 md:grid-cols-2 border-y md:divide-x divide-blue-100 border-blue-100">
      <SectionContainer>
        <SectionTitle
          title="Hai delle domande?"
          description="Posso aiutarti a trovare la soluzione giusta per le tue esigenze. Contattami per saperne di più."
          leftAlign
        />
      </SectionContainer>
      <div>
        {faqs.map((faq, index) => (
          <details
            key={index}
            open={index === 0}
            className="flex flex-col border-blue-100 border-b group last:border-b-0"
          >
            <summary className="flex cursor-pointer items-start justify-between gap-4 py-5 px-4 font-medium select-none">
              {faq.question}
              <MinusIcon className="size-5 shrink-0 text-gray-500 hidden group-open:block" />
              <PlusIcon className="size-5 shrink-0 text-gray-500 group-open:hidden" />
            </summary>
            <p className="pb-5 px-4 pr-10 text-base text-gray-500">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
};
