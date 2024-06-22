'use client'
import React from 'react'
import { useScroll } from 'framer-motion'
import { useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero()  {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target:targetRef,
    });
    
   

  return ( 
    <main ref={targetRef} data-aos="fade-up" className='bg-white  duration-300'>
      <div data-aos="fade-up" className='Container min-h-[640px] flex mt-10 sm:mt-0 '>
        <div data-aos="fade-up" className='grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-5 pb-10 sm:pb-0 place-items-center px-8'>
          {/*  Image Section */}
          <div data-aos="fade-up" className='order-1 sm:order-2 relative' >
            <img title="Image de hero section"width="full" height="full" data-aos="fade-up" data-aos-delay="500" src={""} alt="Private Teaching Hero Section" className='drop-shadow-xl rounded-2xl'></img>
            <div data-aos="fade-up"   className='absolute -bottom-5 -right-8 bg-white  shadow-md rounded-xl px-4 text-md sm:text-sm'>
              <p>Random paragrahp.</p>
              <h4 >ingénieur passionné</h4>
            </div>
          </div>
          {/*  Text Section  */}
          <div className='space-y-8 order-2 sm:order-1 xl:pl-40'>
            <h1 className='text-4xl sm:text-5xl font-bold'>Phrase de bienvenue : <span className='text-primary'>Private Teaching</span></h1>
            <p data-aos="fade-up" data-aos-delay="200">
            Chez <span className='text-primary text-lg font-semibold'>Private Teaching</span>, nous nous engageons à offrir une excellence inégalée en matière d'éducation. Spécialisés dans l'enseignement privé des <span className='subHighlight'>mathématiques</span>, de la <span className='subHighlight'>physique</span>, de <span className='subHighlight'>l'électronique</span> et des <span className='subHighlight'>langages de programmation</span>, nous nous efforçons de développer les compétences et la confiance de chaque étudiant. Nos cours sur mesure, dispensés par des experts passionnés, garantissent une compréhension profonde et une application pratique des concepts. Rejoignez-nous pour découvrir un environnement d'apprentissage stimulant et innovant, où chaque élève peut atteindre son plein potentiel académique.
            </p>
            <button data-aos="fade-up" data-aos-delay="500" className='btn-primary '>
              Commencer ici ! 
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
