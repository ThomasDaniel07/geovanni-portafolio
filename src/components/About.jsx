import React from 'react'
import { Link } from 'react-scroll'
import Cv from '../media/CV.pdf'
import img from '../media/backgroundxd.png'


export const About = () => {
  return (
    <div id='sobreMi' className={'pt-20 pb-12 bg-torner bg-reutral-800'}>
      <div className='flex flex-col items-center'>
        <h3 className='text-5xl font-black font-sans text-white'>Sobre mi</h3>
        <div className='flex items-center mt-3'>
          <span className='w-2 h-2 bg-transparent border-2 rounded-full border-orange-600 '></span>
          <span className='w-28 h-[2px] bg-white dark:bg-white'></span>
          <span className='w-2 h-2 bg-transparent border-2 rounded-full border-orange-600'></span>
        </div>
        <span className='w-24 mt-1 h-[2px] bg-white dark:bg-white'></span>
      </div>
      <div className='flex flex-wrap lg:flex-nowrap lg:justify items-center mt-20 font-["poppins"] backdrop-blur-sm backdrop-brightness-50 p-4 rounded-xl lg:w-1/2'>
        <div className='flex flex-col justify-start items-start mt-8 lg:mt-0 w-full lg:w-full text-white '>
          <h4 className='sm:w-full lg:w-2/3 m-auto text-xl text-center'>Hola, Soy Mecanico industrial especialista en maquinado de Atlantico, Colombia </h4>
          <p className='mt-3 font-["poppins"] text-sm text-justify w-4/5 m-auto'>Me veo como alguien Proactivo, apasionado y autodidacta. Con experiencia en trabajo en equipo y totalmente comprometido con los proyectos realizados y asignados.</p>
          <div className='hidden sm:flex sm:m-auto sm:mt-12 mt-8 lg:w-2/3 justify-around items-center'>
            <ul className='font-semibold text-white'>
              <li className='mt-2'>Nombre:</li>
              <li className='mt-2'>Email:</li>
              <li className='mt-2'>Celular:</li>
              <li className='mt-2'>Fecha de nacimiento:</li>
              <li className='mt-2'>Nacionalidad:</li>
              <li className='mt-2'>Direccion:</li>
            </ul>
            <ul>
              <li className='mt-2'>Geovanni Sanjuan</li>
              <li className='mt-2'>geovannijosesb@gmail.com</li>
              <li className='mt-2'>3116100683</li>
              <li className='mt-2'>7-SEP-1979</li>
              <li className='mt-2'>Colombiano</li>
              <li className='mt-2'>Barranquilla, Atlantico</li>
            </ul>
          </div>
          <ul className='m-auto mt-4 text-xs sm:hidden'>
            <li className='mt-2 text-center font-semibold text-orange-500 dark:text-orange-300'>Email:</li>
            <li className='mt-2 text-center'>geovannijosesb@gmail.com</li>
            <div className='flex justify-around'>
              <li className='mt-3 font-semibold text-orange-500 dark:text-orange-300'>Celular:</li>
              <li className='mt-3'>3116100683</li>
            </div>
            <div className='flex justify-around'>
              <li className='mt-3 font-semibold text-orange-500 dark:text-orange-300'>Fecha de nacimiento:</li>
              <li className='mt-3'>7-SEP-1979</li>
            </div>
            <div className='flex justify-around'>
              <li className='mt-3 font-semibold text-orange-500 dark:text-orange-300'>Nacionalidad:</li>
              <li className='mt-3'>Colombiano</li>
            </div>
            <div className='flex justify-around'>
              <li className='mt-3 font-semibold text-orange-500 dark:text-orange-300'>Direccion:</li>
              <li className='mt-3'>Barranquilla, Atlantico</li>
            </div>
          </ul>
          <div className='flex flex-col lg:flex-row mt-8 m-auto lg:w-2/3'>
            <Link to='contacto' spy={true} smooth={true} offset={50} duration={800} >
              <button className='text-blue-50 font-["poppins"] duration-300 bg-orange-400 hover:bg-orange-400 hover:text-white dark:hover:text-black dark:hover:bg-blue-50 dark:bg-orange-500 font-semibold p-2 sm:p-3 rounded-3xl shadow-2xl shadow-orange-300'>Contactame</button>
            </Link>
            <a href={Cv} rel={'noopener noreferrer'} download={'CV.pdf'} target={'_blank'} className='mt-4 lg:mt-0 dark:text-white border-2 lg:ml-2 border-white dark:border-white bg-transparent p-2 sm:p-3 rounded-full hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900'>Descargar CV</a>
          </div>
        </div>
      </div>

    </div>
  )
}
