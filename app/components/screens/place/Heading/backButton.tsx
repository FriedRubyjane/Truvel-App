import React, { FC } from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'
import { BsChevronLeft } from 'react-icons/bs'

const BackButton: FC = () => {
	return (
		<Link href='/'>
			<span className={styles.buttonWrapper}>
				<BsChevronLeft size={20} color='#e8e8e8' />
			</span>
		</Link>
	)
}

export default BackButton
