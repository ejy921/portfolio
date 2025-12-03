import { projectData, assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div id='projects' className='w-full px-[6%] py-10 scroll-mt-20'>
      <h2 className='text-center text-5xl font-Ovo'>Projects</h2>

        <div className='grid grid-cols-3 gap-8 my-10'>
            {projectData.map(({title, description, link}, index)=>(
                <div key={index} className='relative flex flex-col max-w-[400px] object-cover overflow-hidden cursor-pointer'>
                    <Image src={assets.project_background} alt='background' className='object-cover opacity-[0.7]' />
                    <div className='absolute flex flex-col mt-5 justify-center overflow-hidden p-[20px] px-10'>
                        <h3 className='text-[25px] text-gray-700 ml-[5px] font-gloria'>{title}</h3>
                        <p className='relative text-[12px] text-gray-800 leading-4 mt-2 p-[6px] overflow-hidden break-words'>{description}</p>
                        <a href={link} target='_blank' rel='noopener noreferrer' className='cursor-pointer flex items-center gap-2 text-sm mt-5 ml-4 underline'>
                            Read more!</a>
                    </div>  
                </div>
            ))}
        </div>  
    </div>
  )
}

export default Projects
