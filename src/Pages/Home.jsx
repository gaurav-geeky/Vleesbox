
import React from "react";
import { FaTruck } from "react-icons/fa";
import { MdEuroSymbol } from "react-icons/md";
import HomeSlider from "../Components/HomeSlider";
import { IoMdPlay } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useState } from "react";


const Home = () => {

  const [play, setplay] = useState(false);

  const Banner = ({
    title,
    img,
    height = "",
    // height = "h-[420px]"    keeping default h none, give manually to each,
    text = "text-4xl",
  }) => (
    <div className="relative group cursor-pointer overflow-hidden">

      {/* IMAGE */}
      <img
        src={img}
        alt=""
        className={`w-full ${height}  object-cover transition duration-500 group-hover:scale-105`}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>

      {/* TEXT */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <h2
          className={`text-white ${text} font-semibold tracking-wide opacity-0 group-hover:opacity-100 transition duration-300 uppercase leading-tight`}
        >
          {title}
        </h2>
      </div>

    </div>
  );

  return (
    <section>

      {/* ================= HERO ================= */}
      <div className="relative font-[Merriweather]">

        <img
          src="https://www.vlees-in-the-box.be/image/cache/catalog/banner/Homepage-2400x1092h.png.webp"
          alt="meat"
          className="w-full object-cover h-[200px] sm:h-[350px] md:h-[380px] lg:h-[450px] xl:h-[530px]  "
        />

        <div
          className="absolute bottom-0 w-full  bg-[#86133a]/70 text-white text-center  
          px-2 sm:px-6 md:px-10 py-2 sm:py-6 md:py-10
          "
        >
          <div
            className="max-w-4xl mx-auto text-[10px] sm:text-lg md:text-xl 
            leading-relaxed "
          >
            <p>
              Discover our wide range of high quality meat and meat products.
            </p>
            <p>
              Fresh and refrigerated home delivered from Wednesday to Friday.
            </p>
          </div>

        </div>

      </div>

      {/* ================= FEATURES ================= */}
      <article className="max-w-6xl mx-auto grid gap-8  min-[470px]:grid-cols-3 text-center py-10 font-[Georgia,serif] px-4">

        <div className="flex flex-col items-center gap-3">
          <FaTruck className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-gray-700" />

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800  leading-relaxed" >
            Ordered today and delivered <br />
            the day after tomorrow! <br />
            Delivery from Wednesday to Friday
          </p>
        </div>
        {/* text-[13px] md:text-[24px] lg:text-[18px] 
        
        custom grid style 
         min-[470px]:grid-cols-3
        */}


        <div className="flex flex-col items-center gap-3">
          <MdEuroSymbol className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-gray-700" />

          <p className=" text-sm sm:text-base md:text-lg lg:text-xl text-gray-800  leading-relaxed" >
            Free shipping <br />
            from 100 euro
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-gray-700" >★★★★★</div>

          <p className=" text-sm sm:text-base md:text-lg lg:text-xl text-gray-800  leading-relaxed" >
            100% fresh meat <br />
            restaurant quality <br />
            at your home
          </p>
        </div>

      </article>

      {/* ================= CATEGORY GRID ================= */}
      <article
        className="font-[Dancing_Script] max-w-6xl mx-auto 
        grid grid-cols-1 min-[470px]:grid-cols-2 lg:grid-cols-4 gap-3 
        px-3 sm:px-4 py-6
      ">

        {[
          {
            title: "Weekly promo",
            color: "#EF3A57",
            img: "https://www.vlees-in-the-box.be/image/cache/catalog/banner/Weekpromos-1200x800h.png.webp",
          },
          {
            title: "Fondue and Gourmet",
            color: "#86133A",
            img: "https://www.vlees-in-the-box.be/image/cache/catalog/banner/Feestgerechten-1200x800h.png.webp",
          },
          {
            title: "Vers vlees",
            color: "#86133A",
            img: "https://www.vlees-in-the-box.be/image/cache/catalog/banner/ver_vlees-1200x800h.png.webp",
          },
          {
            title: "Cooling elements/bags",
            color: "#86133A",
            img: "https://www.vlees-in-the-box.be/image/cache/catalog/retour%20koelelementen%20NL%203-1200x800w.jpg.webp",
          },
          {
            title: "Nieuw",
            color: "#EF3A57",
            img: "https://www.vlees-in-the-box.be/image/cache/catalog/banner/Nieuw-1200x800h.png.webp",
          },
          {
            title: "Traiteurbereidingen",
            color: "#86133A",
            img: "https://www.vlees-in-the-box.be/image/cache/catalog/banner/Traiteurbereidingen-1200x800h.png.webp",
          },
          {
            title: "Advantage package",
            color: "#86133A",
            img: "https://www.vlees-in-the-box.be/image/cache/catalog/banner/Budgetpakketten-1200x800h.png.webp",
          },
          {
            title: "Klanten aan het woord",
            color: "#86133A",
            img: "https://www.vlees-in-the-box.be/image/cache/catalog/banner/Klanten-1200x800h.png.webp",
          },
        ].map((item, i) => (
          <div key={i} className="bg-white shadow-sm">
            <p
              className="text-white text-2xl text-center py-4"
              style={{ backgroundColor: item.color }}
            >
              {item.title}
            </p>
            <img
              src={item.img}
              alt={item.title}
              className=" w-full aspect-[3/2] object-cover "
            />
          </div>
        ))}

      </article>

      {/* ================= PRODUCTS IN SPOTLIGHT ================= */}
      <article className="py-2">
        <p
          className="font-[Dancing_Script] bg-[#86133A]  text-white text-center py-3
          text-xl sm:text-2xl md:text-3xl lg:text-4xl
          ">
          Products in the spotlight
        </p>

        <div className="grid grid-cols-2 gap-[1px]">
          <Banner
            title="stoofpotje hert"
            img="https://www.vlees-in-the-box.be/image/cache/catalog/zwitserse%20schijf-1200x800w.jpg.webp"
            className="w-full aspect-[3/2] object-cover"
          />
          <Banner
            title="lamskroontje"
            img="https://www.vlees-in-the-box.be/image/cache/catalog/gemarineerde%20lamskroon-1200x800.jpg.webp"
            className="w-full aspect-[3/2] object-cover"
          />
        </div>
      </article>

      {/* ================= SMALL PRODUCT GRID ================= */}
      <div className="max-w-7xl mx-auto mt-1 p-4 ">
        <div className="grid grid-cols-2 min-[470px]:grid-cols-4 gap-5 my-4">

          <Banner
            img="https://www.vlees-in-the-box.be/image/cache/catalog/videevulling%20%20-1200x800w.jpg.webp"
            className="w-full aspect-[3/2] object-cover"
            title="videevulling"
            text="text-2xl"
          />

          <Banner
            img="https://www.vlees-in-the-box.be/image/cache/catalog/aardappelgratin-1200x800.jpg.webp"
            className="w-full aspect-[3/2] object-cover"
            title="aardappelgratin"
            text="text-2xl"
          />

          <Banner
            img="https://www.vlees-in-the-box.be/image/cache/catalog/balletjes%20tomatensaus-1200x800h.jpg.webp"
            className="w-full aspect-[3/2] object-cover"
            title={<>balletjes in <br /> tomatensaus</>}
            text="text-2xl"
          />

          <Banner
            img="https://www.vlees-in-the-box.be/image/cache/catalog/tomatenroomsoep%20met%20balletjes-1200x800h.jpg.webp"
            className="w-full aspect-[3/2] object-cover"
            title={<>tomatensoep <br /> met <br /> balletjes</>}
            text="text-2xl"
          />

        </div>

        <div className=" flex items-center p-2">
          <button className="text-white bg-[#86133A] font-[Merriweather] text-[14px] font-bold py-[10px] px-[15px] m-auto ">
            To our Shop - Order meat online
          </button>
        </div>

      </div>

      {/* Home slider section  */}

      <section className=" py-5  ">

        <div className="max-w-[85%] mx-auto ">
          <h3 className=" p-[15px] font-[Dancing_Script] bg-[#86133A] text-[30px] text-white text-center">A different view of meat</h3>
        </div>

        <article className="max-w-[85%] mx-auto  ">
          <HomeSlider />

        </article>

      </section>


      <section className=" py-5 ">

        <div className="max-w-[85%] mx-auto relative ">

          {/* video play section  */}
          {!play ?
            (<>
              <img src="https://www.vlees-in-the-box.be/image/cache/catalog/banner/vlees-video-1280x400w.jpg.webp" alt="vlees" />

              <div
                onClick={() => { setplay(true); }}
                className="absolute top-1/2 left-1/2
              -translate-x-1/2 -translate-y-1/2
              flex items-center justify-center
              h-[55px] w-[55px]
              rounded-full
              border border-[#3d3d3d]
              bg-white
              hover:bg-gray-100
                    cursor-pointer">
                <IoMdPlay size={20} />
              </div>
            </>) :

            (
              <>
                <iframe
                  className="w-full h-[400px] md:h-[420px] object-cover"
                  src="https://www.youtube.com/embed/SimeOQ_w2xE?si=SSZNvt1glV6_WwzN"
                  title="YouTube video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />

                {/* CLOSE BUTTON */}
                <button
                  onClick={() => setplay(false)}
                  className="absolute top-3 right-3
              text-black/70 bg-white rounded-full p-1"
                >
                  <IoClose size={21} />
                </button>
              </>
            )
          }

        </div>


      </section>

    </section >
  );
};

export default Home;


