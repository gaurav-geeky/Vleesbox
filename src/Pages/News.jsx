import React from "react";
import Homeslide from "../Components/Homeslide";
import { BsArrowRightShort } from "react-icons/bs";

const News = () => {
    return (
        <section className="w-full h-auto bg-[#f5f5f5]">
            <section className="flex gap-8 max-w-[1300px] mx-auto px-6 ">

                {/* LEFT BLOG CONTENT */}
                <div className="flex-1 font-[Merriweather] border-r border-gray-300">

                    <h1 className='text-[30px] text-[#86133a] py-2 mb-4  '> Blog </h1>

                    <div className="space-y-10 p-5">
                        {Homeslide.map((post) => (
                            <article key={post.id} className="flex gap-6 items-start">

                                {/* IMAGE (NO WRAPPER) */}
                                <img
                                    src={post.img}
                                    alt={post.title}
                                    className="w-[420px] h-[220px] object-cover  shrink-0 rounded-md"
                                />

                                {/* TEXT CONTENT */}
                                <div className="flex flex-col justify-center max-w-[620px]">

                                    <h2 className="text-[22px] text-[#86133a] leading-snug">
                                        {post.title}
                                    </h2>

                                    <p className="text-gray-600 mt-3 leading-relaxed line-clamp-2 text-[16px]">
                                        {post.description}
                                    </p>

                                    <button className="inline-flex items-center gap-1 mt-5 border px-5 py-2 hover:bg-gray-100 transition w-fit text-[13px]">
                                        Read More
                                        <BsArrowRightShort size={22} />
                                    </button>

                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDEBAR */}
                <aside className="w-[280px] shrink-0">
                    <div className="border border-gray-200 p-5 rounded-md">
                        Sidebar content
                    </div>
                </aside>

            </section>
        </section>
    );
};

export default News;