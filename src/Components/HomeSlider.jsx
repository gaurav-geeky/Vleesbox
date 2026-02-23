import React from 'react'
// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper modules
import { Pagination, Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Homeslide from './Homeslide';


const HomeSlider = () => {

    const Card = ({ img, title, description }) => {
        return (
            <div className="bg-white shadow-md overflow-hidden">
                <img src={img} className="w-full h-[180px] hover:scale-110 object-cover transition duration-300 " />

                <div className="p-4">
                    <h3 className="text-[#86133a] font-semibold text-lg">
                        {title}
                    </h3>

                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                        {description}
                    </p>

                    <button className="mt-4 bg-[#86133a] text-white px-4 py-2 text-sm">
                        READ MORE
                    </button>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="max-w-7xl mx-auto py-10 relative">

                <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={25}
                    slidesPerView={3}
                    slidesPerGroup={3} // for group slide
                    pagination={{ clickable: true }}
                    // navigation
                    navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev",
                    }}

                    loop={true}
                    breakpoints={{
                        0: { slidesPerView: 1, slidesPerGroup: 1 },
                        640: { slidesPerView: 2, slidesPerGroup: 2 },
                        1024: { slidesPerView: 3, slidesPerGroup: 3 },
                    }}
                >

                    {Homeslide.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <Card
                                img={slide.img}
                                title={slide.title}
                                description={slide.description}
                            />
                        </SwiperSlide>
                    ))}

                </Swiper>


                {/* LEFT ARROW */}
                <div className="custom-prev absolute left-[-18px] top-1/2 -translate-y-1/2 z-10 cursor-pointer hidden md:flex">
                    <div className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center shadow hover:bg-black transition">
                        
                    </div>
                </div>

                {/* RIGHT ARROW */}
                <div className="custom-next absolute right-[-18px] top-1/2 -translate-y-1/2 z-10 cursor-pointer hidden md:flex">
                    <div className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center shadow hover:bg-black transition">
                        
                    </div>
                </div>


            </div>
        </>
    )
}

export default HomeSlider; 
