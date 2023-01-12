import React, {useState} from 'react'
import { MdMenuOpen, MdLightMode, MdNightlight} from 'react-icons/md';
import { BsWrench } from 'react-icons/bs'
import {HiWrenchScrewdriver} from 'react-icons/hi2';
import { Link } from 'react-scroll';


const NavBar = () => {

  

  const [nav,SetNav] = useState(false);
  const [isDark,setDark] = useState(true);

  const handleMenu = ()=>{
    SetNav(!nav);
  }

  const handleSetDark = ()=>{
    document.documentElement.classList.toggle('dark')
    setDark(!isDark);
    SetNav(false)
  }



  return (
    <div className='fixed w-full z-30 flex justify-around items-center min-h-[80px] dark:bg-neutral-800 bg-white text-orange-400 font-["poppins"] shadow-xl'>

      <h1 className='text-2xl sm:text-3xl font-overpass text-orange-400 flex items-center'>Geovanni<span><BsWrench className='rotate-45 text-zinc-900 dark:text-white' /></span>Sanjuan</h1>

      <ul className={!nav ? 'fixed top-[-150%] z-0 w-full flex flex-col items-center duration-500 ease-in-out lg:relative lg:w-auto lg:top-0 lg:z-30 lg:dark:text-white lg:text-black lg:flex-row font-semibold overflow-y-auto' : 'overflow-y-auto font-semibold fixed z-40 top-[80px] h-screen lg:h-auto flex flex-col items-center bg-zinc-900 lg:bg-white w-full text-white duration-500 ease-in-out dark:text-black dark:bg-white lg:dark:bg-transparent lg:dark:text-white lg:relative lg:w-auto lg:top-0 lg:z-30 lg:text-black lg:flex-row'}>
        <Link to='inicio' spy={true} smooth={true} offset={10} duration={800}><li key={'nav_element1'} onClick={handleMenu} className='hover:text-orange-400 p-4 mt-2 lg:mt-0 cursor-pointer'>Inicio</li></Link>
        <Link to='sobreMi' spy={true} smooth={true} offset={10} duration={800}><li key={'nav_element2'} onClick={handleMenu} className='hover:text-orange-400 p-4 mt-2 lg:mt-0 cursor-pointer'>Sobre mi</li></Link>
        <Link to='servicios' spy={true} smooth={true} offset={10} duration={800}><li key={'nav_element3'} onClick={handleMenu} className='hover:text-orange-400 p-4 mt-2 lg:mt-0 cursor-pointer'>Servicios</li></Link>
        {/* <Link to='habilidades' spy={true} smooth={true} offset={-100} duration={800}><li key={'nav_element7'} onClick={handleMenu} className='hover:text-orange-400 p-4 mt-2 lg:mt-0 cursor-pointer'>Habilidades</li></Link> */}
        <Link to='resumen' spy={true} smooth={true} offset={10} duration={800}><li key={'nav_element4'} onClick={handleMenu} className='hover:text-orange-400 p-4 mt-2 lg:mt-0 cursor-pointer'>Resumen</li></Link>
        <Link to='contacto' spy={true} smooth={true} offset={10} duration={800}><li key={'nav_element5'} onClick={handleMenu} className='hover:text-orange-400 p-4 mt-2 lg:mt-0 cursor-pointer'>Contactame</li></Link>
        <li key={'nav_element6'} className='hover:text-stone-900 select-none p-2 mt-2 cursor-pointer lg:mt-0 lg:mb-0 mb-4 flex items-center rounded-full text-white bg-orange-400' onClick={handleSetDark}>{isDark ? <MdLightMode size={30} title='Activar modo claro' /> : <MdNightlight size={30} title='Activar modo oscuro'/>}</li>
      </ul>

      <div className='block duration-500 cursor-pointer ease-linear lg:hidden' onClick={handleMenu}>

        {!nav ? <MdMenuOpen size={40}/> : <HiWrenchScrewdriver size={40}/>}
        
      </div>
    </div>
  )
}

export default NavBar;