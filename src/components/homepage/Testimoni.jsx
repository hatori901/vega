import { useState } from 'react'
import Image from 'next/image'
import AnimateIn from '../AnimateIn'

export default function Testimoni({ data }) {
    const [index, setIndex] = useState(0)
    const { testimonial_author, image, testimonial_text } = data[index]

    const checkNumber = (number) => {
        if (number > data.length - 1) {
            return 0
        }
        if (number < 0) {
            return data.length - 1
        }
        return number
    }

    const nextTesti = () => {
        const testi = document.getElementById('testi')
        const img = document.getElementById('image')
        img.classList.add('opacity-0')
        testi.classList.add('opacity-0')
        setTimeout(() => {
            testi.classList.remove('opacity-0')
            img.classList.remove('opacity-0')
            setIndex((index) => {
                let newIndex = index + 1
                return checkNumber(newIndex)
            })
        }, 500)
    }

    const prevTesti = () => {
        const testi = document.getElementById('testi')
        const img = document.getElementById('image')
        img.classList.add('opacity-0')
        testi.classList.add('opacity-0')
        setTimeout(() => {
            testi.classList.remove('opacity-0')
            img.classList.remove('opacity-0')
            setIndex((index) => {
                let newIndex = index - 1
                return checkNumber(newIndex)
            })
        }, 500)

    }
    return (
        <section className='bg-[#605EEF]'>
            <div className='max-w-7xl md:max-h-[746px] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    <div className='py-20 md:pr-8 border-r border-r-black'>
                        <div className='relative h-full'>
                            <AnimateIn>
                                <Image
                                    src={image}
                                    className='duration-300 rounded-md'
                                    width={600}
                                    height={600}
                                    alt=''
                                    id='image'
                                />
                            </AnimateIn>
                            <div className='absolute -bottom-10 left-0 w-full flex justify-between items-center'>
                                <div
                                    className='cursor-pointer'
                                    onClick={prevTesti}
                                >
                                    Previous
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex mr-5'>
                                        {index + 1}/{data.length}
                                    </div>
                                    <div
                                        className='cursor-pointer'
                                        onClick={nextTesti}
                                    >
                                        Next
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-2 mb-10 md:py-20 px-8'>
                        <AnimateIn>
                            <div id='testi' className='duration-300'>
                                <p className='sm:text-md text-[33px]'>
                                    {testimonial_text}
                                </p>
                                <div className='mt-5'>
                                    <h2 className='text-2xl'>
                                        {testimonial_author}
                                    </h2>
                                    <p className='text-gray-800'>
                                        CEO, Google
                                    </p>
                                </div>
                            </div>
                        </AnimateIn>
                    </div>
                </div>
            </div>

        </section>
    )
}
