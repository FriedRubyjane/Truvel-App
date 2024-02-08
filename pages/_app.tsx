import NextProgressBar from 'nextjs-progressbar'
import '@/assets/styles/globals.css'

export default function App({ Component, pageProps }) {
	return (
		<>
			<NextProgressBar
				color={'#eb601e'}
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Component {...pageProps} />
		</>
	)
}
