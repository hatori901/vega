import React from 'react'

export default function About() {
    return (
        <section className='max-w-7xl mx-auto py-10'>
            <div className='border border-black' />
            <h2 className='mt-5 text-[25px] text-white'>About Us</h2>
            <h1 className='my-[96px] text-[68px] text-white leading-[70px]'>
                Lorem <span className='text-[#605EEF]'>ipsum</span> dolor sit amet, consectetur adipiscing elit. Etiam aliquam ex nunc.
            </h1>
            <p className='text-[25px] leading-[33px] text-white'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam ex nunc, vitae suscipit dui tempor non. Donec dapibus, mi vel dictum imperdiet, dui justo placerat ligula, ut eleifend neque dui eget turpis. Maecenas pellentesque, massa sit amet aliquam imperdiet, turpis tellus lobortis enim, sed pretium justo ipsum a leo. Nam maximus purus vitae eros fermentum placerat. Duis odio ipsum, ullamcorper ut felis in, rutrum scelerisque urna. Mauris facilisis eros eu ullamcorper convallis.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-[28px] my-[90px]'>
                <div className='border border-black rounded-[24px] py-[14px] px-[30px]'>
                    <div className='text-[#605EEF] text-[34px] leading-[44px]'>
                        $1M
                    </div>
                    <div className='text-white text-[34px] leading-[44px]'>
                        raised
                    </div>
                </div>
                <div className='border border-black rounded-[24px] py-[14px] px-[30px]'>
                    <div className='text-[#605EEF] text-[34px] leading-[44px]'>
                        100.000
                    </div>
                    <div className='text-white text-[34px] leading-[44px]'>
                        people reached
                    </div>
                </div>
                <div className='border border-black rounded-[24px] py-[14px] px-[30px]'>
                    <div className='text-[#605EEF] text-[34px] leading-[44px]'>
                        5 tons
                    </div>
                    <div className='text-white text-[34px] leading-[44px]'>
                        of waste saved
                    </div>
                </div>
                <div className='border border-black rounded-[24px] py-[14px] px-[30px]'>
                    <div className='text-[#605EEF] text-[34px] leading-[44px]'>
                        xxx
                    </div>
                    <div className='text-white text-[34px] leading-[44px]'>
                        lorem ipsum
                    </div>
                </div>
            </div>
        </section>
    )
}
