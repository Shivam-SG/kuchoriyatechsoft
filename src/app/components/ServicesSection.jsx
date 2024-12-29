import Image from "next/image";
import React from "react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: "/service-icon.png", // Replace with actual icon paths
      title: "Interacture Capacity Planning",
      description:
        "Dramatically cultivate from quality user-centric growth strategies emerging",
    },
    {
      id: 2,
      icon: "/service-icon2.png",
      title: "New Technology Services",
      description:
        "Dramatically cultivate from quality user-centric growth strategies emerging",
    },
    {
      id: 3,
      icon: "/service-icon3.png",
      title: "Cloud Computing Solutions",
      description:
        "Dramatically cultivate from quality user-centric growth strategies emerging",
    },
    {
      id: 4,
      icon: "/service-icon (1).png",
      title: "Top Information Technology",
      description:
        "Dramatically cultivate from quality user-centric growth strategies emerging",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl font-bold text-gray-900">
              We Run All Kinds Of Services From
              <span className="text-[#b94000]"> Technologies</span>
            </h2>
          </div>

          <div>
            <button
              aria-label="View All Services"
              className="bg-[#b94000] mt-10 md:mt-0 hover:bg-[#a33b00] text-white text-lg font-semibold px-6 py-2 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
            >
              View All Services
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-md rounded-lg p-6 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="flex justify-center items-center w-16 h-16 mx-auto bg-gray-200 rounded-full mb-4 transition-transform duration-300 hover:scale-110">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={70}
                  height={70}
                  className="py-3 px-3"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <div className="mt-2 mb-4 w-16 h-1 mx-auto bg-orange-600 rounded-full"></div>
              <p className="text-sm text-gray-700">{service.description}</p>
              <div className="flex items-center justify-center">
                <button
                  aria-label="Read More"
                  className="mt-4 text-orange-700 hover:text-orange-900 font-semibold flex items-center justify-center transition duration-300 ease-in-out"
                >
                  Read More <span className="ml-1">+</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
