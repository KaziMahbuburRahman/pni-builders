'use client'
import React from 'react'
import {motion} from 'framer-motion';
import { slideUpVariants ,zoomInVariants} from './animation';
import {allservices} from './export';
import Image from 'next/image';
import { IoCall } from 'react-icons/io5';
import Link from 'next/link';

const serviecs = () => {


  const services = [
    {
      title: "Electrical Services",
      description: "Illuminate Your Home: Expert Electrical Services Available, Brighten Your Home with Advance Handyman Sings Illumination Ideas.",
      imgUrl: "https://www.centuryhandymanservice.com/wp-content/uploads/2024/08/steptodown.com526452.jpg",
      link: "/elements/handyman-electrical-services/",
    },
    {
      title: "Plumbing Services", 
      description: "Solving your plumbing problems, A Comprehensive Overview of Professional Services, its important to us to protecting Your Home from Water Damage.",
      imgUrl: "https://www.centuryhandymanservice.com/wp-content/uploads/2024/08/steptodown.com344684.jpg",
      link: "/elements/plumbing-services/",
    },
    {
      title: "Glass Door And Sliding Door Installation",
      description: "Our team of experts will ensure that your glass door is installation or repaired with precision and care.",
      imgUrl: "https://www.centuryhandymanservice.com/wp-content/uploads/2024/09/steptodown.com626485.jpg", 
      link: "/elements/door-services-in-singapore/",
    },
    {
      title: "Light Installation Service",
      description: "Take our handyman Light Installation Service! our experienced team can handle any lighting project with ease.",
      imgUrl: "https://www.centuryhandymanservice.com/wp-content/uploads/2024/09/steptodown.com657018.jpg",
      link: "/elements/light-installation/",
    },
    {
      title: "Wardrobe Sliding Door & Cabinet Repair",
      description: "From fixing broken hinges on your wardrobe to refinishing cabinets, we will cover you. our professionals team, reliable, and always deliver exceptional results.",
      imgUrl: "https://www.centuryhandymanservice.com/wp-content/uploads/2024/08/steptodown.com721942.jpg",
      link: "/elements/wardrobe-sliding/",
    },
    {
      title: "Water Heater Repair & Replacement",
      description: "Water heater repair expertise for hybrid water heaters, tankless water heaters and gas, Our professional team are available 24/7.",
      imgUrl: "https://www.centuryhandymanservice.com/wp-content/uploads/2024/08/steptodown.com644901.jpg",
      link: "/elements/water-heater-repair/",
    },
    {
      title: "Sink Tap Repair & Replacement",
      description: "We provide dripping tap repair for kitchen taps, wall or bench mounted. We can fix, replace and install all types of kitchen and bathroom taps as well.",
      imgUrl: "https://www.centuryhandymanservice.com/wp-content/uploads/2024/08/steptodown.com352276.jpg",
      link: "/elements/sink-tap-repair/",
    },
    {
      title: "Office Moving & Cleaning Services",
      description: "we are guaranteed to provide you with a spotless cleaning home and maintenance services. specialized cleaning, office cleaning, cockroaches, rodents,mosquitoes, bed bugs.",
      imgUrl: "https://www.centuryhandymanservice.com/wp-content/uploads/2024/08/steptodown.com411242.jpg",
      link: "/elements/office-moving-cleaning-services/",
    },
    {
      title: "Landscaping Service",
      description: "Residential Landscaping Services We provide gorgeous landscape / hardscape, Creating beautiful terraces,brownstones, rooftops and backyards.",
      imgUrl: "https://www.centuryhandymanservice.com/wp-content/uploads/2024/08/steptodown.com393717.jpg",
      link: "/elements/landscaping-service/",
    },
    {
      title: "Wall Mount Service",
      description: "Our professional expert team of handyman experts provide TV & TV mount best installation solution. crafting envy-worthy designs that reflect your style.",
      imgUrl: "https://www.centuryhandymanservice.com/wp-content/uploads/2024/08/steptodown.com287221-1.jpg",
      link: "/elements/wall-mount-service/",
    },
    {
      title: "Kitchen Cabinet Repairs",
      description: "We offer a wide of variety cabinet repair and restoration services. Have an issue you need to fix with your cabinets, we're here to help, Give us a call today.",
      imgUrl: "https://www.centuryhandymanservice.com/wp-content/uploads/2024/04/Kitchen_Cabinet_Repair.jpeg",
      link: "/elements/kitchen-cabinet-repairs/",
    },
    {
      title: "Painting Service",
      description: "House Painters & Painting in singapore, All specialize Painting Services Offered. building , flooring contractor houses, townhomes, office and apartments.",
      imgUrl: "https://www.centuryhandymanservice.com/wp-content/uploads/2024/08/steptodown.com480489-1.jpg",
      link: "/elements/painting-service/",
    },
    {
      title: "Air Conditioning Service",
      description: "Call to schedule. Immediate Response, Our service technicians fix your problem of air conditioning and installation, repair. Call US Air Conditioning & maintenance today",
      imgUrl: "https://www.centuryhandymanservice.com/wp-content/uploads/2024/08/steptodown.com681809-1.jpg",
      link: "/elements/air-conditioning-service/",
    },
    {
      title: "Residential Locksmith Service",
      description: "All Lockouts. Fast and Friendly. Lock change. Emergency Lockout Service in singapore. Call us today to request residential locksmith services.",
      imgUrl: "https://www.centuryhandymanservice.com/wp-content/uploads/2024/08/steptodown.com387638.jpg",
      link: "/elements/residential-locksmith-service/",
    },
    {
      title: "Polishing Service",
      description: "Floor cleaning and polishing services for all types of home, kitchen floors outdoor such as marble,vinyl, wood, and more. restoration and cleaning services tailored to your needs.",
      imgUrl: "https://www.centuryhandymanservice.com/wp-content/uploads/2024/08/steptodown.com897574.jpg",
      link: "/elements/polishing-service/",
    },
    {
      title: "Door Repair Services",
      description: "Door repair & installation, Office partition, mirror, storefront, tabletop, and glass panel installation. we are ready to help you any time of the day or night.",
      imgUrl: "https://www.centuryhandymanservice.com/wp-content/uploads/2024/08/steptodown.com972213.jpg",
      link: "/elements/handyman-door-repair-services/",
    }
  ];

  return (
    <div id='services' className='w-full bg-white'>
      <motion.div
        initial="hidden" 
        whileInView="visible" 
        variants={slideUpVariants} 
        className=' lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'>
        <motion.h1 variants={slideUpVariants} className='text-red-500 text-2xl'>
          Special OFFER
        </motion.h1>
        <motion.h1 variants={slideUpVariants} className='text-black text-[40px] text-center font-bold'>
          Our Best Services
        </motion.h1>
        <motion.div className='w-[120px] h-[6px] bg-[#c01d2e]' variants={slideUpVariants}></motion.div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          variants={slideUpVariants} 
          className='w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-center items-start gap-6 mt-[30px]'>
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col justify-between h-full">
            <Link href={service.link} rel="noopener noreferrer">
  <div className="relative w-full h-60 overflow-hidden group">
    <Image
      src={service.imgUrl}
      alt={service.title}
      layout="fill"
      objectFit="cover"
      className="absolute inset-0 transition-transform duration-500 ease-in-out transform group-hover:scale-110"
    />
  </div>
</Link>

              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <div className="h-1 w-20 bg-[#c01d2e] mx-auto my-4"></div>
                  <h3 className="text-2xl font-bold text-white text-center mb-2">
                    <Link href={service.link} rel="noopener noreferrer">
                      {service.title}
                    </Link>
                  </h3>
                  <p className="text-gray-300 text-center mb-4">
                    {service.description}
                  </p>
                </div>
                <div className="flex justify-center items-center space-x-4 mt-auto">
  <a
    href="tel:+65 81749336"
    className="bg-primary text-white px-4 py-2 rounded-full flex items-center justify-center"
    aria-label="Call us"
  >
    <span className='bg-green-500 rounded-full p-2 flex items-center justify-center'>
      <IoCall className='text-white w-6 h-6' />
    </span>
    <span className="ml-2">CALL NOW</span>
  </a>
</div>
              </div>
            </div>
          ))}

{/* Old service section */}

          {/* {
            allservices.map((item,index) => (
              <motion.div
              variants={zoomInVariants}
              className='flex justify-center items-start gap-5 p-2'
              key={index}>
                <Image src={item.icon} alt="icon" className='w-[70px] border-2 border-[#c01d2e] hover:bg-[#c01d2e] rounded-lg p-2'/>
                <div className='flex flex-col justify-center items-start gap-3'>
                <h1 className='text-xl font-bold text-black'>{item.title}</h1>
                <p className='text-[18px]'>{item.about}</p>
                </div>
                </motion.div>
            
            ))
          } */}
        </motion.div>
        </motion.div>
    </div>
  )
}

export default serviecs;