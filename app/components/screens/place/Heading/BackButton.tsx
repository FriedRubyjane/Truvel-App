import Link from 'next/link'
import { FC } from 'react'
import { BsChevronLeft } from 'react-icons/bs'
import styles from './Header.module.scss'

const BackButton: FC = () => {
	return (
		<Link href='/'>
			<span className={styles.buttonWrapper}>
				<BsChevronLeft size={20} />
			</span>
		</Link>
	)
}

export default BackButton
