import React, { FC } from 'react'
import { IPlace } from '@/types/place'
import Layout from '@/common/Layout'
import BookTrip from './BookTrip/BookTrip'
import Information from './Information/Information'
import Header from './Heading/Header'
import Wrapper from './Wrapper/Wrapper'
import Meta from 'utils/meta'
import { urlFor } from '../../../CreateClient'

interface IPlacePage {
	place: IPlace
}

const Place: FC<IPlacePage> = ({ place }) => {
	return (
		<Layout isMaxWidth={false}>
			<Meta
				title={`${place.location.city} | ${place.location.country}`}
				description={`Лучший маршрут для поездки - ${place.location.city}`}
				image={urlFor(place.imagePath).url()}
			/>
			<Wrapper imagePath={urlFor(place.imagePath).url()}>
				<Header _id={place._id} />
				<Information place={place} />
				<BookTrip />
			</Wrapper>
		</Layout>
	)
}

export default Place
