import Image from "next/image"
export default function Hero({ data }) {
    return (
        <section className="relative bg-indigo-500" >
            <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
                <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="mt-24 leading-[68px] tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
                            {data.hero_text_1}
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-900">
                            {data.hero_text_2}
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <a href="#"
                                className="border border-black rounded-full px-5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {data.hero_button_text_1}
                            </a>
                            <a href="#" className="bg-white rounded-full px-4 py-1 text-sm font-semibold leading-6 text-gray-900">
                                {data.hero_button_text_2}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
                    <Image
                        className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                        src={data.heroImage}
                        alt=""
                        width={1000}
                        height={1000}
                    />
                </div>
            </div>
        </section >
    )
}