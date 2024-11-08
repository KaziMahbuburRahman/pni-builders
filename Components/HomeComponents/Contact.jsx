"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import heroimg from '../../HomeAssets/intro-handyman.jpg';
import Image from 'next/image';
const Contact = () => {
  return (
    <div  id='contact' className='w-full bg-white'>
    <div className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col items-center gap-[50px] justify-between'>
    <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className=" lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]"
      >
   <motion.h1
          variants={slideUpVariants}
          className="text-red-500 text-2xl"
        >
          CONTACT US
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-black text-[40px] text-center font-bold"
        >
          REACH US FOR ANY QUERY
        </motion.h1>
        <motion.div
          className="w-[120px] h-[6px] bg-[#c01d2e]"
          variants={slideUpVariants}
        ></motion.div>
        
        {/* <p className='text-3xl italic text-gray-600 mt-[60px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, voluptas? Corporis alias molestiae obcaecati placeat recusandae blanditiis exercitationem quo itaque.</p> */}
      </motion.div>
      <motion.div
        initial="hidden" whileInView="visible"
        variants={slideUpVariants} className='lg:w-[80%] w-full flex flex-col lg:flex-row justify-center items-start gap-6'
      >
        <motion.form initial="hidden" whileInView="visible" variants={zoomInVariants} className='flex flex-col justify-center items-start gap-4 w-full' >
          <input type="text" placeholder='Enter Full name' className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full' />
          <input type="email" placeholder='Enter Email' className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full' />
          <input type="number" placeholder='Enter Mobile Number' className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full' />
          <textarea name="" placeholder='Enter your message' id='' rows='4' className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full'></textarea>
          <motion.button variants={zoomInVariants} className='bg-[#c01d2e] hover:bg-black hover:text-white px-10 py-4 rounded-lg text-white font-bold'>CONTACT US</motion.button>
        </motion.form>


        <div className='hidden lg:w-[80%] lg:flex flex-col justify-end items-end'>
  <motion.div variants={zoomInVariants}  initial="hidden" whileInView="visible"  >
  <Image src={heroimg} alt='heroimage' className='lg:h-[600px] h-[300px] lg:mb-[-00px]' />
  </motion.div>

</div>
      </motion.div>
    </div>
    </div>
  )
}

export default Contact;