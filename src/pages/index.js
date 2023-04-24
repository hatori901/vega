import localFont from 'next/font/local'
import { useEffect } from 'react';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Video from "@/components/Video";
import Pricing from "@/components/Pricing";
import Scrollable from "@/components/Scrollable";
import Testimoni from "@/components/Testimoni";
import Partner from "@/components/Partner";
import Resources from "@/components/Resources";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

import Head from "next/head";

import { fetchQuery } from "@/utils/sanity";

const font = localFont({
	src: "../styles/fonts/AktivGrotesk-Regular.ttf",
})

export default function Home({ navbar, data }) {
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

