
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";


const Orderslider = ({ images }) => {
    return (
        <div className="relative max-w-[500px] h-[220px]  hover:bg-black/5 mx-auto group ">

            {/* LEFT BUTTON */}
            <div className="orderslider-btn custom-prev left-[-16px]">
                ❮
            </div>

            {/* RIGHT BUTTON */}

            <div className="orderslider-btn custom-next right-[-16px]">
                ❯
            </div>

            <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={1}
                loop={false}
                autoplay={{ delay: 4000 }}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
            >
                {images.map((img, i) => (
                    <SwiperSlide key={i}>
                        <img
                            src={img}
                            alt="slide"
                            className="w-full h-auto object-cover "
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Orderslider;





// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";


// import "swiper/css";
// import "swiper/css/navigation";
// import orderpageslide from "./Orderpageslide";


// const Orderslider = () => {
//     return (
//         <div className="relative max-w-[500px] h-[220px]  hover:bg-black/5 mx-auto group ">

//             {/* LEFT BUTTON */}
//             <div className="orderslider-btn custom-prev left-[-16px]">
//                 ❮
//             </div>

//             {/* RIGHT BUTTON */}

//             <div className="orderslider-btn custom-next right-[-16px]">
//                 ❯
//             </div>

//             <Swiper
//                 modules={[Navigation, Autoplay]}
//                 slidesPerView={1}
//                 loop={false}
//                 autoplay={{ delay: 4000 }}
//                 navigation={{
//                     nextEl: ".custom-next",
//                     prevEl: ".custom-prev",
//                 }}
//             >
//                 {orderpageslide.map((img, i) => (
//                     <SwiperSlide key={i}>
//                         <img
//                             src={img}
//                             alt="slide"
//                             className="w-full h-auto object-cover "
//                         />
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// };

// export default Orderslider;

