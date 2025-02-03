import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero/Hero";
import Hero2 from "../components/Hero2/Hero";
import OurGallery from "../components/OurGallery";
import ServicesPage from "../components/ServicePage";
// import Testimonials from "../components/Testimonials";
import Partners from "../components/Partners/Partners";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import PageSection from "../components/PageSection";
const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Hero2 />
      <OurGallery />
      <div className="section-wrapper">
        <PageSection id="projects">
          <ServicesPage />
        </PageSection>
        {/* <PageSection id="testimonials">
          <Testimonials />
        </PageSection> */}
        <PageSection id="partners">
          <Partners />
        </PageSection>
        <PageSection id="contact">
          <Contact />
        </PageSection>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
