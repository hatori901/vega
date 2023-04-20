import localFont from 'next/font/local'

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
	return (
		<div className='bg-indigo-500'>
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

