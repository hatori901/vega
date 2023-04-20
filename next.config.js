/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				hostname: "upload.wikimedia.org",
			},
			{
				hostname: "cdn.sanity.io"
			}
		],
	},
};

module.exports = nextConfig
