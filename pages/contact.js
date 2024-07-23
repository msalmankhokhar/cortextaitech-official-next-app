import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import ContactDetail from '@/components/ContactDetail'
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Contact() {

  const [pageVisible, setPageVisible] = useState(false);
  useEffect(()=>{
    setPageVisible(true)
  }, [])
  
  return (
    <>
    <Navbar />

    <main id='main' className={`transition-all duration-500 ${pageVisible ? 'opacity-100' : 'opacity-0'}`}>

      <section className='px-5 sm:px-10 py-10'>
        <div className='flex flex-col flex-wrap lg:flex-row justify-between gap-7'>
          <ContactDetail />
          <ContactForm heading={`We'd love to hear from you`} />
        </div>
      </section>

      <Footer />
    </main>
    </>
  )
}
