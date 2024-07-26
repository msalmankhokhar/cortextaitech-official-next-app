import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export default function TeamMember({ name, designation, picture = true, picFormat = 'png' }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if window is defined to avoid errors during SSR
        if (typeof window !== 'undefined') {
            const isMobileDevice = window.innerWidth <= 768; // Example threshold for mobile
            setIsMobile(isMobileDevice);
        }
    }, []);
    return (
        <div className="flex flex-col rounded-lg overflow-hidden shadow-sm border-2 bg-stone-900 border-gray-700">
            <div className='p-10'>
                <div className='bg-amber-500 rounded-full ring-2 ring-slate-900'>
                <Image className='team-member-image rounded-full aspect-square' src={picture ? `/img/team/p/${name.replace(" ", "_")}.${picFormat}` : '/img/team-default.jpg'} width={isMobile ? 200 : 160} height={isMobile ? 200 : 160} alt={name} />
                </div>
            </div>
            <div className="flex flex-col gap-1 px-3 py-4">
                <h2 className="font-bold text-sm text-white">{name}</h2>
                <div className="flex justify-between items-center gap-1">
                    <p className="text-xs text-gray-300">{designation}</p>
                    <div className="flex items-center gap-1">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full">
                            <FontAwesomeIcon icon={faLinkedinIn} className="text-sm text-sky-500" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
