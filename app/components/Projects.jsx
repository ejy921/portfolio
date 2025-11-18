import { projectData, assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div id='projects' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h2 className='text-center text-5xl font-Ovo'>Projects</h2>

        <div className='grid grid-cols-auto gap-6 my-10'>
            {projectData.map(({title, description, link}, index)=>(
                <div key={index} className='relative flex flex-row object-cover justify-center overflow-hidden cursor-pointer'>
                    <Image src={assets.project_background} alt='background' className='object-cover opacity-[0.7]' />
                    <div className='absolute flex flex-col mt-5 justify-center overflow-hidden p-[20px] px-10'>
                        <h3 className='text-lg text-gray-700'>{title}</h3>
                        <p className='relative text-[10px] text-gray-800 leading-4 p-[4px]'>{description}</p>
                        <a href={link} className='flex items-center gap-2 text-sm mt-5 underline'>
                            Read more</a>
                    </div>  
                </div>
            ))}
        </div>

        <a href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full y-3 py-3 px-10 mx-auto my-20
        hover:bg-lightHover duration-500'>Show more</a>
    </div>
  )
}

export default Projects
