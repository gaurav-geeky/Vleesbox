import React from 'react'

const Help = () => {
    return (
        <>

            <section className='relative' >
                <img
                    src="https://www.vlees-in-the-box.be/image/cache/catalog/banner/product-4846x462.png.webp"
                    alt="meat"
                    className="w-full h-[120px] md:h-[120px] lg:h-[150px] object-cover"
                />

                <div className="absolute inset-0 bg-[#86133a]/70 flex flex-col items-center justify-center font-[Merriweather]  text-[20px]  text-white text-center px-4 text-lg md:text-xl">
                    <p>
                        Ontdek ons breed gamma kwalitatief hoogstaande producten.
                    </p>
                    <p>
                        Vers en gekoeld aan huis geleverd van woensdag tem vrijdag.
                    </p>
                </div>
            </section>

            <section className='w-full min-h-[30vh] flex items-center justify-center bg-[#ededed] '>

                <h1 className='text-gray-500'>
                    Hello thanks for coming the working is in progress for this page...
                </h1>
            </section>

        </>
    )
}

export default Help
