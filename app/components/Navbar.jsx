'use client';

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {

    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef();
    
    const openMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    

  return (
    <>
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-2 
            flex items-center justify-end z-10 backdrop-blur-lg shadow-sm ${isScroll ? "backdrop-blur-lg shadow-sm" : ""}`}>
            <ul className={`hidden md:flex item-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "shadow-sm bg-opacity-50"}`}>
                <li><a className='font-Ovo' href="#top">Home</a></li>
                <li><a className='font-Ovo' href="#experience">Experience</a></li>
                <li><a className='font-Ovo' href="#projects">Projects</a></li>
                <li><a className='font-Ovo' href="#contact">Contact me</a></li>
            </ul>

            {/* ------------mobile menu -------------------*/}

            <ul ref={sideMenuRef} className='flex md:hidden flex-col items-center gap-4 py-20 fixed -right-64 top-0 bottom-0 w-64 
            z-50 h-screen bg-rose-50 transition duration-500'>

                <div className='absolute right-6 top-6' onClick={closeMenu}>
                    <Image src={assets.close_black} alt="close" className='w-5 cursor-pointer' />
                </div>
                <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#experience">Experience</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#projects">Projects</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact me</a></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar
