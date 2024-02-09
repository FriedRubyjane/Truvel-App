import { FC } from 'react'
import styles from './SearchSection.module.scss'

const HeadingSection: FC = () => {
	return (
		<section
			className={styles.section}
			style={{ backgroundImage: `url('/map.png')` }}
		>
			<div>
				<h1>Лучшие Места Для Поездки</h1>
			</div>
		</section>
	)
}

export default HeadingSection
