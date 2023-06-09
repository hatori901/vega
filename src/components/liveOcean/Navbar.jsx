import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    useEffect(() => {
        const navbar = document.querySelector('header')
        const navbarOffsetTop = navbar.offsetTop
        if (navbarOffsetTop == 0) {
            navbar.classList.remove('hidden')
        }
        window.onscroll = function () {
            if (this.oldScroll > this.scrollY) {
                navbar.classList.remove('hidden')
                setTimeout(() => {
                    navbar.classList.remove('opacity-0')
                }, 300)
            } else {
                navbar.classList.add('opacity-0')
                setTimeout(() => {
                    navbar.classList.add('hidden')
                }, 100)
            }
            this.oldScroll = this.scrollY;
        };
    }, [])
    return (
        <header className='bg-white z-10 fixed mx-auto w-full ease-out duration-300'>
            <nav className='max-w-7xl mx-auto flex item-center justify-between py-5'>
                <div>
                    <Image src="/assets/logo.svg" width={208} height={130} alt={"data.logo.alt"} id='logo' />
                </div>
                <div className='flex items-center'>
                    <ul className='flex item-center justify-around cursor-pointer'>
                        <li className='nav-link'>
                            <Link href="#">Why Vega</Link>
                        </li>
                        <li className='nav-link'>
                            <Link href="#">Features & Editions</Link>
                        </li>
                        <li className='nav-link'>
                            <Link href="#">Demo</Link>
                        </li>
                        <li className='nav-link'>
                            <Link href="#">Pricing</Link>
                        </li>
                        <li className='nav-link'>
                            <Link href="#">Help & Resources</Link>
                        </li>
                    </ul>
                    <div className='cursor-pointer border border-gray-800 rounded-full mx-4 px-3 py-1'>
                        Contact Sales
                    </div>
                    <div className='cursor-pointer bg-[#605EEF] hover:bg-transparent hover:outline hover:outline-1 hover:outline-black ease-out duration-300 rounded-full px-4 py-1 text-[16px] leading-6 text-white'>
                        Free Trial
                    </div>
                </div>
            </nav>
        </header>
    )
}