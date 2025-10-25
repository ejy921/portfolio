import { assets, personalDescription, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

'use-client';

const MotionImage = motion(Image);

const About = () => {
  return (
    <div id='about' className='w-full px-[5%] py-20 scroll-mt-20 mt-30'>

        <div className='flex w-full flex-col lg:flex-row items-center py-10 ml-[160px] mt-10'>

            <div className='relative w-[270px] h-[300px] rounded-3xl mx-auto mb-[90px]'>
                <Image src={assets.profile_pic} alt="user" className='rounded-2xl object-cover' priority/>
            </div>

            <div className='flex-1 -ml-[80px]'>
                <motion.h2 
                initial={{y: -30, opacity: 0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration: 0.6, delay: 0.3}}
                className='text-center text-6xl font-Ovo pb-6 pr-12'>Hi, I'm Jinny.</motion.h2>
                <div className='relative w-[550px] h-[420px] mb-5 mt-10 rounded-3xl overflow-hidden mx-auto -mt-[5px]'>
                    <MotionImage  
                    initial={{opacity: 0}}
                    whileInView={{opacity:1}}
                    transition={{duration: 0.6, delay: 0.5}}
                    src={assets.tornpaper_1} alt="paper" fill className='w-[400px] h-[300px] object-cover'/>
                    <motion.div 
                    initial={{opacity: 0}}
                    whileInView={{opacity:1}}
                    transition={{duration: 0.6, delay: 0.7}}
                    className='absolute inset-0 flex flex-col items-end justify-center mb-5 max-w-2xl text-[13px] leading-tight leading-tight -ml-[80px] mb-[70px]'>
                        <p className='w-[250] font-mono typewriter'>I'm a senior studying Computer Science at Grinnell College with a focus on building impactful</p>
                        <p className='w-[400] font-mono typewriter'>solutions through technology. With a strong foundation in algorithms, data structures, and machine learning, I thrive in exploring new tools, technologies, 
                        and frameworks to solve complex problems. I aim to create meaningful contributions in areas such as AI, software development, and computational modeling, 
                        with a continuous drive to grow and innovate.</p>
                    </motion.div>    
                </div>
                
            </div>

            <div className='relative flex flex-col sm:flex-row items-center mr-[300px] -ml-[80px] mb-[170px] hover:translate-y-1 duration-500'>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className='cursor-pointer'>
                        <MotionImage
                            initial={{y: -30, opacity: 0}}
                            whileInView={{y: 0, opacity:1}}
                            transition={{duration: 0.3, delay: 0.8}}
                            src={assets.resume_paper}
                            alt="resume"
                            className='w-[190px] h-[170px] object-cover'
                        />
                        <motion.p
                        initial={{y: -30, opacity: 0}}
                            whileInView={{y: 0, opacity:1}}
                            transition={{duration: 0.3, delay: 0.8}}
                        className='absolute inset-[55px] text-center text-gray mt-[10px] text-[25px] font-mono text-bold'>
                        Resume
                        </motion.p>
                    </a>
            </div>

        </div>

        <div className='flex flex-col items-center'>
            <h4 className='text-center text-gray-700 font-Ovo text-[30px]'>Tools I use</h4>

            <ul 
            className='flex items-center justify-center flex-wrap gap-4 sm:gap-6 mt-6 max-w-[1000px] w-full'>
                {toolsData.map((tool, index)=>(
                    <li className='flex-none flex items-center justify-center w-16 sm:w-20 aspect-square p-2 sm:p-3
                    border border-gray-400 rounded-lg hover:shadow-black hover:translate-y-1 duration-500'
                    key={index}>
                        <Image src={tool} alt="tool" className='w-8 sm:w-10'/>
                    </li>
                ))}
            </ul>
        </div>
    
    </div>
  )
}

export default About
