import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const images = [
    "https://www.vlees-in-the-box.be/image/cache/catalog/slider/how_to_proceed/Koen%20voor%20het%20blok-600x400.jpg.webp",

    "https://www.vlees-in-the-box.be/image/cache/catalog/slider/how_to_proceed/Roan-600x400.jpg.webp",

    "https://www.vlees-in-the-box.be/image/cache/catalog/slider/how_to_proceed/brochetten%20steken-600x400.jpg.webp",

    "https://www.vlees-in-the-box.be/image/cache/catalog/slider/how_to_proceed/Buffet%20koud_2_0-600x400.jpeg.webp",

    "https://www.vlees-in-the-box.be/image/cache/catalog/slider/how_to_proceed/3-600x400.PNG.webp",

    "https://www.vlees-in-the-box.be/image/cache/catalog/slider/how_to_proceed/klant2-min-600x400.PNG.webp",
];

const Orderslider = () => {
    return (
        <div className="relative max-w-[500px] mx-auto">

            <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={1}
                loop={false}
                autoplay={{
                    delay: 800,   
                    disableOnInteraction: false,
                }}
                navigation={true}  
                className=" overflow-hidden"
            >
                {images.map((img, i) => (
                    <SwiperSlide key={i}>
                        <img
                            src={img}
                            alt="slide"
                            className="w-full h-auto object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default Orderslider;