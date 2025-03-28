'use client'
import React from 'react'
import {motion} from 'framer-motion';
import { slideUpVariants ,zoomInVariants} from './animation';
import {planning} from './export';
const Working = () => {
  return (
    <div id='working' className='w-full bg-white'>
      <motion.div
       initial="hidden" whileInView="visible" variants={slideUpVariants} className=' lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'>
        <motion.h1 variants={slideUpVariants} className='text-red-500 text-2xl' >
        STEP BY STEP
        </motion.h1>
        <motion.h1 variants={slideUpVariants} className='text-black text-[40px] text-center font-bold' >
          HOW IT'S WORKING
        </motion.h1>
        <motion.div className='w-[120px] h-[6px] bg-[#c01d2e]' variants={slideUpVariants}></motion.div>
        <motion.div  initial="hidden" whileInView="visible" variants={zoomInVariants} className='w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-start gap-[20px] mt-[30px]'>
        {
            planning.map((item,index) => (
              <div key={index}            
              className='flex flex-col justify-center items-center gap-5 p-6 border-2 text-white  rounded-lg'
              >
                <div >
                <item.icon className='size-[80px] bg-[#c01d2e] hover:bg-black hover:fill-white p-4 rounded-full cursor-pointer'/>
                </div>
                <h1 className='text-2xl font-bold uppercase text-black'>{item.title}</h1>
                <p className='text-[20px] text-center text-gray-600'>{item.about}</p>
                
                </div>
            
            ))
          }
        </motion.div>
        </motion.div>
    </div>
  )
}

export default Working;