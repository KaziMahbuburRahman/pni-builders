import React from 'react'

export default function TopBar() {
  return (
    <div id="top-bar" className="bg-gray-800 text-white py-2">
    <div className="container mx-auto flex justify-around items-center">
        
      
        <div className="hidden md:block">
            <ul className="flex space-x-4">
                <li>
                    <strong className="uppercase">Welcome to PNI BUILDERS service in Singapore...</strong>
                </li>
            </ul>
        </div>

        <div className="hidden md:block">
            <ul className="flex space-x-4"></ul>
        </div>


        <div className="hidden md:block">
            <ul className="flex space-x-4 items-center">
                <li>
                    <a href="tel:68856869" className="text-white hover:text-gray-300" aria-label="Call us">
                        <i className="fas fa-phone"></i>
                    </a>
                </li>
                <li>
                    <strong className="uppercase">CALL NOW: <a href="tel:+6597843656" className="text-white hover:text-gray-300">+65 97843656</a></strong>
                </li>
            </ul>
        </div>

        <div className="block md:hidden w-full">
            <ul className="flex justify-center space-x-4 items-center">
                <li>
                    <a href="tel:68856869" className="text-white hover:text-gray-300" aria-label="Call us">
                        <i className="fas fa-phone"></i>
                    </a>
                </li>
                <li>
                    <strong className="uppercase">CALL NOW: <a href="tel:+6597843656" className="text-white hover:text-gray-300">+65 97843656</a></strong>
                </li>
            </ul>
        </div>
    </div>
</div>

  )
}
