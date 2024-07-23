import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ProcedureBox({title, content, number}) {

    useEffect(()=>{
        AOS.init({
          duration: 500,
          easing: 'ease',
          once: true
        })
      }, [])

    return (
        <div data-aos="fade-up" className="flex flex-col items-center w-full rounded-lg gap-3 ring-2 ring-amber-500 bg-white p-10 relative max-w-sm">
            <div className="number-badge rounded-full bg-amber-500 absolute flex items-center justify-center">
                <span className="leading-none font-bold text-lg text-white">{number}</span>
            </div>
            <h1 className="text-sm font-bold leading-none">{title}</h1>
            <p className="text-xs text-gray-500 text-justify">
                {content}
            </p>
        </div>
    )
}
