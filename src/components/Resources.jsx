import Image from 'next/image'

export default function Resources({ data }) {
    return (
        <section className='bg-white'>
            <div className='max-w-7xl mx-auto'>
                <div className='border-t border-black' />
                <h2 className='text-xl my-3 text-indigo-500'>{data.title}</h2>
                <h1 className='text-6xl my-10 leading-none'>
                    {data.text}
                </h1>
                <div className='grid grid-cols-4 gap-5 py-10'>
                    {
                        data.features.map((feature, index) => {
                            return (
                                <div key={index} className='relative py-10 px-3'>
                                    <div className='h-[100px] flex items-center'>
                                        <Image src={feature.feature_icon} width={100} height={100} alt='' />
                                    </div>
                                    <p className='my-10'>
                                        {feature.feature_text}
                                    </p>
                                    <button className='absolute bottom-0'>
                                        <div className='border border-black rounded-full px-5 py-1'>View Edition</div>
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
