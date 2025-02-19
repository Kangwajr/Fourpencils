import React, { useState } from "react";
import { ArrowRight, Star } from "lucide-react";
import ProjectModal from "./ProjectModal";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const projects = [
  {
    title: "GIZ",
    image: "/GIZ/2.png",
    rating: 4.9,
    reviews: 128,
    description:
      "A magical journey through an enchanted forest, featuring hand-drawn characters and vibrant scenery. This project showcases our expertise in traditional animation techniques combined with modern digital tools. The story follows a young explorer discovering mythical creatures and ancient secrets hidden within the forest.",
  },
  {
    title: "NIRAS INTERNATIONAL",
    image: "/NIRAS INTERNATIONAL/1.png",
    rating: 4.8,
    reviews: 94,
    description:
      "Safeguarding Posters for NIRAS International Designed visually engaging safeguarding posters for the Climate Justice Community (CJC), ensuring cultural relevance and accessibility. Incorporated feedback from NIRAS International staff and community representatives and translated materials into three main local languages.",
  },
  {
    title: "The Lost Kingdom",
    image: "/4pencil-utils/page_5.jpg",
    rating: 4.7,
    reviews: 156,
    description:
      "An epic illustrated tale of adventure, mystery, and ancient prophecies. This graphic novel combines traditional artwork with digital techniques to create a unique visual style. The story spans multiple volumes, following a group of heroes as they uncover the secrets of a forgotten civilization.",
  },
  {
    title: "Nature's Symphony",
    image: "/4pencil-utils/Illustration.jpg",
    rating: 5.0,
    reviews: 73,
    description:
      "A series of breathtaking digital illustrations celebrating the beauty of nature. Each piece in this collection was carefully crafted to capture the essence of natural phenomena, from the delicate patterns of frost to the dramatic colors of a sunset. The project includes both still images and animated sequences.",
  },
  {
    title: "Happy Fathers Day",
    image: "/4pencil-utils/SuperDad.png",
    rating: 5.0,
    reviews: 73,
    description: "A series of breathtaking digital illustrations.",
  },
  {
    title: "",
    image: "/projects/chlorinated-water.jpeg",
    rating: 5.0,
    reviews: 73,
    description: "A series of breathtaking digital illustrations.",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <section className="py-24 bg-black" style={{ fontFamily: "'Wonderkids', sans-serif" }}>
      <Navbar />
      <div className="container mx-auto px-4" >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sky-500 mb-4">
            Featured Projects
          </h2>
          <p className="text-[#FFD700] text-lg max-w-2xl mx-auto">
            Discover our most impactful and innovative creations that push the
            boundaries of animation and storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-black/40 border border-gray-800 hover:border-sky-500 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className=" object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-sky-500 mb-2">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-[#FFD700] fill-yellow-500" />
                    <span className="text-white font-semibold">
                      {project.rating}
                    </span>
                    <span className="text-gray-400 text-sm">
                      ({project.reviews})
                    </span>
                  </div>
                </div>
                <p className="text-[#FFD700] mb-4">
                  {project.description.slice(0, 120)}...
                </p>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center space-x-2 text-sky-500 hover:text-[#FFD700] transition-colors group"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
      <Footer />
    </section>
  );
};

export default Projects;
