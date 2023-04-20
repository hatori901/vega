import React from 'react'
import Image from 'next/image'

export default function Partner() {
    return (
        <section className='bg-white h-[200px]'>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-8 text-white">
                    The world’s most innovative companies use our app
                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <Image
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
                        alt="Transistor"
                        width={158}
                        height={48}
                    />
                    <Image
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
                        alt="Reform"
                        width={158}
                        height={48}
                    />
                    <Image
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
                        alt="Tuple"
                        width={158}
                        height={48}
                    />
                    <Image
                        className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
                        alt="SavvyCal"
                        width={158}
                        height={48}
                    />
                    <Image
                        className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
                        alt="Statamic"
                        width={158}
                        height={48}
                    />

                </div>
            </div>
        </section>
    )
}
