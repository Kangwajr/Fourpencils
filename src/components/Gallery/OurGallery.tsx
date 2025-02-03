import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import GalleryItem from "./GalleryItem";
import { galleryItems } from "./galleryData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const OurGallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="py-20 bg-black">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-sky-500">Our Gallery</h1>
        <p className="text-[#FFD700] max-w-3xl mx-auto px-4">
          Explore a collection of stunning visuals, including 2D art, 3D
          creations, animations, comics, storybooks, and illustrations. Click on
          any item to learn more or view the gallery in detail.
        </p>
      </div>
      <div className="relative px-4">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 1,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper "
        >
          {galleryItems.map((item) => (
            <SwiperSlide key={item.id}>
              <GalleryItem
                {...item}
                icon={<item.icon className="w-6 h-6 text-sky-500" />}
                selected={selected}
                onSelect={setSelected}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurGallery;
