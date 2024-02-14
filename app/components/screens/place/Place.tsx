import Layout from '@/common/Layout'
import { IPlace } from '@/types/place'
import { FC } from 'react'
import Meta from 'utils/meta'
import { urlFor } from '../../../CreateClient'
import BookTrip from './BookTrip/BookTrip'
import Header from './Heading/Header'
import Information from './Information/Information'
import Wrapper from './Wrapper/Wrapper'

interface IPlacePage {
	place: IPlace
}

const Place: FC<IPlacePage> = ({ place }) => {
	return (
		<Layout>
			<Meta
				title={`${place.location.city} | ${place.location.country}`}
				description={`Лучший маршрут для поездки - ${place.location.city}`}
				image={urlFor(place.imagePath).url()}
			/>
			<Wrapper imagePath={urlFor(place.imagePath).url()}>
				<Header _id={place._id} />
				<Information place={place} />
				<BookTrip />
				<div style={{ height: '3rem', marginTop: '3rem' }} />
			</Wrapper>
		</Layout>
	)
}

export default Place
