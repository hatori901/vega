import Image from 'next/image'

export default function Resources({ data }) {
    return (
        <section className='bg-white'>
            <div className='max-w-7xl mx-auto px-5 md:px-0'>
                <div className='border-t border-black' />
                <h2 className='text-[25px] my-3 text-[#605EEF]'>{data.title}</h2>
                <h1 className='text-[68px] md:text-6xl my-10 leading-none'>
                    {data.text}
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-5 py-10'>
                    {
                        data.features.map((feature, index) => {
                            return (
                                <div key={index} className='relative py-10 px-3'>
                                    <div className='h-[100px] flex items-center'>
                                        <Image src={feature.feature_icon} width={120} height={100} alt='' />
                                    </div>
                                    <p className='text-[17px] my-10'>
                                        {feature.feature_text}
                                    </p>
                                    <button className='absolute bottom-0'>
                                        <div className='text-[18px] border border-black rounded-full px-10 py-1'>View Edition</div>
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
