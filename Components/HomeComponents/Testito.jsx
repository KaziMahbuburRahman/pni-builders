'use client'
import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { clients } from "./export";
import Image from "next/image";
const Testito = () => {
  return (
    <div id="Testito" className="w-full bg-[#3b3737]">
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
          Testimonials
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-white text-[40px] text-center font-bold"
        >
          WHATS OUR CLIENT SAYS
        </motion.h1>
        <motion.div
          className="w-[120px] h-[6px] bg-[#c01d2e]"
          variants={slideUpVariants}
        ></motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="lg:w-full w-[90%] grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-[30px] mt-[30px]"
        >
          {clients.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <div className="border-2 border-white hover:bg-[#c01d2e] p-4 pb-[100px] pt-[30px]">
                <p className="text-lg text-center hover:text-black text-white">{item.about}</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[5px]">
              <Image
                src={item.image}
                alt="icon"
                className="mt-[-50px]"
              />
               <h1 className="text-white text-27px font-semibold uppercase">{item.name}</h1>
               <h1 className="text-red-500 text-[22px]"> {item.post}</h1>
              </div> </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Testito;
