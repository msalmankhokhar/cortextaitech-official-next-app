import React from 'react'
import Logo from './Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone, faMapLocation, faEnvelope} from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
        <footer id="footer" className="flex flex-col px-10 lg:px-28 bg-gray-950">
          <div className="py-14 flex gap-5 flex-col lg:flex-row justify-between border-b border-slate-300">
            <div className="flex flex-col gap-3">
              <Logo textColor="white"/>
              <p className="max-w-xs text-xs text-white">Cortex AI Tech is a cutting-edge technology company dedicated to advancing AI technology and providing high-quality services to businesses at reasonable costs.</p>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-sm font-bold text-white">Quick Links</h1>
              <ul className="flex flex-col">
                <li><a href="#" className="text-2xs text-white">Home</a></li>
                <li><a href="#" className="text-2xs text-white">Careers</a></li>
                <li><a href="#" className="text-2xs text-white">Support</a></li>
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-sm font-bold text-white">Quick Links</h1>
              <ul className="flex flex-col">
                <li><a href="#" className="text-2xs text-white">Web Development</a></li>
                <li><a href="#" className="text-2xs text-white">Data Analysis</a></li>
                <li><a href="#" className="text-2xs text-white">App Development</a></li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-sm font-bold text-white">Contact Us</h1>
              <ul className="flex flex-col gap-3">
                <li className="flex gap-3 items-center">
                  <div className="flex items-center justify-center rounded-full">
                    <FontAwesomeIcon icon={faPhone} className="text-xs text-white"/>
                  </div>
                  <span className="text-2xs text-white">+92-318-6456552</span>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="flex items-center justify-center rounded-full">
                    <FontAwesomeIcon icon={faEnvelope} className="text-xs text-white"/>
                  </div>
                  <span className="text-2xs text-white">info@cortexaitech.com</span>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="flex items-center justify-center rounded-full">
                    <FontAwesomeIcon icon={faMapLocation} className="text-xs text-white"/>
                  </div>
                  <span className="text-2xs text-white">Sector H/9-2 Islamabad, Pakistan</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-5">
            <p className="text-2xs text-center text-gray-200">{`Copyright 2024 | All Rights Reserved`}</p>
          </div>
        </footer>
    )
}