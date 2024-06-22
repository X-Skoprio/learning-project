"use client"
import { useAmp } from 'next/amp';
import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const FooterLinks = [
    {
        title : "À prodpos",
        link : "/#about"
    },
    {
        title : "À prdopos",
        link : "/#about"
    },
    {
        title : "À pgropos",
        link : "/#about"
    },
    {
        title : "À prgopogs",
        link : "/#about"
    },
]

export default function Footer () {
  return (
    <footer className='bg-black/95 text-white pl-6 overflow-hidden'>
      <div data-aos="fade-up" className="container ">
        <div className='grid grid-cols-2 md:grid-cols-3 py-5 '>
          {/* Company Section  */}
          <div data-aos="fade-up"  className='py-4'>
           
            <h2 data-aos="fade-up"  className='sm:text-3xl text-xl font-bold'>Private Teaching</h2>
            <p data-aos="fade-up" data-aos-delay="200" className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            {/* Social Links */}
            <div  className='mt-6 flex items-center gap-4'>
              <a  href='#'><FaInstagram className='text-2xl hover:text-primary hover:-translate-y-1 duration-300' /></a>
              <a  href='#'><FaFacebookF className='text-2xl hover:text-primary hover:-translate-y-1 duration-300' /></a>
              <a  href='#'><FaTwitter className='text-2xl hover:text-primary hover:-translate-y-1 duration-300' /></a>
              <a  href='#'><FaYoutube className='text-2xl hover:text-primary hover:-translate-y-1 duration-300' /></a>
            </div>
          </div>

          {/* Links Section  */}
          <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
            <div>
                <div className='py-4'>
                    <h2 data-aos="fade-up" className='text-xl font-bold mb-3'>
                        Entreprise
                    </h2>
                    <ul data-aos="fade-up" data-aos-delay="400" className='space-y-2'>
                        {FooterLinks.map((link) => {
                            return (
                                <li key={link.title} className='cursor-pointer hover:translate-x-1 duration-300 hover:text-primary  text-gray-400'>
                                    <a href={link.link}>{link.title}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            <div>
                <div className='py-4'>
                    <h2 data-aos="fade-up"  className='text-xl font-bold mb-3'>
                        Entreprise
                    </h2>
                    <ul data-aos="fade-up" data-aos-delay="500" className='space-y-2'>
                        {FooterLinks.map((link) => {
                            return (
                                <li key={link.title} className='cursor-pointer hover:translate-x-1 duration-300 hover:text-primary  text-gray-400'>
                                    <a href={link.link}>{link.title}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
          </div>
          

        </div>
      </div>
    </footer>
  );
}
