// import Header from "../Header/Header"

const Banner = () => {
  return (
    <div id='hero' className="relative h-svh pb-10">
      <video
        src="https://videos.pexels.com/video-files/8964796/8964796-uhd_2560_1440_25fps.mp4"
        autoPlay
        muted
        className="absolute inset-0 w-full h-full object-cover"
        loop
      ></video>
     
      <div className="absolute inset-0 "></div>
       
     
      
      <div className="relative  z-10">
      <div className="md:px-10 ">
      {/* <Header/> */}
      </div> 
        <div className="flex flex-col justify-center items-center px-4 py-36 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:py-16 text-white">
          <h1 className="text-3xl font-bold md:flex flex-col justify-center items-center lg:text-6xl tracking-normal md:leading-[1.4em] lg:leading-[1.2em] capitalize">
          We are Always Ready to    <span className="font-medium bg-clip-text text-transparent bg-gradient-to-tr from-yellow-500 via-yellow-300 to-slate-500">
          Service
            </span>{" "}
            
          </h1>
          <div className="">
            <p className="text-lg mb-4">
            
            </p>
            <p className="text-base mb-4">
            
Welcome to our construction management platform, where efficiency meets ease. Track projects, manage resources, and control budgets—all in one place!
            </p>
            <a
              href="#contact"
              className="flex justify-center w-6/12 mx-auto bg-gradient-to-tr from-yellow-600  to-yellow-500 font-bold tracking-wide text-white capitalize transition-all duration-300 py-4 px-10 lg:px-8 xl:px-10 hover:bg-gradient-to-tr hover:from-white hover:text-black hover:to-stone-600 hover:shadow-md rounded-md"
            >
              Schedule An Appointments
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner