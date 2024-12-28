// components/BusinessSuccess.js
import Image from "next/image";

const BusinessSuccess = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-20"
      style={{
        backgroundImage: "url('/bg-1.jpeg')", // Replace with your image URL
      }}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-md"></div>
      <div className="relative mx-4 sm:mx-8 md:mx-20 h-full flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Section - Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="border-2 border-orange-500 rounded-lg p-2 overflow-hidden">
              <Image
                src="/business-1.jpg" // Replace with your image path
                alt="Team working"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="border-2 border-orange-500 rounded-lg p-2 overflow-hidden">
              <Image
                src="/business-2.jpg" // Replace with your image path
                alt="Team collaborating"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>

          {/* Right Section - Text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">
              The Fastest Way To Achieve Your Business{" "}
              <span className="text-orange-500">Success</span>
            </h2>
            <p className="text-gray-400 mb-6">
              Continually generate 2.0 communities and client-focused products.
              In synergize strategic manufactured products whereas levera.
            </p>

            <div className="relative mb-5 mr-16">
              <div className="w-full h-1 bg-transparent overflow-hidden">
                <div className="top-0 left-0 h-full bg-[#cd4a01] animate-loader"></div>
              </div>
            </div>

            <p className="text-lg font-semibold mb-4">
              We are{" "}
              <span className="text-orange-500">Since 2009 to Present</span> in
              Sandigo, USA
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <span className="text-orange-500 mr-2">✔</span> Credibly
                reinvent sticky partnerships done
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-2">✔</span> Distinctively
                evisculate data superior content
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-2">✔</span> Monotonectally
                foster open source
              </li>
            </ul>
            <div>
            <button className="bg-[#cd4a01] hover:bg-[#df753b] text-white px-6 py-2 rounded-2xl transition-transform duration-300 transform hover:scale-110 hover:shadow-xl">
              Learn More
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSuccess;
