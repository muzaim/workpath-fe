/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'logo.clearbit.com',
			'images.unsplash.com',
			'cdn.techinasia.com',
			'upload.wikimedia.org',
			'ui-avatars.com',
		],
	},
}

module.exports = nextConfig

