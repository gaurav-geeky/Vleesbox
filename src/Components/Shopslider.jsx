
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Shopreview from "./Shopreview";

import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";



const ReviewSlider = () => {

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  const Card = ({ title, desc, name }) => (
    <div className=" mx-auto text-left px-2">
      <h3 className="text-[18px]  font-bold text-gray-800">
        {title}
      </h3>

      <p className="text-[13px] text-gray-700 font-semibold mt-2">{desc}</p>

      <p className="text-[13px] text-gray-500 mt-1 text-sm">
        <span className="font-semibold">{name}</span>
      </p>
    </div>
  );

  return (
    <div className="relative w-full py-6  ">

      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        loop={false}

        speed={600}
        resistanceRatio={0.85}
        touchRatio={1}
        spaceBetween={30}

        pagination={{ clickable: true }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="pb-10"
      >
        {Shopreview.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Card
              title={slide.title}
              desc={slide.desc}
              name={slide.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* LEFT ARROW */}
      <div
        ref={prevRef}
        className="absolute left-4 top-4/5 -translate-y-1/2 cursor-pointer z-10"
      >
        <div className="w-7 h-7 border border-gray-300 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:border-gray-500 transition">
          <RiArrowLeftSLine className="text-gray-300 hover:text-gray-700" />
        </div>
      </div>

      {/* RIGHT ARROW */}
      <div
        ref={nextRef}
        className="absolute right-4 top-4/5 -translate-y-1/2 cursor-pointer z-10"
      >
        <div className="w-7 h-7   border border-gray-300 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:border-gray-500 transition">
          <RiArrowRightSLine className="text-gray-300 hover:text-gray-700" />
        </div>
      </div>

    </div>
  );
};

export default ReviewSlider;

