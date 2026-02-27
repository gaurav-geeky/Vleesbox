
import React from 'react'
import { FiHome } from "react-icons/fi";
import { HiOutlineArrowLongRight } from "react-icons/hi2";


const Contact = () => {

    const placeholdercss = "placeholder:text-[#a2b0d5] placeholder:font-[Dancing_Script] placeholder:text-[20px]"

    return (
        <>

            <section className='bg-[#f3f3f3] ' >
                <h1 className='text-[22px] leading-9 text-gray-600 flex items-center gap-2
                font-[Merriweather]  bg-[#f3f3f3] px-30 py-3 '>

                    <FiHome className='hover:text-[#EAA6BB] ' size={22} />
                    <HiOutlineArrowLongRight />
                    <p className=' text-[24px] '> Contact Us </p>
                </h1>
            </section>

            <section className='bg-[#f3f3f3] '>

                <section className="flex items-start  gap-5 max-w-[1200px] mx-auto  px-6 bg-[#f3f3f3] border  ">

                    {/* left sidebar */}
                    <section className='flex-1 px-2 font-[Merriweather] border-r border-gray-300 p-4 max-w-[790px] '>


                        {/* contact form */}
                        <article className=' p-3 text-[#86133a] '>

                            <h2 className='text-[22px] leading-6 mb-4 font-semibold uppercase ' > contact </h2>

                            <div>
                                <p className=' text-[16px] font-[Merriweather] py-[5px] '>Name</p>

                                <input
                                    placeholder='Name'
                                    className={` w-[750px] py-[6px] px-[12px] focus-within:border-red-600 
                                border border-[#86133a] focus:outline-none text-black 
                                 placeholder:text-[#a2b0d5]
                                  ${placeholdercss} `}

                                    type="text"
                                />
                                {/*      */}


                                <p className=' text-[16px] font-[Merriweather] py-[5px] '>Company</p>

                                <input
                                    placeholder='Company'

                                    className={` w-[750px] py-[6px] px-[12px] focus-within:border-red-600 
                                border border-[#86133a] focus:outline-none text-black 
                                 placeholder:text-[#a2b0d5]
                                  ${placeholdercss} `}

                                    type="text"
                                />
                                {/*       */}

                                <p className=' text-[16px] font-[Merriweather] py-[5px] '>E-mail</p>

                                <input
                                    placeholder='E-mail'

                                    className={` w-[750px] py-[6px] px-[12px] focus-within:border-red-600 
                                border border-[#86133a] focus:outline-none text-black 
                                 placeholder:text-[#a2b0d5]
                                  ${placeholdercss} `}

                                    type="text"
                                />
                                {/*      */}

                                <p className=' text-[16px] font-[Merriweather] py-[5px] '>Phone</p>

                                <input
                                    placeholder='Phone'

                                    className={` w-[750px] py-[6px] px-[12px] focus-within:border-red-600 
                                border border-[#86133a] focus:outline-none text-black 
                                 placeholder:text-[#a2b0d5]
                                  ${placeholdercss} `}

                                    type="text"
                                />
                                {/*       */}

                                <p className="text-[16px] font-[Merriweather] py-[5px]">
                                    Address
                                </p>

                                <textarea
                                    placeholder="Address"
                                    rows={4}
                                    className={`w-[750px] px-[12px] py-[8px]
                                    border border-[#86133a]
                                    focus:border-red-600
                                    focus:outline-none
                                    text-black
                                    placeholder:text-[#a2b0d5]
                                    resize
                                    ${placeholdercss}`}
                                />
                                {/*        */}

                                <p className=' text-[16px] font-[Merriweather] py-[5px] '>City</p>

                                <input
                                    placeholder='City'

                                    className={` w-[750px] py-[6px] px-[12px] focus-within:border-red-600 
                                border border-[#86133a] focus:outline-none text-black 
                                 placeholder:text-[#a2b0d5]
                                  ${placeholdercss} `}

                                    type="text"
                                />
                                {/*      */}

                                <p className=' text-[16px] font-[Merriweather] py-[5px] '>Message</p>

                                <textarea
                                    placeholder="Message"
                                    rows={4}
                                    className={`w-[750px] px-[12px] py-[8px]
                                    border border-[#86133a]
                                    focus:border-red-600
                                    focus:outline-none
                                    text-black
                                    placeholder:text-[#a2b0d5]
                                    resize
                                    ${placeholdercss}`}
                                />

                                {/* checkbox */}
                                <p className='flex gap-2 my-2'>
                                    <input type="checkbox" />
                                    <p>I have read and agree to the GENERAL CONDITIONS</p>
                                </p>

                                <button
                                    className=' uppercase bg-[#86133a] text-white text-[13px] py-[10px] px-[20px]
                                    font-semibold
                                    transition duration-300
                                    hover:bg-[#f69db9] '
                                >
                                    <span> submit</span>
                                </button>

                            </div>


                        </article>


                    </section>


                    {/* right sidebar */}
                    <section className=" max-w-[300px] bg-amber-100  shrink-0 py-2 ">

                        sdgasfdgt cum rerum praesentium, labore quos vero molestias, vel dicta! Sit sapiente et facere natus asperiores, consectetur officia, blanditiis eaque dignissimos autem quo incidunt enim accusamus fugit tempora nam doloremque labore suscipit saepe! Eligendi ullam, iure ipsum voluptas impedit optio debitis quidem possimus illum, cupiditate autem voluptatibus vel, reiciendis distictio explicabo quas labore sit inventore voluptates eligendi. Expedita deleniti a totam consectetur!
                        sdgasfdgt cum rerum praesentium, labore quos vero molestias, vel dicta! Sit sapientautem quo incidunt enim accusamus fugit tempora nam doloremque labore suscipit saepe! Eligendi ullam, iure ipsum voluptas impedit optio debitis quidem possimus illum, cupiditate autem voluptatibus vel, reiciendis distictio explicabo quas labore sit inventore voluptates eligendi. Expedita deleniti a totam consectetur!



                    </section>


                </section >
            </section>
        </>
    )
}

export default Contact;


