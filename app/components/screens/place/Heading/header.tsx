import React, { FC } from 'react'
import Favorites from './favorites'
import BackButton from './backButton'
import styles from './Header.module.scss'

const Header: FC = () => {
	return (
		<div className={styles.wrapper}>
			<BackButton />
			<Favorites />
		</div>
	)
}

export default Header
