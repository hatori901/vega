import React from 'react'

export default function Banner() {
    return (
        <section className='bg-sky-900'>
            <div className='flex items-center '>
                <img
                    className="w-[600px]"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                />
                <div>
                    <h1 className='text-6xl text-white'>
                        You make a difference - Vega makes it easy.
                    </h1>
                    <p className='text-lg my-10 text-white'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae suscipit praesentium error, dolores ex voluptatem eum illo deleniti distinctio pariatur placeat itaque autem soluta laudantium? Laborum aspernatur aut doloremque iure.
                    </p>
                    <button className='bg-indigo-500 text-white px-10 py-2 rounded-full'>
                        Explore Features
                    </button>

                </div>
            </div>
        </section>
    )
}
