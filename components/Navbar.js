"use client"
import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {

  const pathname = usePathname()

  return (
      <nav className="flex items-center gap-5 py-3 px-10 justify-between bg-white shadow-sm">
          <Logo />
          <div className="flex items-center justify-center gap-5">
            <ul className="flex items-center justify-center gap-5">
                <li><Link href="/" className={`${pathname=='/'?'nav-link-current' : null} text-sm font-semibold text-gray-600 leading-none`}>Home</Link></li>
                <li><Link href="#" className={`${pathname=='/features'?'nav-link-current' : null} text-sm font-semibold text-gray-600 leading-none`}>Features</Link></li>
                <li><Link href="#" className={`${pathname=='/about'?'nav-link-current' : null} text-sm font-semibold text-gray-600 leading-none`}>About</Link></li>
                <li><Link href="/contact" className={`${pathname=='/contact'?'nav-link-current' : null} text-sm font-semibold text-gray-600 leading-none`}>Contact Us</Link></li>
            </ul>
              <a href="#" className="text-gray-600 text-sm font-semibold leading-none">Login</a>
              <a href="#" className="bg-slate-800 text-white font-bold py-3 px-5 rounded-full text-xs leading-none">Sign Up</a>
          </div>
      </nav>
  )
}
