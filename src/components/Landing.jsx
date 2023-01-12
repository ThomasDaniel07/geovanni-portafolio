import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import video from '../media/landing.mp4';
import Cv from '../media/CV.pdf'


export const Landing = () => {
  return (
    <div id='inicio' className='pt-["80px"] relative'>
      <video className='object-cover filter h-screen w-full' loop={true} autoPlay={true} muted={true}>
        <source src={video} />
      </video>
      <div className='z-0 absolute top-0 h-full w-full text-white flex flex-col justify-center items-center backdrop-brightness-75 backdrop-blur-sm'>
        <p className='text-3xl font-semibold'>Hola!,</p>
        <h1 className='text-4xl sm:text-7xl font-kanit italic text-center lg:text-start'>Soy <span className='text-orange-500'>Geovanni Sanjuan</span></h1>
        <TypeAnimation
          sequence={[
            'Mecanico Industrial',
            3000, 
            'Metalmecanico', 
            2000,
            'Tornero',
            4000, 
            'Fresador',
            3000 
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: '2em' }}
        />
        <a href={Cv} rel={'noopener noreferrer'} download={'CV.pdf'} target={'_blank'} className='text-blue-50 font-["poppins"] duration-200 hover:text-orange-400 dark:hover:text-black dark:hover:bg-blue-50 dark:bg-orange-500 font-semibold p-3 rounded-3xl mt-8 shadow-2xl shadow-orange-300'>Descargar CV</a>
      </div>
    </div>
  )
}
