"use client";
import { FaAngleDown } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isSignupVisible, setSignupVisible] = useState(false);
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  let lastScrollY = 0;

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setHeaderVisible(true);
      }
      lastScrollY = currentScrollY;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (isLoginVisible || isSignupVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [isLoginVisible, isSignupVisible]);

  return (
    <header
    className={`bg-black/80 backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50 rounded-b-3xl md:rounded-b-full transition-transform duration-500 ease-in-out ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      
    >
      <div className="container mx-auto flex justify-between items-center md:px-10">
        <div className="flex items-center">
          <Link href="/" className=" text-white hover:text-[#cd4a01]">
            <Image
              src={"/kuchoriya.png"}
              alt="Logo"
              width={70}
              height={70}
              className=" ml-5 md:ml-0 py-2 px-2"
            />
          </Link>
        </div>

        <nav className="md:flex space-x-8 hidden md:block">
          {/* Dropdowns */}
          {["Company", "Services", "Technologies", "Hire Developers", "Portfolio", "Blogs"].map(
            (item, index) => (
              <div className="relative group" key={index}>
                <Link
                  href="#"
                  className=" text-white hover:text-[#cd4a01] flex items-center"
                >
                  {item} 
                </Link>
                <div
                  className="absolute hidden group-hover:block bg-white shadow-md rounded-lg py-2 w-48 opacity-0 group-hover:opacity-100 transform translate-y-[-10px] group-hover:translate-y-0 transition-all duration-300 ease-in-out"
                >
                  <Link href="#" className="block px-4 py-2 hover:bg-blue-100">
                    Option 1
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-blue-100">
                    Option 2
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-blue-100">
                    Option 3
                  </Link>
                </div>
              </div>
            )
          )}
        </nav>

        <div className="space-x-4 hidden md:block">
          <button className="bg-[#cd4a01] hover:bg-[#df753b] text-white px-2 py-2 rounded-full transition-transform duration-300 transform hover:scale-110 hover:shadow-xl">
            <FaPhoneAlt />
          </button>
          <button className="bg-[#cd4a01] hover:bg-[#df753b] text-white px-6 py-2 rounded-2xl transition-transform duration-300 transform hover:scale-110 hover:shadow-xl">
            Request a Quote
          </button>
        </div>

        <div className="md:hidden mr-4">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white"
          >
            <RiMenu3Fill className="text-[30px] text-[#cd4a01] font-bold" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#050a1e] shadow-xl transition-transform duration-500 transform ${
          isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } z-50`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-white"
          >
            <AiOutlineClose className="text-[30px] text-white" />
          </button>
        </div>
        <nav className="flex flex-col space-y-6 p-4">
          <div className="space-x-4 flex justify-center">
            <button className="bg-[#cd4a01] hover:bg-[#df753b] text-white px-6 py-2 rounded-2xl transition-transform duration-300 transform hover:scale-110 hover:shadow-xl">
              Login
            </button>
            <button className="bg-[#cd4a01] hover:bg-[#df753b] text-white px-6 py-2 rounded-2xl transition-transform duration-300 transform hover:scale-110 hover:shadow-xl">
              SignUp
            </button>
          </div>
          <hr />
          <Link href="/" className=" text-white hover:text-[#cd4a01]">
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
