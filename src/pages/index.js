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

export default function Home({ navbar, data }) {
	return (
		<>
			<Head>
				<title>Vega</title>
			</Head>
			<main className="bg-indigo-500">
				<Navbar data={navbar} />
				<Hero data={data.hero} />
				<About data={data.about} />
				{/* <Video /> */}
				<Pricing data={data.pricing} />
				<Scrollable data={data.testimonials} />
				<Testimoni />
				<Partner />
				<Resources />
				<Banner />
				<Footer />
			</main>
		</>
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
		}[]
	}`);
	return {
		props: {
			navbar,
			data,
		},
	};
}

