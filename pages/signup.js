import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import Logo from '@/components/Logo'
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {

  const [pageVisible, setPageVisible] = useState(false);
  useEffect(()=>{
    setPageVisible(true)
  }, [])
  
  return (
    <>
    {/* <Navbar /> */}

    <main id='main' className={`transition-all duration-500 ${pageVisible ? 'opacity-100' : 'opacity-0'}`}>

      <section className='px-10 py-10'>
        <div className="flex justify-center">
            <div className='flex flex-col gap-5 max-w-screen-xs w-full'>
                <form className='flex flex-col gap-5 rounded-sm'>
                    <Logo/>
                    {/* Heading ki need nhi he uske bagher zyada acha lg rha he
                        but you can uncomment or comment it according to your need
                    */}
                    {/* <h1 className='text-slate-800 font-bold text-2xl text-center'>Create Your Account</h1> */}
                    <div className='flex flex-col gap-3'>
                    <input type="text" className='bg-white border border-gray-300 py-3 px-5 rounded-full text-xs outline-none focus:ring-2 ring-yellow-400' name='name' placeholder='Name' />
                    <input type="email" className='bg-white border border-gray-300 py-3 px-5 rounded-full text-xs outline-none focus:ring-2 ring-yellow-400' name='email' placeholder='Email' />
                    <input type="password" className='bg-white border border-gray-300 py-3 px-5 rounded-full text-xs outline-none focus:ring-2 ring-yellow-400' name='password' placeholder='Password' />
                    </div>
                    <button type='button' className="bg-amber-500 text-white font-bold py-3 px-5 rounded-full text-xs leading-none">Create Account</button>
                </form>
                <div className="flex gap-2 items-center">
                    <div className="w-full bg-gray-300 leading-none h-px flex-grow"></div>
                    <span className="text-xs text-gray-600 font-semibold">OR</span>
                    <div className="w-full bg-gray-300 leading-none h-px flex-grow"></div>
                </div>
                <a href="#" className="btn-secondary flex items-center border bg-white-50 border-gray-300 py-3 px-5 rounded-full text-xs leading-none text-slate-600">
                    <Image width={18} height={18} src="/img/google-icon.png" alt="Google Icon" />
                    <span className='leading-none flex-grow text-center text-xs font-bold'>Continue with Google</span>
                </a>
                <a href="#" className='text-xs text-slate-500 self-center font-semibold'>Forgot Password ?</a>
                <div className='p-5 border border-slate-300 rounded-sm shadow-sm'>
                    <p className='text-xs flex gap-1 justify-center items-center leading-none'>
                        <span className='text-xs text-slate-600'>Already have an account?</span>
                        <Link href="/login" className='text-slate-700 self-center font-semibold'>Log In</Link>
                    </p>
                </div>
            </div>
        </div>
      </section>

    </main>
    </>
  )
}