import React from 'react'
import { GoTriangleUp } from 'react-icons/go';

export const Experience = (props) => {
  return (
    <div className='relative z-20 bg-gray-100 shadow-2xl dark:shadow-orange-400/50 dark:bg-zinc-800 font-["Poppins"] mt-6'>
      <GoTriangleUp size={50}  className='absolute z-0 left-0 top-0 rotate-[-45deg] translate-x-[-18px] translate-y-[-18px] text-orange-400 dark:text-white'/>
      <div className='p-3 mt-2 w-4/5 m-auto'>
        <p className='text-sm'>{props.date}</p>
        <p className='text-orange-600 dark:text-orange-400 font-semibold'>{props.work}</p>
        <p className='text-justify text-sm'>{props.descrip}</p>
      </div>
      </div>
  )
}
