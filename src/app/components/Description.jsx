import Image from "next/image";
import React from "react";

const Description = () => {
  return (
    <div className="bg-white py-8 px-6 lg:py-16 lg:px-20 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
      {/* Left Content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
          What Say Our CEO, About
          <span className="text-orange-600"> Consen Customers</span>
        </h2>
        <div className="mt-4 md:mt-6">
          <blockquote className="text-lg md:text-xl font-semibold text-gray-900 italic">
            “We help Our Clients to Renew Their Business Function to Create
            Brandable Organizations”
          </blockquote>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-800">
            Appropriately enhance principle-centered innovation rather than high
            standards in platforms. Credibly orchestrate functional markets
            through multidisciplinary services. Uniquely strategize transparent
            technology and user-friendly ideas markets.
          </p>
        </div>
        <div className="mt-4 md:mt-6">
          <h3 className="text-base md:text-lg font-bold text-gray-900">
            Philip Antrophy
          </h3>
          <p className="text-sm md:text-base text-gray-700">SEO & Founder</p>
        </div>
        <button aria-label="Client Review" className="bg-[#b94000] hover:bg-[#a33b00] text-white text-sm md:text-xl font-semibold mt-6 md:mt-10 px-4 md:px-6 py-2 rounded-2xl transition-transform duration-300 transform hover:scale-110 hover:shadow-xl">
  Client Review
</button>

      </div>
      {/* Right Image */}
      <div className="flex items-center justify-center relative lg:w-1/2">
        <div className="hidden md:block absolute bg-orange-200 rounded-full w-40 h-40 md:w-60 md:h-60 -top-8 md:-top-12 right-16 md:right-1"></div>
        <div className="hidden md:block absolute bg-orange-200 rounded-full w-40 h-40 md:w-60 md:h-60 -top-8 md:top-[20rem] right-16 md:right-[28rem]"></div>
        <div className="relative w-72 h-72 md:w-96 md:h-[35rem] bg-black/70 rounded-full overflow-hidden border-4 border-[#b94000]">
          <Image
            src="/ceo.jpeg"
            alt="Philip Antrophy, CEO"
            fill
            style={{ objectFit: "cover" }}
            quality={75}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Description;
