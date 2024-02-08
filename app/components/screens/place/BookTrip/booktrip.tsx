import React from 'react'
import styles from './BookTrip.module.scss'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'

const BookTrip = () => {
	const bookTrip = () => {}

	return (
		<button className={styles.button} onClick={bookTrip}>
			<span className={styles.text}>Забронировать поездку</span>
			<span className={styles.icon}>
				<HiOutlineArrowLongRight size={20} />
			</span>
		</button>
	)
}

export default BookTrip
