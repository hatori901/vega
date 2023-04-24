export default function Scrollable() {
    return (
        <section className='marquee flex items-center bg-[#244358] h-[382px]'>
            <h1 className='marquee__inner text-[128px] text-white md:text-8xl overflow-hidden' id='text'>
                Achieve more, <span className='text-[#605EEF]'>save</span> more
            </h1>
        </section>
    )
}
