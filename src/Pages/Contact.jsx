
import React from 'react'
import { FiHome } from "react-icons/fi";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";


const Contact = () => {

    const placeholdercss = "placeholder:text-[#a2b0d5] placeholder:font-[Dancing_Script] placeholder:text-[20px]"

    return (
        <>


            <section className='bg-[#f3f3f3] ' >
                <h1 className='text-[22px] leading-9 text-gray-600 flex items-center gap-2
                font-[Merriweather]  bg-[#f3f3f3] px-30 py-3 '>

                    <Link to="/home">
                        <FiHome className="hover:text-[#EAA6BB]" size={22} />
                    </Link>

                    <HiOutlineArrowLongRight />
                    <p className=' text-[24px] '> Contact Us </p>
                </h1>
            </section>

            <section className='bg-[#f3f3f3] '>

                <section className="flex items-start  gap-5 max-w-[1200px] mx-auto  px-6 bg-[#f3f3f3]   ">

                    {/* left sidebar */}
                    <section className='flex-1 px-2 font-[Merriweather]  border-gray-300 p-4 max-w-[790px] '>


                        <h2 className='text-[22px] leading-6 mb-4 px-4 font-semibold uppercase text-[#86133a] ' > contact </h2>

                        {/* contact form */}
                        <article className=' p-3 text-[#86133a] '>

                            <div>
                                <p className=' text-[16px] font-[Merriweather] py-[5px] '>Name</p>

                                <input
                                    placeholder='Name'
                                    className={` w-[750px] py-[6px] px-[12px] focus-within:border-red-600 
                                border border-[#86133a] focus:outline-none text-black ${placeholdercss} `}

                                    type="text"
                                />
                                {/*      */}


                                <p className=' text-[16px] font-[Merriweather] py-[5px] '>Company</p>

                                <input
                                    placeholder='Company'

                                    className={` w-[750px] py-[6px] px-[12px] focus-within:border-red-600 
                                border border-[#86133a] focus:outline-none text-black ${placeholdercss} `}

                                    type="text"
                                />
                                {/*       */}

                                <p className=' text-[16px] font-[Merriweather] py-[5px] '>E-mail</p>

                                <input
                                    placeholder='E-mail'

                                    className={` w-[750px] py-[6px] px-[12px] focus-within:border-red-600 
                                border border-[#86133a] focus:outline-none text-black  ${placeholdercss} `}

                                    type="text"
                                />
                                {/*      */}

                                <p className=' text-[16px] font-[Merriweather] py-[5px] '>Phone</p>

                                <input
                                    placeholder='Phone'

                                    className={` w-[750px] py-[6px] px-[12px] focus-within:border-red-600 
                                border border-[#86133a] focus:outline-none text-black  ${placeholdercss} `}

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
                                    resize ${placeholdercss}`}
                                />
                                {/*        */}

                                <p className=' text-[16px] font-[Merriweather] py-[5px] '>City</p>

                                <input
                                    placeholder='City'

                                    className={` w-[750px] py-[6px] px-[12px] focus-within:border-red-600 
                                border border-[#86133a] focus:outline-none text-black  ${placeholdercss} `}
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
                                    resize  ${placeholdercss}`}
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
                    <section className=" max-w-[300px]  shrink-0 py-2 ">

                        <div className=' text-[#86133a] text-[16px font-[Merriweather] leading-7 pt-[50px] pl-[50px] ' >
                            <p className='py-4'>
                                Contact our customer service
                            </p>
                            <p className='flex items-center gap-2 hover:text-[#EAA6BB] ' >
                                <IoIosCall />  00 32 11 70 50 80
                            </p>
                            <p className='flex items-center gap-2 hover:text-[#EAA6BB] '>
                                <MdEmail />  info@vlees-in-the-box.be
                            </p>
                        </div>


                    </section>


                </section >
            </section>
        </>
    )
}

export default Contact;


