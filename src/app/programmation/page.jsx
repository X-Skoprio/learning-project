import { LuAlarmClock } from "react-icons/lu";
import { LuClipboardList } from "react-icons/lu";
import { IoGiftOutline } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import HowItWorks from "../components/HowItWorks";
import Link from "next/link";

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
        <li>Inscrivez vous à l'aide du formulaire de contact ou en cliquant <Link href="/contact" className="text-primary hover:-translate-x-2 cursor-pointer">ici</Link>.</li>
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
        <li>
          Personnalisation des cours en interne par les professeurs.
        </li>
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
    <div className="w-full h-full flex items-center justify-center flex-col duration-300 ">
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-flow-col w-full px-8 md:px-32 xl:px-48 duration-300">
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

      {/* Section interDiv */}
      <div className=" m-10 py-2 px-16 md:p-6 bg-gray-200 md:w-[80%] w-[85%] h-full grid md:grid-flow-col grid-cols-1 md:grid-cols-4 rounded-md border-2 border-gray-300 shadow-[0_0_20px_rgba(0,0,0,0.2)] duration-300">
        {programmationLine.map((programmationLine) => {
          return (
            <div key={programmationLine.id} className="gap-4">
              <div className="flex justify-center items-center h-full md:border-gray-600  md:my-0  py-4 duration-300">
                <div
                  className={`flex justify-center items-center flex-col md:h-[50%] ${
                    programmationLine.id === 1
                      ? ""
                      : "md:border-l-[1px] md:border-t-0 md:border-gray-500 border-t-[1px] border-gray-500"
                  } w-full`}
                >
                  <div className="text-2xl pt-6 md:pt-0  md:block duration-300">
                    {programmationLine.icon}
                  </div>
                  <div className="font-semibold flex items-center justify-center duration-300">
                    {programmationLine.title}
                  </div>
                  <div>{programmationLine.content}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Third Section */}
      <HowItWorks steps={steps}></HowItWorks>
    </div>
  );
}
