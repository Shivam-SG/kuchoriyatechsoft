import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen text-white"
      style={{
        backgroundImage: "url('/bg-1.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-md"></div>
      <div className="relative mx-4 sm:mx-8 md:mx-20 h-full flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 ">
          <h2 className="text-[2rem] md:text-[4rem] leading-tight font-bold mb-6">
            Empowering Your Business to{" "}
            <span className="text-[#cd4a01]">Thrive</span>
          </h2>
          <div className="lg:mr-16">
            <p className="mb-6 text-lg sm:text-xl text-gray-300">
              Unlock your potential with our innovative consulting solutions
              tailored to drive success and efficiency.
            </p>

            <div className="relative my-10 mr-16">
              <div className="w-full h-1 bg-transparent overflow-hidden">
                <div className="top-0 left-0 h-full bg-[#cd4a01] animate-loader"></div>
              </div>
            </div>
          </div>

          <div className="flex gap-8 flex-col md:flex-row">
            <button className="flex items-center justify-center gap-4 font-semibold bg-[#cd4a01] hover:bg-[#df753b] text-xl lg:text-2xl text-white px-6 py-3 rounded-2xl transition-transform duration-300 transform hover:scale-110 hover:shadow-xl">
              Get Started
              <FaArrowTrendUp />
            </button>

            <div className="flex items-center justify-center gap-4 mt-6 md:mt-0">
              <div className="px-2 py-2 rounded-full border-2 border-[#cd4a01] text-[#cd4a01] text-2xl">
                <FaPhoneAlt />
              </div>
              <div>
                <h2 className="text-gray-300">Call Everyday</h2>
                <h2>+911234567890</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center w-full md:w-1/2 mt-9 hidden lg:block">
          <div className="flex items-center justify-center space-x-8 flex-wrap md:flex-nowrap">
            <div className="relative w-32 h-64 sm:w-48 sm:h-[26rem] bg-black/50 rounded-full overflow-hidden border-4 border-[#cd4a01] flex items-center justify-center mb-6 sm:mb-0">
              <img
                src="consult-1.jpeg"
                alt="Person 1"
                className="w-full h-full object-cover grayscale"
              />
            </div>

            <div className="relative w-48 h-80 sm:w-64 sm:h-[36rem] bg-black/50 rounded-full overflow-hidden border-4 border-[#cd4a01] flex items-center justify-center mb-6 sm:mb-0">
              <img
                src="consult-2.jpeg"
                alt="Person 2"
                className="w-full h-full object-cover grayscale"
              />
            </div>

            <div className="relative w-32 h-64 sm:w-48 sm:h-[26rem] bg-black/50 rounded-full overflow-hidden border-4 border-[#cd4a01] flex items-center justify-center">
              <img
                src="consult-3.jpeg"
                alt="Person 3"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
