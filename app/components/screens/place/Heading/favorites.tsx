import React, { FC } from 'react'
import styles from './Header.module.scss'
import { TbHeartPlus } from 'react-icons/tb'
import { TbHeartMinus } from 'react-icons/tb'

const isAdded = false

const Favorites: FC = () => {
	return (
		<div className={styles.bookMark}>
			<button onClick={() => {}}>
				<span className={styles.buttonWrapper}>
					{isAdded ? <TbHeartMinus size={25} /> : <TbHeartPlus size={25} />}
				</span>
			</button>
		</div>
	)
}

export default Favorites
