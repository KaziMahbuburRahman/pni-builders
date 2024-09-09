'use client'
import React from 'react'
import project1 from '../../HomeAssets/project1.jpg';
import project2 from '../../HomeAssets/project2.jpg';
import project3 from '../../HomeAssets/project3.jpg';
import project4 from '../../HomeAssets/project4.jpg';
import project5 from '../../HomeAssets/project5.jpg';
import project6 from '../../HomeAssets/project6.jpg';
import project7 from '../../HomeAssets/project7.jpg';
import project8 from '../../HomeAssets/project8.jpg';
import {motion} from 'framer-motion';
import { slideUpVariants ,zoomInVariants} from './animation';
import {allservices} from './export';
import Image from 'next/image';
const portfolio = () => {
  return (
   
    <div id='projects' className='w-full'>
    <motion.div
     initial="hidden" whileInView="visible" variants={slideUpVariants} className=' lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'>
      <motion.h1 variants={slideUpVariants} className='text-yellow-500 text-2xl' >
        PORTFOILIO
      </motion.h1>
      <motion.h1 variants={slideUpVariants} className='text-black text-[40px] text-center font-bold' >
        Our Best Projects
      </motion.h1>
      <motion.div className='w-[120px] h-[6px] bg-yellow-500' variants={slideUpVariants}></motion.div>
      <motion.div  initial="hidden" whileInView="visible" variants={zoomInVariants} className='w-full grid lg:grid-cols-4 grid-cols-1 gap-[20px]'>
     <Image src={project1} alt='project image' className='h-[250px] w-full' />
     <Image src={project2} alt='project image' className='h-[250px] w-full' />
     <Image src={project3} alt='project image' className='h-[250px] w-full' />
     <Image src={project4} alt='project image' className='h-[250px] w-full' />
     <Image src={project5} alt='project image' className='h-[250px] w-full' />
     <Image src={project6} alt='project image' className='h-[250px] w-full' />
     <Image src={project7} alt='project image' className='h-[250px] w-full' />
     <Image src={project8} alt='project image' className='h-[250px] w-full' />
      </motion.div>
      </motion.div>
  </div>
  )
}

export default portfolio;