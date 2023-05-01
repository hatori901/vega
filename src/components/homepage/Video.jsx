import React from 'react'
import AnimateIn from '../AnimateIn'

export default function Video() {
    return (
        <section className='relative w-full h-[500px]'>
            <div className='flex flex-col relative'>
                <div className='bg-[#605EEF] h-[250px] text-center'>
                    <AnimateIn>
                        <div className='absolute w-full mx-auto'>
                            <img src="/assets/video.png" alt="" className='mx-auto' />
                            <button className='index-2 absolute top-[50%] left-[45%] flex justify-center items-center bg-white rounded-full py-2 px-10'>
                                Play Video
                            </button>
                        </div>
                    </AnimateIn>
                </div>
                <div className='bg-white h-[250px]'>

                </div>
            </div>

        </section>
    )
}
