"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const woodMaterials = [
  "/assets/wood-1.png",
  "/assets/wood-2.png",
  "/assets/wood-3.png",
  "/assets/wood-4.png",
];

const DifferentWood = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex);
  };

  return (
    <div className="bg-[#FCF8F3] px-5 md:px-10 py-[40px] md:py-[80px] w-full">
      <div className="text-center">
        <h1 className="text-[#1B1717] text-[20px] sm:text-[40px] sm:leading-[50px] tracking-[7%] font-bold uppercase mb-2">
          Different wood MATERIALS
        </h1>
        <p className="max-w-[342px] sm:max-w-[999px] mx-auto w-full text-[#6E6E6E] text-[15px] sm:text-[17px] sm:leading-[25px] font-normal">
          Explore a rich palette of wood colors, each carefully selected to enhance the natural beauty of your doors and complement your interior design.
        </p>
      </div>

      <div className="mt-10 md:mt-16 relative">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 30,
            stretch: 10,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          onSlideChange={handleSlideChange}
          ref={swiperRef}
          className="mySwiper"
        >
          {woodMaterials.map((material, index) => (
            <SwiperSlide key={index}>
              <img
                src={material}
                alt={`Wood Material ${index + 1}`}
                className="object-cover rounded-[18.68px] h-[420.23px] w-[401.55px] transition-all duration-500"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DifferentWood;
