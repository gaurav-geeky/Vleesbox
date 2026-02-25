import React from 'react'
import Orderslider from '../Components/Orderslider'


const HowtoOrder = () => {
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
            <section className="flex items-start  gap-5 max-w-[1400px] mx-auto  px-6   ">

                {/* left sidebar */}
                <section className='flex-1  px-2 font-[Merriweather] border-r border-gray-300 p-4  '>

                    <h1 className='text-[30px] text-[#86133a] leading-9 mb-4 font-semibold'>How to proceed?</h1>

                    {/* Order section */}
                    <article>
                        <h2 className='text-[20px] text-[#86133a] leading-6 mb-4 font-semibold  ' >Order </h2>

                        <p className='leading-[22px] mb-3 text-gray-700 '> We have made ordering meat in our Vlees-in-the-Box webshop as easy as possible.</p>
                        <p className='leading-[22px] mb-3 text-gray-700 '> Create a new account or log in with an existing account. </p>

                        {/* follow steps */}
                        <h3 className='font-semibold mb-3'>Follow these steps: </h3>

                        <p className='leading-[22px] mb-3 text-gray-700 '> &nbsp; &nbsp; - In our shop you select the product(s) you want to order. You will find all the specifications of the product, as well as the price and weight. Indicate the desired quantity and press "Add". The product is then added to your shopping cart. Do you want to order more products? Feel free to shop further! &nbsp; &nbsp;&nbsp;</p>

                        <p className='leading-[22px] mb-3 text-gray-700 '>  &nbsp; &nbsp; - To order your meat or package online, click on the shopping basket in the upper right-hand corner. Here, you will find an overview of your selected products. &nbsp; &nbsp;&nbsp;</p>

                        <p className='leading-[22px] mb-3 text-gray-700 '>  &nbsp; &nbsp; - If you have a voucher or gift card, you can fill it in and press apply.  &nbsp; &nbsp;&nbsp;</p>
                        <p className='leading-[22px] mb-3 text-gray-700 '>  &nbsp; &nbsp; - Click on "checkout" if you wish to pay. Log in with your e-mail address if you already have an account, or register if you do not yet have an account. &nbsp; &nbsp;&nbsp;</p>

                        <p className='leading-[22px] mb-3 text-gray-700 '> &nbsp; &nbsp; - Then you can choose to receive the products. The delivery cost is € 15. From € 100 your order will be delivered for free. Then indicate your date. Did you know that we deliver fresh and chilled from Wednesday to Friday? &nbsp;  &nbsp;&nbsp;</p>

                        <p className='leading-[22px] mb-3 text-gray-700 '> Order two days in advance so that we can prepare it fresh. Order on Monday? Then we can deliver on Wednesday. You can also indicate that you want to receive the package on a different, later day. We do not deliver the day after a holiday, as everything is freshly prepared.   </p>

                        <p className='leading-[22px] mb-3 text-gray-700 '> Finally, you get an overview of your order. If you have any comments, you can add them here.  </p>

                    </article>

                </section>


                {/* right sidebar */}
                <section className="w-[260px]   shrink-0  py-2  ">
                    <Orderslider />
                </section>




            </section >


        </>
    )
}

export default HowtoOrder
