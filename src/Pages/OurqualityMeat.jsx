import React from 'react'
import Orderslider from '../Components/Orderslider'
import qualitypageslide from '../Components/Qualitypageslide'


const OurqualityMeat = () => {
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

                    <h1 className='text-[30px] text-[#86133a] leading-9 mb-4 font-semibold'> Our quality meat </h1>

                    {/* Our quality meat section */}
                    <article>


                        <p className='leading-[22px] mb-4 text-gray-700 '> Vlees-in-the-Box offers a wide range of quality products with a focus on freshness and service. </p>

                        <p className='leading-[22px] mb-4 text-gray-700 '> We always strive for pure products for the preparation of a delicious meal, and for ready-made dishes. </p>

                        <p className='leading-[22px] mb-4 text-gray-700 '> In this way, we ensure that we become a fixed value in Belgium and the Netherlands that consumers can count on. </p>

                        <p className='leading-[22px] mb-4 text-gray-700 '> Reliable quality meat like in a restaurant </p>

                        <p className='leading-[22px] mb-4 text-gray-700 '> Before the meat ends up on your plate, it has to go through an entire process. Every step is checked against strict HACCP quality standards. So you are guaranteed to eat the safest and best meat.  </p>

                        <p className='leading-[22px] mb-4 text-gray-700 '> Our motto is "the customer is king </p>

                        <p className='leading-[22px] mb-4 text-gray-700 '> Our strengths with the Vlees-in-the-Box webshop: </p>

                        <p className='leading-[22px] mb-4 text-gray-700 '> Fresh seasonal products, </p>

                        <p className='leading-[22px] mb-4 text-gray-700 '> High level of customer friendliness, </p>

                        <p className='leading-[22px] mb-4 text-gray-700 '> Fast service. </p>

                        <p className='leading-[22px] mb-4 text-gray-700 '> We deliver to your home (Belgium and the Netherlands). </p>

                        <p className='leading-[22px] mb-4 text-gray-700 '> Translated with www.DeepL.com/Translator (free version). </p>


                    </article>

                </section>

                {/* right sidebar */}
                <section className="w-[220px]   shrink-0  py-2  ">
                    <Orderslider images={qualitypageslide} />
                </section>


            </section >


        </>
    )
}

export default OurqualityMeat;  

