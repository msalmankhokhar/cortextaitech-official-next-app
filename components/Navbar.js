import React from 'react'
import Logo from './Logo'

export default function Navbar() {
  return (
      <nav className="flex items-center gap-5 py-3 px-10 justify-between bg-white">
          <Logo />
          <div className="flex items-center justify-center gap-5">
            <ul className="flex items-center justify-center gap-5">
                <li><a href="#" className="text-sm font-semibold text-gray-600 leading-none border-b-2 border-amber-500 pb-1">Home</a></li>
                <li><a href="#" className="text-sm font-semibold text-gray-600 leading-none">Features</a></li>
                <li><a href="#" className="text-sm font-semibold text-gray-600 leading-none">About</a></li>
                <li><a href="#" className="text-sm font-semibold text-gray-600 leading-none">Contact Us</a></li>
            </ul>
              <a href="#" className="text-gray-600 text-sm font-semibold leading-none">Login</a>
              <a href="#" className="bg-slate-800 text-white font-bold py-3 px-5 rounded-full text-xs leading-none">Sign Up</a>
          </div>
      </nav>
  )
}
