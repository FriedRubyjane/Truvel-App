import { TypeSetState } from '@/types/common'
import { IPlace } from '@/types/place'
import uniqBy from 'lodash/uniqBy'
import { FC, useState } from 'react'
import styles from './Filters.module.scss'

interface IFilters {
	setPlaces: TypeSetState<IPlace[]>
	initialPlaces: IPlace[]
}

const Filters: FC<IFilters> = ({ setPlaces, initialPlaces }) => {
	const [filter, setFilter] = useState('')

	const handleFilter = (location: string) => {
		if (filter === location) {
			setPlaces(initialPlaces)
			setFilter('')
		} else {
			setPlaces(
				initialPlaces.filter(
					place =>
						place.location.country.toLowerCase() === location.toLowerCase()
				)
			)
			setFilter(location)
		}
	}

	return (
		<div className={styles.wrapper}>
			{uniqBy(initialPlaces, 'location.country').map(place => {
				const country = place.location.country
				return (
					<button
						aria-label={country}
						onClick={() => handleFilter(country)}
						key={country}
						className={country === filter ? styles.active : 'none'}
					>
						{country}
					</button>
				)
			})}
		</div>
	)
}

export default Filters
