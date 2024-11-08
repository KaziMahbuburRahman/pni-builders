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
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const portfolio = ({imageFiles}) => {
  return (
   
    <div id='projects' className='w-full'>
              <FloatingWhatsApp phoneNumber="+65 9008 8562" 
         buttonStyle={{ left: '20px', right: 'auto' }} 
         chatboxStyle={{ left: '20px', right: 'auto' }}
         />
    <motion.div
     initial="hidden" whileInView="visible" variants={slideUpVariants} className=' lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'>
      <motion.h1 variants={slideUpVariants} className='text-red-500 text-2xl' >
        PORTFOILIO
      </motion.h1>
      <motion.h1 variants={slideUpVariants} className='text-black text-[40px] text-center font-bold' >
        Our Best Projects
      </motion.h1>
      <motion.div className='w-[120px] h-[6px] bg-[#c01d2e]' variants={slideUpVariants}></motion.div>
      <motion.div  initial="hidden" whileInView="visible" className='w-full grid lg:grid-cols-4 grid-cols-1 gap-[20px]'>
     <Image src={project1} alt='project image' className='h-[250px] w-full' />
     <Image src={project2} alt='project image' className='h-[250px] w-full' />
     <Image src={project3} alt='project image' className='h-[250px] w-full' />
     <Image src={project4} alt='project image' className='h-[250px] w-full' />
     <Image src={project5} alt='project image' className='h-[250px] w-full' />
     <Image src={project6} alt='project image' className='h-[250px] w-full' />
     <Image src={project7} alt='project image' className='h-[250px] w-full' />
     <Image src={project8} alt='project image' className='h-[250px] w-full' />

        {imageFiles.map((file, index) => (
          
            <Image 
              src={`/images/${file}`} 
              alt={`Image ${index + 1}`} 
              className='h-[250px] w-full'
              width={100}
              height={100}
            />

        ))}

      </motion.div>
      </motion.div>
  </div>
  )
}

export default portfolio;