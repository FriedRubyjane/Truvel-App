import NextProgressBar from 'nextjs-progressbar'
import { ToastContainer } from 'react-toastify'
import { SessionProvider } from 'next-auth/react'
import AuthProvider from 'providers/AuthProvider/AuthProvider'

import '@/assets/styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css'

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}) {
	return (
		<>
			<NextProgressBar
				color={'#eb601e'}
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
				showOnShallow={false}
			/>
			<SessionProvider session={session}>
				<AuthProvider Component={Component}>
					<Component {...pageProps} />
					<ToastContainer theme='dark' draggable={false} />
				</AuthProvider>
			</SessionProvider>
		</>
	)
}
