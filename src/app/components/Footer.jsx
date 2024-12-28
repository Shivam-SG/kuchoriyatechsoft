import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 md:px-20">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <div className="flex items-center mb-4">
            <img
              src="/kuchoriya.png" // Replace with your logo path
              alt="Kuchoriya Logo"
              className="h-10"
            />
            <h2 className="text-orange-500 font-bold text-xl ml-2">
              KUCHORIYA
            </h2>
          </div>
          <p className="text-sm leading-relaxed">
            Kuchoriya is an ISO 9001:2015 Certified Company with its physical
            presence in the US, India, and Australia, serving clients across the
            globe.
          </p>
          <button className="bg-[#cd4a01] my-10 hover:bg-[#df753b] text-white px-6 py-2 rounded-full transition-transform duration-300 transform hover:scale-110 hover:shadow-xl">
            Request a Quote
          </button>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-orange-500 font-bold mb-4">Our Services</h3>
          <ul className="text-sm space-y-2">
            {[
              "Mobile App Development",
              "Web Development",
              "Game Development",
              "Blockchain Development",
              "OutStaffing",
              "UI/UX Design Research",
              "Quality Analysis",
              "CTO Services",
              "Referral Partner Program",
            ].map((service, idx) => (
              <li key={idx}>{service}</li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-orange-500 font-bold mb-4">Solutions</h3>
          <ul className="text-sm space-y-2">
            {[
              "E-commerce Solutions",
              "Real-estate Solutions",
              "E-learning Solutions",
              "Fleet Management",
              "Insurance Solutions",
              "Healthcare Solutions",
              "Dating Applications",
            ].map((solution, idx) => (
              <li key={idx}>{solution}</li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-orange-500 font-bold mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            {[
              "About Us",
              "Portfolio",
              "Blogs",
              "Contact Us",
              "We are Hiring",
              "Privacy Policy",
              "Terms & Conditions",
            ].map((link, idx) => (
              <li key={idx}>{link}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mt-6">
      <div className="">
        <div className="text-yellow-400 flex space-x-1 mb-4 md:mb-0">
          {[...Array(5)].map((_, i) => (
            <span key={i}>⭐</span>
          ))}
        </div>
        <div className="text-yellow-400 flex space-x-1 mb-4 md:mb-0">5/5</div>
        <span className="text-sm">Rated 5/5 based on 300+ clients</span>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mt-6">
        <div className="mb-4 md:mb-0 w-full md:w-1/2">
          <p className="font-bold">
            Sign up for the{" "}
            <span className="text-orange-500">Newsletters</span>
          </p>
          <form className="mt-2 flex flex-col md:flex-row">
            <input
              type="email"
              placeholder="Enter your email..."
              className="p-2 rounded-l border border-gray-700 w-full md:w-auto"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded-r mt-2 md:mt-0"
            >
              →
            </button>
          </form>
        </div>
      </div>
      </div>

      <div className="mt-10 border-t border-gray-800 text-center pt-8">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div>
            <p className="text-sm">
              © Kuchoriya Softwares All Rights Reserved{" "}
              {new Date().getFullYear()}
            </p>
          </div>

          <div className="flex justify-center space-x-4 text-xl mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              <FaYoutube />
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              <FaLinkedin />
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
