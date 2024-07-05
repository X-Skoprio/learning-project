import { LuAlarmClock } from "react-icons/lu";
import { LuClipboardList } from "react-icons/lu";
import { IoGiftOutline } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

export const programmationLine = [
  {
    id: 1,
    title: "Accueil",
    content: "",
    icon: <></>,
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
    title: "Differentes formules",
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
export default function Programmation() {
  return (
    <div className="w-full h-full relative ">
      <div className="grid grid-cols-2 grid-flow-col px-36">
        <div className="bg-white w-full space-y-6 min-h-[400px] flex items-start justify-center flex-col">
          <h1 className="text-5xl font-bold ">
            La <span className="text-primary">Programmation</span>
          </h1>
          <h2 className="text-lg">
            Les cours peuvent être dispensés en <span className="underline">Anglais</span> ou en <span className="underline">Français</span>.
          </h2>
          <h3>
            Apprenez : <span className="font-bold text-primary">Java</span>, <span className="font-bold text-primary">C</span>, <span className="font-bold text-primary">Python</span>, <span className="font-bold text-primary">Python</span>
          </h3>
          <button className="btn-primary">Découvrer les formules</button>
        </div>
        <div className="bg-white w-full space-y-4 min-h-[440px] flex items-start justify-center">
            <div className="text-5xl space-x-10 flex justify-center items-center">
            <FaJava></FaJava>
            <FaPython></FaPython>
            </div>
            
        </div>
      </div>

      {/* Section interDiv */}
      <div className="hidden absolute left-1/2 transform -translate-x-1/2 bg-gray-200 w-[80%] h-36 md:grid grid-flow-col grid-cols-2 md:grid-cols-4 rounded-md border-2 border-gray-300 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
        {programmationLine.map((programmationLine) => {
          return (
            <div key={programmationLine.id}>
              <div className="flex justify-center items-center h-full border-gray-600">
                <div
                  className={`flex justify-center items-center flex-col h-[50%] ${
                    programmationLine.id === 1
                      ? ""
                      : "border-l-[1px] border-gray-500"
                  } w-full`}
                >
                  <div className="text-2xl pb-2">{programmationLine.icon}</div>
                  <div className="font-semibold flex items-center justify-center">
                    {programmationLine.title}
                  </div>
                  <div>{programmationLine.content}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    
    </div>
  );
}
