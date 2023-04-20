export default function Pricing({ data }) {
    return (
        <section className='bg-white'>
            <div className='max-w-7xl mx-auto py-10 px-5 md:px-0'>
                <div className='border-t border-gray-900' />
                <h2 className='text-xl my-3 text-indigo-500'>{data.title}</h2>
                <h1 className='text-2xl md:text-6xl my-20 leading-none'>
                    {data.pricing_text}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-10 mx-5 md:mx-1">
                    {data.pricing_plans.map((plan, index) => (
                        <div key={index} className="relative my-3">
                            {plan.is_featured && (
                                <div className='w-full absolute bg-indigo-500 text-white text-xs font-bold uppercase rounded-t-xl px-3 py-3 -top-7'>
                                    Most Popular
                                </div>
                            )}
                            <div className={`border border-indigo-500 ${plan.is_featured ? "rounded-b-xl" : "rounded-xl"} p-5`}>
                                <h2 className="text-4xl my-5"> {plan.title}</h2>
                                <div className='border-t border-indigo-500 my-5' />
                                <div className="text-indigo-500">
                                    <h1 className='text-4xl '>{plan.price}</h1>
                                    <p className='text-sm'>per month + tax</p>
                                </div>
                                <div className='border-t border-indigo-500 my-5' />
                                <ul className="list-disc ml-5">
                                    {
                                        plan.benefits.map((data) => {
                                            return (
                                                <li key={data._key} className="text-sm">{data.benefit_text}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </section >
    )
}
