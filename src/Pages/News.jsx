
import React from 'react'
import Homeslide from '../Components/Homeslide';
import { BsArrowRightShort } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";


const News = () => {

    const tag =
        "bg-[#2f3b44] text-white text-[13px] font-medium p-1  rounded-md leading-tight font-[Merriweather] hover:bg-[#86133a]  "; 

    return (
        <>
            <section className='bg-[#f3f3f3] '>
                {/* 2nd section */}
                <section className="flex items-start  gap-5 max-w-[1350px] mx-auto  px-6 bg-[#f3f3f3] ">


                    {/* left sidebar */}
                    <section className='flex-1  px-2 font-[Merriweather] border-r border-gray-300 p-4  '>

                        <h1 className='text-[30px] text-[#86133a] leading-9 my-2   '> Blog </h1>

                        <article className='h-auto p-5 '>

                            {Homeslide.map((post, index) => (

                                <div key={index} className='flex my-8 group'>

                                    <div className="w-[400px] h-[250px] overflow-hidden  ">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-112 transition duration-300 "
                                        />
                                    </div>


                                    <div className='w-[500px] h-auto group-hover:bg-white  mx-auto flex-1 p-3'>
                                        <div>
                                            <h1 className='text-[22px] font-[Merriweather] text-[#86133a] mb-3 leading-7 hover:text-[#EAA6BB] '> {post.title} </h1>
                                        </div>

                                        <div>
                                            <h1 className='text-[16px] font-[Merriweather] text-gray-600 line-clamp-3 my-2'> {post.description} </h1>
                                        </div>

                                        <div className='inline-flex items-center  px-3 border py-2 
                                         hover:border-[#e186a1]'
                                        >
                                            <button>Read More</button>
                                            < BsArrowRightShort size={20} />
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </article>
                    </section>


                    {/* right sidebar */}
                    <section className="  w-[230px] shrink-0 py-2 h-screen">

                        {/* blog search */}
                        <div
                            className=" flex items-center border border-[#86133A]  focus-within:border-red-700 transition duration-200"
                        >
                            <input
                                type="text"
                                placeholder="Blog Search"
                                className="  min-w-[180px] px-3 py-2 text-[15px] font-[Merriweather] text-[#3d4b53] placeholder:text-gray-400 focus:outline-none"
                            />
                            <button
                                className="m-1 p-2 rounded-sm  bg-[#3d4b53] text-white  transition duration-200 hover:bg-[#EAA6BB]">
                                <FiSearch />
                            </button>
                        </div>

                        {/* filters */}
                        <article className='my-5  '>

                            <h1 className='text-[22px] font-[Merriweather] font-bold text-[#86133A] my-3   '>Filter by Tags</h1>

                            <div className="flex flex-wrap gap-2">

                                <span className={tag}>Are you organizing a summer party? Order your meat easily online!</span>

                                <span className={tag}>A fresh salad: extra tasty with some meat!</span>

                                <span className={tag}>grill pan</span>
                                <span className={tag}>roasting meat</span>
                                <span className={tag}>stone grill</span>
                                <span className={tag}>how to grill meat</span>

                                <span className={tag}>Creepy stuffed Halloween peppers</span>

                                <span className={tag}>meat kids</span>
                                <span className={tag}>cooking for kids</span>
                                <span className={tag}>recipes for kids</span>

                            </div>

                        </article>

                    </section>


                </section >
            </section>
        </>
    )
}

export default News;

