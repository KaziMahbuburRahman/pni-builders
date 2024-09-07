"use client"
import React from 'react'
import {motion} from 'framer-motion';
import { slideUpVariants ,zoomInVariants} from './animation';
const About = () => {
  return (
    <div id='about'className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col items-start gap-[50px] justify-between'>
      <motion.div
       initial="hidden" whileInView="visible" variants={slideUpVariants} className=' lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'>
        <motion.h1 variants={slideUpVariants} className='text-yellow-500 text-2xl' >
          Welcome TO
        </motion.h1>
        <motion.h1 variants={slideUpVariants} className='text-white uppercase text-[40px] font-bold' >
          New website
        </motion.h1>
        <div  className='w-[120px] h-[6px] bg-yellow-500'></div>
        <p className='text-3xl italic text-gray-50 mt-[60px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, voluptas? Corporis alias molestiae obcaecati placeat recusandae blanditiis exercitationem quo itaque.</p>
      </motion.div>
      <motion.div
       variants={slideUpVariants} className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'
      >
        <p className='text-white text-lg text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aliquid, iure obcaecati id molestias nihil dicta quis maxime magni facere repellendus voluptatum autem beatae illum laboriosam laudantium accusantium aliquam sapiente quo dolore quisquam. Non distinctio sint neque recusandae voluptatem tempore sunt nesciunt rem error quia officiis illo facere, incidunt ducimus quisquam exercitationem soluta nemo repudiandae officia enim blanditiis repellendus quis! Fugit, nobis dolore eligendi iste ipsa minima maiores, at earum eos dolorem facilis nostrum doloribus. Iste eius adipisci, cumque consequatur officiis autem architecto molestiae amet voluptas explicabo aliquam enim quaerat similique doloribus quidem totam exercitationem omnis, nam asperiores sint! Molestiae!</p>
        <motion.button
  variants={zoomInVariants}
  className='bg-yellow-500 hover:bg-white hover:text-black px-10 py-3 rounded-lg text-black font-bold'
  >
READ MORE
  </motion.button>
        </motion.div>
    </div>
  )
}

export default About;