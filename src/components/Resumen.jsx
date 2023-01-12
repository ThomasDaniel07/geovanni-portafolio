import React from 'react'
import { Experience } from './miniComponents/Experience'

export const Resume = () => {
  return (
    <div id='resumen' className='pt-[80px] pb-24 flex flex-col flex-wrap lg:flex-nowrap justify-around dark:bg-zinc-900 dark:text-white'>
      <div className='flex flex-col items-center'>
        <h3 className='text-5xl font-bold text-orange-400'>Resumen</h3>
        <div className='flex items-center mt-3'>
          <span className='w-2 h-2 bg-transparent border-2 rounded-full border-orange-600 '></span>
          <span className='w-28 h-[2px] bg-zinc-900 dark:bg-white'></span>
          <span className='w-2 h-2 bg-transparent border-2 rounded-full border-orange-600'></span>
        </div>
        <span className='w-24 mt-1 h-[2px] bg-black dark:bg-white'></span>
      </div>
      <div className='w-4/5 mt-12 flex flex-col lg:flex-row justify-around m-auto'>
        <div className='lg:w-2/5'>
          <div className='flex flex-col'>
            <h3 className='text-2xl font-semibold text-zinc-900 dark:text-white'>Educacion</h3>
            <div className='flex flex-col mt-1'>
              <span className='w-28 h-[2px] bg-orange-400'></span>
              <span className='w-14 h-[2px] mt-1 bg-zinc-900 dark:bg-white'></span>
            </div>
          </div>
          <p className='mt-3'>Esta ha sido mi ruta de aprendizaje formal hasta el vigente año</p>
          <Experience 
            date='1989-1993 Barranquilla' 
            work='Estudios primarios'
            descrip='Realizado en la Institución Educativa Don Bosco'
          />
          <Experience
            date ='1994 - 1999 Barranquilla'
            work = 'Estudios secundarios'
            descrip = 'Realizado en la Institución Educativa Don Bosco'
          />
          <Experience 
            date = '2003-2005 Barranquilla'
            work = 'Mecanico industrial (METALMECANICO)'
            descrip = 'Realizado con el Servicio Nacional de Aprendizaje (SENA)'
          />
          <Experience 
            date = '2005-2006 Barranquilla'
            work = 'Modelista industrial'
            descrip = 'Realizado en el Servicio Nacional de Aprendizaje (SENA).'
          />
        </div>
        <div className='mt-10 lg:mt-0 lg:w-2/5'>
          <div className='flex flex-col'>
            <h3 className='text-2xl font-semibold text-zinc-900 dark:text-white'>Experiencia</h3>
            <div className='flex flex-col mt-1'>
              <span className='w-28 h-[2px] bg-orange-400'></span>
              <span className='w-14 h-[2px] mt-1 bg-zinc-900 dark:bg-white'></span>
            </div>
          </div>
          <p className='mt-3'>Esta es mi experiencia laborar en un rango de 16 años</p>
          <Experience 
            date='Septiembre 2016 - Junio 2020'
            work='AUSTING INGENIEROS || TECNICO TORNERO'
            descrip = 'Manteniento y maquinado de equipos pesados multiples caterpilla y Hitach.'
          />
          <Experience
            date='Febrero 2015 - Febrero 2016'
            work = 'KOMATSU-TECPALSA || TECNICO TORNERO'
            descrip = 'Maquinado de componentes mineros con torno portátil.'
          />
          <Experience
            date='Junio 2011 - Diciembre 2015'
            work = 'DIMANTEC LTDA || ESPECIALISTA EN MAQUINADO III (TORNERO)'
            descrip = 'Abricar piezas y rectificar alojamientos para la recuperacion de equipos y componentes mineros tales como : palas,tractores ,camiones,moto niveladoras caterpillar.'
          />
          <Experience
            date='Abril 2009 - Noviembre 2010'
            work = 'H.A. INGENIERIA || TECNICO TORNERO (torno portatil)'
            descrip = 'Fabricar piezas y rectificar alojamientos para la recuperacion de equipos y componentes mineros tales como : palas,tractores ,camiones,cargadores,moto niveladoras de marcas caterpillar , hitachi.'
          />
          <Experience 
            date='Julio 2004 - Febrero 2009'
            work='COMPAÑÍA GENERAL DE ACEROS || OPERADOR DE MAQUINAS Y HERRAMIENTAS'
            descrip='Fabricaion de piezas para todo tipo de aplicaciones de la industria'
          />
        </div>
      </div>
    </div>
  )
}
