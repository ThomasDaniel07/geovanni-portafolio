import React from 'react'
// import { BsGithub, BsFacebook, BsTwitter } from 'react-icons/bs'

export const Footer = () => {
  return (
    <div className='flex justify-around flex-wrap p-4 bg-gray-100 dark:bg-neutral-900'>
      <p className='dark:text-white'>Portafolio personal de <span className='text-orange-500'>Geovanni Sanjuan</span> @ 2023</p>
      <p className='dark:text-white'>By <span className='text-orange-500'>Daniel Thomas</span>@ 2023</p>
      {/* <ul className='flex items-center text-zinc-900 dark:text-white'>
        <li key={'social_media_git'} className='ml-3 cursor-pointer hover:text-blue-400'>
          <a href="https://github.com/ThomasDaniel07" rel='noreferrer' target={'_blank'} className=''>
            <BsGithub size={30} />
          </a>
        </li>
        <li key={'social_media_facebook'} className='ml-3 cursor-pointer hover:text-blue-400'>
          <a href="https://www.facebook.com/danielsanjuanth/" rel='noreferrer' target={'_blank'} className=''>
            <BsFacebook size={30} />
          </a>
        </li>
        <li key={'social_media_twitter'} className='ml-3 cursor-pointer hover:text-blue-400'>
          <a href="https://twitter.com/CodeDansT" rel='noreferrer' target={'_blank'} className=''>
            <BsTwitter size={30} />
          </a>
        </li>

      </ul> */}
    </div>
  )
}
