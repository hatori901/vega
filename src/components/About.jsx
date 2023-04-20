import React from 'react'
import Image from 'next/image'

export default function About({ data }) {
    return (
        <section className='bg-indigo-500 max-w-7xl mx-auto py-10 px-5 md:px-0'>
            <div className='border-t border-black' />
            <h2 className='text-xl my-3 text-white'>{data.title}</h2>
            <h1 className='text-2xl md:text-6xl my-10 leading-none'>
                {data.about_text_1}
            </h1>
            <h2 className='text-lg md:text-xl max-w-3xl'>
                {data.about_text_2}
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-10'>
                {
                    data.features.map((feature, index) => {
                        return (
                            <div key={index} className='rounded-lg p-5'>
                                <Image src={feature.feature_icon} width={20} height={20} alt='' />
                                <p>
                                    {feature.feature_text}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
