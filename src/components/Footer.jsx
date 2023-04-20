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
                <div className="xl:grid xl:grid-cols-4 xl:gap-8">
                    <h1 className="text-2xl text-black font-bold">VEGA</h1>
                    <div className="mt-16 grid grid-cols-2 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 col-span-3">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-indigo-500">Quick Links</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.solutions.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-black hover:text-gray-700">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-indigo-500">Need Help?</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.support.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-black hover:text-gray-700">
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
                    </div>
                </div>
                <div className="mt-16 border-t border-gray-900 pt-6" />
                <div className="text-xs">
                    <div>
                        &copy; 2023 Vega Works
                    </div>

                </div>
            </div>
        </footer>
    )
}
