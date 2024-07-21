import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
  
export default function TeamMember({name, designation, picture=true, picFormat='png'}) {
    return (
        <div className="flex flex-col rounded-md overflow-hidden bg-white shadow-sm border border-gray-200">
            <div className='p-10'>
                <Image className='rounded-full aspect-square ring-2 ring-slate-200' src={picture ? `/img/team/${name.replace(" ", "_")}.${picFormat}` : '/img/team-default.jpg'} width={160} height={160} alt={name} />
            </div>
            <div className="flex flex-col gap-1 px-3 py-4">
                <h2 className="font-bold text-sm">{name}</h2>
                <div className="flex justify-between items-center gap-1">
                    <p className="text-xs">{designation}</p>
                    <div className="flex items-center gap-1">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-50">
                            <FontAwesomeIcon icon={faLinkedinIn} className="text-xs text-sky-500" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
