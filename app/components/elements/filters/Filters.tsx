import { FC, useState } from 'react'
import cn from 'classnames'
import styles from './Filters.module.scss'
import { TypeSetState } from '../../../types/common'
import { IPlace } from '../../../types/place'

const countries = [
	{
		location: 'Япония',
	},
	{
		location: 'Италия',
	},
	{
		location: 'Франция',
	},
	{
		location: 'Таити',
	},
	{
		location: 'Бразилия',
	},
	{
		location: 'Норвегия',
	},
]

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
			{countries.map(country => (
				<button
					onClick={() => handleFilter(country.location)}
					key={country.location}
					className={cn({
						[styles.active]: country.location === filter,
					})}
				>
					{country.location}
				</button>
			))}
		</div>
	)
}

export default Filters
