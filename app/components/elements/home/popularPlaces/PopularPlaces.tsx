import { FC } from 'react'
import styles from './PopularPlaces.module.scss'
import { IPlace } from '../../../../types/place'
import Link from 'next/link'

interface IPopularPlaces {
	places: IPlace[]
}

const PopularPlaces: FC<IPopularPlaces> = ({ places }) => {
	return (
		<div className={styles.wrapper}>
			<h2>Популярные места</h2>
			{places.map(place => (
				<Link
					href={`place/${place.slug}`}
					key={place.slug}
					className={styles.item}
					style={{ backgroundImage: `url(${place.imagePath})` }}
				>
					<span className={styles.heading}>
						{place.location.city + ', ' + place.location.country}
					</span>
				</Link>
			))}
		</div>
	)
}

export default PopularPlaces
