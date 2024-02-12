const withPWA = require('next-pwa')({
	dest: 'public',
})

module.exports = withPWA({
	swcMinify: true,
	reactStrictMode: true,
	images: {
		domains: ['cdn.sanity.io'],
	},
})
