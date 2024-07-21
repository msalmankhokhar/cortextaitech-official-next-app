import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import ContactDetail from '@/components/ContactDetail'
import ContactForm from '@/components/ContactForm';

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
          <ContactDetail />
          <ContactForm heading={`We'd love to hear from you`} />
        </div>
      </section>

    </main>
    </>
  )
}
