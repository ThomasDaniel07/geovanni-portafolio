import React from 'react'

export const Skill = (props) => {
  return (
    <figure className='m-4 flex flex-col items-center' title={props.title}>
      {props.icon}
      <p className='mt-3 select-none'>{props.name}</p>
    </figure>
  )
}