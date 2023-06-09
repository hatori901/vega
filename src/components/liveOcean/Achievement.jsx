import React from 'react'
import AnimateIn from '../AnimateIn'

export default function Achievement() {
    return (
        <section className='bg-white'>
            <div className='max-w-7xl mx-auto py-10'>
                <div className='border border-black' />
                <AnimateIn>
                    <h2 className='mt-5 text-[25px] text-[#605EEF]'>Live Ocean Racing</h2>
                </AnimateIn>
                <AnimateIn>
                    <h1 className='my-[96px] text-[68px] leading-[70px] text-black'>
                        Live Ocean racing is a <span className='text-[#605EEF]'>New Zealand racing</span> team competing at the highest level while championing action for the ocean.
                    </h1>
                </AnimateIn>
                <AnimateIn>
                    <p className='text-[25px] leading-[33px] mb-10'>
                        We champion action for the ocean by taking this message to the world through our sport.
                    </p>
                </AnimateIn>
                <AnimateIn>
                    <p className='text-[25px] leading-[33px]'>
                        Established by Peter Burling and Blair Tuke, Live Ocean Racing will bring together a talented and diverse team to compete at the highest level. With innovation and purpose baked into our DNA, we race on and for the ocean.
                    </p>
                </AnimateIn>
                <AnimateIn>
                    <div className='relative mt-[80px]'>
                        <img src="/assets/video.png" alt="" />
                        <button className='absolute top-[50%] left-[45%] flex justify-center items-center bg-white rounded-full py-2 px-10'>
                            Play Video
                        </button>
                    </div>
                </AnimateIn>
            </div>
        </section>
    )
}
