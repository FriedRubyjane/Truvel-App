import { FC, useState, ChangeEvent } from 'react'
import styles from './Search.module.scss'
import { IPlace } from '@/types/place'
import { TypeSetState } from '@/types/common'

interface ISearch {
	setPlaces: TypeSetState<IPlace[]>
	initialPlaces: IPlace[]
	setIsLoading: TypeSetState<boolean>
}

const Search: FC<ISearch> = ({ setPlaces, initialPlaces, setIsLoading }) => {
	const [searchTerm, setSearchTerm] = useState('')

	const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setIsLoading(true)

		const value = e.target.value
		setSearchTerm(value)

		setTimeout(() => {
			if (value) {
				setPlaces(
					initialPlaces.filter(
						place =>
							place.location.city.toLowerCase().includes(value.toLowerCase()) ||
							place.location.country.toLowerCase().includes(value.toLowerCase())
					)
				)
			} else {
				setPlaces(initialPlaces)
			}

			setIsLoading(false)
		}, 1500)
	}

	return (
		<div className={styles.search}>
			<span className='material-icons-outlined'>search</span>
			<input
				type='text'
				onChange={searchHandler}
				value={searchTerm}
				placeholder='Поиск места...'
			/>
		</div>
	)
}

export default Search
