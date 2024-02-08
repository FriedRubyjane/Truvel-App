import React, { FC, useState } from 'react'
import { BsBookmarkStar } from 'react-icons/bs'
import Link from 'next/link'
import styles from './Header.module.scss'
import { IFavorites } from '@/types/place'

const data: IFavorites[] = [
	{
		name: 'Япония',
		slug: 'kyoto',
	},
	{
		name: 'Италия',
		slug: 'venezia',
	},
]

const Favorites: FC = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={styles.bookMark}>
			<button onClick={() => setIsOpen(!isOpen)}>
				<span className={styles.buttonWrapper}>
					<BsBookmarkStar size={20} color='#e8e8e8' />
				</span>
			</button>
			{isOpen && (
				<ul>
					{data.map(favorite => (
						<li key={favorite.slug}>
							<Link href={`/place/${favorite.slug}`}>{favorite.name}</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default Favorites
