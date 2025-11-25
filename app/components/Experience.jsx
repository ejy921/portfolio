'use client';

import { workData, assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

const MotionImage = motion.create(Image);

const Experience = () => {
    return (
    <div id='experience' className='w-full px-[12%] py-10 scroll-mt-20'>
          <h2 className='text-center text-5xl font-Ovo mb-[25px]'>Experience</h2>
            <div className='relative w-full flex flex-col items-center py-16'>

                <div className='absolute w-[5px] bg-gray-700 top-0 bottom-0 left-1/2 transform -translate-x-1/2'></div>
                <div className='flex flex-col'>
                    {workData.map(({title, duration, icon, description}, index)=>(
                        <div key={index} className={`relative flex flex-col items-center justify-center ${index % 2 === 0 ? "justify-start" : "justify-end"} ${index !== 0 ? "-mt-[5%]" : ""}`}> 
                            {/* Circle */}
                            <div className='absolute left-1/2 top-1/2 w-4 h-4 bg-gray-700 rounded-full transform -translate-x-1/2 -translate-y-1/2'></div>
                            
                            <div className={`relative min-h-[130px] px-2 py-2 cursor-pointer ${index % 2 === 0 ? "-mr-[105%]" : ""}`} style={{ perspective: 1000 }}>
                                {/* Work Entry */}
                                <div className='absolute flex flex-row object-cover items-center w-[45%] aspect-[4/3] rounded-lg z-20 pointer-events-none'>
                                    <Image src={assets.experience_background} alt="worknote" className='object-cover pointer-events-none' />
                                    <div className='absolute flex flex-row items-center w-[90%] ml-[5%] pointer-events-none'>
                                        <div fill="true" className='relative w-[75%] h-[130px]'>               
                                            <h3 className='relative text-[22px] text-gray font-Ovo leading-[30px]'>{title}</h3>
                                            <p className='relative text-xsm text-gray-600 leading-4 mt-[10px]'>{duration}</p>
                                        </div>
                                        <Image src={icon} alt='icon' className='relative w-[25%] h-[25%] mr-[5px]' />
                                    </div>
                                </div>
                                {/* Description */}
                                <motion.div className='relative w-[45%] [transform-style:preserve-3d] mt-[10px] z-10 pointer-events-auto'
                                    style={{ transformOrigin: index % 2 === 0 ? 'right' : 'left' }}
                                    whileHover={{ 
                                        rotateY: index % 2 === 0 ? -180 : 180, 
                                        x: index % 2 !== 0 ? 8 : 3
                                    }}
                                    transition={{ duration: 0.5 }}>
                                    <Image src={assets.experience_background} alt="worknote" className='object-cover w-full opacity-[60%]'/>
                                    <div className='absolute flex inset-0 items-center p-4 [transform:rotateY(180deg)] backface-hidden rotate-y-180'>
                                        <p className='ml-[17px] text-[13px] text-gray-700' style={{ lineHeight: '1.4' }}>{description}</p>
                                    </div>
                                </motion.div>
                            </div>
                            {/* Tape */}
                            <MotionImage
                                src={assets.tape}
                                alt='tape'
                                className={`absolute w-[80px] h-9 transform rotate-90 top-1/2 -translate-y-1/2 ${index % 2 === 0 ? "-right-[23px]" : "-left-[30px]"}`}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Experience