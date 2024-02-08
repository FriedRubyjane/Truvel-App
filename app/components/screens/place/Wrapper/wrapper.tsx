import React, { FC, PropsWithChildren } from 'react'
import styles from './wrapper.module.scss'

interface IWrapperProps {
	imagePath: string
}

const Wrapper: FC<PropsWithChildren<IWrapperProps>> = ({
	imagePath,
	children,
}) => {
	return (
		<div
			className={styles.wrapper}
			style={{ backgroundImage: `url(${imagePath})` }}
		>
			<div>{children}</div>
		</div>
	)
}

export default Wrapper
