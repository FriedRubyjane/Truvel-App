import Image from 'next/image'
import { FC, memo } from 'react'
import styles from './HeadingSection.module.scss'

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
					quality={95}
					priority
				/>
			</div>
			<div>
				<h1>Лучшие Места Для Поездки</h1>
			</div>
		</section>
	)
}

export default memo(HeadingSection)
