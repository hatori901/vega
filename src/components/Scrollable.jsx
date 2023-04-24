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
        <section className='marquee flex items-center bg-[#244358] h-[382px]'>
            <h1 className='marquee__inner text-[128px] md:text-8xl overflow-hidden' id='text'>
                Achieve more, <span className='text-[#605EEF]'>save</span> more
            </h1>
        </section>
    )
}
