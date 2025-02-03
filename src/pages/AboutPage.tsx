import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { TypeAnimation } from "react-type-animation";
import { Palette, Users, Target, Lightbulb, Award, Heart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  const mapCenter = { lat: -15.3875, lng: 28.3228 }; // Coordinates for Lusaka, Zambia
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const achievements = [
    { number: "100+", text: "Projects Completed" },
    { number: "50+", text: "Happy Clients" },
    { number: "10+", text: "Awards Won" },
    { number: "5+", text: "Years Experience" },
  ];

  const values = [
    {
      icon: Palette,
      title: "Creativity",
      description: "Pushing boundaries with innovative solutions",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together to achieve excellence",
    },
    {
      icon: Target,
      title: "Precision",
      description: "Attention to every detail",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing new technologies",
    },
    {
      icon: Award,
      title: "Quality",
      description: "Delivering excellence always",
    },
    { icon: Heart, title: "Passion", description: "Love for what we do" },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="videos/4Pencils.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <TypeAnimation
              sequence={[
                "4 Pencils Animation Studio",
                1000,
                "Where Creativity Meets Technology",
                1000,
                "Bringing Your Ideas to Life",
                1000,
              ]}
              wrapper="h1"
              speed={50}
              className="text-5xl md:text-6xl font-bold text-sky-500 mb-6"
              repeat={Infinity}
            />
            <p className="text-xl text-[#FFD700]">
              Zambia's Premier Animation and Creative Design Studio
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-sky-500 mb-16">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="border border-gray-800 hover:border-sky-500 p-8 rounded-xl backdrop-blur-sm hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <value.icon className="w-12 h-12 text-[#FFD700] mb-4" />
                <h3 className="text-xl font-semibold text-sky-500 mb-2">
                  {value.title}
                </h3>
                <p className="text-[#FFd700]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-sky-500 mb-6">
                About Our Studio
              </h2>
              <p className="text-[#FFD700] mb-4">
                Founded in 2019, 4 Pencils has grown from a small creative team
                to Zambia's leading animation studio. We specialize in creating
                compelling visual content that tells stories, educates, and
                inspires.
              </p>
              <p className="text-[#FFD700] mb-4">
                Our team combines artistic talent with technical expertise to
                deliver world-class animation and design services. From concept
                to completion, we work closely with our clients to bring their
                visions to life.
              </p>
              <p className="text-[#FFD700]">
                We're not just creators; we're storytellers, innovators, and
                dreamers who believe in the power of visual communication to
                transform ideas into unforgettable experiences.
              </p>
            </div>
            <div className="relative">
              <img
                src="public/4pencil-utils/page_5.jpg"
                alt="Studio workspace"
                className="rounded-xl shadow-2xl"
              />
              {/* <div className="absolute -bottom-6 -right-6 bg-[#FFD700] text-sky-500 p-6 rounded-xl">
                <p className="text-2xl font-bold">5+ Years</p>
                <p>of Excellence</p>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Visit Our Studio
            </h2>
            <p className="text-gray-300">
              Salama Park cucumber cl st Plot No. 11, Lusaka Zambia.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={mapCenter}
                zoom={15}
              >
                <Marker position={mapCenter} />
              </GoogleMap>
            </LoadScript>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="border border-gray-800 p-6 rounded-xl text-center">
              <h3 className="text-xl font-semibold text-sky-500 mb-2">
                Address
              </h3>
              <p className="text-[#FFD700]">
                Salama Park cucumber cl st Plot No. 11, Lusaka, Zambia
              </p>
            </div>
            <div className="border border-gray-800 p-6 rounded-xl text-center">
              <h3 className="text-xl font-semibold text-sky-500 mb-2">Email</h3>
              <p className="text-[#FFD700]">4pencilsanims@gmail.com</p>
            </div>
            <div className="border border-gray-800 p-6 rounded-xl text-center">
              <h3 className="text-xl font-semibold text-sky-500 mb-2">Phone</h3>
              <p className="text-[#FFD700]">+260976659962</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
