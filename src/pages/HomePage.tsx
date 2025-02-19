import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero/Hero";
import OurGallery from "../components/OurGallery";
import ServicesPage from "../components/ServicePage";
import Partners from "../components/Partners/Partners";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import PageSection from "../components/PageSection";
const HomePage = () => {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Wonderkids', sans-serif" }}>
      <Navbar />
      <Hero />
      <OurGallery />
       <ServicesPage />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
