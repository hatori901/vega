import React from 'react'
import Image from 'next/image'

export default function Banner({ data }) {

    return (
        <section className="relative bg-sky-900" >
            <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
                <div className="relative flex items-center lg:col-span-5 lg:mr-8">
                    <Image
                        className="w-[700px]"
                        width={700}
                        height={700}
                        src={data.image}
                        alt={data.banner_text_1}
                    />
                </div>
                <div className="px-6 sm:pb-32 lg:col-span-7 lg:px-0 pt-10 xl:col-span-6">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="mt-24 leading-[68px] tracking-tight text-white sm:mt-10 sm:text-6xl">
                            {data.banner_text_1}
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-white">
                            {data.banner_text_2}
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <a href={data.banner_button_url}
                                className="bg-indigo-500 text-white px-10 py-2 rounded-full"
                            >
                                {data.banner_button_text}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section >
        // <section className='bg-sky-900'>
        //     <div className='flex items-center '>
        //         <img
        //             className="w-[600px]"
        //             src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
        //             alt="Your Company"
        //         />
        //         <div>
        //             <h1 className='text-6xl text-white'>
        //                 You make a difference - Vega makes it easy.
        //             </h1>
        //             <p className='text-lg my-10 text-white'>
        //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae suscipit praesentium error, dolores ex voluptatem eum illo deleniti distinctio pariatur placeat itaque autem soluta laudantium? Laborum aspernatur aut doloremque iure.
        //             </p>
        //             <button className='bg-indigo-500 text-white px-10 py-2 rounded-full'>
        //                 Explore Features
        //             </button>

        //         </div>
        //     </div>
        // </section>
    )
}
