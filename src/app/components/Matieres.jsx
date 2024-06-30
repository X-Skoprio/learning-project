import { BiMath } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { GiChemicalDrop } from "react-icons/gi";
import { LiaMicrochipSolid } from "react-icons/lia";


export const matieres = [
    {
        key :1,
        nom : "Mathématiques",
        icon : <BiMath className='text-5xl mt-3' size={30}/>,
        link : "/mathematiquesPhysiquesChimie",
    },
    {
        key :2,
        nom : "Physique",
        icon : <FaReact className='text-5xl mt-3 animate-spin' size={30}/>,
        link : "/mathematiquesPhysiquesChimie",
    },
    {
        key :3,
        nom : "Chimie",
        icon : <GiChemicalDrop className='text-5xl mt-3' size={30}/>,
        link : "/mathematiquesPhysiquesChimie",
    },
    {
        key :4,
        nom : "Web Design",
        icon : <FaHtml5 className='text-5xl mt-3' size={30}/>,
        link : "/webDesign",
    },
    {
        key :5,
        nom : "Électronique ",
        icon : <LiaMicrochipSolid className='text-5xl mt-3 animate-left-right' size={30}/>,
        link : "/electronique",
    },
    {
        key :6,
        nom : "Programmation",
        icon : <BiMath className='text-5xl mt-3' size={30}/>,
        link : "/programmation",
    },

]

export default function Matieres  () {
  return (
    <div>
        <div  className="container ">
                <div className="grid grid-cols-1 md:grid-cols-2 bg-white ">
                    {/* Section text */}
                    <div data-aos="fade-up" className='space-y-3 px-8 md:px-0 md:min-h-[400px] flex  justify-center flex-col' >
                        <div>
                            <h2 data-aos="fade-up" delay="150" className='text-4xl font-bold mt-8 mb-8 '> Des <span className='text-primary '>Matières</span> du Collège au Lycée </h2>
                            <p data-aos="fade-up" delay="300"className='text-xl text-justify '>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque ullam rerum iure iste accusamus temporibus dolor eum praesentium, non laborum dignissimos enim odio dolores illum? Excepturi illo eos esse autem?
                            </p>
                            <button data-aos="fade-up" delay="450" className='pt-4'>En savoir plus </button>
                        </div>
                    </div>
                    {/* Section carré matiere */}
                    <div className='flex items-center justify-center md:pl-12 pl-0 md:min-h-[400px]'>
                        <div className='grid md:grid-cols-3 grid-cols-2 gap-2 justify-center md:mt-24 mb-8 mt-10'>
                            {matieres.map((matiere) => {
                            return (
                            <div key={matiere.key} className='flex flex-col items-center justify-center cursor-pointer hover:scale-105 duration-300 '>
                                <div data-aos="fade-up"  className=' bg-slate-200 hover:bg-primary/90 rounded-xl border-1 border-black flex flex-col items-center justify-center space-y-3 w-full'>
                                    {matiere.icon}
                                    <h3 className=' px-4 pb-2 text-black font-semibold text-sm'>{matiere.nom}</h3>  
                                </div>
                            </div>
                                )})}
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

