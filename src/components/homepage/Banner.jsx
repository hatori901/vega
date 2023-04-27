import React from 'react'
import Image from 'next/image'

export default function Banner({ data }) {

    return (
        <section className="relative bg-[#244358] lg:px-8" >
            <div className="mx-auto lg:grid lg:grid-cols-12 lg:gap-x-8 ">
                <div className="flex items-center lg:col-span-5 lg:mr-8">
                    <Image
                        className="absolute left-0 top-0 object-cover"
                        width={500}
                        height={500}
                        src={data.image}
                        alt={data.banner_text_1}
                    />
                </div>
                <div className="px-6 sm:pb-32 lg:col-span-7 lg:px-0 pt-16 xl:col-span-6">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="mt-24 leading-[68px] tracking-tight text-white sm:mt-10 sm:text-6xl">
                            {data.banner_text_1}
                        </h1>
                        <p className="mt-6 text-[25px] leading-8 text-white">
                            {data.banner_text_2}
                        </p>
                        <div className="md:mt-16 flex items-center gap-x-6">
                            <a href={data.banner_button_url}
                                className="bg-[#605EEF] text-white hover:outline hover:outline-1 hover:outline-[#605EEF] hover:bg-transparent ease-out duration-300 px-10 py-2 rounded-full"
                            >
                                {data.banner_button_text}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
