"use client"

import {HiMenuAlt3, HiMenuAlt1  } from "react-icons/hi"
import ResponsiveMenu from "@/app/components/ResponsiveMenu";
import { useState } from "react";
import Link from "next/link";

export const MenuLinks = [
    {
        id: 1,
        name: "Accueil",
        link: "/"
    },
    {
        id: 2,
        name: "Les cours",
        link: "/"
    },
    {
        id: 3,
        name: "test login",
        link: "/login"
    },
]

export default function Navbar ({toggleLoginPopup, loginPopup})  {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  

  const toggleMenu = () => {
   setIsMenuOpen(!isMenuOpen);
   console.log(isMenuOpen)
   
  };

  return (
    <nav className="bg-white  duration-300 px-4 sm:px-0 items-center z-50">
      <div className="container py-3 md:py-2 sm:px-0">
        <div className="flex justify-between items-center">
          <div className="">
            <img width="full" height="full" title = "ceci est le logo de Private Teaching" className="h-16 scale-75 p-0 m-0" src={"/"} alt="Private Teaching Logo" />
          </div>

          <div className="hidden md:block">
            <ul className="flex items-center gap-8 ">
              {
                MenuLinks.map(({ id, name, link }) => (
                  <li key={id} className="cursor-pointer py-4 hover:-translate-y-1 duration-300">
                    <Link href={link} 
                    className="text-sm font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-all duration-300"
                    onClick={() => {
                      if (link == "/login")
                      {
                        toggleLoginPopup(true)
                        console.log("clicked")
                        console.log(loginPopup)
                      } }} >{name}</Link>
                  </li>
                ))
              }
              <button className="btn-primary text-sm">Contactez-nous</button>
       
            </ul>
          </div>

          <div className="flex items-center gap-4 md:hidden">

            {isMenuOpen ? (
              <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer text-2xl z-50 " />
            ) : (
              <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer text-2xl z-50" />
            )}
          </div>
          <ResponsiveMenu showMenu={isMenuOpen}  toggleLoginPopup={toggleLoginPopup} />
        </div>
      </div>
    </nav>
  );
};

