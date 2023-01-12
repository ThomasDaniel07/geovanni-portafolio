import React from 'react'
import { SlMap } from 'react-icons/sl'
import { Skill } from './miniComponents/Skill'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from "swiper"
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export const Skills = () => {
  return (
    <div id='habilidades' className='pt-[80px] pb-24 flex flex-col flex-wrap lg:flex-nowrap justify-around dark:bg-zinc-900 dark:text-white'>
      <div className='flex flex-col items-center'>
        <h3 className='text-3xl sm:text-5xl font-bold text-orange-400'>Habilidades</h3>
        <div className='flex items-center mt-3'>
          <span className='w-2 h-2 bg-transparent border-2 rounded-full border-orange-600 '></span>
          <span className='w-28 h-[2px] bg-zinc-900 dark:bg-white'></span>
          <span className='w-2 h-2 bg-transparent border-2 rounded-full border-orange-600'></span>
        </div>
        <span className='w-24 mt-1 h-[2px] bg-black dark:bg-white'></span>
      </div>
      <div className='mt-16 '>

        <Swiper effect="coverflow" allowSlidePrev={2} slidesPerView={"auto"} centeredSlides={true}  grabCursor={true} pagination={true} modules={[EffectCoverflow, Pagination]} className="bg-gray-100 dark:bg-zinc-700 h-[200px] font-['poppins'] shadow-xl" coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          }}>

            <SwiperSlide>
              <Skill 
                title={'Interpretacion de plano'} 
                icon={<SlMap title={'Plano'} size={85} className='duration-300 hover:scale-125 text-white'/>} 
                name='INTERPRETACION DE PLANO' 
              />
            </SwiperSlide>

            

        </Swiper>
        

      </div>
    </div>
  )
}
