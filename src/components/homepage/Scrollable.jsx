export default function Scrollable() {
    return (
        <section className='marquee flex items-center bg-[#244358] h-[382px]'>
            <span className='marquee__inner text-[128px] text-white md:text-8xl overflow-hidden' id='text'>
                Achieve more, <span className='text-[#605EEF]'>save</span> more
            </span>
        </section>
    )
}
