import { memo, FC } from 'react'
import styles from './HeadingSection.module.scss'
import Image from 'next/image'

const HeadingSection: FC = () => {
	return (
		<section className={styles.section}>
			<div className={styles.background}>
				<Image
					src='/map.png'
					alt='map'
					layout='fill'
					objectPosition='top'
					objectFit='cover'
				/>
			</div>
			<div>
				<h1>Лучшие Места Для Поездки</h1>
			</div>
		</section>
	)
}

export default memo(HeadingSection)
