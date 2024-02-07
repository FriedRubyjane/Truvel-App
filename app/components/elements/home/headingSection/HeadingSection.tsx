import { FC } from 'react'
import styles from './SearchSection.module.scss'
import mapImage from '../../../../../assets/images/map.png'

const HeadingSection: FC = () => {
	return (
		<section
			className={styles.section}
			style={{ backgroundImage: `url('${mapImage.src}')` }}
		>
			<div>
				<h1>Лучшие Места Для Поездки</h1>
			</div>
		</section>
	)
}

export default HeadingSection
