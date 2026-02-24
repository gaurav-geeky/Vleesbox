//  wrong code not running.


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Shopreview from "./Shopreview";

const Shopslider = () => {
  const ReviewSlide = ({ title, desc, name }) => {
    return (
      <div className="text-center max-w-[650px] mx-auto px-4">
        <h3 className="text-[18px] font-semibold text-gray-800">
          {title}
          <span className="text-gray-500 text-sm ml-2">✔ Geverifieerd</span>
        </h3>

        <p className="text-gray-600 mt-2">{desc}</p>

        <p className="text-gray-500 mt-3 text-sm">
          <span className="font-semibold">{name}</span>, 13 januari
        </p>
      </div>
    );
  };

  return (
    <div className="relative w-full">

      {/* SWIPER */}
      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        centeredSlides
        spaceBetween={30}
        loop
        autoHeight
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="!pb-10"   // space for dots
      >
        {Shopreview.map((slide) => (
          <SwiperSlide key={slide.id} className="flex justify-center">
            <ReviewSlide
              title={slide.title}
              desc={slide.desc}
              name={slide.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ARROWS */}
      <div className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 text-2xl cursor-pointer select-none">
        ‹
      </div>

      <div className="custom-next absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 text-2xl cursor-pointer select-none">
        ›
      </div>

      {/* PAGINATION DOTS */}
      <div className="custom-pagination flex justify-center mt-4"></div>
    </div>
  );
};

export default Shopslider;