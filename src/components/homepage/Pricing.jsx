import Image from "next/image"
import AnimateIn from "../AnimateIn"

export default function Pricing({ data }) {
    return (
        <section className='bg-white py-20 px-5 md:px-0'>
            <div className='max-w-7xl mx-auto'>
                <div className='border-t border-gray-900' />
                <AnimateIn>
                    <h2 className='text-[25px] my-3 text-[#605EEF]'>
                        Pricing Plans
                    </h2>
                </AnimateIn>
                <AnimateIn>
                    <h1 className='text-2xl md:text-[68px] my-20 leading-none'>
                        From independent to enterprise, our <span className="text-[#605EEF]">plans fit nonprofits</span> of all sizes to propel your mission.
                    </h1>
                </AnimateIn>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-10 mx-5 md:mx-1">
                    {data.pricing_plans.map((plan, index) => (
                        <div key={index} className="relative my-3">
                            <AnimateIn>
                                {plan.is_featured && (
                                    <div className='flex items-center justify-between w-full absolute bg-[#605EEF] text-white text-[17px] rounded-t-[28px] px-5 py-3 -top-12'>
                                        <Image src={"/assets/icon.svg"} width={15} height={15} alt="" />
                                        <div>
                                            Most Popular
                                        </div>
                                    </div>
                                )}
                                <div className={`border border-[#605EEF] ${plan.is_featured ? "rounded-b-[28px]" : "rounded-[28px]"} p-5`}>
                                    <h2 className="text-[38px] my-5"> {plan.title}</h2>
                                    <div className='border-t border-[#605EEF] my-5' />
                                    <div className="text-[#605EEF]">
                                        <h1 className='text-[38px] font-bold'>{plan.price}</h1>
                                        <p className='text-[17px]'>per month + tax</p>
                                    </div>
                                    <div className='border-t border-[#605EEF] my-5' />
                                    <ul className="list-disc ml-5">
                                        {
                                            plan.benefits.map((data) => {
                                                return (
                                                    <li key={data._key} className="text-[17px]">{data.benefit_text}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </AnimateIn>
                        </div>
                    ))}
                </div>
            </div >
        </section >
    )
}
