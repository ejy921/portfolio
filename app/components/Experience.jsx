import { workData, assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Experience = () => {
    return (
    <div id='experience' className='w-full px-[12%] py-10 scroll-mt-20'>
          <h2 className='text-center text-5xl font-Ovo mb-[25px]'>Experience</h2>
            <div className='relative w-full flex flex-col items-center py-16'>

                <div className='absolute w-[5px] bg-gray-700 top-0 bottom-0 left-1/2 transform -translate-x-1/2'></div>
                <div className='flex flex-col'>
                    {workData.map(({title, duration, icon}, index)=>(
                        <div key={index} className={`relative flex flex-col items-center justify-center ${index % 2 === 0 ? "justify-start" : "justify-end"} ${index !== 0 ? "-mt-[30%]" : ""}`}> 
                            <div className='absolute left-1/2 top-1/2 w-4 h-4 bg-gray-700 rounded-full transform -translate-x-1/2 -translate-y-1/2'></div>
                            <div className={`relative flex flex-row object-cover items-center min-h-[100px] rounded-lg px-2 py-6 cursor-pointer hover:translate-y-1 duration-500 ${index % 2 === 0 ? "-mr-[110%]" : "-ml-[95%]"}`}>
                                <Image src={assets.taped_note_2} alt="worknote" className='object-cover'/>  
                                <div className='absolute flex flex-row items-center w-[75%] ml-[5%]'>
                                    <div fill className='relative w-[75%] h-[130px]'>               
                                        <h3 className='relative text-lg text-gray-700 leading-[43px]'>{title}</h3>
                                        <p className='relative text-xsm text-gray-600 leading-7'>{duration}</p>
                                    </div>
                                    <Image src={icon} alt='icon' className='relative w-[25%] h-[25%]' />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Experience