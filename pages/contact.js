import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Contact() {

  const [opacity, setOpacity] = useState(0);
  useEffect(()=>{
    setTimeout(() => {
      setOpacity(100)
    }, 10);
  }, [])
  
  return (
    <>
    <Navbar />
    <main id='main' className={`transition-all duration-300 opacity-${opacity}`}>
      <section className='px-10 py-10'>
        <div className='flex justify-between gap-5'>
          <div className='flex flex-col gap-4'>

            <div className='flex rounded-lg overflow-hidden'>
              <div className='flex items-center justify-center px-6 bg-slate-800 aspect-square'>
                <FontAwesomeIcon icon={faClock} className='text-white text-2xl'/>
              </div>
              <div className='flex flex-col px-5 py-3'>
                <h1 className='text-sm font-bold'>Hour of Operation</h1>
                <div className='flex flex-col gap-1'>
                  <p className='text-xs'>Monday - Friday 9:00 AM to 5:00 PM</p>
                  <p className='text-xs'>Satuday, Sunday Off</p>
                </div>
              </div>
            </div>

            <div className='flex rounded-lg overflow-hidden'>
              <div className='flex items-center justify-center px-6 bg-slate-800 aspect-square'>
                <FontAwesomeIcon icon={faClock} className='text-white text-2xl'/>
              </div>
              <div className='flex flex-col px-5 py-3'>
                <h1 className='text-sm font-bold'>Hour of Operation</h1>
                <div className='flex flex-col gap-1'>
                  <p className='text-xs'>Monday - Friday 9:00 AM to 5:00 PM</p>
                  <p className='text-xs'>Satuday, Sunday Off</p>
                </div>
              </div>
            </div>

            <div className='flex rounded-lg overflow-hidden'>
              <div className='flex items-center justify-center px-6 bg-slate-800 aspect-square'>
                <FontAwesomeIcon icon={faClock} className='text-white text-2xl'/>
              </div>
              <div className='flex flex-col px-5 py-3'>
                <h1 className='text-sm font-bold'>Hour of Operation</h1>
                <div className='flex flex-col gap-1'>
                  <p className='text-xs'>Monday - Friday 9:00 AM to 5:00 PM</p>
                  <p className='text-xs'>Satuday, Sunday Off</p>
                </div>
              </div>
            </div>

          </div>
          <form className='flex flex-col gap-5 rounded-sm max-w-screen-md w-full'>
            <h1 className='text-center text-slate-800 font-bold text-4xl'>We{"'"}d love to hear from you</h1>
            <div className='flex flex-col gap-3'>
              <input type="text" className='bg-white border border-gray-300 py-3 px-5 rounded-full text-xs outline-none focus:ring-2 ring-yellow-400' name='name' placeholder='Name' />
              <input type="text" className='bg-white border border-gray-300 py-3 px-5 rounded-full text-xs outline-none focus:ring-2 ring-yellow-400' name='email' placeholder='Email' />
              <input type="text" className='bg-white border border-gray-300 py-3 px-5 rounded-full text-xs outline-none focus:ring-2 ring-yellow-400' name='msg' placeholder='Your Message' />
            </div>
            <button type='button' className="bg-amber-500 text-white font-bold py-3 px-5 rounded-full text-xs leading-none self-center">Submit</button>
          </form>
        </div>
      </section>
    </main>
    </>
  )
}
