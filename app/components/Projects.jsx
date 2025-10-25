import { projectData, assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div id='projects' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h2 className='text-center text-5xl font-Ovo'>Projects</h2>

        <div className='grid grid-cols-auto gap-6 my-10'>
            {projectData.map(({icon, title, description, link}, index)=>(
                <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'>
                    <Image src={icon} alt='icon' className='w-10' />
                    <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                    <p className='text-xxs text-gray-600 leading-5'>{description}</p>
                    <a href={link} className='flex items_center gap-2 text-sm mt-5 underline'>
                        Read more</a>
                </div>
            ))}
        </div>

        <a href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full y-3 py-3 px-10 mx-auto my-20
        hover:bg-lightHover duration-500'>Show more</a>
    </div>
  )
}

export default Projects
