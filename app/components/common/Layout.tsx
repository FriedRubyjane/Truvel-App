import { FC, PropsWithChildren } from 'react'
import Footer from './footer/Footer'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<div>
			<div>{children}</div>
			<Footer />
		</div>
	)
}

export default Layout
