import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ContactDetailBox({title, details, icon, color}) {
  return (
      <div className='flex w-max rounded-lg'>
          <div className={`flex rounded-lg items-center justify-center w-16 h-16
            ${
                color=='teal'?'bg-teal-500':
                color=='sky'?'bg-sky-500':
                color=='red'?'bg-red-500':
                color=='violet'?'bg-violet-500':'bg-slate-800'
            }`
            }>
            <FontAwesomeIcon icon={icon} className='text-white text-2xl' />
          </div>
          <div className='flex flex-col gap-3 h-full pl-3 py-1'>
              <h1 className='text-sm font-bold leading-none text-white'>{title}</h1>
              <div className='flex flex-col gap-2'>
                {
                    details.map((text)=>{
                        return <p key={details.indexOf(text)} className='text-xs text-white leading-none flex gap-3'>{text}</p>
                    })
                }
              </div>
          </div>
      </div>
  )
}
