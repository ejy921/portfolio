import { workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Experience = () => {
    return (
    <div id='experience' className='w-full px-[12%] py-10 scroll-mt-20'>
          <h2 className='text-center text-5xl font-Ovo mb-[25px]'>Experience</h2>
            <div className='relative w-full flex flex-col items-center py-16'>

                <div className='absolute w-[5px] bg-gray-700 top-0 bottom-0 left-1/2 transform -translate-x-1/2'></div>
                <div className='flex flex-col gap-[40px]'>
                    {workData.map(({title, description, icon}, index)=>(
                        <div key={index} className={`flex flex-col items-center relative ${index % 2 === 0 ? "justify-start" : "justify-end"} ${index !== 0 ? "-mt-20" : ""}`}> 
                            <div className='absolute left-1/2 top-1/2 w-4 h-4 bg-gray-700 rounded-full transform -translate-x-1/2 -translate-y-1/2'></div>
                            <div className={`flex flex-col lg:flex-row items-center w-[75%] min-h-[100px] border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:-translate-y-1 duration-500 ${index % 2 === 0 ? "-mr-[85%]" : "-ml-[85%]"}`}>
                                <div className='relative w-[70%]'>
                                    <h3 className='text-lg text-gray-700'>{title}</h3>
                                    <p className='text-xsm text-gray-600 leading-7'>{description}</p>
                                </div>
                                <Image src={icon} alt='icon' className='w-[70px] mr-[10px]' />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Experience