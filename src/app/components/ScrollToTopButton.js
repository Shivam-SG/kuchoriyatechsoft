"use client";
import { useState, useEffect } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollPosition = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 p-4 bg-[#cd4a01] text-white text-2xl font-bold rounded-full shadow-lg hover:bg-[#e68a59] focus:outline-none"
      >
       <FaLongArrowAltUp />
      </button>
    )
  );
};

export default ScrollToTopButton;
