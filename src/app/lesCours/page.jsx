
import {matieres} from '../components/Matieres'
import Link from 'next/link'

export default function LesCours() {

    return(
        <div>
            <div className='grid place-items-center h-full'>
                        <div className='grid md:grid-cols-3 grid-cols-2 gap-4 justify-center w-full p-6 md:p-40 h-full pb-24  '>
                            {matieres.map((matiere) => {
                            return (
                                <Link href={matiere.link} key={matiere.key}>
                            <div  className='flex flex-col items-center justify-center cursor-pointer hover:scale-105 duration-300 h-full '>
                                
                                
                                <div data-aos="fade-up"  className=' bg-slate-200 hover:bg-primary/90 rounded-xl border-1 border-black flex flex-col items-center justify-center space-y-3 w-full h-40 md:h-40'>
                                    {matiere.icon}
                                    <h3 className=' px-4 pb-2 text-black font-semibold text-sm md:text-xl te'>{matiere.nom}</h3>  
                                </div>
                               
                            </div>
                            </Link>
                                )})}
                        </div>
                    </div>
        </div>
    )
}
