"use client"
import { IoCall } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { slideUpVariants } from '@/Components/HomeComponents/animation';

const services = [
    "Blocked Grills",
    "Stops Performing",
    "Outside Fan Issue",
    "Patios & Walkways",
    "Drainage Problem / Frozen Coils",
    "Issue With The Sensor",
    "Failure Pertaining To Electrical Control",
    "Bad Smell",
    "Wailing Noise In The Fan Belt",
    "Leaking Refrigerant",
    "Size / Installation Problems",
    "Air produced by AC is room-temperature or hot",
    "AC is running non-stop, with or without producing cold air",
    "Unit can no longer turn on",
    "AC is leaking or creating puddles of water",
    "Cooling bills have recently spiked for no apparent reason",
    "Air coming out of the vents smells like mold or mildew"
  ];
  



const stagger = {
  initial: {},
  animate: { transition: { staggerChildren: 0.2 } }
};

export default function ElectricalServices() {
  return (
    <motion.div className="container mx-auto px-4" initial="initial" animate="animate">
      <motion.section className="py-12 md:py-24 lg:mx-36" initial="hidden" 
        whileInView="visible" 
        variants={slideUpVariants}>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-3xl font-bold mb-4">The Best Air Conditioning Repair Service</h3>
            <p className="mb-4">Looking for air conditioning repair service near you? Our professional expert team will fix your air conditioning problem. Our best service in timely manner in singapore all area. Century Handyman Service has trusted & experienced about Air Conditioning repair service in singapore.</p>
            <span className="bg-secondary text-[#d26e4b] py-2 rounded uppercase">
              we will not accept payment until you are 100% satisfied!
            </span>
          </div>
          <div className="md:w-1/2">
            <motion.img
              src="https://www.centuryhandymanservice.com/wp-content/uploads/2024/04/7-Reasons-to-Call-Professional-Service-for-Your-Air-Conditioner-_-Air-Conditioning-Service-in-Fort-Worth-TX-1024x683-1.jpg"
              alt="Electrical technician working"
              className="w-full h-96 object-cover rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            />
          </div>
        </div>
      </motion.section>

      <motion.section className="py-12 bg-gray-100 lg:px-36" variants={stagger}>
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Services We Offer</h3>
          <p className="max-w-2xl mx-auto">Get professional air conditioning repair service in singapore. Fast, Same Day air conditioning repair service. We are waiting to your call to help you with any issue regarding of air conditioning Service. We believe honesty and respect are two pillars for customer relationship.

</p>
        </div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" initial="hidden" 
        whileInView="visible" 
        variants={slideUpVariants}>
          {services.map((service, index) => (
            <motion.div key={index} className="flex items-center" initial="hidden" 
        whileInView="visible" 
        variants={slideUpVariants}>
              <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>{service}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className="py-12 lg:mx-36" initial="hidden" 
        whileInView="visible" 
        variants={slideUpVariants}>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-3xl font-bold mb-4">Our Emergency team member Available Here 24/7</h3>
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
            <div className="text-center">
              <h4 className="text-2xl font-bold mb-2">CALL NOW</h4>
              <p className="text-xl mb-4">+65 90088562</p>
              <a href="tel:+6590088562">
                <motion.button className="bg-green-500 text-white p-4 rounded-full" whileHover={{ scale: 1.1 }}>
                  <IoCall size={24} />
                </motion.button>
              </a>
              <p className="mt-2">Click Green Button</p>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
