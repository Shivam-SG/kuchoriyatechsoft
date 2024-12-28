import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import BusinessSuccess from "./components/BusinessSuccess";
import Description from "./components/Description";
import Blogs from "./components/Blogs";
import ServicesSection from "./components/ServicesSection";
import CaseStudies from "./components/CaseStudies";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <Navbar />

      <Hero/>
      
      <Description/>

      <BusinessSuccess/>

      <ServicesSection/>

      <CaseStudies/>

      <Blogs/>

      <Footer />
    </div>
  );
}
