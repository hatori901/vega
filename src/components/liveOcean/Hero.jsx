import React from 'react'

export default function Hero() {
    return (
        <section className='min-h-screen overflow-hidden pt-20'>
            <div className='mx-auto flex items-center justify-between'>
                <div className='mx-20'>
                    <h1 className='text-[68px] leading-10 text-white'>
                        Live Ocean
                    </h1>
                    <p className='text-[25px] mt-10 mb-16 text-white'>
                        Driving action for the ocean
                    </p>
                    <a href='#' className='bg-white rounded-full hover:bg-transparent hover:outline hover:outline-1 hover:outline-white hover:text-white px-[33px] py-[12px] mt-10'>
                        Visit the website
                    </a>
                </div>
                <div className='relative aspect-auto min-h-screen'>
                    <img src="/assets/graphic.svg" alt="" className='absolute -bottom-[130px] -right-2' />
                    <img src="/assets/client-logo.png" alt="" className='absolute bottom-5 left-5 w-[200px] aspect-auto' />
                    <img src="/assets/heroImage.png" alt="" className='min-h-screen w-full h-full' />
                </div>
            </div>
        </section>
    )
}
