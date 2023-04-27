import React from 'react'

export default function Video() {
    return (
        <section className='relative w-full h-[500px]'>
            <div className='flex flex-col '>
                <div className='bg-[#244358] h-[250px]'>

                </div>
                <div className='bg-white h-[250px]'>

                </div>
            </div>
            <iframe
                className='absolute w-1/2 h-1/2  top-[25%] left-[25%] rounded-lg'
                src='https://www.youtube.com/embed/6ZfuNTqbHE8'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
            ></iframe>
        </section>
    )
}
