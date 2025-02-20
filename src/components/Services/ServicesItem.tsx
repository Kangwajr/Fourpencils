import React from "react";
import { Link, useLocation } from "react-router-dom";

interface GalleryItemProps {
  id: number;
  title: string;
  type: string;
  icon: React.ReactNode;
  url: string;
  galleryUrl: string;
  selected: number | null;
  onSelect: (id: number) => void;
}

const GalleryItem = ({
  id,
  title,
  icon,
  url,
  onSelect,
}: GalleryItemProps) => {
  return (
    <div
      onClick={() => onSelect(id)}
      className="relative w-full h-full rounded-xl overflow-hidden cursor-pointer group"
    >
      <img
        src={url}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 transition-opacity group-hover:opacity-100">
        <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-0">
          <div className="text-white mb-4">
            <div className="flex items-center justify-center bg-[#FFD700] w-12 h-12 rounded-full mb-4 backdrop-blur-sm mx-auto">
              {icon}
            </div>
            <div className="text-6xl font-bold mb-2 text-center text-sky-500">
              {title}
            </div>
          </div>
          <div className="flex justify-center space-x-3">
            <Link
                          to="/gallery"
                         className="text-sky-500 px-4 py-2 bg-[#FFD700] rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
                        >
                          View Gallery
                        </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
