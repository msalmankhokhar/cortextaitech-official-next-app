import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function NotFound() {

    const [pageVisible, setPageVisible] = useState(false);
    useEffect(() => {
        setPageVisible(true)
    }, [])

    return (
        <>
        <Navbar/>
        <main id='main' className={`transition-all duration-500 ${pageVisible ? 'opacity-100' : 'opacity-0'}`}>
            <section className='flex flex-col items-center justify-center'>
                <div className='flex flex-col px-5 py-20 gap-5'>
                    <div className='pb-5 border-b-2 border-slate-800'>
                        <p className='flex gap-4'>
                            <strong>404</strong>
                            <span>|</span>
                            <span>Not Found</span>
                        </p>
                    </div>
                    <Link href="/" className='font-semibold text-blue-600 text-center'>Go to Home</Link>
                </div>
            </section>
        </main>
        </>
    )
}
