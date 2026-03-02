import React from "react";
import { FiHome } from "react-icons/fi";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";


const Cart = () => {

    const inputStyle =
        "w-full max-w-[500px] border border-[#86133a] px-3 py-[7px] focus:outline-none focus:border-red-600 hover:border-green-600 text-black";

    return (
        <>
            {/* Breadcrumb */}
            <section className="bg-[#f3f3f3]">
                <h1 className="text-[22px] leading-9 text-gray-600 flex items-center gap-2 font-[Merriweather] px-30 py-3">
                    <Link to="/home">
                        <FiHome className="hover:text-[#EAA6BB]" size={22} />
                    </Link>

                    <HiOutlineArrowLongRight />
                    <p className="text-[24px]"> Shopping Box </p>
                </h1>
            </section>

            {/* Main */}
            <section className="bg-[#f3f3f3] py-6">
                <div className="max-w-[1300px] mx-auto px-3 font-[Merriweather] text-[#86133a]">

                    {/* Title */}
                    <h2 className="text-[30px] mb-3"> Shopping Box</h2>

                    <p className="text-[16px]">
                        Your shopping box is empty!
                    </p>

                    {/* BUTTON */}
                    <button className="mt-6 w-full bg-[#86133a] text-white uppercase text-[13px] font-semibold py-3 hover:bg-[#f69db9] transition">
                        Continue
                    </button>

                </div>
            </section>
        </>
    );
};

export default Cart;
