import { FC, PropsWithChildren } from 'react'
import Footer from './footer/Footer'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<div>
			<div style={{ maxWidth: '480px', margin: '0 auto' }}>{children}</div>
			<Footer />
		</div>
	)
}

export default Layout
