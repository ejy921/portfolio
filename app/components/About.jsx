'use client';

import { assets, infoList, toolsData } from '../../assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

const MotionImage = motion.create(Image);

const About = () => {
  const isProd = process.env.NODE_ENV === 'production';
  const resumePath = `${isProd ? '/portfolio' : ''}/Resume.pdf`;
  
  return (
    <div id='about' className='w-[80%] px-[2%] py-20 scroll-mt-20 ml-[8%]'>

        <div className='flex flex-col lg:flex-row items-center py-10 mt-2'>

            <div className='relative max-w-[250px] h-[270px] rounded-3xl mb-[30px] overflow-hidden'>
                <Image src={assets.profile_pic} alt="user" width={300} height={270} className='rounded-2xl object-cover object-fill' priority/>
                <Image src={assets.tape} alt="tape" width={120} height={60} className='absolute top-0 left-1 -rotate-45 -translate-x-8'/>
            </div>

            <div className='flex-1'>
                <motion.h2 
                initial={{y: -30, opacity: 0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration: 0.6, delay: 0.3}}
                className='text-center text-6xl font-Ovo pb-2 pl-30'>Hi, I'm Jinny.</motion.h2>
                <div className='relative w-[680px] h-[520px] mb-5 rounded-3xl overflow-hidden mx-auto'>
                    <MotionImage  
                    initial={{opacity: 0}}
                    whileInView={{opacity:1}}
                    transition={{duration: 0.6, delay: 0.5}}
                    src={assets.tornpaper_1} alt="paper" priority fill sizes="(max-width: 640px) 100vw, 600px" className='object-cover'/>
                    <motion.div 
                    initial={{opacity: 0}}
                    whileInView={{opacity:1}}
                    transition={{duration: 0.6, delay: 0.7}}
                    className='absolute inset-0 flex flex-col items-end justify-center mb-3 max-w-2xl text-[17px] leading-[2.0] -ml-[70px] mb-[80px]'>
                        <p className='w-[350px] relative left-[0px] font-gloria'>I’m Jinny Eo, a full-stack developer and Grinnell College senior who loves building clean, thoughtful digital experiences. </p>
                        <p className='w-[490px] font-gloria'>I’ve led 
                            engineering for real products, from iOS apps with thousands of users to full-stack tools that solve real problems on campus. 
                            I move fast, design with intention, and bring a mix of technical depth and creative curiosity to every project I take on.</p>
                    </motion.div>    
                </div>
                
            </div>
            <div className='inline-flex flex-col items-center justify-center gap-10'> 
                <div className='relative hover:translate-y-1 duration-300'>
                    <a href={resumePath} target="_blank" rel="noopener noreferrer" className='cursor-pointer'>
                        
                        <MotionImage
                            initial={{y: -30, opacity: 0}}
                            whileInView={{y: 0, opacity:1}}
                            transition={{duration: 0.3, delay: 0.8}}
                            src={assets.resume_paper}
                            alt="resume"
                            width={190}
                            height={170}
                            className='w-[190px] h-[170px] object-cover'
                        />
                        <motion.p
                            initial={{y: -30, opacity: 0}}
                            whileInView={{y: 0, opacity:1}}
                            transition={{duration: 0.3, delay: 0.8}}
                            className='absolute inset-0 flex items-center justify-center text-gray text-[25px] font-gloria text-bold'>
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
                        width={160}
                        height={170}
                        className='w-[160px] object-cover'
                    />
                    <motion.p 
                        initial={{y: -30, opacity: 0}}
                        whileInView={{y: 0, opacity:1}}
                        transition={{duration: 0.3, delay: 0.8}}
                        className='absolute inset-0 flex items-center justify-center text-gray text-[25px] font-gloria text-bold'
                        href="#projects">
                        Projects</motion.p>
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
