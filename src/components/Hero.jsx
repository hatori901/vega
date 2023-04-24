import { useEffect, useRef } from "react"

export default function Hero({ data }) {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            const handleScroll = () => {
                const { top } = ref.current.getBoundingClientRect();
                const speed = -0.5;
                ref.current.style.transform = `translateY(${top * speed}px)`;
            };
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, []);
    return (
        <section>
            <div className="hero mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
                <div className="bg-[#605EEF] px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="w-1/2 mt-24 text-[68px] tracking-tight text-gray-900 sm:mt-10 sm:text-6xl break-words">
                            {data.hero_text_1}
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-900">
                            {data.hero_text_2}
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <a href="#"
                                className="border border-black rounded-full px-5 py-1 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {data.hero_button_text_1}
                            </a>
                            <a href="#" className="bg-white hover:bg-transparent hover:outline hover:outline-1 hover:outline-black transition-transform ease-out duration-100 rounded-full px-4 py-1 text-sm font-semibold leading-6 text-black">
                                {data.hero_button_text_2}
                            </a>
                        </div>
                    </div>
                </div>
                <div ref={ref} style={{
                    backgroundImage: `url(${data.heroImage})`,
                    backgroundPosition: "right top",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                    transform: "translateY(0px)",
                    zIndex: "-1"
                }} className="lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/3 xl:mr-0" />
            </div>
        </section >
    )
}