import { FC, useState } from 'react'
import cn from 'classnames'
import styles from './Filters.module.scss'
import { TypeSetState } from '../../../types/common'
import { IPlace } from '../../../types/place'

const cities = [
	{
		location: 'Париж',
	},
	{
		location: 'Бора Бора',
	},
	{
		location: 'Мауи',
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
}

const Filters: FC<IFilters> = ({ setPlaces }) => {
	const [filter, setFilter] = useState('')

	return (
		<div className={styles.wrapper}>
			{cities.map(city => (
				<button
					onClick={() => setFilter(city.location)}
					key={city.location}
					className={cn({
						[styles.active]: city.location === filter,
					})}
				>
					{city.location}
				</button>
			))}
		</div>
	)
}

export default Filters
