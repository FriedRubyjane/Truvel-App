import NextProgressBar from 'nextjs-progressbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
			<ToastContainer theme='dark' draggable={false} />
		</>
	)
}
