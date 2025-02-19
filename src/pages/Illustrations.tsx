import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
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
    url: "https://youtu.be/ctEyIELC9UQ?si=Qwi84eQoC8gKHsDx",
    height: "h-64",
  },
  {
    id: 2,
    title: "3D Animation Reel",
    category: "3D Animation",
    type: "video",
    url: "/videos/Basket Ball - Copy_1.mp4",
    thumbnail: "/4pencil-utils/MIXKASAMWA0001.png",
    height: "h-96",
  },
  {
    id: 1,
    title: "Character Design",
    category: "2D Animation",
    type: "image",
    url: "/4pencil-utils/page 4.jpg",
    height: "h-64",
  },
  {
    id: 2,
    title: "3D Animation Reel",
    category: "3D Animation",
    type: "video",
    url: "/videos/Basket Ball - Copy_1.mp4",
    thumbnail: "/4pencil-utils/MIXKASAMWA0001.png",
    height: "h-96",
  },
  {
    id: 1,
    title: "Character Design",
    category: "2D Animation",
    type: "image",
    url: "/4pencil-utils/page 4.jpg",
    height: "h-64",
  },
  {
    id: 2,
    title: "3D Animation Reel",
    category: "3D Animation",
    type: "video",
    url: "/videos/Basket Ball - Copy_1.mp4",
    thumbnail: "/4pencil-utils/MIXKASAMWA0001.png",
    height: "h-96",
  },
  {
    id: 1,
    title: "Character Design",
    category: "2D Animation",
    type: "image",
    url: "/4pencil-utils/page 4.jpg",
    height: "h-64",
  },
  {
    id: 2,
    title: "3D Animation Reel",
    category: "3D Animation",
    type: "video",
    url: "/videos/Basket Ball - Copy_1.mp4",
    thumbnail: "/4pencil-utils/MIXKASAMWA0001.png",
    height: "h-96",
  },
  {
    id: 1,
    title: "Character Design",
    category: "2D Animation",
    type: "image",
    url: "/4pencil-utils/page 4.jpg",
    height: "h-64",
  },
  {
    id: 1,
    title: "Character Design",
    category: "2D Animation",
    type: "image",
    url: "/4pencil-utils/page 4.jpg",
    height: "h-64",
  },
  {
    id: 2,
    title: "3D Animation Reel",
    category: "3D Animation",
    type: "video",
    url: "/videos/Basket Ball - Copy_1.mp4",
    thumbnail: "/4pencil-utils/MIXKASAMWA0001.png",
    height: "h-96",
  },
  {
    id: 1,
    title: "Character Design",
    category: "2D Animation",
    type: "image",
    url: "/4pencil-utils/page 4.jpg",
    height: "h-64",
  },
  {
    id: 2,
    title: "3D Animation Reel",
    category: "3D Animation",
    type: "video",
    url: "/videos/Basket Ball - Copy_1.mp4",
    thumbnail: "/4pencil-utils/MIXKASAMWA0001.png",
    height: "h-96",
  },
  {
    id: 1,
    title: "Character Design",
    category: "2D Animation",
    type: "image",
    url: "/4pencil-utils/page 4.jpg",
    height: "h-64",
  },
  {
    id: 2,
    title: "3D Animation Reel",
    category: "3D Animation",
    type: "video",
    url: "/videos/Basket Ball - Copy_1.mp4",
    thumbnail: "/4pencil-utils/MIXKASAMWA0001.png",
    height: "h-96",
  },
  // Add other items here...
];

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <div className="min-h-screen py-24 bg-black px-4 sm:px-6 lg:px-8" style={{ fontFamily: "'Wonderkids', sans-serif" }}>
        <Navbar />
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-sky-500 sm:text-4xl">
            Our Creative Portfolio
          </h2>
          <p className="mt-4 text-xl text-[#FFD700]">
            Explore our diverse collection of artwork, animations, and videos
          </p>
        </div>

        <div className="mt-12">
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
            <Masonry gutter="20px">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
                >
                  {item.type === "video" ? (
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full object-cover"
                    />
                  ) : (
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-sky-500">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm text-[#FFD700]">{item.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>

      {/* Modal for viewing videos and images */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-black rounded-lg text-white p-6 max-w-3xl w-full">
              <h3 className="text-2xl text-sky-500 mb-4">{selectedItem.title}</h3>
              <div className="aspect-video">
                {selectedItem.type === "video" ? (
                  <video controls className="w-full h-full">
                    <source src={selectedItem.url} type="video/mp4" />
                  </video>
                ) : (
                  <img src={selectedItem.url} alt={selectedItem.title} className="w-full h-full object-contain" />
                )}
              </div>
              <button
                className="mt-4 px-4 py-2 bg-sky-500 text-black rounded-md"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Gallery;
