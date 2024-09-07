import React from 'react'

export default function TopBar() {
  return (
    <div id="top-bar" class="bg-gray-800 text-white py-2">
    <div class="container mx-auto flex justify-around items-center">
        
      
        <div class="hidden md:block">
            <ul class="flex space-x-4">
                <li>
                    <strong class="uppercase">Welcome to PINI BUILDERS service in Singapore...</strong>
                </li>
            </ul>
        </div>

        <div class="hidden md:block">
            <ul class="flex space-x-4"></ul>
        </div>


        <div class="hidden md:block">
            <ul class="flex space-x-4 items-center">
                <li>
                    <a href="tel:68856869" class="text-white hover:text-gray-300" aria-label="Call us">
                        <i class="fas fa-phone"></i>
                    </a>
                </li>
                <li>
                    <strong class="uppercase">CALL NOW: <a href="tel:+6597843656" class="text-white hover:text-gray-300">+65 97843656</a></strong>
                </li>
            </ul>
        </div>

        <div class="block md:hidden w-full">
            <ul class="flex justify-center space-x-4 items-center">
                <li>
                    <a href="tel:68856869" class="text-white hover:text-gray-300" aria-label="Call us">
                        <i class="fas fa-phone"></i>
                    </a>
                </li>
                <li>
                    <strong class="uppercase">CALL NOW: <a href="tel:+6597843656" class="text-white hover:text-gray-300">+65 97843656</a></strong>
                </li>
            </ul>
        </div>
    </div>
</div>

  )
}
