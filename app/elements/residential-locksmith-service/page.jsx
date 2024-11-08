"use client"
import { IoCall } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { slideUpVariants } from '@/Components/HomeComponents/animation';

const services = [
    "Lock Repair & Maintenance",
    "Door Latch Supply & Install",
    "Metal Gate Latch Supply & Install",
    "Glass Door Lock",
    "Digital Lock Service",
    "Letter-Box Lock & Key Service",
    "Lock Related All Service",
    "Automobile / Car Entry",
    "Open Filing Cabinets",
    "Open Mailboxes Locks",
    "Burglary / Break In Repairs",
    "Open Locked Car Door / Trunk / Fuel Door",
    "Open Locked / Stuck Garage Door",
    "Open Automatic Driveway Gates",
    "Open / Repair Any Type of Safe",
    "Open High Security Locks",
    "High Security & Restricted Keyways",
    "Key Duplication",
    "Lock Repairs",
    "Door Hardware Installation",
    "Electrical Access",
    "Keyless Entry",
    "Safes & Vault Sales",
    "Safes & Vault Unlocking Services"
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
            <h3 className="text-3xl font-bold mb-4">The Best Residential Locksmith Service</h3>
            <p className="mb-4">Looking for residential locksmith service near you? Our professional expert team will fix your residential locksmith problem. Our best service in timely manner in singapore all area. Century Handyman Service has trusted & experienced about residential locksmith service in singapore.

</p>
            <span className="bg-secondary text-[#d26e4b] py-2 rounded uppercase">
              we will not accept payment until you are 100% satisfied!
            </span>
          </div>
          <div className="md:w-1/2">
            <motion.img
              src="https://www.centuryhandymanservice.com/wp-content/uploads/2024/04/Image-Caption6-2.jpg"
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
          <p className="max-w-2xl mx-auto">Get professional residential locksmith service in singapore. Fast, Same Day residential locksmith service. We are waiting to your call to help you with any issue regarding of residential locksmith service. We believe honesty and respect are two pillars for customer relationship.</p>
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
    </motion.div>
  );
}
