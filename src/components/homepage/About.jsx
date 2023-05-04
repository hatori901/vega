import React from 'react'
import Image from 'next/image'
import AnimateIn from '../AnimateIn'

export default function About({ data }) {
    return (
        <section className='bg-[#605EEF] py-10 px-5 md:px-0'>
            <div className='max-w-7xl mx-auto'>
                <div className='border-t border-black' />
                <AnimateIn>
                    <h2 className='text-[25px] my-3 text-white'>
                        We stand with you
                    </h2>
                </AnimateIn>
                <AnimateIn>
                    <h1 className='text-2xl md:text-[68px] my-10 leading-none'>
                        Powerful <span className='text-white'>technology</span> for those taking on the world{"'"}s biggest challenges.
                    </h1>
                </AnimateIn>
                <AnimateIn>
                    <h2 className='text-[25px] max-w-3xl'>
                        {data.about_text_2}
                    </h2>
                </AnimateIn>
                <div className='grid grid-cols-1 md:grid-cols-3 md:gap-[146px] my-10'>
                    {
                        data.features.map((feature, index) => {
                            return (
                                <div key={index} className='rounded-lg p-5'>
                                    <AnimateIn>
                                        <Image src={feature.feature_icon} width={20} height={20} alt='' />
                                        <p className='text-[17px] mt-5'>
                                            {feature.feature_text}
                                        </p>
                                    </AnimateIn>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
