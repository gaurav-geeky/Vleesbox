import React from 'react'

const Shop = () => {
  return (
    <div className="relative font-[Merriweather]">

      <img
        src="https://www.vlees-in-the-box.be/image/cache/catalog/banner/product-4846x462.png.webp"
        alt="meat"
        className="w-full h-[120px] md:h-[120px] lg:h-[150px] object-cover"
      />

      <div className="absolute inset-0 bg-[#86133a]/70 
                      flex flex-col items-center justify-center
                      text-white text-center px-4 text-lg md:text-xl">
        <p>
          Ontdek ons breed gamma kwalitatief hoogstaande producten.
        </p>
        <p>
          Vers en gekoeld aan huis geleverd van woensdag tem vrijdag.
        </p>
      </div>

    </div>
  )
}

export default Shop;