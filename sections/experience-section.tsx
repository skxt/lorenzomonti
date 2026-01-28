import { Section} from "@/components/section";
import Image from "next/image";

export const ExperienceSection = () => {
    const experience = [
        {
            image: "/logo-mark.svg",
            title: "Consulente Tecnico d'Ufficio (CTU)",
            company: "Tribunali Italiani",
            location: "Italia",
            start: "2020",
            end: "Presente",
            description: [
                "Svolge l'incarico di Consulente Tecnico d'Ufficio presso diversi tribunali italiani.",
                "Applica competenze in Medicina Legale e Assicurativa acquisite attraverso Master di II livello.",
                "Particolare interesse per le Scienze Forensi e Criminologia Clinica.",
            ],
        },
        {
            image: "/logo-mark.svg",
            title: "Specializzazione in Ortopedia e Traumatologia",
            company: "Istituto Ortopedico Galeazzi",
            location: "Milano",
            start: "2009",
            end: "2015",
            description: [
                "Consegue la Specializzazione in Ortopedia e Traumatologia con lode (70/70 e lode) presso l'Università degli Studi di Milano.",
                "Approfondisce competenze in Traumatologia, Chirurgia del Ginocchio, Chirurgia della Mano, Chirurgia Ricostruttiva e delle Infezioni Osteo-Articolari.",
                "Collabora con il reparto di Chirurgia d'Urgenza dell'Ospedale di Rho.",
                "Consegue nel 2016 il diploma SIUMB in ecografia muscolo-scheletrica.",
            ],
        },
        {
            image: "/logo-mark.svg",
            title: "Formazione in Chirurgia della Mano e Microchirurgia",
            company: "Prince of Wales Hospital",
            location: "Hong Kong",
            start: "2016",
            end: "2016",
            description: [
                "Periodo di formazione all'estero in Chirurgia della Mano, Microchirurgia e Chirurgia della Mano Pediatrica.",
                "Perfezionamento in tecniche infiltrative eco-guidate.",
                "Successivamente diventa docente in corsi di formazione per tecniche infiltrative eco-guidate.",
            ],
        },
    ];

    return (
        <Section>
            <div className="flex flex-col md:flex-row items-center justify-around md:items-start gap-8 w-full p-10">
                    <p className="text-xl text-center md:text-left md:text-lg font-medium pt-3 w-full md:max-w-42">Esperienze</p>
            <div>
                {experience.map((experience) => (
                    <div key={experience.title} className="w-full border-b border-blue-100 p-6 max-w-2xl">
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
                            <div>{experience.start} - {experience.end}</div>
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
}