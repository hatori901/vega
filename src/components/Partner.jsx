import React from 'react'
import Image from 'next/image'

export default function Partner({ data }) {
    return (
        <section className='bg-white h-[300px]'>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-8 text-white">
                    The world’s most innovative companies use our app
                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    {
                        data.map((partner, index) => {
                            return (
                                <div key={index} className="col-span-1 flex justify-center lg:col-span-1">
                                    <Image
                                        className="w-full h-full object-contain"
                                        src={partner.image}
                                        alt={partner.partner_name}
                                        width={158}
                                        height={48}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
