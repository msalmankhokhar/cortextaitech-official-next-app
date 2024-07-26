import React from 'react'

export default function ContactForm({heading=null}) {
    return (
        <form className='flex flex-col gap-5 rounded-sm max-w-screen-md w-full mx-auto'>
            <h1 className='text-left lg:text-center text-white font-bold text-2xl md:text-4xl'>{heading}</h1>
            <div className='flex flex-col gap-3'>
                <div className="flex flex-col gap-3 flex-wrap xs:flex-row">
                    <input type="text" className='bg-transparent text-white border-2 border-gray-500 flex-grow py-3 px-5 rounded-full text-xs outline-none focus:ring-2 ring-yellow-400' name='firstname' placeholder='First Name' />
                    <input type="text" className='bg-transparent text-white border-2 border-gray-500 flex-grow py-3 px-5 rounded-full text-xs outline-none focus:ring-2 ring-yellow-400' name='lastname' placeholder='Last Name' />
                </div>
                <input type="text" className='bg-transparent text-white border-2 border-gray-500 py-3 px-5 rounded-full text-xs outline-none focus:ring-2 ring-yellow-400' name='email' placeholder='Email' />
                <textarea rows={10} className='bg-transparent text-white border-2 border-gray-500 py-3 px-5 rounded-2xl text-xs outline-none focus:ring-2 ring-yellow-400' name='msg' placeholder='Your Message' />
            </div>
            <button type='button' className="bg-amber-400 font-bold py-3 px-5 rounded-full text-sm leading-none self-center">Send Your Query</button>
        </form>
    )
}
