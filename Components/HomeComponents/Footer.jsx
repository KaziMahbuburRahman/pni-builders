"use client"
import { usePathname } from 'next/navigation';

// import Link from 'next/link';
import React from 'react';
import { FaArrowUp, FaCopyright } from 'react-icons/fa6';
import  {Link}  from 'react-scroll';

const Footer = () => {
  const pathname = usePathname()
  const isAdminRoute = pathname.startsWith('/admin')
  return (
    <>
    {!isAdminRoute && (

     <footer>



       <div className='bg-black text-white flex justify-center items-center gap-2 p-5'>
        <span>
          <FaCopyright className='fill-[#c01d2e] text-xl lg:text-2xl' />
        </span>
        <p>Copyright 2024, PNI BUILDERS SINGAPORE PTE LTD, All Rights Reserved</p>
      </div>

<Link

          to='hero'
          spy={true}
          offset={-100}
          smooth={true}
          duration={500}
          className='flex justify-center items-center'
        >
      <div
        id='icon-box'
        className='bg-[#c01d2e] text-white p-3 rounded-full hover:bg-black hover:text-white cursor-pointer fixed lg:bottom-2 bottom-2 right-6 flex justify-center items-center'
      >
        
          <FaArrowUp className='text-2xl' />
        
      </div>
      </Link>
     </footer>
      )
    }
    </>
  );
};

export default Footer;
