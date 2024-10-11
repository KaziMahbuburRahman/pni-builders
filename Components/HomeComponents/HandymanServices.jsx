import Image from 'next/image';

const HandymanServices = () => {
  return (
    <div className="flex flex-wrap max-w-[1300px] lg:max-w-full lg:px-36" id="row-637352270">
      {/* First Column */}
      <div className="w-full md:w-4/12 p-6 flex" id="col-1936666931">
        <div className="bg-white shadow-2xl p-8 flex flex-col items-center justify-between h-full">
          <div className="border-t-[10px] border-yellow-400 mb-4 w-full"></div>
          <div className="flex justify-center">
            <Image
              src="https://www.centuryhandymanservice.com/wp-content/uploads/2024/05/phone-ringing.png"
              alt="Phone Ringing"
              width={512}
              height={512}
              className="w-[35%] lg:w-[20%]"
            />
          </div>
          <h2 className="text-2xl font-bold mt-4 text-center">Waiting Your Phone Call</h2>
          <p className="mt-2 text-center">
            Just you need a phone call us to discuss your details of tasks for handyman services – we’ll suggest a half or full day’s work. We Arrival Within 30 Mins.
          </p>
        </div>
      </div>

      {/* Second Column */}
      <div className="w-full md:w-4/12 p-6 flex" id="col-1207919908">
        <div className="bg-white shadow-2xl p-8 flex flex-col items-center justify-between h-full">
          <div className="border-t-[10px] border-yellow-400 mb-4 w-full"></div>
          <div className="flex justify-center">
            <Image
              src="https://www.centuryhandymanservice.com/wp-content/uploads/2024/04/maintenance.png"
              alt="Maintenance"
              width={512}
              height={512}
              className="w-[35%] lg:w-[20%]"
            />
          </div>
          <h2 className="text-2xl font-bold mt-4 text-center">Expert Handyman Services</h2>
          <p className="mt-2 text-center">
            We are providing any home repair, installation, and maintenance service. We will arrive with all the tools and equipment necessary, reliable handyman services.
          </p>
        </div>
      </div>

      {/* Third Column */}
      <div className="w-full md:w-4/12 p-6 flex" id="col-932950904">
        <div className="bg-white shadow-2xl p-8 flex flex-col items-center justify-between h-full">
          <div className="border-t-[10px] border-yellow-400 mb-4 w-full"></div>
          <div className="flex justify-center">
            <Image
              src="https://www.centuryhandymanservice.com/wp-content/uploads/2024/04/sweeping.png"
              alt="Sweeping"
              width={512}
              height={512}
              className="w-[35%] lg:w-[20%]"
            />
          </div>
          <h2 className="text-2xl font-bold mt-4 text-center">Cleaning & Handyman Tasks</h2>
          <p className="mt-2 text-center">
            Our cleaning customers really trust our team members. We provide home or office maintenance, waste removal, pest control, handyman, gardening, deep cleans, and much more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HandymanServices;
