
import React from 'react'
import { IoStarSharp } from "react-icons/io5";
import ReviewSlider from '../Components/Shopslider';
import Shopfood from '../Components/Shopfood';


const Shop = () => {
  return (
    <>
      {/* 1st section */}
      <section className='relative' >
        <img
          src="https://www.vlees-in-the-box.be/image/cache/catalog/banner/product-4846x462.png.webp"
          alt="meat"
          className="w-full h-[120px] md:h-[120px] lg:h-[150px] object-cover"
        />

        <div className="absolute inset-0 bg-[#86133a]/70 flex flex-col items-center justify-center font-[Merriweather]  text-[20px]  text-white text-center px-4 text-lg md:text-xl">
          <p>
            Ontdek ons breed gamma kwalitatief hoogstaande producten.
          </p>
          <p>
            Vers en gekoeld aan huis geleverd van woensdag tem vrijdag.
          </p>
        </div>
      </section>


      {/* 2nd section */}
      <section className="flex items-start  gap-5
      max-w-[1400px] mx-auto  px-6  ">

        {/* left sidebar */}
        <article className="w-[260px]   shrink-0  py-2  ">

          {/* 1st scroll bar */}
          <div className="w-full  scroll-pl-44 p-5 relative font-[Merriweather] ">

            <button className="absolute top-3 right-3 bg-[#444] text-white w-6 h-6 flex items-center justify-center text-sm">
              ✕
            </button>

            <h1 className="text-[22px] text-[#86133a] font-[Merriweather] font-bold uppercase mb-4">
              Category
            </h1>

            <div className="h-[260px] overflow-y-auto pr-2 space-y-3">
              {[
                "Party folder",
                "Fresh meat",
                "BBQ",
                "Fondue and Gourmet",
                "Weekly promotion",
                "Cheese",
                "Vegan / Veggie",
                "Catering",
                "Advantage Package",
                "Deli",
                "Other",
                "Vegetarian",
                "Pasta",
                "Wok"
              ].map((item, i) => (
                <label
                  key={i}
                  className="flex items-center gap-2 text-[#86133a] font-bold uppercase cursor-pointer"
                >
                  <input type="checkbox" className=" px-1 accent-[#86133a]" />
                  <p className='text-[16px] '> {item} </p>
                </label>
              ))}

            </div>
          </div>

          {/* 2nd scroll bar */}
          <div className="w-full  p-5 relative font-[Merriweather]">

            <h1 className="text-[22px] text-[#86133a] font-[Merriweather] font-bold uppercase mb-4">
              kind of meat
            </h1>
            <div className="h-[260px] overflow-y-auto pr-2 space-y-3">
              {[
                "Beef",
                "Chicken",
                "Lamsvlees",
                "Pork",
                "Poultry",
                "Rundsvlees",
                "Varkensvlees",
                "colli",
                "gevogelte",
                "kalfsvlees",
                "traiteur",
                "voordeelpakket"
              ].map((item, i) => (
                <label
                  key={i}
                  className="flex items-center gap-2 text-[#86133a] font-bold uppercase cursor-pointer"
                >
                  <input type="checkbox" className="px-1 accent-[#86133a]" />
                  <p className='text-[16px] '> {item} </p>
                </label>
              ))}

            </div>
          </div>

        </article>

        {/* right sidebar */}
        <article className='flex-1 border-l border-gray-300 px-2 '>

          {/* 1. text and trustpilot section */}
          <article className=''>

            <h1 className='text-[30px] text-[#86133a] font-[Merriweather] p-2'>
              All Products
            </h1>

            <h1 className='text-[30px] text-[#86133a] font-[Merriweather] text-center py-2' >
              WHAT PEOPLE SAY ABOUT US
            </h1>

            <div className='group border-gray-400 border-b w-[75%] m-auto'>

              {/* ⭐ Trustpilot */}
              <div className="flex items-center justify-center gap-2 font-semibold text-xl p-2">
                <IoStarSharp className="text-[#00B67A]" size={25} />
                Trustpilot
              </div>

              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-[#00B67A] group-hover:bg-[#138861] w-7 h-7 flex items-center justify-center"
                  >
                    <IoStarSharp className="text-white text-xl" />
                  </div>
                ))}
              </div>

              {/* Review text */}
              <p className="text-sm mb-3 flex items-center justify-center">

                TrustScore
                &nbsp; <span className='font-semibold pr-1'> 4.8</span>
                | &nbsp;

                <span className="border-gray-600 border-b cursor-pointer">
                  <span className='font-semibold pr-1'> 4.803</span>
                  reviews
                </span>
              </p>
            </div>

          </article>

          {/* 2. slider section */}
          <article className='max-w-[820px] mx-auto w-full  '  >

            <p className='text-[13px] font-[Helvetica] font-medium text-gray-500 py-[16px] '>
              Onze meest recente reviews
            </p>

            <div className='w-full ' >
              <ReviewSlider />
            </div>
          </article>

          {/* 3rd grid food container */}
          {/* here map over data */}

          <article className="max-w-[1100px] mx-auto grid gap-6 
                   grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 py-6
                   ">
            {Shopfood.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-sm overflow-hidden group leading-none  "
              >

                {/* TOP BAR */}
                <div className="bg-[#86133a] text-white text-center  px-3 py-2 h-[70px] sm:h-[70px] md:h-[80px] flex flex-col justify-center font-bold  ">

                  <p className="font-[Dancing_Script] text-[22px] leading-10 truncate">
                    {item.name}
                  </p>

                  <p className="font-[Dancing_Script] text-[22px] truncate">
                    {item.price}
                  </p>
                </div>

                {/* IMAGE */}
                <div className="h-[200px]  overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className=" w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 group-hover:bg-black/30 transition duration-300"></div>

                </div>

              </div>
            ))}

          </article>




        </article>
        {/* right side bar end */}




      </section >


    </>
  )
}

export default Shop;