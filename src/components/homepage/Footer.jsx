import Image from "next/image"

const navigation = {
    solutions: [
        { name: 'Home', href: '#' },
        { name: 'Why Vega', href: '#' },
        { name: 'Features & Edition', href: '#' },
        { name: 'Demo', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'Help & Resources', href: '#' },
    ],
    support: [
        { name: 'Vega Support', href: '#' },
        { name: 'Vega Help Center', href: '#' },
        { name: 'Vega Status Page', href: '#' },
    ],
}

export default function Footer() {
    return (
        <footer className="bg-white" aria-labelledby="footer-heading">
            <div className="mx-auto max-w-7xl px-6 sm:py-24">
                <div className="xl:grid xl:grid-cols-6">
                    <div className="col-span-3 text-2xl text-black font-bold">
                        <Image src={"/assets/logo.svg"} width={150} height={150} />
                    </div>
                    <div className="mt-16 grid grid-cols-2 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 col-span-2">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-indigo-500">Quick Links</h3>
                                <ul role="list" className="mt-2">
                                    {navigation.solutions.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-3 text-black hover:opacity-50 ease-out duration-300">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-indigo-500">Need Help?</h3>
                                <ul role="list" className="mt-2">
                                    {navigation.support.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-3 text-black hover:opacity-50 ease-out duration-300">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Vega Works</p>
                        <p> The Icehouse 125</p>
                        <p>St Georges Bay Rd</p>
                        <p>Parnel I Auckland 1052</p>
                        <p>New Zealand</p>
                    </div>
                </div>
                <div className="mt-16 border-t border-gray-900 pt-6" />
                <div className="flex items-center justify-between text-xs">
                    <div className="flex">
                        <div>
                            &copy; 2023 Vega Works
                        </div>
                        <div className="ml-6">
                            <ul role="list" className="flex space-x-6">
                                <li>Term of Us</li>
                                <li className="list-disc">Privacy Policy</li>
                                <li className="list-disc">Cookie Policy</li>
                            </ul>
                        </div>
                    </div>
                    <ul className="flex items-center space-x-3">
                        <li>
                            <Image src={"/assets/facebook.svg"} width={10} height={10} alt="" />
                        </li>
                        <li>
                            <Image src={"/assets/twitter.svg"} width={15} height={15} alt="" />
                        </li>
                        <li>
                            <Image src={"/assets/linkedin.svg"} width={15} height={15} alt="" />
                        </li>
                        <li>
                            <Image src={"/assets/instagram.svg"} width={15} height={15} alt="" />
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
