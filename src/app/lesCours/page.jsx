import { BiMath } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { GiChemicalDrop } from "react-icons/gi";
import { LiaMicrochipSolid } from "react-icons/lia";
import { RiRobot2Line } from "react-icons/ri";
import { AiOutlineCode } from "react-icons/ai";

import Link from "next/link";

const matieres = [
  {
    key: 1,
    nom: "Mathématiques",
    icon: <BiMath className="w-20 h-20 mt-3" size={30} />,
    link: "/mathematiquesPhysiquesChimie",
  },
  {
    key: 2,
    nom: "Physique",
    icon: <FaReact className="w-20 h-20 mt-3 animate-spin" size={30} />,
    link: "/mathematiquesPhysiquesChimie",
  },
  {
    key: 3,
    nom: "Chimie",
    icon: <GiChemicalDrop className="w-20 h-20 mt-3" size={30} />,
    link: "/mathematiquesPhysiquesChimie",
  },
  {
    key: 4,
    nom: "Web Design",
    icon: <FaHtml5 className="w-20 h-20 mt-3" size={30} />,
    link: "/webDesign",
  },
  {
    key: 5,
    nom: "Électronique ",
    icon: (
      <LiaMicrochipSolid
        className="w-20 h-20 mt-3 animate-left-right"
        size={30}
      />
    ),
    link: "/electronique",
  },
  {
    key: 6,
    nom: "Programmation",
    icon: <AiOutlineCode className="w-20 h-20 mt-3" size={30} />,
    link: "/programmation",

  },
  {
  key: 7,
  nom: "Intelligence Artificielle",
  icon: <RiRobot2Line className="w-20 h-20 mt-3" size={30} />,
  link: "/ia",
},
];
export default function LesCours() {
  return (
    <div className="w-svw h-full px-6 md:px-52 pt-2 pb-12 ">
      {/* First Row */}
      <div className="w-full pt-4 pb-12 h-6 flex items-center justify-center">
        <h1 className="text-3xl font-bold ">Les cours</h1>
      </div>
      {/* First row */}
      <div className="grid md:grid-flow-col grid-cols-1 md:grid-cols-2 gap-6 w-full h-full place-items-center p-2">
        {matieres.slice(3, 5).map((matiere) => {
          return (
            <Link    key={matiere.key} className="w-full h-full" href={matiere.link}>
              <div
              
                className="w-full shadow-md bg-slate-300 rounded-md hover:scale-[1.01] cursor-pointer h-40 duration-300 hover:bg-primary/90 p-6 relative grid grid-cols-2"
              >
                <div className="w-full h-full flex items-center justify-start relative">
                  <h3 className="text-2xl w-full h-full absolute top-0 left-0">
                    {matiere.icon}
                  </h3>
                </div>

                <div className="w-full h-full relative">
                  <h3 className="font-bold text-xl absolute bottom-0 right-0">
                    {matiere.nom}
                  </h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Second Row */}
      <div className="grid md:grid-flow-col grid-cols-1 md:grid-cols-3 gap-6 w-full h-full place-items-center p-2">
        {matieres.slice(0, 3).map((matiere) => {
          return (
            <Link  key={matiere.key} className="w-full h-full" href={matiere.link}>
              <div
               
                className="w-full bg-slate-400 shadow-md rounded-md hover:scale-[1.01] cursor-pointer h-40 duration-300 hover:bg-primary/90 p-6 relative grid grid-cols-2"
              >
                <div className="w-full h-full flex items-center justify-start ">
                  <h3 className="text-2xl w-full h-full flex items-center justify-center">
                    {matiere.icon}
                  </h3>
                </div>

                <div className="w-full h-full relative">
                  <h3 className="font-bold text-xl absolute bottom-0 right-0">
                    {matiere.nom}
                  </h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Third Row */}
      <div className="grid md:grid-flow-col grid-cols-1 md:grid-cols-2 gap-6 w-full h-full place-items-center p-2">
        {matieres.slice(5,7).map((matiere) => {
          return (
            <Link  key={matiere.key} className="w-full h-full" href={matiere.link}>
              <div
              
                className="w-full shadow-md bg-slate-300 rounded-md hover:scale-[1.01] cursor-pointer h-40 duration-300 hover:bg-primary/90 p-6 relative grid grid-cols-2"
              >
                <div className="w-full h-full flex items-center justify-start">
                  <h3 className="text-6xl w-full h-full flex items-center justify-center">
                    {matiere.icon}
                  </h3>
                </div>

                <div className="w-full h-full relative">
                  <h3 className="font-bold text-xl absolute bottom-0 right-0">
                    {matiere.nom}
                  </h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
