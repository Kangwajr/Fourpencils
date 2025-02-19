import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Box,
  Film,
  Book,
  Palette,
  Layers,
} from "lucide-react";

const services = [
  {
    url: "/projects/step 1.png",
    title: "2D Animations",
    description:
      "Hand-crafted illustrations and digital artwork that capture imagination.",
  },
  {
    url: "/girl alone 1/boy 2.jpg",
    title: "3D Animations",
    description: "Stunning three-dimensional models and environments.",
  },
  {
    url: "/projects/3d-character.jpeg",
    title: "Character Design",
    description: "Fluid motion and captivating animated sequences.",
  },
  {
    url: "/4pencil-utils/page 4.jpg",
    title: "Comics",
    description: "Sequential art that tells compelling stories frame by frame.",
  },
  {
    url: "/projects/illustration1.jpeg",
    title: "Illustrations",
    description: "Detailed illustrations for various media and purposes.",
  },
  {
    url: "/projects/story-book.jpeg",
    title: "Story books",
    description: "Enchanting visuals that bring stories to life.",
  },
  {
    url: "/projects/story-board.jpeg",
    title: "Story boards",
    description: "Enchanting visuals that bring stories to life.",
  },
];

function serviceSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-sky-500 mb-12">
          OUR SERVICES
        </h2>
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div className="relative w-50 h-50">
              <img
                src={services[currentSlide].url}
                alt={services[currentSlide].title}
                className="w-full  object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                <h3 className="text-2xl font-bold text-sky-500 mb-2">
                  {services[currentSlide].title}
                </h3>
                <p className="text-[#FFD700]">
                  {services[currentSlide].description}
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#FFD700] hover:bg-white text-sky-500 p-2 rounded-full shadow-lg transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#FFD700] hover:bg-white text-sky-500 p-2 rounded-full shadow-lg transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="flex justify-center mt-4 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? "bg-sky-500 w-6" : "bg-[#FFD700]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default serviceSection;
