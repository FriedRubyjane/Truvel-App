import { FC, useState } from 'react'
import cn from 'classnames'
import styles from './Filters.module.scss'

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

const Filters: FC = () => {
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
