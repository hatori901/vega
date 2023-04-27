import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar({ data }) {
    useEffect(() => {
        const navbar = document.querySelector('header')
        const logo = document.querySelector('#logo')
        const navbarOffsetTop = navbar.offsetTop
        const navbarOffsetBottom = navbar.offsetHeight + navbar.offsetTop
        if (navbarOffsetTop > 0) {
            navbar.classList.add('bg-white')
        }
        window.addEventListener('scroll', () => {
            if (window.scrollY > navbarOffsetBottom) {
                if (window.scrollY > navbarOffsetTop) {
                    navbar.classList.add('bg-white')
                    logo.classList.add('brightness-0')
                } else {
                    navbar.classList.remove('bg-white')
                    logo.classList.remove('brightness-0')
                }
            } else {
                navbar.classList.remove('bg-white')
                logo.classList.remove('brightness-0')
            }
        })
        window.onscroll = function () {
            if (this.oldScroll > this.scrollY) {
                navbar.classList.remove('hidden')
            } else {
                navbar.classList.add('hidden')
            }
            this.oldScroll = this.scrollY;
        };
    }, [])


    return (
        <header className='z-10 fixed mx-auto w-full fade-out duration-300'>
            <nav className='max-w-7xl mx-auto flex item-center justify-between py-5'>
                <div>
                    <Image src={data.logoImage} width={208} height={130} alt={"data.logo.alt"} id='logo' />
                </div>
                <div className='flex items-center'>
                    <ul className='flex item-center justify-around cursor-pointer'>
                        {
                            data.navbar_links.map((nav) => (
                                <li key={nav._key} className='nav-link'>
                                    <Link href={nav.link}>{nav.link_text}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='cursor-pointer border border-gray-800 rounded-full mx-4 px-3 py-1'>
                        {data.navbar_text_1}
                    </div>
                    <div className='cursor-pointer bg-white hover:bg-transparent hover:outline hover:outline-1 hover:outline-black ease-out duration-300 rounded-full px-4 py-1 text-[16px] leading-6 text-black'>
                        {data.navbar_text_2}
                    </div>
                </div>
            </nav>
        </header>
    )
}