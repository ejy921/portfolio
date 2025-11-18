import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center w-max flex items-center gap-2 mx-auto'>
        <Image src={assets.mail_icon} alt='mail' className='w-6'/>
        ejy921@gmail.com
      </div>

      <div className='text-center sm:flex items-center justify-between border-t 
      border-gray-400 mx-[10%] mt-12 py-6'>
        <p>Jinny Eo</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li><a target='_blank' href="https://instagram">Github</a></li>
          <li><a target='_blank' href="https://instagram">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
