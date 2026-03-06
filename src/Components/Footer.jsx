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

            <section className="bg-[#86133A] font-[Merriweather] text-white px-[40px] py-[50px]">

                <div className="max-w-[1200px] mx-auto grid gap-10
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-3">

                    {/* 1st article */}
                    <article className="flex flex-col gap-4">

                        <h2 className="text-[24px] sm:text-[26px] lg:text-[28px] font-bold">OUR MISSION</h2>

                        <p className="text-[13px]">
                            Meat-in-the-box is a webshop / online butcher shop, mainly selling fresh meat.
                            We start from the carcass, cut it, sell the result as high-quality fresh meat
                            and meat preparations.
                        </p>

                        <p className="text-[13px]">
                            Vlees-in-the-box wants to offer its customers a wide range of high-quality
                            products with a focus on freshness and service, delivered at home.
                        </p>

                        <div className="space-y-2">
                            <img
                                className="w-[140px] h-auto"
                                src="https://www.vlees-in-the-box.be/image/catalog/vlees.jpg"
                                alt="img"
                            />

                            <p className="text-[13px]">Vlees-In-The-Box</p>
                        </div>

                    </article>

                    {/* 2nd article */}
                    <article className="flex flex-col gap-5">

                        <img
                            className="w-full max-w-[386px] h-auto"
                            src="https://www.vlees-in-the-box.be/image/cache/catalog/logo/logo%20VIB-1031x160.png.webp"
                            alt="logo"
                        />

                        <div className="text-[14px] flex items-center gap-2">
                            See our 4,803 reviews on
                            <span className="flex items-center gap-1">
                                <IoStarSharp className="text-green-500 text-lg" />
                                Trustpilot
                            </span>
                        </div>

                        <p className="text-[13px]">Showing our latest reviews</p>

                        <ul className="space-y-5 border-b pb-4">

                            <li className="flex gap-2">
                                <span className="text-green-600 text-[30px]">“</span>
                                <div>
                                    <p className="font-bold text-[13px]">
                                        Dit is kwaliteit van vers gelevert tot in je maag
                                    </p>
                                    <p className="text-[12px]">
                                        <span className="font-bold">Reweghs Jean Pierre</span>, 30 January
                                    </p>
                                </div>
                            </li>

                            <li className="flex gap-2">
                                <span className="text-green-600 text-[30px]">“</span>
                                <div>
                                    <p className="font-bold text-[13px]">
                                        We zijn altijd tevreden geweest
                                    </p>
                                    <p className="text-[12px]">
                                        <span className="font-bold">Peggy</span>, 30 January
                                    </p>
                                </div>
                            </li>

                            <li className="flex gap-2">
                                <span className="text-green-600 text-[30px]">“</span>
                                <div>
                                    <p className="font-bold text-[13px]">
                                        Kwaliteitsvlees en kwaliteitsservice
                                    </p>
                                    <p className="text-[12px]">
                                        <span className="font-bold">Erwin</span>, 30 January
                                    </p>
                                </div>
                            </li>

                        </ul>

                        <div className="text-[13px] flex items-center justify-between">
                            TrustScore 4.8 / 5
                            <span className="flex items-center gap-1">
                                <IoStarSharp className="text-green-500 text-lg" />
                                Trustpilot
                            </span>
                        </div>

                    </article>

                    {/* 3rd article */}
                    <article className="flex flex-col gap-5">

                        <h2 className="text-[24px] sm:text-[26px] lg:text-[28px] font-bold">A QUESTION?</h2>

                        <p className="text-[26px] leading-snug">
                            Contact our customer <br /> service
                        </p>

                        <p className="text-[13px] hover:font-bold">
                            📩 info@vlees-in-the-box.be
                        </p>

                        <div>

                            <p className="text-[22px] font-bold mb-2">
                                Download Our App
                            </p>

                            <div className="flex flex-wrap gap-3">

                                <img
                                    className="max-w-[180px] h-auto"
                                    src="https://www.vlees-in-the-box.be/image/catalog/qrcode/google-store-transparent.png"
                                    alt="google play"
                                />

                                <img
                                    className="max-w-[180px] h-auto"
                                    src="https://www.vlees-in-the-box.be/image/catalog/qrcode/app-store-transparent.png"
                                    alt="app store"
                                />

                            </div>

                        </div>

                    </article>

                </div>

            </section>


            {/* 4th footer  */}
            <section className=' font-[Merriweather]  text-white bg-[#86133A] py-[50px] px-[40px] border-t border-white ' >

                <div className='max-w-[1200px] mx-auto grid gap-10
                grid-cols-1 
                sm:grid-cols-2
                lg:grid-cols-3' >

                    {/* 1st article */}
                    <article className='flex flex-col gap-4 '>
                        <h1 className='text-[24px] sm:text-[26px] lg:text-[28px] font-bold'>About Us</h1>

                        <ul className='flex flex-col gap-4 text-[13px]  '>
                            <li className="flex items-start gap-3 max-w-[200px]">
                                <MdArrowRight size={20} className="mt-1 shrink-0" />
                                Our mission and vision</li>
                            <li className="flex items-start gap-3 max-w-[200px]">
                                <MdArrowRight size={20} className="mt-1 shrink-0" />
                                contact us
                            </li>

                            <li className="flex items-start gap-3 max-w-[200px]">
                                <CiFacebook size={20} className="mt-1 shrink-0" />
                                Facebook
                            </li>
                            <li className="flex items-start gap-3 max-w-[200px]">
                                <FaInstagramSquare size={20} className="mt-1 shrink-0" />
                                Instagram
                            </li>
                            <li className="flex items-start gap-3 max-w-[200px]">
                                <FaTwitter size={20} className="mt-1 shrink-0" />
                                Twitter
                            </li>
                        </ul>
                    </article>

                    {/* 2nd article */}
                    <article className='flex flex-col gap-5 '>
                        <h1 className=' text-[24px] sm:text-[26px] lg:text-[28px] font-bold'>Customer Service</h1>

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

                    <article className='flex flex-col gap-5  '>

                        <h1 className='text-[24px] sm:text-[26px] lg:text-[28px] font-bold'>PAYMENT OPTIONS</h1>

                        <div className='grid grid-cols-2 gap-3 max-w-[200px] '>
                            <img className='max-w-[65px] h-auto '
                                src="https://www.vlees-in-the-box.be/image/cache/catalog/payments/Old_Visa_Logo.svg_-130x84fill.png.webp" alt="visa" />

                            <img className='max-w-[65px] h-auto '
                                src="https://www.vlees-in-the-box.be/image/cache/catalog/payments/Maestro_logo.svg_-130x77fill.png.webp" alt="maestro" />

                            <img className='max-w-[65px] h-auto '
                                src="https://www.vlees-in-the-box.be/image/cache/catalog/payments/mastercard-130x90fill.png.webp" alt="mastercard" />

                            <img className='max-w-[65px] h-auto '
                                src="https://www.vlees-in-the-box.be/image/cache/catalog/payments/bancontact-logo_0-130x80fill.png.webp" alt="ban contact" />

                            <img className='max-w-[65px] h-auto '
                                src="https://www.vlees-in-the-box.be/image/cache/catalog/payments/logo%20ideal_0-130x130fill.png.webp" alt="Ideal" />
                        </div>

                    </article>
                </div>
            </section>

            {/* <section className='bg-white h-15 flex justify-between items-center text-[12px]  font-medium font-[Merriweather] uppercase mx-20 '> */}

            {/* 5th footer section */}
            <section className="
                bg-white flex flex-col sm:flex-row
                sm:justify-between items-center text-[12px] 
                font-medium font-[Merriweather] uppercase
                px-6 sm:px-20 py-4 gap-2
                ">

                <div className="text-[#86133A] text-center sm:text-left">
                    © Vlees-in-the-Box 2026 -
                    <span className="hover:text-[#EAA6BB] cursor-pointer"> Disclaimer</span> -
                    <span className="hover:text-[#EAA6BB] cursor-pointer"> GENERAL CONDITIONS</span>
                </div>

                <div className="text-[#86133A] hover:text-[#EAA6BB] cursor-pointer">
                    Technogiq
                </div>

            </section>

        </>
    )
}

export default Footer; 