import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import styles from './BookTrip.module.scss'

const BookTrip = () => {
	return (
		<div className={styles.wrapper}>
			<button className={styles.button} aria-label='Забронировать поездку'>
				<span className={styles.text}>Забронировать поездку</span>
				<span className={styles.icon}>
					<HiOutlineArrowLongRight size={20} />
				</span>
			</button>
		</div>
	)
}

export default BookTrip
