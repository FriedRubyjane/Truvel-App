import Link from 'next/link'
import { FC, MouseEvent } from 'react'
import styles from './PopularPlaces.module.scss'
import { IPlace } from '@/types/place'
import { urlFor } from '../../../../CreateClient'
import { TbHeartMinus } from 'react-icons/tb'

const PlaceItem: FC<{
	place: IPlace
	removeHandler?: (e: MouseEvent<HTMLButtonElement>) => void
}> = ({ place, removeHandler }) => {
	return (
		<Link
			href={`place/${place.slug.current}`}
			key={place._id}
			className={styles.item}
			style={{ backgroundImage: `url(${urlFor(place.imagePath).url()})` }}
		>
			<span className={styles.heading}>
				{place.location.city + ', ' + place.location.country}
			</span>
			{removeHandler && (
				<button onClick={removeHandler}>
					<TbHeartMinus size={25} />
				</button>
			)}
		</Link>
	)
}

export default PlaceItem
