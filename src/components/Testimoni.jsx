import { useState } from 'react'
import Image from 'next/image'
const testi = [
    {
        id: 1,
        name: 'Erwin Alam',
        image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt aliquam cumque sint sapiente pariatur obcaecati cum sunt, neque commodi magnam dolore iure omnis, vel asperiores ratione, veritatis autem quaerat quasi.'
    },
    {
        id: 2,
        name: 'Ariana Grande',
        image: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt aliquam cumque sint sapiente pariatur obcaecati cum sunt, neque commodi magnam dolore iure omnis, vel asperiores ratione, veritatis autem quaerat quasi.'
    },
    {
        id: 3,
        name: 'Kevin Sanjaya',
        image: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt aliquam cumque sint sapiente pariatur obcaecati cum sunt, neque commodi magnam dolore iure omnis, vel asperiores ratione, veritatis autem quaerat quasi.'
    },
]

export default function Testimoni({ data }) {
    const [index, setIndex] = useState(0)
    const { name, image, text } = testi[index]

    const checkNumber = (number) => {
        if (number > testi.length - 1) {
            return 0
        }
        if (number < 0) {
            return testi.length - 1
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
        <section className='max-w-6xl mx-auto'>
            <div className='grid grid-cols-3'>
                <div className='py-20 pr-8 border-r border-r-black'>
                    <div>
                        <img
                            src={image}
                            className='rounded-md'
                        />
                        <div className='flex justify-between items-center mt-10'>
                            <div
                                className='cursor-pointer'
                                onClick={prevTesti}
                            >
                                Previous
                            </div>
                            <div className='flex'>
                                {index + 1}/{testi.length}
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
                <div className='col-span-2 py-20 px-8'>
                    <p className='text-3xl'>
                        {text}
                    </p>
                    <div className='mt-5'>
                        <h2 className='text-2xl'>
                            {name}
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
