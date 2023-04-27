import React from 'react'

export default function Button({ text }) {
    return (
        <div className='bg-white hover:bg-transparent hover:outline hover:outline-1 hover:outline-black transition-transform ease-out duration-100 rounded-full px-4 py-1 text-sm font-semibold leading-6 text-black'>
            {text}
        </div>
    )
}
