import React from 'react'

export const Service = (props) => {
  return (
    <div className='dark:text-white shadow-xl shadow-zinc-400 bg-gray-100 dark:bg-zinc-800  dark:shadow-orange-400 w-4/5 m-auto mt-6 lg:w-1/4 pb-4 font-["poppins"] hover:scale-110 duration-200 select-none'>
      <div className='p-3 w-1/4 lg:w-1/6 rounded-full m-auto flex justify-center items-center bg-zinc-900 dark:bg-orange-400 text-white mt-5 mb-5'>
        {props.icon}
      </div>
      <p className='font-bold text-center'>{props.name}</p>
      <p className='sm:text-justify text-center w-4/5 mt-3 m-auto'>{props.descrip}</p>
    </div>
  )
}