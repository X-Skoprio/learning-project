import { LuAlarmClock } from "react-icons/lu";
import { LuClipboardList } from "react-icons/lu";
import { IoGiftOutline } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import HowItWorks from "../components/HowItWorks";
import Link from "next/link";
import BottomDivSection from "../components/BottomDivSection";

export const programmationLine = [
  {
    id: 1,
    title: "Projets Guidés",
    content: "Ajouter des projets à votre CV !",
    icon: (
      <>
        <AiOutlineFundProjectionScreen />
      </>
    ),
  },
  {
    id: 2,
    title: "Initiation Gratuite",
    content: "Une séance d'initation offerte !",
    icon: (
      <>
        <IoGiftOutline></IoGiftOutline>
      </>
    ),
  },
  {
    id: 3,
    title: "Cours personnalisés",
    content: "Pour tout les niveaux !",
    icon: (
      <>
        <LuClipboardList></LuClipboardList>
      </>
    ),
  },
  {
    id: 4,
    title: "Horaires flexibles",
    content: "On s'adapte à vous !",
    icon: (
      <>
        <LuAlarmClock></LuAlarmClock>
      </>
    ),
  },
];

const steps = [
  {
    id: 1,
    title: "Prise de contacte",
    content: (
      <>
        <li>
          Inscrivez vous à l'aide du formulaire de contact ou en cliquant{" "}
          <Link
            href="/contact"
            className="text-primary hover:-translate-x-2 cursor-pointer"
          >
            ici
          </Link>
          .
        </li>
        <li>Programmation de la première sèance de cours offerte.</li>
      </>
    ),
  },
  {
    id: 2,
    title: "Personnalisation du parcours",
    content: (
      <>
        <li>
          Discussion avec l'élève afin de comprendre son besoin et de lui
          conseiller le langage à apprendre.
        </li>
        <li>Personnalisation des cours en interne par les professeurs.</li>
      </>
    ),
  },
  {
    id: 3,
    title: "Déroulement des cours",
    content: (
      <>
        <li>
          Des <span className="text-primary font-semibold">devoirs</span> entre
          chaque séance de cours, afin de renforcer les notions vus.
        </li>
        <li>
          Des <span className="text-primary font-semibold">projets</span>{" "}
          complets et valorisant à mettre sur le CV.
        </li>
      </>
    ),
  },
  {
    id: 4,
    title: "Le Parcours",
    content: (
      <>
        <li>
          Des <span className="text-primary font-semibold">devoirs</span> entre
          chaque séance de cours.
        </li>
        <li>
          Des <span className="text-primary font-semibold">projets</span>{" "}
          complets et valorisant à mettre sur le CV.
        </li>
      </>
    ),
  },
];
export default function Programmation() {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-flow-col w-full px-8 md:px-32 xl:px-48 duration-300 min-h-[500px]">
          <div className="bg-white w-full space-y-6  flex items-start justify-center flex-col duration-300">
            <h1 className="text-5xl font-bold z-50 ">
              La <span className="text-primary">Programmation</span>
            </h1>
            <h2 className="text-lg">
              Les cours peuvent être dispensés en{" "}
              <span className="underline">Anglais</span> ou en{" "}
              <span className="underline">Français</span>.
            </h2>
            <h3>
              Apprenez :<span className="font-bold text-primary">Java</span>,{" "}
              <span className="font-bold text-primary">C</span>,{" "}
              <span className="font-bold text-primary">Python</span>,{" "}
              <span className="font-bold text-primary"></span>
            </h3>
            <button className="btn-primary">Découvrer les formules</button>
          </div>
          <div className="bg-white w-full h-full space-y-4 flex items-start justify-center flex-col p-8 duration-300">
            <div className="text-5xl space-x-10 flex justify-center items-center duration-300">
              <FaJava></FaJava>
              <FaPython></FaPython>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center">
        <BottomDivSection
          programmationLine={programmationLine}
        ></BottomDivSection>
        </div>
        <div className="h-6 bg-gray-200 border-0 md:flex hidden mb-8">

        </div>
       
      </div>

      {/* Section interDiv */}

      {/* Third Section */}
      <HowItWorks steps={steps}></HowItWorks>
    </>
  );
}
