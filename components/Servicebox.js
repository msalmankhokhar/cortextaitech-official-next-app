import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Servicebox({service_name, desc, icon, color}) {
  return (
      <div className="service-box bg-white max-w-sm w-fit flex flex-col items-center gap-4 shadow-md p-5 rounded-md">
          <div className={`icon-wrapper p-6 rounded-lg bg-${color}-500`}>
              <FontAwesomeIcon icon={icon}
              className={`text-white text-lg 
              ${
                color=='yellow ? bg-yellow-500',
                color=='sky ? bg-sky-500',
                color=='teal ? bg-teal-500',
                color=='green ? bg-green-500',
                color=='red ? bg-red-500',
                color=='orange ? bg-orange-500'
              }`}/> 
          </div>
          <h2 className="font-bold text-lg">{service_name}</h2>
          <p className="text-center text-xs text-gray-500">{desc}</p>
      </div>
  )
}
