import localFont from 'next/font/local'
import { useEffect } from 'react';

import Navbar from "@/components/homepage/Navbar";
import Hero from "@/components/homepage/Hero";
import About from "@/components/homepage/About";
import Video from "@/components/homepage/Video";
import Pricing from "@/components/homepage/Pricing";
import Scrollable from "@/components/homepage/Scrollable";
import Testimoni from "@/components/homepage/Testimoni";
import Partner from "@/components/homepage/Partner";
import Resources from "@/components/homepage/Resources";
import Banner from "@/components/homepage/Banner";
import Footer from "@/components/homepage/Footer";

import Head from "next/head";

import { fetchQuery } from "@/utils/sanity";

const font = localFont({
	src: "../styles/fonts/AktivGrotesk-Regular.ttf",
})

export default function Home({ navbar, data }) {
	function handleWheel(event) {
		event.preventDefault();

		const delta = Math.max(-1, Math.min(1, event.deltaY || -event.detail));
		const scrollStep = window.innerHeight / 5;
		const newScrollPosition = window.pageYOffset + delta * scrollStep;
		const duration = 500; // Adjust this value to make the scroll duration slower or faster

		scrollToY(newScrollPosition, duration);
	}

	function scrollToY(y, duration) {
		const start = window.pageYOffset;
		const end = y;
		const distance = end - start;
		let startTime = null;

		function animateScroll(timestamp) {
			if (!startTime) {
				startTime = timestamp;
			}
			const progress = timestamp - startTime;
			const scrollY = easeOutQuad(progress, start, distance, duration);
			window.scrollTo(0, scrollY);
			if (progress < duration) {
				window.requestAnimationFrame(animateScroll);
			}
		}

		function easeOutQuad(t, b, c, d) {
			t /= d;
			return -c * t * (t - 2) + b;
		}

		window.requestAnimationFrame(animateScroll);
	}

	useEffect(() => {
		window.addEventListener("wheel", handleWheel, { passive: false });
		window.addEventListener("DOMMouseScroll", handleWheel, { passive: false });

		return () => {
			window.removeEventListener("wheel", handleWheel);
			window.removeEventListener("DOMMouseScroll", handleWheel);
		};
	}, []);
	return (
		<div className=''>
			<Head>
				<title>Vega</title>
			</Head>
			<main className={font.className}>
				<Navbar data={navbar} />
				<Hero data={data.hero} />
				<About data={data.about} />
				<Video />
				<Pricing data={data.pricing} />
				<Scrollable />
				<Testimoni data={data.testimonials} />
				<Partner data={data.partners} />
				<Resources data={data.features} />
				<Banner data={data.banner} />
				<Footer />
			</main>
		</div>
	);
}


export async function getStaticProps() {

	const navbar = await fetchQuery(`*[_type == "navbar"][0]{
		"logoImage": logo.asset->url,
		navbar_links,
		navbar_text_1,
		navbar_text_2,
	}`);
	const data = await fetchQuery(`*[_type == "homePage"][0]{
		hero {
			"heroImage": hero_image.asset->url,
			hero_text_1,
			hero_text_2,
			hero_button_text_1,
			hero_button_text_2,
		},
		about {
			title,
			about_text_1,
			about_text_2,
			features{
				"feature_icon": feature_image.asset->url,
				feature_text,
			}[]
		},
		pricing,
		testimonials {
			"image" : testimonial_image.asset->url,
			testimonial_author,
			testimonial_text
		}[],
		partners {
			"image" : partner_image.asset->url,
			partner_name,
		}[],
		features {
			title,
			text,
			features{
				"feature_icon": feature_image.asset->url,
				feature_text,
			}[]
		},
		banner{
			"image" : banner_image.asset->url,
			banner_text_1,
			banner_text_2,
			banner_button_text,
			banner_button_url
		}
	}`);
	return {
		props: {
			navbar,
			data,
		},
	};
}

