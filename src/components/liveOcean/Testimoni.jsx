import { useState } from 'react'
import Image from 'next/image'

const testimoni = [
    {
        id: 1,
        testimonial_author: 'John Doe',
        image: '/assets/testimoni.png',
        testimonial_text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum voluptatibus. Quisquam, voluptatum voluptatibus.',
    },
    {
        id: 2,
        testimonial_author: 'John Doe',
        image: '/assets/testimoni.png',
        testimonial_text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum voluptatibus. Quisquam, voluptatum voluptatibus.',
    },
]

export default function Testimoni() {
    const [index, setIndex] = useState(0)
    const { testimonial_author, image, testimonial_text } = testimoni[index]

    const checkNumber = (number) => {
        if (number > testimoni.length - 1) {
            return 0
        }
        if (number < 0) {
            return testimoni.length - 1
        }
        return number
    }

    const nextTesti = () => {
        setIndex((index) => {
            let newIndex = index + 1
            return checkNumber(newIndex)
        })
        const testi = document.getElementById('testi')
        testi.classList.add('opacity-0')
        setTimeout(() => {
            testi.classList.remove('opacity-0')
        }, 800)

    }

    const prevTesti = () => {
        setIndex((index) => {
            let newIndex = index - 1
            return checkNumber(newIndex)
        })
        testi.classList.add('opacity-0')
        setTimeout(() => {
            testi.classList.remove('opacity-0')
        }, 800)
    }
    return (
        <section className='bg-[#605EEF] '>
            <div className='max-w-7xl md:max-h-[746px] mx-auto '>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    <div className='py-[137px] md:pr-8 border-r border-r-black'>
                        <div className='relative h-full'>
                            <Image
                                src={image}
                                className='rounded-md'
                                width={600}
                                height={600}
                                alt=''
                            />
                            <div className='absolute -bottom-10 left-0 w-full flex justify-between items-center'>
                                <div
                                    className='cursor-pointer'
                                    onClick={prevTesti}
                                >
                                    Previous
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex mr-5'>
                                        {index + 1}/{testimoni.length}
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
                    <div className='col-span-2 mb-10 md:py-[137px] px-8'>
                        <p id='testi' className='duration-300 sm:text-md text-[33px]'>
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
            </div>
        </section>
    )
}
