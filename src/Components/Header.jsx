import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { HiMagnifyingGlass } from "react-icons/hi2";
import { PiShoppingCart } from "react-icons/pi";
import { Link } from 'react-router-dom';

import { HiBars3 } from "react-icons/hi2"; // hamburger

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false); // mobile menu open 
    const [searchOpen, setSearchOpen] = useState(false);   // mobile search open 

    const [open, setOpen] = useState(false);
    const [language, setLanguage] = useState({
        name: "English",
        flag: "https://flagcdn.com/w20/gb.png"
    });
    const dropdownRef = useRef(null);

    const languages = [
        { name: "Nederlands", flag: "https://flagcdn.com/w20/nl.png" },
        { name: "Français", flag: "https://flagcdn.com/w20/fr.png" },
        { name: "English", flag: "https://flagcdn.com/w20/gb.png" }
    ];

    const [catOpen, setCatOpen] = useState(false);
    const [category, setCategory] = useState("ALL");
    const catRef = useRef(null);

    const [showSticky, setShowSticky] = useState(false); // slide nav bar

    useEffect(() => {
        function handleClickOutside(e) {
            // close language dropdown
            if (dropdownRef.current &&
                !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }

            // close category dropdown
            if (catRef.current &&
                !catRef.current.contains(e.target)) {
                setCatOpen(false);
            }
        }

        const handleScroll = () => {
            if (window.scrollY > 250) { setShowSticky(true); }
            else { setShowSticky(false); }
        };

        window.addEventListener("scroll", handleScroll);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    const categories = [
        "ALL",
        "Holidays",
        "Fresh meat",
        "BBQ",
        "Fondue and Gourmet",
        "Cheese",
        "Vegan / veggie",
        "Caterer",
        "Value package",
        "Advantage package",
        "Others",
        "Deli",
        "Vegetarian",
        "Pasta",
        "wok",

    ];


    return (
        <>
            <article className=' w-[85%] m-auto font-[Merriweather]  '>
                <section className=' mb-4 '>

                    <div
                        className="flex justify-between lg:justify-end pr-10 py-2  "
                    >

                        {/* LEFT SIDE (hidden on large desktop) */}
                        <div className="flex gap-4 lg:hidden">
                            <Link to="/signin" className="text-[12px] text-[#86133a] font-semibold">
                                SIGN IN
                            </Link>

                            <Link to="/register" className="text-[12px] text-rose-500 font-semibold">
                                REGISTER
                            </Link>
                        </div>

                        {/* right side on laptop LANGUAGE DROPDOWN  1st */}
                        <div
                            className="relative inline-block"
                            ref={dropdownRef}
                            onMouseEnter={() => setOpen(true)}
                            onMouseLeave={() => setOpen(false)}
                        >
                            <button
                                className="flex items-center gap-2 text-sm font-semibold hover:text-[#86133a]"
                            >
                                <img src={language.flag} alt="" />
                                {language.name}
                            </button>

                            {open && (
                                <>
                                    {/* TRIANGLE POINTER */}
                                    <div className="absolute right-5 top-full -mt-1 w-3 h-3 bg-[#86133a] rotate-45 z-50"></div>

                                    {/* DROPDOWN */}
                                    <div className="absolute right-0 top-full w-44 bg-[#86133a] text-white rounded shadow-lg overflow-hidden z-60">
                                        {languages.map((lang) => (
                                            <div
                                                key={lang.name}
                                                onClick={() => {
                                                    setLanguage(lang);
                                                    setOpen(false);
                                                }}
                                                className="flex items-center gap-3 px-4 py-3 hover:bg-[#d89aaa] cursor-pointer transition"
                                            >
                                                <img src={lang.flag} alt="" />
                                                {lang.name}
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}

                        </div>
                    </div>
                    {/* LANGUAGE DROPDOWN END                     
                    category dropdown start 2nd */}

                    <div className=' flex justify-between lg:justify-around items-center'>

                        <div className='  flex items-start'>

                            {/* hamburger (tablet/mobile) */}
                            <button
                                className="lg:hidden"
                                onClick={() => setMenuOpen(true)}
                            >
                                <HiBars3 size={28} />
                            </button>

                            {/*  1st image logo */}
                            <div className='h-[30px] lg:h-[77px]  w-auto'>
                                <img className=' h-full w-full' src="https://www.vlees-in-the-box.be/image/cache/catalog/logo/logo%20VIB-1031x160.png.webp" alt="logo" />
                            </div>

                            {/* 2nd search bar  */}
                            <div className=' w-[460px] hidden lg:flex items-start justify-start  '>

                                <div className="relative inline-block "
                                    ref={catRef}
                                    onMouseEnter={() => setCatOpen(true)}
                                    onMouseLeave={() => setCatOpen(false)}
                                >
                                    {/* BUTTON */}
                                    <button
                                        className="
                                        max-w-[160px] min-w-[70px]  h-[36px] px-3
                                        bg-[#86133a] text-white
                                        text-sm flex items-center 
                                        justify-center text-center
                                        truncate whitespace-nowrap
                                        "

                                    >
                                        {category}
                                    </button>

                                    {catOpen && (
                                        <>
                                            {/* triangle */}
                                            <div className="absolute left-4 top-full w-3 h-3 bg-[#86133a] rotate-45 z-50"></div>

                                            {/* language dropdown */}
                                            <div className="absolute  top-full left-0 w-48 bg-[#86133a] text-white shadow-lg z-60 ">

                                                {/* ✅ scrollable list */}
                                                <ul className="max-h-[350px] overflow-y-auto text-[12px]  ">
                                                    {categories.map((item) => (
                                                        <li
                                                            key={item}
                                                            onClick={() => {
                                                                setCategory(item);
                                                            }}
                                                            className="px-4 py-3 hover:bg-[#d89aaa] cursor-pointer "
                                                        >
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>

                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* 3rd category dropdown end */}
                                <input
                                    type="text"
                                    placeholder="seek..."
                                    className="h-[35px] px-3 border-2 bg-gray-100 border-[#86133a] outline-none focus:outline-none focus:ring-0"
                                />
                                <button className='w-[45px] h-[35px] bg-[#86133a] text-white flex items-center justify-center '>
                                    <HiMagnifyingGlass
                                        size={22}
                                    />
                                </button>
                            </div>
                        </div>


                        {/* 3rd login register and cart */}
                        <div className='flex items-center gap-6   px-1'>
                            <div className=''>
                                <Link to="/cart">
                                    <PiShoppingCart className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:h-13 lg:w-13' />
                                </Link>
                            </div>

                            <div className=' hidden lg:flex gap-5'>
                                <Link
                                    to="/signin"
                                    className='text-[#86133a] text-[12px] lg:text-[17px] font-semibold hover:text-[#f9b4ca] px-2 whitespace-nowrap' >
                                    SIGN IN
                                </Link>

                                <Link
                                    to="/register"
                                    className='text-rose-500 text-[12px] lg:text-[17px] font-semibold hover:text-[#f9b4ca] whitespace-nowrap '>
                                    REGISTER
                                </Link>
                            </div>

                            {/* mobile search open */}
                            <div className="lg:hidden">
                                <HiMagnifyingGlass
                                    size={22}
                                    className="cursor-pointer"
                                    onClick={() => {
                                        setMenuOpen(false);
                                        setSearchOpen(prev => !prev);
                                    }}
                                />
                            </div>

                        </div>
                    </div>

                </section>

            </article>

            {/* Navigation options 3rd */}

            <nav className="hidden lg:flex py-1 bg-white font-[Merriweather]" >

                <div className='flex items-center justify-between text-[20px] w-5xl m-auto mt-1 mb-1 text-gray-800 '>

                    <Link className=' border-b-4 border-[#86133a]' to="/home">Home</Link>
                    <Link className='headnav-btn text-rose-500' to="/shop" >Shop</Link>
                    <Link className='headnav-btn' to="/how-to-order">How to order?</Link>
                    <Link className='headnav-btn' to="/our-quality-meat">Our Quality Meat </Link>
                    <Link className='headnav-btn' to="/mission-and-vision">Mission & Vision</Link>
                    <Link className='headnav-btn' to="/news">News</Link>
                    <Link className='headnav-btn' to="/help">Help</Link>
                    <Link className='headnav-btn' to="/contact">Contact</Link>

                </div>
            </nav>

            {/* SLIDE DOWN NAVBAR */}
            <nav
                className={` hidden lg:flex fixed top-0 left-0 w-full z-50 bg-white shadow-md font-[Merriweather]   
                transition-transform duration-200 ease-out
                ${showSticky ? "translate-y-0" : "-translate-y-full"}
                `}
            >
                <div className='flex items-center justify-between text-[20px]  w-5xl m-auto mt-1 mb-1 text-gray-800 '>

                    <Link className=' border-b-4 border-[#86133a]' to="/home">Home</Link>
                    <Link className='headnav-btn text-rose-500' to="/shop" >Shop</Link>
                    <Link className='headnav-btn' to="/how-to-order">How to order?</Link>
                    <Link className='headnav-btn' to="/our-quality-meat">Our Quality Meat </Link>
                    <Link className='headnav-btn' to="/mission-and-vision">Mission & Vision</Link>
                    <Link className='headnav-btn' to="/news">News</Link>
                    <Link className='headnav-btn' to="/help">Help</Link>
                    <Link className='headnav-btn' to="/contact">Contact</Link>

                </div>
            </nav>


            {/* ✅ MOBILE MENU HERE */}

            {/* OVERLAY */}
            <div
                onClick={() => setMenuOpen(false)}
                className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
                ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
            />

            {/* SLIDE MENU */}
            <div
                className={`fixed top-0 left-0 h-full w-[220px] bg-white z-50 p-6 shadow-lg transform transition-transform duration-300 ease-out
                ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex justify-between items-center mb-6">
                    <span className="text-[#86133a] font-bold text-lg">MENU</span>
                    <button onClick={() => setMenuOpen(false)}> ✕ </button>
                </div>

                <div className="flex flex-col gap-6 text-lg">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/how-to-order">How To Order?</Link>
                    <Link to="/our-quality-meat">Our Quality Meat</Link>
                    <Link to="/mission-and-vision">Mission & Vision</Link>
                    <Link to="/news">News</Link>
                    <Link to="/help">Help</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>


            {/* MOBILE SEARCH PANEL */}


        </>
    )
}

export default Header;


///  how to make searhc bar appear below header on click of search icon  search in chat gpt. 