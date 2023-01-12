import React from 'react'
import { Service } from './miniComponents/Service'
import { MdDeveloperMode } from 'react-icons/md'
import {HiPencilSquare } from 'react-icons/hi2'
import { FaServer } from 'react-icons/fa'


export const Servicies = () => {
  return (
    <div id='servicios' className='pt-[80px] pb-24 flex flex-col flex-wrap lg:flex-nowrap justify-around dark:bg-zinc-900 dark:text-white'>
      <div className='flex flex-col items-center'>
        <h3 className='text-5xl font-bold text-orange-400'>Servicios</h3>
        <div className='flex items-center mt-3'>
          <span className='w-2 h-2 bg-transparent border-2 rounded-full border-orange-600 '></span>
          <span className='w-28 h-[2px] bg-zinc-900 dark:bg-white'></span>
          <span className='w-2 h-2 bg-transparent border-2 rounded-full border-orange-600'></span>
        </div>
        <span className='w-24 mt-1 h-[2px] bg-black dark:bg-white'></span>
      </div>
      <div className='flex flex-col lg:flex-row flex-wrap justify-around mt-16'>
        <Service 
          name='SOPORTE MECANIZADO DE COMPONENTES' 
          icon={<HiPencilSquare size={40} />} 
        />

        <Service 
          name='LIDERAR GRUPO DE TECNICO' 
          icon={<MdDeveloperMode size={40} />} 
        />

        <Service 
          name='CREACION DE PIEZAS MECANICAS' 
          icon={<FaServer size={40} />} 
        />
      </div>
      
    </div>
  )
}
