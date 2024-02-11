import { FC } from 'react'
import Layout from '@/components/common/Layout'
import PlaceItem from '@/components/elements/home/popularPlaces/PlaceItem'
import Meta from 'utils/meta'
import { IPlace } from '@/types/place'

const Favorites: FC<{ places: IPlace[] }> = ({ places }) => {
	return (
		<Layout>
			<Meta title='Избранное' />
			<h1 className='h1'>Избранное</h1>
			<div style={{ width: '80%', margin: '0 auto' }}>
				{places.length ? (
					places.map(place => (
						<PlaceItem
							key={place.slug.current}
							place={place}
							removeHandler={e => {
								e.preventDefault()
								alert('Remove')
							}}
						/>
					))
				) : (
					<div
						style={{
							marginTop: '-2rem',
							color: '#e8e8e8',
							opacity: '0.8',
							fontStyle: 'italic',
						}}
					>
						Ничего не нашлось
					</div>
				)}
			</div>
		</Layout>
	)
}

export default Favorites
