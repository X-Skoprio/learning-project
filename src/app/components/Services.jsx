import { TfiBlackboard } from "react-icons/tfi";
import { TbReportAnalytics } from "react-icons/tb";
import { RiAccountBoxLine } from "react-icons/ri";
import { LuVideo } from "react-icons/lu";

const skillData = [
  {
    name: "Cours en distanciel",
    icon: <><LuVideo className='text-4xl text-primary'/></>,
    link: "#",
    description: 
    "Nous offrons des cours interactifs et flexibles en distanciel, spécialement conçus pour une utilisation efficace sur tablettes. Profitez de sessions en direct et de ressources pédagogiques en ligne, encadrées par des professionnels qualifiés, pour un apprentissage enrichi et personnalisé à distance.",
    aosDelay: "0"
  },
  {
    name: "Stages de renforcement scientifiques",
    icon: <TfiBlackboard className='text-4xl text-primary'/>,
    link: "#",
    description: 
    "Nous offrons des cours en ligne de mathématiques, physique et sciences de l&apos;ingénieur pour les niveaux collège et lycée. Nos sessions interactives en direct, encadrées par des professionnels qualifiés, garantissent un apprentissage interactif et personnalisé.",
    aosDelay: "0"
  },
  {
    name: "Un suivi personnalisé et un rapport",
    icon: <TbReportAnalytics className='text-4xl text-primary'/>,
    link: "#",
    description: 
    "Nous offrons des cours en ligne d&apos;électronique, mettant l&apos;accent sur les microcontrôleurs comme Arduino. Nos sessions interactives en direct, animées par des experts qualifiés, vous permettent d&apos;explorer théorie et pratique dans ce domaine.",
    aosDelay: "0"
  },
  {
    name: "Un compte : facture, crédit d&apos;impôt, on gère tout !",
    icon: <RiAccountBoxLine className='text-4xl text-primary'/>,
    link: "#",
    description: 
    "Nous offrons des cours en ligne d&apos;électronique, mettant l&apos;accent sur les microcontrôleurs comme Arduino. Nos sessions interactives en direct, animées par des experts qualifiés, vous permettent d&apos;explorer théorie et pratique dans ce domaine.",
    aosDelay: "0"
  },
];

export default function Services() {
  return (
    <div data-aos="fade-up" className='bg-gray-100 py-12 sm:grid sm:place-items-center px-4 sm:px-2'>
      <div className="container">
        {/* header section */}
        <div className='pb-12 text-center space-y-3'>
          <h2 data-aos="fade-up" className='text text-3xl font-semibold text-primary'>Nos services</h2>
          <p data-aos="fade-up" data-aos-delay="300"><span className='subHighlight'>&quot;</span> Des <span className='subHighlight'>cours sur mesure</span> pour votre enfant, adaptés à ses <span className='subHighlight'>besoins uniques </span><span className='subHighlight'>&quot;</span></p>
        </div>
        {/* card section */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
          {skillData.map((skill) => (
            <div key={skill.name} className="card space-y-3 sm:space-y-4 p-4">
              <div data-aos="fade-up">{skill.icon}</div>
              <h2 data-aos="fade-up" data-aos-delay="300" className='text-lg font-semibold'>{skill.name}</h2>
              <p data-aos="fade-up" data-aos-delay="400" className='text-gray-600 dark:text-gray-400 text-justify pb-0 mb-0'>
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
