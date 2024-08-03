import { useState } from 'react'
import { IonIcon } from '@ionic/react';
import { close, menu } from 'ionicons/icons'; 

import { NavLink } from 'react-router-dom';
const Nav = () => {
    const Links =[
      {name:"ACCUEIL",link:"/"},
      {name:"MENU",link:"/menu"},
      {name:"CONTACT",link:"/contact"},
      {icon:"basket",link:"/basket"},
    ];
    const [open,setOpen]=useState(false);
  return (
    <div className='z-10 shadow-md w-full sticky top-0 left-0'>
      <div className='md:flex items-center justify-between bg-blue-950 py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <img className="w-24" src="/ppt.png" alt="" />
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer  md:hidden'>
      <IonIcon className='text-white' icon={open ? close:menu}></IonIcon>
      </div>
      <ul className={`md:flex md:flex-row md:items-center md:pb-0 pb-12 absolute md:static bg-blue-950 md:z-auto z-[-1] left-0 w-full md:w-auto flex flex-col items-center md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-28' : 'top-[-490px]'}`}>
          {Links.map((link, index) => (
            <li key={index} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link}className='text-white hover:text-gray-400 duration-500 flex items-center'>
              <NavLink to={link.link}>{link.name}
              </NavLink>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Nav