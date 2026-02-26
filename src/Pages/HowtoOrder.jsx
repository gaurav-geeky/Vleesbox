import React from 'react'
import Orderslider from '../Components/Orderslider'
import orderpageslide from '../Components/Orderpageslide'


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
            <section className="flex items-start  gap-5 max-w-[1350px] mx-auto  px-6   ">

                {/* left sidebar */}
                <section className='flex-1  px-2 font-[Merriweather] border-r border-gray-300 p-4  '>

                    <h1 className='text-[30px] text-[#86133a] leading-9 mb-4 font-semibold'> How to proceed?</h1>

                    {/* Order section */}
                    <article>
                        <h2 className='text-[20px] text-[#86133a] leading-6 mb-4 font-semibold  ' >Order </h2>

                        <p className='leading-[22px] mb-4 text-gray-700 '> We have made ordering meat in our Vlees-in-the-Box webshop as easy as possible.</p>

                        <p className='leading-[22px] mb-4 text-gray-700 '> Create a new account or log in with an existing account. </p>

                        {/* follow steps */}
                        <h3 className='font-semibold mb-4'>Follow these steps: </h3>

                        <p className='leading-[22px] mb-4 text-gray-700 '> &nbsp; &nbsp; - In our shop you select the product(s) you want to order. You will find all the specifications of the product, as well as the price and weight. Indicate the desired quantity and press "Add". The product is then added to your shopping cart. Do you want to order more products? Feel free to shop further! &nbsp; &nbsp;&nbsp;</p>

                        <p className='leading-[22px] mb-3 text-gray-700 '>  &nbsp; &nbsp; - To order your meat or package online, click on the shopping basket in the upper right-hand corner. Here, you will find an overview of your selected products. &nbsp; &nbsp;&nbsp;</p>

                        <p className='leading-[22px] mb-3 text-gray-700 '>  &nbsp; &nbsp; - If you have a voucher or gift card, you can fill it in and press apply.  &nbsp; &nbsp;&nbsp;</p>

                        <p className='leading-[22px] mb-3 text-gray-700 '>  &nbsp; &nbsp; - Click on "checkout" if you wish to pay. Log in with your e-mail address if you already have an account, or register if you do not yet have an account. &nbsp; &nbsp;&nbsp;</p>

                        <p className='leading-[22px] mb-3 text-gray-700 '> &nbsp; &nbsp; - Then you can choose to receive the products. The delivery cost is € 15. From € 100 your order will be delivered for free. Then indicate your date. Did you know that we deliver fresh and chilled from Wednesday to Friday? &nbsp;  &nbsp;&nbsp;</p>

                        <p className='leading-[22px] mb-3 text-gray-700 '> Order two days in advance so that we can prepare it fresh. Order on Monday? Then we can deliver on Wednesday. You can also indicate that you want to receive the package on a different, later day. We do not deliver the day after a holiday, as everything is freshly prepared.   </p>

                        <p className='leading-[22px] mb-3 text-gray-700 '> Finally, you get an overview of your order. If you have any comments, you can add them here.  </p>

                        <p className='leading-[22px] my-8 text-gray-700 '>  &nbsp; &nbsp; - Confirm the terms and conditions by ticking them off and then click on confirm your order.  &nbsp; &nbsp;&nbsp;</p>

                        <p className='leading-[22px] my-8 text-gray-700 '>  &nbsp; &nbsp; - You can now pay safely and electronically via our payment partner Ingenico with Visa, Mastercard, Maestro, Ideal or Bancontact.  &nbsp; &nbsp;&nbsp;</p>

                        <p className='leading-[22px] my-8 text-gray-700 '>  &nbsp; &nbsp; - After payment you will receive an order number and you can track your order in your account.  &nbsp; &nbsp;&nbsp;</p>

                        <p className='leading-[22px] my-12 text-gray-700 '> If you would like assistance with ordering meat, please contact us on 0032 11 70 50 80 or via bestellingen@vlees-in-the-box.be. </p>

                        {/* Delivery section */}

                        <h2 className='text-[20px] text-[#86133a] leading-6 my-4 font-semibold ' > Delivery </h2>

                        <p className='leading-[22px] mb-4 text-gray-700 '> We have made ordering meat in our Vlees-in-the-Box webshop as easy as possible.</p>

                        <p className='leading-[22px] mb-4 text-gray-700 '> We have made ordering meat in our Vlees-in-the-Box webshop as easy as possible.</p>

                        <p className='leading-[22px] mb-4 text-gray-700 '> Ordering meat online? We guarantee you a TOP service! We will certainly not disappoint you!. </p>

                        <p className='leading-[22px] mb-4 text-gray-700 '> The meat is delivered with a parcel service. Delivery is possible from Tuesday to Friday. </p>

                        <p className='leading-[22px] mb-4 text-gray-700 '> With the delivery it is of great importance that you are at home! After all, these are fresh products. </p>

                        <p className='leading-[22px] mb-4 text-gray-700 '> You can also choose a different delivery address, for example, your neighbours or family, who you are sure are at home. </p>

                        <p className='leading-[22px] mb-4 text-gray-700 '> The courier service will send you an e-mail with a tracking code before shipping. With this code you can follow the status of your parcel. </p>

                        <p className='leading-[22px] mb-4 text-gray-700 '> If anything unexpected does happen, please contact us on 0032 11 70 50 80 or bestellingen@vlees-in-the-box.be. </p>

                        <p className='leading-[22px] mb-4 text-gray-700 '> In case nobody is at home, the parcel service will take it back. The return costs (20 euro) are half for you. </p>

                        <p className='leading-[22px] mb-4 text-gray-700 '> For Vlees-in-the-Box, your safety comes first. We have therefore spent a great deal of time ensuring that the shipping process is flawless. </p>

                        <p className='leading-[22px] mb-8 text-gray-700 '> For delivery to the Netherlands everything is the same as for Belgium. Please note: we do NOT deliver to the Wadden Islands, as our courier service does not guarantee intra-day delivery to the Wadden Islands. </p>

                        {/* Safety section */}
                        <h2 className='text-[20px] text-[#86133a] leading-6 my-4 font-semibold ' > Safety </h2>

                        <p className='leading-[22px] mb-4 text-gray-700 '> When shipped, the meat is lightly vacuum-sealed in a recyclable cardboard box with an insulating bag. Cooling elements are added to keep the meat cool. These ensure that the meat remains cool for at least 48 hours. In the unlikely event that the meat arrives unrefrigerated, you can contact us.  </p>

                        <p className='leading-[22px] mb-4 text-gray-700 '> The meat is packed in plastic, so there is no loss of moisture in the box. You can process or freeze the meat immediately. </p>

                        <p className='leading-[22px] mb-4 text-gray-700 '> The cardboard box is recyclable. The insulating bag can be used to pack flowers and plants frost-free in the winter, or if you want to defrost your freezer, you can use it to store food temporarily. You can also dismantle the bag and throw aluminium and plastic in the PMD waste. The cooling elements can be returned and used later, or you can deflate them and throw the plastic in the PMD waste. </p>

                        <p className='leading-[22px] mb-4 text-gray-700 '> If you order regularly, you can also return the cooling elements. You will receive a small compensation for this. </p>

                        <p className='leading-[22px] mb-4 text-gray-700 '> For more information: 0032 11 70 50 80 or via bestellingen@vlees-in-the-box.be </p>

                        <p className='leading-[22px] my-20 text-gray-700 '>  </p>

                    </article>

                </section>

                {/* right sidebar */}
                <section className="w-[220px]   shrink-0  py-2  ">
                    <Orderslider images={orderpageslide} />
                </section>


            </section >


        </>
    )
}

export default HowtoOrder;  
