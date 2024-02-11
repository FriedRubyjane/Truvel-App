import { useCallback, useEffect, useMemo, useState } from 'react'
import { IPlace } from '@/types/place'
import { sanityClient } from '../../../CreateClient'
import { queries } from '../../../queries'
import { useSession } from 'next-auth/react'

export const useFavorites = () => {
	const { data } = useSession()
	const [favorites, setFavorites] = useState<IPlace[]>([])

	useEffect(() => {
		sanityClient
			.fetch<{ places: IPlace[]; _id: string }>(
				queries.getFavorites(data?.user?.email as string)
			)
			.then(data => {
				setFavorites(data.places)
			})
			.catch(e => console.log(e))
	}, [data])

	const checkFavorite = useCallback(
		(_id: string) => favorites.some(fav => fav._id === _id),
		[favorites]
	)

	return useMemo(
		() => ({
			favorites,
			checkFavorite,
		}),
		[favorites, checkFavorite]
	)
}
