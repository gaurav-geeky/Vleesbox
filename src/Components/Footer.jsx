import React from 'react'
import { IoStarSharp } from "react-icons/io5";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import { useState } from 'react';
import reviews from './Review';
import { MdArrowRight } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";


const Footer = () => {
    const [index, setIndex] = useState(0);


    const next = () => {
        if (index < reviews.length - 1) setIndex(index + 1);
    };

    const prev = () => {
        if (index > 0) setIndex(index - 1);
    };

    return (
        <>

            {/*  1st footer section */}
            <section className='bg-[#e186a1] border-b-2 border-[#86133a] pb-2 '>

                <h1 className='font-[Dancing_Script] uppercase font-bold text-xl md:text-2xl lg:text-3xl text-center text-white py-5'>
                    CUSTOMERS HAVE THEIR SAY
                </h1>

                <div className=" p-3 flex justify-center items-center  ">

                    {/* 1st footer */}
                    <div className=" rounded-lg px-4 mx-1  text-center group ">
                        {/* Title */}
                        <h2 className="text-2xl font-semibold mb-2">Uitstekend</h2>
                        {/* Stars */}
                        <div className="flex justify-center gap-2 mb-2 ">
                            {[...Array(5)].map((_, i) => (
                                <div
                                    key={i}
                                    className="bg-[#00B67A] group-hover:bg-[#138861] w-8 h-8 flex items-center justify-center"
                                >
                                    <IoStarSharp className="text-white text-xl" />
                                </div>
                            ))}
                        </div>
                        {/* Review text */}
                        <p className="text-sm mb-3">
                            Gebaseerd op{" "}
                            <span className="underline cursor-pointer">4.803 reviews</span>
                        </p>
                        {/* Trustpilot */}
                        <div className="flex items-center justify-center gap-2 font-semibold text-xl">
                            <IoStarSharp className="text-green-600 text-xl" />
                            Trustpilot
                        </div>
                    </div>


                    {/* ⭐ Slider  */}
                    {/* <div className="flex items-center gap-2 max-w-5xl  "> */}
                    <div className=' hidden min-[560px]:flex items-center gap-2 max-w-5xl ' >

                        {/* LEFT BUTTON */}
                        <button
                            onClick={prev}
                            className="border rounded-full p-1 shadow hover:bg-blue-200"
                        >
                            <MdKeyboardArrowLeft />
                        </button>

                        {/* REVIEW CARDS */}
                        <div className="flex gap-4 flex-1 overflow-hidden justify-between  w-full">

                            {[0, 1, 2, 3].map((offset) => {
                                const review = reviews[(index + offset) % reviews.length];

                                return (
                                    <div
                                        key={offset}
                                        // className="rounded-lg p-2 w-[220px] shrink-0"
                                        className={`rounded-lg p-2 w-[220px] shrink-0
                                ${offset === 1 ? "hidden min-[1040px]:block" : ""}
                                ${offset === 2 ? "hidden min-[1290px]:block" : ""}
                                ${offset === 3 ? "hidden min-[1440px]:block" : ""}
                                    `}
                                    >
                                        <div className="flex gap-1 text-green-600 mb-2 group">
                                            {[...Array(5)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className="bg-[#00B67A] group-hover:bg-[#138861] w-4 h-4 flex items-center justify-center"
                                                >
                                                    <IoStarSharp className="text-white " />
                                                </div>
                                            ))}
                                        </div>

                                        <p className="font-semibold mb-1">
                                            {review.text}
                                        </p>

                                        <p className="text-sm text-gray-600">
                                            {review.name}, {review.date}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* RIGHT BUTTON */}
                        <button
                            onClick={next}
                            className="border rounded-full p-1 shadow hover:bg-blue-200  "
                        >   <MdKeyboardArrowRight />
                        </button>
                    </div>

                </div>

            </section>

            {/* 2nd footer section  */}
            <section className=' py-[40px] px-[20px]  '>

                <h1 className='font-[Dancing_Script] text-rose-400 text-[30px] text-center p-3  '>
                    Stay tuned for our promos
                </h1>

                <div className=' m-auto max-w-xl flex items-center justify-center '>

                    <input className=' flex-1 border hover:border-[#86133a] max-w-full focus:outline-none focus:ring-0 font-[Merriweather] p-1 px-3 h-9'
                        type="text"
                        placeholder='Enter your email address'
                    />

                    <button className='shrink-0 font-[Merriweather] p-2 bg-[#86133a] text-white font-medium text-[12px] h-9'>Submit</button>
                </div>
            </section>


            {/* 3rd footer section */}
            <section className='bg-[#86133A] flex items-start justify-around min-h-[540px] font-[Merriweather] p-[50px] '>


                {/*  1st article */}
                <article className=' text-white flex flex-col gap-4 max-w-[386px] p-[10px] border '>

                    <div className='text-[25px] font-bold border ' > OUR MISSION </div>

                    <div className='text-[13px] ' >Meat-in-the-box is a webshop / online butcher shop, mainly selling fresh meat. We start from the carcass, cut it, sell the result as high-quality fresh meat and meat preparations.</div>

                    <div className='text-[13px] ' >Vlees-in-the-box wants to offer its customers a wide range of high-quality products with a focus on freshness and service, delivered at home. We sell to private individuals.</div>

                    <div className='space-y-2'>
                        <img className='h-[140px] w-[140px] ' src="https://www.vlees-in-the-box.be/image/catalog/vlees.jpg" alt="img" />

                        <p className='text-[13px] ' >Vlees-In-The-Box</p>
                    </div>
                </article>


                {/* 2nd article */}
                <article className=' text-white flex flex-col gap-3 w-[386px] p-[10px] border ' >
                    <img className='w-[386px]' src="https://www.vlees-in-the-box.be/image/cache/catalog/logo/logo%20VIB-1031x160.png.webp" alt="" />

                    <div className="text-white text-lg font-medium text-[14px] text-center p-3 flex items-center justify-center">
                        See our 4,803 reviews on

                        <span className="inline-flex items-center gap-1">
                            <IoStarSharp className="text-green-500 text-xl" />
                            Trustpilot
                        </span>

                    </div>

                    {/* 2nd */}
                    <div >
                        <p className='text-[13px] p-3 ' >Showing our latest reviews </p>

                        <ul className='text-[18px] space-y-5 border-b pb-3 font-[Arial]'>

                            {/* 1st */}
                            <li className="leading-5">
                                <div className="flex gap-2">
                                    <span className="text-green-600 text-[30px] leading-none">“</span>

                                    <div>
                                        <p className="font-bold line-clamp-1">
                                            Dit is kwaliteit van vers gelevert tot in je maag
                                        </p>

                                        <p className="text-[12px] mt-1">
                                            <span className="font-bold">Reweghs Jean Pierre,</span> 30 January
                                        </p>
                                    </div>
                                </div>
                            </li>


                            {/* 2nd */}
                            <li className="leading-5">
                                <div className="flex gap-2">
                                    <span className="text-green-600 text-[30px] leading-none">“</span>

                                    <div>
                                        <p className="font-bold line-clamp-1">
                                            We zijn altijd tevreden geweest
                                        </p>

                                        <p className="text-[12px] mt-1" >
                                            <span className='font-bold'> Peggy, </span> 30 January
                                        </p>
                                    </div>
                                </div>
                            </li>

                            {/* 3rd */}
                            <li className="leading-5">
                                <div className="flex gap-2">
                                    <span className="text-green-600 text-[30px] leading-none">“</span>

                                    <div>
                                        <p className="font-bold line-clamp-1">
                                            Kwaliteitsvlees en kwaliteitsservice.
                                        </p>

                                        <p className="text-[12px] mt-1" >
                                            <span className='font-bold'> Erwin, </span> 30 January
                                        </p>
                                    </div>
                                </div>
                            </li>

                        </ul>

                    </div>
                    <div className='text-[13px] flex justify-between' >
                        TrustScore 4.8 / 5｜4,803 reviews

                        <span className="inline-flex items-center gap-1">
                            <IoStarSharp className="text-green-500 text-xl" />
                            <span>Trustpilot</span>
                        </span>
                    </div>
                </article>

                {/* 3rd article   */}
                <article className='flex flex-col gap-5 w-[386px] p-[10px] text-white border ' >
                    <p className='text-[28px] text-white font-bold '>A QUESTION? </p>

                    <div className='text-[30px] text-white '>
                        Contact our customer <br />
                        service
                    </div>

                    <p className='text-[13px] text-white hover:font-bold '> 📩 info@vlees-in-the-box.be</p>

                    <div>
                        <p className='text-[22px] text-white font-bold '> Download Our App</p>

                        <div className='flex gap-2'>
                            <img className='rounded-sm max-w-[193px] max-h-[54px] ' src="https://www.vlees-in-the-box.be/image/catalog/qrcode/google-store-transparent.png" alt="" />

                            <img className='rounded-sm max-w-[193px] max-h-[54px] ' src="https://www.vlees-in-the-box.be/image/catalog/qrcode/app-store-transparent.png" alt="" />
                        </div>
                    </div>

                </article>
            </section>

            {/* 4th footer  */}
            <section className=' font-[Merriweather]  text-white bg-[#86133A] flex items-start justify-around min-h-[423px] p-[50px] border-t border-white ' >
                <article className='flex flex-col gap-5 w-[386px] p-[10px] '>
                    <h1 className='text-[28px] font-bold'>About Us</h1>

                    <ul className='flex flex-col gap-4 text-[13px]  '>
                        <li className='inline-flex max-w-[200px]'>
                            <MdArrowRight size={25} className='mr-3' />
                            Our mission and vision</li>
                        <li className='inline-flex max-w-[200px]'>
                            <MdArrowRight size={25} className='mr-3' />
                            contact us
                        </li>

                        <li className='inline-flex max-w-[200px]'>
                            <CiFacebook size={20} className='mr-3' />
                            Facebook
                        </li>
                        <li className='inline-flex max-w-[200px]'>
                            <FaInstagramSquare size={20} className='mr-3' />
                            Instagram
                        </li>
                        <li className='inline-flex max-w-[200px]'>
                            <FaTwitter size={20} className='mr-3' />
                            Twitter
                        </li>
                    </ul>
                </article>

                <article className='flex flex-col gap-5 w-[386px] p-[10px] '>
                    <h1 className='text-[28px] font-bold'>Customer Service</h1>

                    {/* <ul className='flex flex-col gap-4 text-[13px] border'>
                        <li className='inline-flex max-w-[200px]'>
                            <MdArrowRight size={35} className='mr-2' />
                            Why order meat from Vlees-in-The-Box.be?</li> */}

                    <ul className="flex flex-col gap-4 text-[14px]">

                        <li className="flex items-start gap-3">
                            <MdArrowRight className="mt-1 shrink-0" size={20} />
                            <span className="max-w-[200px] text-[13px]">
                                Why order meat from Vlees-in-The-Box.be?
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <MdArrowRight className="mt-1 shrink-0" size={20} />
                            <span className="max-w-[200px] text-[13px]">
                                What do I do with all those cooling elements?
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <MdArrowRight className="mt-1 shrink-0" size={20} />
                            <span className="max-w-[200px] text-[13px]">
                                What after opening my package?
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <MdArrowRight className="mt-1 shrink-0" size={20} />
                            <span className="max-w-[200px] text-[13px]">
                                How can I track the status of my order?
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <MdArrowRight className="mt-1 shrink-0" size={20} />
                            <span className="max-w-[200px] text-[13px]">
                                I am already a customer. Do I get a discount if I convince a friend to also order from Meat-in-the-box?
                            </span>
                        </li>

                    </ul>
                </article>

                <article className='flex flex-col gap-5 w-[386px] p-[10px] '>
                    <h1 className='text-[28px] font-bold'>PAYMENT OPTIONS</h1>

                    <div className='grid grid-cols-2 gap-3  w-[200px] '>
                        <img className='w-[65px] h-auto '
                            src="https://www.vlees-in-the-box.be/image/cache/catalog/payments/Old_Visa_Logo.svg_-130x84fill.png.webp" alt="visa" />

                        <img className='w-[65px] h-auto '
                            src="https://www.vlees-in-the-box.be/image/cache/catalog/payments/Maestro_logo.svg_-130x77fill.png.webp" alt="maestro" />

                        <img className='w-[65px] h-auto '
                            src="https://www.vlees-in-the-box.be/image/cache/catalog/payments/mastercard-130x90fill.png.webp" alt="mastercard" />

                        <img className='w-[65px] h-auto '
                            src="https://www.vlees-in-the-box.be/image/cache/catalog/payments/bancontact-logo_0-130x80fill.png.webp" alt="ban contact" />

                        <img className='w-[65px] h-auto '
                            src="https://www.vlees-in-the-box.be/image/cache/catalog/payments/logo%20ideal_0-130x130fill.png.webp" alt="Ideal" />
                    </div>

                </article>
            </section>

            {/* 5th footer section  */}
            <section className='bg-white h-15 flex justify-between items-center text-[12px]  font-medium font-[Merriweather] uppercase mx-20 '>
                <div className='text-[#86133A]'>
                    © Vlees-in-the-Box 2026 -
                    <span className='text-[#86133A] hover:text-[#EAA6BB]'> Disclaimer</span> -

                    <span className='text-[#86133A] hover:text-[#EAA6BB]'> GENERAL CONDITIONS</span>
                </div>
                <div className='text-[#86133A] hover:text-[#EAA6BB]'>
                    Technogiq
                </div>
            </section>

        </>
    )
}

export default Footer; 
