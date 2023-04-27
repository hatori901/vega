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