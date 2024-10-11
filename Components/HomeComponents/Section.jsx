import Link from "next/link";
import { RiExpandDiagonalFill } from "react-icons/ri";
export default function Section() {
  return (
    <section id="section_772108991" className="py-8 px-5 lg:px-60">
      <div className="bg-gray-100">
        {/* Section Background */}
      </div>

      <div className="relative section-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="row-1326288920">
          {/* Left Column */}
          <div className="space-y-8" id="col-1878209612">
            {/* Icon Box 1 */}
            <div className="flex items-start">
              <div className="w-[100px] h-[100px]">
                <img
                  src="https://www.centuryhandymanservice.com/wp-content/uploads/2024/04/cashback-400x400.png"
                  alt="Cashback Icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold">100% Satisfaction Guaranteed</h3>
                <p>
                  Your complete satisfaction is our goal, we will not accept payment until you are 100% satisfied!
                </p>
              </div>
            </div>

            {/* Icon Box 2 */}
            <div className="flex items-start">
              <div className="w-[100px] h-[100px]">
                <img
                  src="https://www.centuryhandymanservice.com/wp-content/uploads/2024/04/workers-400x400.png"
                  alt="Workers Icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold">Same-Day Or Next-Day Arrival</h3>
                <p>
                  We provide prompt and reliable service with very cheap price, no matter how big or small your project!
                </p>
              </div>
            </div>

            {/* Icon Box 3 */}
            <div className="flex items-start">
              <div className="w-[100px] h-[100px]">
                <img
                  src="https://www.centuryhandymanservice.com/wp-content/uploads/2024/04/online-chat-400x400.png"
                  alt="Online Chat Icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold">24/7 Handyman Services</h3>
                <p>
                  Our Emergency team members offer 24/7 service for Handyman, Plumbers, AC Technicians, and Electricians!
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div id="col-296172039">
            <div className="col-inner">
              <h2 className="text-2xl font-bold" id="text-2530738414">Why Hire Us?</h2>
              <p className="mt-4">
                Our strong commitment to providing the very best in customer service and quality is why we have acquired
                over 15,000 satisfied customers and reputation since 2001.
              </p>
              <Link
                href="/elements/about-us/"
                target="_self"
                className="inline-block mt-4 py-2 px-4 bg-white text-black border border-black hover:bg-gray-100 transition"
              >
                <span className="flex justify-center items-center"><span className="px-1">Learn more </span> <RiExpandDiagonalFill /></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
