import React from "react";
import { FiHome } from "react-icons/fi";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";


const Register = () => {

    const inputStyle =
        "w-full max-w-[500px] border border-[#86133a] px-3 py-[7px] focus:outline-none focus:border-red-600 hover:border-green-600 text-black";

    const placeholdercss = "placeholder:text-[#a2b0d5] placeholder:font-[Dancing_Script] placeholder:text-[20px]"

    return (
        <>
            {/* Breadcrumb */}
            <section className="bg-[#f3f3f3]">
                <h1 className="text-[22px] leading-9 text-gray-600  flex items-center gap-2 font-[Merriweather] px-30 py-3">
                    <Link to="/home">
                        <FiHome className="hover:text-[#EAA6BB]" size={22} />
                    </Link>

                    <HiOutlineArrowLongRight />
                    <p className="text-[24px]">Account → Register</p>
                </h1>
            </section>

            {/* Main */}
            <section className="bg-[#f3f3f3] py-6">
                <div className="max-w-[1300px] mx-auto px-3 font-[Merriweather] text-[#86133a]">

                    {/* Title */}
                    <h2 className="text-[30px] mb-3">Register Account</h2>

                    <p className="text-[16px] mb-8">
                        If you already have an account with us, please login at the login page.
                    </p>

                    {/* PERSONAL DETAILS */}
                    <h3 className="text-[18px] mb-4">Your Personal Details</h3>

                    <div className="space-y-4">

                        <div>
                            <label className="block text-[16px] mb-1">First Name *</label>
                            <input type="text" placeholder="First Name" className={` ${inputStyle} ${placeholdercss} `} />
                        </div>

                        <div>
                            <label className="block text-[16px] mb-1">Last Name *</label>
                            <input type="text"
                                placeholder="Last Name" className={` ${inputStyle} ${placeholdercss} `} />
                        </div>

                        <div>
                            <label className="block text-[16px] mb-1">E-Mail *</label>
                            <input type="email" placeholder="E-Mail" className={` ${inputStyle} ${placeholdercss} `} />
                        </div>

                        <div>
                            <label className="block text-[16px] mb-1">Telephone *</label>
                            <input type="text" placeholder="Telephone" className={` ${inputStyle} ${placeholdercss} `} />
                        </div>

                    </div>

                    {/* PASSWORD */}
                    <h3 className="text-[18px] mt-8 mb-4">Your Password</h3>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-[16px] mb-1">Password *</label>
                            <input type="password" placeholder="Password" className={` ${inputStyle} ${placeholdercss} `} />
                        </div>

                        <div>
                            <label className="block text-[16px] mb-1">Password Confirm *</label>
                            <input type="password" placeholder="Password Confirm" className={` ${inputStyle} ${placeholdercss} `} />
                        </div>
                    </div>

                    {/* NEWSLETTER */}
                    <h3 className="text-[18px] mt-8 mb-3">Newsletter</h3>

                    <div className="flex items-center gap-6 text-[16px]">
                        <span>Subscribe</span>

                        <label className="flex items-center gap-2">
                            <input type="radio" name="subscribe" />
                            Yes
                        </label>

                        <label className="flex items-center gap-2">
                            <input type="radio" name="subscribe" defaultChecked />
                            No
                        </label>
                    </div>

                    {/* PRIVACY */}
                    <div className="mt-6 flex items-center gap-2 text-[15px]">
                        <input type="checkbox" />
                        <p>I have read and agree to the Privacy Policy</p>
                    </div>

                    {/* BUTTON */}
                    <button className="mt-6 w-full bg-[#86133a] text-white uppercase text-[13px] font-semibold py-3 hover:bg-[#00B67A] hover:text-black transition">
                        Continue
                    </button>

                </div>
            </section>
        </>
    );
};

export default Register;
