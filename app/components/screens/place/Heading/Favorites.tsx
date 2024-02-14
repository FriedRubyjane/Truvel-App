import { FC } from 'react'
import { TbHeartMinus, TbHeartPlus } from 'react-icons/tb'
import { useFavorites } from '../../favorites/useFavorites'
import styles from './Header.module.scss'

const Favorites: FC<{ _id: string }> = ({ _id }) => {
	const { checkFavorite, toggleFavorite, isLoading } = useFavorites(_id)

	return (
		<div className={styles.bookMark}>
			<button
				aria-label={
					checkFavorite(_id) ? 'Удалить из избранного' : 'Добавить в избранное'
				} /* onClick={toggleFavorite} disabled={isLoading} */
			>
				<span className={styles.buttonWrapper}>
					{checkFavorite(_id) ? (
						<TbHeartMinus size={25} />
					) : (
						<TbHeartPlus size={25} />
					)}
				</span>
			</button>
		</div>
	)
}

export default Favorites
