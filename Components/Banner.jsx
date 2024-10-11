"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { slideUpVariants } from "./HomeComponents/animation";

const Banner = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Ensure the video reloads and plays when the component is re-mounted
      videoRef.current.load(); // Reload the video element
      videoRef.current.play(); // Ensure autoplay works
    }
  }, []); // Empty dependency array ensures this runs when component mounts

  return (
    <motion.div
      id="hero"
      className="relative h-svh md:h-[85vh] pb-10"
      initial="hidden"
      whileInView="visible"
      variants={slideUpVariants}
    >
      <video
        ref={videoRef}
        src="video.mp4"
        autoPlay
        muted
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
        loop
      ></video>

      <div className="absolute inset-0"></div>

      <div className="relative z-10">
        <div className="md:px-10 ">{/* <Header/> */}</div>
        <div className="flex flex-col justify-center items-center px-4 py-36 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:py-16 text-white">
          <h1 className="text-3xl font-bold md:flex flex-col justify-center items-center lg:text-6xl tracking-normal md:leading-[1.4em] lg:leading-[1.2em] capitalize">
            We are Always Ready to{" "}
            <span className="font-medium bg-clip-text text-transparent bg-gradient-to-tr from-yellow-500 via-yellow-300 to-slate-500">
              Service
            </span>{" "}
          </h1>
          <div className="">
            <p className="text-lg mb-4"></p>
            <p className="text-base mb-4">
              Welcome to our construction management platform, where efficiency
              meets ease. Track projects, manage resources, and control
              budgets—all in one place!
            </p>
            <a
              href="#contact"
              className="flex justify-center w-6/12 mx-auto bg-gradient-to-tr from-yellow-500 to-yellow-300 font-bold tracking-wide text-white capitalize transition-all duration-300 py-4 px-10 lg:px-8 xl:px-10 hover:bg-gradient-to-tr hover:from-white hover:text-black hover:to-stone-600 hover:shadow-md rounded-md"
            >
              Schedule An Appointments
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
