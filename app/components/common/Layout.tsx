import { FC, PropsWithChildren } from 'react'
import Footer from './footer/Footer'

interface ILayoutProps {
	isMaxWidth?: boolean
}

const Layout: FC<PropsWithChildren<ILayoutProps>> = ({
	isMaxWidth = true,
	children,
}) => {
	return (
		<div>
			<div
				style={{ maxWidth: isMaxWidth ? '480px' : 'none', margin: '0 auto' }}
			>
				{children}
			</div>
			<Footer />
		</div>
	)
}

export default Layout
