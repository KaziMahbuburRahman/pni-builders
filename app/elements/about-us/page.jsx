"use client"
import Image from 'next/image'
import { IoCall } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { slideUpVariants } from '@/Components/HomeComponents/animation';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <header className="relative h-[300px] bg-cover bg-center flex items-center justify-center text-white" style={{backgroundImage: "url('https://www.centuryhandymanservice.com/wp-content/uploads/2024/04/port-02-1-1170x500-1.jpg')"}}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold mb-2">Welcome To Century Handyman Service</h1>
          <p className="text-xl">Replacement And Installation</p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">The Safe, Guaranteed Solution to Your Home Repair and Maintenance Needs.</h2>
            <p className="mb-8">Century Handyman Service has been THE handyman service for singapore for many years. Century Handyman Service has a great handyman on staff and available for projects large and small. All homes require upkeep and repairs. Our job is to repair and fix all your home needs with a one-stop shopping service that is quick, affordable, and reliable.</p>
          </div>
        </div>
      </section>

      {/* Banner Image */}
      <section className="relative h-[400px] overflow-hidden">
        <Image 
          src="https://www.centuryhandymanservice.com/wp-content/uploads/2024/04/1-2-1400x438.jpg"
          alt="Handyman Service Banner"
          layout="fill"
          objectFit="cover"
        />
      </section>

      {/* Quality Craftsmanship Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Quality Craftsmanship</h2>
            <p className="mb-8">We're proud of both your house and the work we do. Because of our dedication to offering top-notch workmanship and warm customer service, we are a leading provider of home maintenance, repair, and renovation services across the nation. Since 2006, we have been providing customer service, carrying on a history of skilled craftspeople and grateful clients. Through years of hard work and dedication, we have built a reputation for unparalleled quality in our company. Our company is synonymous with excellence, and we strive to exceed expectations with every job.</p>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center mb-16">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <Image 
                src="https://www.centuryhandymanservice.com/wp-content/uploads/2024/04/ab-01.png"
                alt="Consistent Excellence"
                width={540}
                height={568}
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
              <h3 className="text-2xl font-bold mb-4">Consistent Excellence</h3>
              <p>We're on a mission to make your home a haven of peace and functionality. With our consistent handyman services, we aim to be your go-to team for all your repair and maintenance needs. We're not just your average handyman service – we're your home's best friend. Our commitment to quality and reliability sets us apart like a unicorn in a field of horses.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center flex-row-reverse">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <Image 
                src="https://www.centuryhandymanservice.com/wp-content/uploads/2024/04/col-bg-two.jpg"
                alt="Helpful Customer Support"
                width={540}
                height={540}
              />
            </div>
            <div className="w-full md:w-1/2 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">Helpful Customer Support</h3>
              <p>Our regional offices are all available to assist you before, during, and after your project. In case you have any inquiries, do let us know!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <motion.section className="py-12 lg:mx-36 px-4" initial="hidden" 
        whileInView="visible" 
        variants={slideUpVariants}>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-3xl font-bold mb-4">Our Emergency team member Available Here 24/7</h3>
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
            <div className="text-center">
              <h4 className="text-2xl font-bold mb-2">CALL NOW</h4>
              <p className="text-xl mb-4">+65 81749336</p>
              <a href="tel:+6581749336">
                <motion.button className="bg-green-500 text-white p-4 rounded-full" whileHover={{ scale: 1.1 }}>
                  <IoCall size={24} />
                </motion.button>
              </a>
              <p className="mt-2">Click Green Button</p>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  )
}