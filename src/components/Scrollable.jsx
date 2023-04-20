import { useEffect } from 'react'

export default function Scrollable() {
    useEffect(() => {
        const text = document.querySelector('#text')
        document.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                text.classList.add('text-white')
            } else {
                text.classList.remove('text-white')
            }
        })
    }, [])
    return (
        <section className='flex items-center bg-sky-900 h-[200px]'>
            <h1 className='text-8xl overflow-hidden' id='text'>
                Achieve more, save more
            </h1>
        </section>
    )
}
