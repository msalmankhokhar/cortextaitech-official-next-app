import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { faArrowRight, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

export default function Servicebox({service_name, desc, icon, color}) {

  useEffect(()=>{
    AOS.init({
      duration: 500,
      easing: 'ease',
      once: true
    })
  }, [])

  return (
    <>
      <div data-aos="fade-up" className="service-box ring-2  ring-gray-600 hover:ring-amber-400 w-full md:max-w-sm flex flex-col items-center gap-5 py-10 shadow-md p-5 relative rounded-xl">
          <div className={`icon-wrapper flex items-center justify-center w-20 h-20 brand-gradient rounded-full`}>
              {/* <FontAwesomeIcon icon={icon}
              className={`text-white text-lg 
              ${
                color=='yellow ? bg-yellow-500',
                color=='sky ? bg-sky-500',
                color=='teal ? bg-teal-500',
                color=='green ? bg-green-500',
                color=='red ? bg-red-500',
                color=='orange ? bg-orange-500'
              }`}/>  */}
              <FontAwesomeIcon icon={icon}
              className={`service-icon text-3xl text-white`}/>
          </div>
          <h2 className="font-bold text-lg text-white">{service_name}</h2>
          <p className="text-center max-w-sm md:w-full text-xs text-gray-200">{desc}</p>
          <div className='self-end absolute top-5 right-5 opacity-0 service-box-arrow transition-all duration-300'>
            <FontAwesomeIcon icon={faArrowRightLong} className='text-white'/>
          </div>
      </div>
    </>
  )
}
