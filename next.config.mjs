/** @type {import('next').NextConfig} */
const nextConfig = {
	swcMinify: true,
	reactStrictMode: true,
	images: {
		domains: ['cdn.sanity.io'],
	},
}

export default nextConfig
