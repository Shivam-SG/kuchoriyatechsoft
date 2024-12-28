import React from "react";

const caseStudiesData = [
  {
    id: 1,
    title: "Transformative Solutions",
    description: "See how we address challenges with innovative solutions.",
    imageUrl: "/case1.png",
  },
  {
    id: 2,
    title: "Innovative Designs",
    description: "Discover our groundbreaking designs for client success.",
    imageUrl: "/case2.png",
  },
  {
    id: 3,
    title: "Business Excellence",
    description: "Learn how we drive excellence in business strategies.",
    imageUrl: "/case3.png",
  },
];

const CaseStudies = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-20"
      style={{
        backgroundImage: "url('/bg-1.jpeg')", 
      }}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-md"></div>

      <div className="relative mx-4 sm:mx-8 md:mx-20 h-full flex flex-col md:flex-row">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between w-full items-center mb-8">
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl font-bold">
              We Serve the Best Works View
              <span className="text-[#cd4a01]"> Case Studies</span>
            </h2>
          </div>
          <div>
            <button className="bg-[#cd4a01] mt-10 md:mt-0 hover:bg-[#df753b] text-white text-lg font-semibold px-6 py-2 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-xl">
              View All Projects
            </button>
          </div>
        </div>
      </div>

      {/* Grid Section with 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4 sm:mx-8 md:mx-20 mt-12">
        {caseStudiesData.map((caseStudy) => (
          <div key={caseStudy.id} className="relative group h-96 rounded-lg overflow-hidden">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{
                backgroundImage: `url('${caseStudy.imageUrl}')`,
              }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/65 group-hover:bg-black/30 transition-all duration-500"></div>

            {/* Text Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-8">
              <h3 className="text-2xl font-bold mb-4">{caseStudy.title}</h3>
              <p className="text-sm text-gray-200 mb-6">{caseStudy.description}</p>
              <button className="bg-[#cd4a01] hover:bg-[#df753b] text-white text-lg font-semibold px-6 py-2 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-xl">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
