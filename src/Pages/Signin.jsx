import React from "react";
import { FiHome } from "react-icons/fi";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Signin = () => {
  const inputStyle =
    "w-full border border-[#86133a] px-3 py-[6px] focus:outline-none focus:border-red-600 hover:border-green-600 text-black";

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-[#f3f3f3]">

        <h1 className="text-[22px] leading-9 text-gray-600 flex items-center gap-2 font-[Merriweather] px-30 py-3">
          <Link to="/home">
            <FiHome className="hover:text-[#EAA6BB]" size={22} />
          </Link>
          
          <HiOutlineArrowLongRight />
          <p className="text-[24px]">Account → Login</p>
        </h1>
      </section>

      {/* Main */}
      <section className="bg-[#f3f3f3] py-6">

        <div className="max-w-[1300px] mx-auto px-3 font-[Merriweather] text-[#86133a] ">

          {/* Title */}
          <h2 className="text-[30px] mb-6">Account Login</h2>

          <div className="flex flex-col md:flex-row gap-12">

            {/* New Customer */}
            <div className="flex-1 flex flex-col justify-between ">
              <div>
                <h3 className="text-[18px] mb-2">New Customer</h3>

                <p className="text-[16px] leading-7 max-w-[560px]">
                  By creating an account you will be able to shop faster, be up
                  to date on an order's status, and keep track of the orders
                  you have previously made.
                </p>
              </div>

              <button className="mt-6 bg-[#86133a] text-white uppercase text-[13px] font-semibold py-3 hover:bg-[#f69db9] transition">
                Continue
              </button>
            </div>

            {/* Returning Customer */}
            <div className="flex-1 max-w-[600px] flex flex-col justify-between ">
              <div>
                <h3 className="text-[18px] mb-4">Returning Customer</h3>

                <div className="flex items-center gap-4 mb-2">
                  <p className="w-[180px] text-[16px]">E-Mail Address</p>
                  <input type="email" placeholder="E-Mail Address" className={inputStyle} />
                </div>

                <div className="flex items-center gap-4">
                  <p className="w-[180px] text-[16px]">Password</p>
                  <input type="password" placeholder="Password" className={inputStyle} />
                </div>

                <p className="mt-2 text-[15px] hover:underline cursor-pointer">
                  Forgotten Password
                </p>
              </div>

              <button className="mt-6 bg-[#86133a] text-white uppercase text-[13px] font-semibold py-3 hover:bg-[#f69db9] transition">
                Login
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;