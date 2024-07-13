import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { MenuLinks } from './Navbar'

export default function ResponsiveMenu({ showMenu, toggleLoginPopup }) {
  return (
    <div className={`${showMenu ? "left-0" : "left-[-100%]"} 
        fixed bottom-0 top-0 w-[80%] shadow-lg transition-all duration-300 pt-16 
        px-8 bg-gray-300  z-[999] md:hidden flex flex-col 
        justify-between pb-4`}>

      <div className='Card'>

        {/* User Section */}
        <div className='flex items-center justify-start gap-3'>
          <FaUserCircle size={50} />
          <div>
            <h2>Bienvenue (utilisateur)</h2>
            <h2 className='text-sm text-slate-500'>Bla bla en plus</h2>
          </div>
        </div>
        {/* Menu Section */}
        <nav className='mt-12 w-[100%] flex justify-center items-center h-full flex-col'>
          <ul className='space-y-4 text-md flex items-center justify-center flex-col'>
            {MenuLinks.map(({ id, name, link }) => {
              return (
                <li key={id} className='cursor-pointer py-4 flex items-center justify-center flex-col'>
                  <a href={link} className='mb-5 inline-block hover:text-primary hover:-translate-y-1 duration-300'
                    onClick={() => {
                      if (link === '#Login') {
                        toggleLoginPopup(true)
                        console.log("clicked")
                      }
                    }}> {name}</a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
      {/* footer Section */}
      <div className='flex align-center justify-center w-full pb-3'>
        <h3>L&apos;excellence n&apos;a pas de prix !</h3>
      </div>
    </div>
  )
}
