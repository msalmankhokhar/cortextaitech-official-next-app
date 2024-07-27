import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { faArrowRight, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { faPython, faReact } from '@fortawesome/free-brands-svg-icons';

export default function Servicebox({ service_name, desc, faIcon, img }) {

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease',
      once: true
    })
  }, [])

  return (
    <>
      <div data-aos="fade-up" className="service-box ring-2 bg-slate-900  ring-gray-800 hover:ring-amber-400 w-full md:max-w-sm flex flex-col items-center gap-5 py-10 shadow-md p-5 relative rounded-xl">
        <div className="flex gap-1 justify-center items-center w-full p-5 rounded-md">
          {/* <div className={`icon-wrapper flex items-center justify-center w-20 h-20 bg-sky-800 rounded-full`}>
            <FontAwesomeIcon icon={faIcon} className={`service-icon text-3xl text-white`} />
          </div> */}
          <Image src={`/icon/${img}.svg`} className='text-am' width={75} height={75} alt='icon'/>)
        </div>
        <h2 className="font-bold text-lg text-white">{service_name}</h2>
        <p className="text-center max-w-sm md:w-full text-xs text-gray-200">{desc}</p>
        <div className='self-end absolute top-5 right-5 opacity-0 service-box-arrow transition-all duration-300'>
          <FontAwesomeIcon icon={faArrowRightLong} className='text-white' />
        </div>
      </div>
    </>
  )
}
