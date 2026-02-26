import React from 'react'
import Orderslider from '../Components/Orderslider'
import missionpageslide from '../Components/Missionpageslide'


const MissionandVision = () => {
    return (
        < >
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
            <section className="flex items-start  gap-5 max-w-[1350px] mx-auto  px-6   ">

                {/* left sidebar */}
                <section className='flex-1  px-2 font-[Merriweather] border-r border-gray-300 p-4  '>

                    <h1 className='text-[30px] text-[#86133a] leading-9 mb-4 font-semibold'> Our mission and vision </h1>

                    {/* mission and vision */}
                    <article>

                        {/* our mission */}
                        <h2 className='text-[20px] text-[#86133a] leading-6 mb-4 font-semibold ' > Our mission </h2>

                        <p className='leading-[22px] mb-4 text-gray-700 '> Vlees-in-the-Box is an online shop selling mainly fresh meat. We sell to both private individuals and companies. </p>

                        <p className='leading-[22px] mb-12 text-gray-700 '> Vlees-in-the-Box wants to offer its customers a wide range of high-quality products with a focus on freshness and service, delivered to their doorstep. In this way, we are ensuring that we become a permanent fixture in Belgium, where consumers can count on US for their purchases of pure products for preparing a delicious meal, and of ready-made dishes. </p>


                        {/* our mission */}
                        <h2 className='text-[20px] text-[#86133a] leading-6 mb-4 font-semibold ' > Our vision </h2>

                        <p className='leading-[22px] mb-4 text-gray-700 '>
                            Our motto is "customer is king". </p>

                        <p className='leading-[22px] mb-4 text-gray-700 '>
                            On our website www.vlees-in-the-box.be we present a rich assortment of fresh meat and meat preparations. With the love of the trade, Vlees-in-the-box selects daily fresh products, often seasonal. </p>

                        <p className='leading-[22px] mb-4 text-gray-700 '> 
                            Vlees-in-the-box is based on 3 pillars, which also contain our vision. We want to offer quality and fresh products in a customer-friendly way through good service </p>

                        <p className='leading-[22px] mb-12 text-gray-700 '> 
                            For more information: click here for contact by email. </p>


                    </article>

                </section>

                {/* right sidebar */}
                <section className="w-[220px]   shrink-0  py-2  ">
                    <Orderslider images={missionpageslide} />
                </section>


            </section >


        </>
    )
}

export default MissionandVision; 
