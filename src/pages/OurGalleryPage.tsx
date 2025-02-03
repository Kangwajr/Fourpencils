import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  type: "image" | "video";
  url: string;
  height: string;
  thumbnail?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Character Design",
    category: "2D Animation",
    type: "image",
    url: "4pencil-utils/page 4.jpg",
    height: "h-64",
  },
  {
    id: 2,
    title: "3D Animation Reel",
    category: "3D Animation",
    type: "video",
    url: "https://player.vimeo.com/video/225434434?autoplay=0",
    thumbnail: "/4pencil-utils/MIXKASAMWA0001.png",
    height: "h-96",
  },
  {
    id: 3,
    title: "Fantasy Landscape",
    category: "Illustrations",
    type: "image",
    url: "/projects/illustratio3.jpeg",
    height: "h-72",
  },
  {
    id: 4,
    title: "Motion Graphics Demo",
    category: "2D Animation",
    type: "video",
    url: "https://player.vimeo.com/video/162052542?autoplay=0",
    thumbnail: "/NIRAS INTERNATIONAL/4.png",
    height: "h-80",
  },
  {
    id: 5,
    title: "Digital Art",
    category: "Illustrations",
    type: "image",
    url: "/GIZ/3.png",
    height: "h-72",
  },
  {
    id: 6,
    title: "Character Animation",
    category: "2D Animation",
    type: "video",
    url: "https://player.vimeo.com/video/163786575?autoplay=0",
    thumbnail: "/projects/2d-art.jpeg",
    height: "h-96",
  },
  {
    id: 1,
    title: "Character Design",
    category: "2D Animation",
    type: "image",
    url: "/projects/character.jpeg",
    height: "h-64",
  },
  {
    id: 2,
    title: "3D Animation Reel",
    category: "3D Animation",
    type: "video",
    url: "https://player.vimeo.com/video/225434434?autoplay=0",
    thumbnail: "/girl alone 1/boy 2.jpg",
    height: "h-96",
  },
  {
    id: 3,
    title: "Fantasy Landscape",
    category: "Illustrations",
    type: "image",
    url: "/NIRAS INTERNATIONAL/5.png",
    height: "h-72",
  },
  {
    id: 4,
    title: "Motion Graphics Demo",
    category: "2D Animation",
    type: "video",
    url: "https://player.vimeo.com/video/162052542?autoplay=0",
    thumbnail: "/NIRAS INTERNATIONAL/4.png",
    height: "h-80",
  },
  {
    id: 5,
    title: "Digital Art",
    category: "Illustrations",
    type: "image",
    url: "/projects/2d-art.jpeg",
    height: "h-72",
  },
  {
    id: 6,
    title: "Character Animation",
    category: "2D Animation",
    type: "video",
    url: "https://player.vimeo.com/video/163786575?autoplay=0",
    thumbnail: "/projects/chlorinated-water.jpeg",
    height: "h-96",
  },
];

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <div className="min-h-screen py-24 bg-black px-4 sm:px-6 lg:px-8">
        <Navbar />
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-sky-500 sm:text-4xl">
              Our Creative Portfolio
            </h2>
            <p className="mt-4 text-xl text-[#FFD500]">
              Explore our diverse collection of artwork, animations, and videos
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`group relative ${item.height} overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer`}
              >
                {item.type === "video" ? (
                  <div className="relative h-full">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full bg-white/80 p-4">
                        <svg
                          className="w-8 h-8 text-sky-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={item.url}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-sky-500">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-[#FFD700]">
                      {item.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for viewing videos and images */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-black transition-opacity"
              aria-hidden="true"
              onClick={closeModal}
            ></div>

            <div className="inline-block align-bottom bg-black rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className="bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900 mb-4"
                      id="modal-title"
                    >
                      {selectedItem.title}
                    </h3>
                    <div className="aspect-video w-full">
                      {selectedItem.type === "video" ? (
                        <iframe
                          src={selectedItem.url}
                          className="w-full h-full"
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <img
                          src={selectedItem.url}
                          alt={selectedItem.title}
                          className="w-full h-full object-contain"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-black px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-black text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Gallery;
