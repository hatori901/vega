import { useEffect } from 'react'
import Head from 'next/head'
import Navbar from '@/components/liveOcean/Navbar'
import Hero from '@/components/liveOcean/Hero'
import About from '@/components/liveOcean/About'
import Video from '@/components/liveOcean/Video'
import Paragraph from '@/components/liveOcean/Paragraph'
import Testimoni from '@/components/liveOcean/Testimoni'
import Achievement from '@/components/liveOcean/Achievement'
import Footer from '@/components/liveOcean/Footer'

export default function LiveOcean() {
    function init() {
        new SmoothScroll(document, 120, 20)
    }

    function SmoothScroll(target, speed, smooth) {
        if (target === document)
            target = (document.scrollingElement
                || document.documentElement
                || document.body.parentNode
                || document.body) // cross browser support for document scrolling

        var moving = false
        var pos = target.scrollTop
        var frame = target === document.body
            && document.documentElement
            ? document.documentElement
            : target // safari is the new IE

        target.addEventListener('mousewheel', scrolled, { passive: false })
        target.addEventListener('DOMMouseScroll', scrolled, { passive: false })

        function scrolled(e) {
            e.preventDefault(); // disable default scrolling

            var delta = normalizeWheelDelta(e)

            pos += -delta * speed
            pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling

            if (!moving) update()
        }

        function normalizeWheelDelta(e) {
            if (e.detail) {
                if (e.wheelDelta)
                    return e.wheelDelta / e.detail / 40 * (e.detail > 0 ? 1 : -1) // Opera
                else
                    return -e.detail / 3 // Firefox
            } else
                return e.wheelDelta / 120 // IE,Safari,Chrome
        }

        function update() {
            moving = true

            var delta = (pos - target.scrollTop) / smooth

            target.scrollTop += delta

            if (Math.abs(delta) > 0.5)
                requestFrame(update)
            else
                moving = false
        }

        var requestFrame = function () { // requestAnimationFrame cross browser
            return (
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (func) {
                    window.setTimeout(func, 1000 / 50);
                }
            );
        }()
    }

    useEffect(() => {
        init()
    }, [])
    return (
        <div className='bg-[#244358]'>
            <Head>
                <title>Live Ocean</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main >
                <Navbar />
                <Hero />
                <About />
                <Video />
                <Paragraph />
                <Testimoni />
                <Achievement />
                <Footer />
            </main>
        </div>
    )
}