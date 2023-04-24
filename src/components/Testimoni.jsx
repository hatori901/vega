import { useState } from 'react'
import Image from 'next/image'

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
        setIndex((index) => {
            let newIndex = index + 1
            return checkNumber(newIndex)
        })
    }

    const prevTesti = () => {
        setIndex((index) => {
            let newIndex = index - 1
            return checkNumber(newIndex)
        })
    }
    return (
        <section className='max-w-6xl md:max-h-[600px] mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                <div className='py-20 md:pr-8 border-r border-r-black'>
                    <div className='relative mx-5 h-full'>
                        <Image
                            src={image}
                            className='rounded-md'
                            width={600}
                            height={600}
                            alt=''
                        />
                        <div className='absolute bottom-0 left-0 w-full flex justify-between items-center'>
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
                    <p className='ease-in duration-300 sm:text-md md:text-xl lg:text-3xl'>
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
            </div>
        </section>
    )
}
