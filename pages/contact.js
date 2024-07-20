import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import ContactDetailBox from '@/components/ContactDetailBox'

export default function Contact() {

  const [pageVisible, setPageVisible] = useState(false);
  useEffect(()=>{
    setPageVisible(true)
  }, [])
  
  return (
    <>
    <Navbar />

    <main id='main' className={`transition-all duration-500 ${pageVisible ? 'opacity-100' : 'opacity-0'}`}>

      <section className='px-10 py-10'>
        <div className='flex justify-between gap-5'>
          <div className='flex flex-col gap-4'>
            <ContactDetailBox
              title="Hours of Operation"
              icon={faClock}
              details={['Monday - Thursday 9:00 AM to 5:00 PM', 'Friday, Satuday, Sunday Off']}
              color={"teal"}
            />
            <ContactDetailBox
              title="Support"
              icon={faPhoneVolume}
              details={[
                <><strong className='font-semibold'>Mail</strong> <span>info@cortexaitech.com</span></>,
                <><strong className='font-semibold'>Mobile</strong> <span>+92 318 6456552</span></>
              ]}
              color={"sky"}
            />
            <ContactDetailBox
              title="Address"
              icon={faLocationDot}
              details={['Sector H-9/2, Islamabad', 'Punjab, Pakistan']}
            />
          </div>
          <form className='flex flex-col gap-5 rounded-sm max-w-screen-md w-full'>
            <h1 className='text-center text-slate-800 font-bold text-4xl'>We{"'"}d love to hear from you</h1>
            <div className='flex flex-col gap-3'>
              <div className="flex gap-3">
                <input type="text" className='bg-white border border-gray-300 flex-grow py-3 px-5 rounded-full text-xs outline-none focus:ring-2 ring-yellow-400' name='firstname' placeholder='First Name' />
                <input type="text" className='bg-white border border-gray-300 flex-grow py-3 px-5 rounded-full text-xs outline-none focus:ring-2 ring-yellow-400' name='lastname' placeholder='Last Name' />
              </div>
              <input type="text" className='bg-white border border-gray-300 py-3 px-5 rounded-full text-xs outline-none focus:ring-2 ring-yellow-400' name='email' placeholder='Email' />
              <textarea rows={10} className='bg-white border border-gray-300 py-3 px-5 rounded-2xl text-xs outline-none focus:ring-2 ring-yellow-400' name='msg' placeholder='Your Message' />
            </div>
            <button type='button' className="bg-amber-500 text-white font-bold py-3 px-5 rounded-full text-xs leading-none self-center">Submit</button>
          </form>
        </div>
      </section>

    </main>
    </>
  )
}
