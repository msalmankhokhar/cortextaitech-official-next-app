import React from 'react'
import Logo from './Logo'

export default function Navbar() {
  return (
      <nav className="flex items-center gap-5 py-3 px-10 justify-between">
          <Logo />
          <ul className="flex items-center justify-center gap-10">
              <li><a href="#" className="text-sm text-gray-600 leading-none">Home</a></li>
              <li><a href="#" className="text-sm text-gray-600 leading-none">Features</a></li>
              <li><a href="#" className="text-sm text-gray-600 leading-none">About</a></li>
              <li><a href="#" className="text-sm text-gray-600 leading-none">Contact Us</a></li>
          </ul>
          <div className="flex items-center justify-center gap-5">
              <a href="#" className="text-gray-600 text-sm leading-none">Login</a>
              <a href="#" className="bg-black text-white font-bold py-3 px-4 rounded-md text-xs leading-none">Sign Up</a>
          </div>
      </nav>
  )
}
