import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

'use-client';

const MotionImage = motion.create(Image);

const About = () => {
  return (
    <div id='about' className='w-[80%] px-[5%] py-20 scroll-mt-20 mt-30 ml-[10%]'>

        <div className='flex flex-col lg:flex-row items-center py-10 mt-10'>

            <div className='relative max-w-[250px] h-[270px] rounded-3xl mb-[30px]'>
                <Image src={assets.profile_pic} alt="user" className='rounded-2xl object-cover' priority/>
                <Image src={assets.tape} alt="tape" className='absolute w-[120px] h-[60px] top-0 left-1 -rotate-45 -translate-x-8'/>
            </div>

            <div className='flex-1'>
                <motion.h2 
                initial={{y: -30, opacity: 0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration: 0.6, delay: 0.3}}
                className='text-center text-6xl font-Ovo pb-6 pr-12'>Hi, I'm Jinny.</motion.h2>
                <div className='relative w-[580px] h-[450px] mb-5 rounded-3xl overflow-hidden mx-auto'>
                    <MotionImage  
                    initial={{opacity: 0}}
                    whileInView={{opacity:1}}
                    transition={{duration: 0.6, delay: 0.5}}
                    src={assets.tornpaper_1} alt="paper" priority fill="true" sizes="(max-width: 768px) 100vw, 580px" className='w-[400px] h-[300px] object-cover'/>
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
            <div className='inline-flex flex-col items-center justify-center gap-10'> 
                <div className='relative hover:translate-y-1 duration-300'>
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
                            className='absolute inset-0 flex items-center justify-center text-gray text-[25px] font-mono text-bold'>
                        Resume
                        </motion.p>
                    </a>
                </div>
                <div className='relative inline-flex flex-col items-center hover:translate-y-1 duration-300'>
                    <MotionImage
                        initial={{y: -30, opacity: 0}}
                        whileInView={{y: 0, opacity:1}}
                        transition={{duration: 0.3, delay: 0.8}}
                        src={assets.colored_paper_1}
                        alt="art link"
                        className='w-[160px] object-cover'
                    />
                    <motion.p 
                        initial={{y: -30, opacity: 0}}
                        whileInView={{y: 0, opacity:1}}
                        transition={{duration: 0.3, delay: 0.8}}
                        className='absolute inset-0 flex items-center justify-center text-gray text-[25px] font-mono text-bold'>
                        Art</motion.p>
                    <motion.p 
                        initial={{y: -30, opacity: 0}}
                        whileInView={{y: 0, opacity:1}}
                        transition={{duration: 0.3, delay: 0.8}}
                        className='absolute bottom-9 text-gray text-[15px] font-mono text-bold'>
                        (Coming soon)</motion.p>
                </div>
            </div>

        </div>

        <div className='flex flex-col items-center'>
            <h4 className='text-center text-gray-700 font-Ovo text-[30px]'>Tools I use</h4>

            <ul 
            className='flex items-center justify-center flex-wrap gap-4 sm:gap-6 mt-6 max-w-[1000px] w-full'>
                {toolsData.map((tool, index)=>(
                    <li className='relative flex-none flex items-center justify-center w-16 sm:w-20 aspect-square p-2 sm:p-3
                    hover:translate-y-1 duration-500'
                    key={index}>
                        <Image src={assets.taped_note_1} alt="toolnote" fill="true" sizes="(max-width: 768px) 100vw, 580px" className='object-cover items-center'/>
                        <Image src={tool} alt="tool" className='absolute mt-4 mb-2 w-8 sm:w-10'/>
                    </li>
                ))}
            </ul>
        </div>
    
    </div>
  )
}

export default About
