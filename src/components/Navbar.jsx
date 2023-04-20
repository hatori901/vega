import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar({ data }) {
    useEffect(() => {
        const navbar = document.querySelector('header')
        const navbarOffsetTop = navbar.offsetTop
        const navbarOffsetBottom = navbar.offsetHeight + navbar.offsetTop
        if (navbarOffsetTop > 0) {
            navbar.classList.add('bg-white')
        }
        window.addEventListener('scroll', () => {
            if (window.scrollY > navbarOffsetBottom) {
                if (window.scrollY > navbarOffsetTop) {
                    navbar.classList.add('bg-white')
                } else {
                    navbar.classList.remove('bg-white')
                    navbar.classList.add('bg-indigo-500')
                }
            } else {
                navbar.classList.remove('bg-white')
            }
        })
    }, [])


    return (
        <header className='z-10 fixed mx-auto w-full'>
            <nav className='max-w-7xl mx-auto flex item-center justify-between py-5'>
                <div>
                    <Image src={data.logoImage} width={130} height={130} alt={"data.logo.alt"} />
                </div>
                <div className='flex items-center'>
                    <ul className='flex item-center justify-around'>
                        {
                            data.navbar_links.map((nav) => (
                                <li key={nav._key} className='text-black mx-3'>
                                    <Link href={nav.link}>{nav.link_text}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='border border-gray-800 rounded-full mx-4 px-3 py-1'>
                        {data.navbar_text_1}
                    </div>
                    <div className='bg-white rounded-full px-3 py-1'>
                        {data.navbar_text_2}
                    </div>
                </div>
            </nav>
        </header>
    )
}