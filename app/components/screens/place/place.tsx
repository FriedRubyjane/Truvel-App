import React, { FC } from 'react'
import { IPlace } from '@/types/place'
import Layout from '@/common/Layout'
import BookTrip from './BookTrip/booktrip'
import Information from './Information/information'
import Header from './Heading/header'
import Wrapper from './Wrapper/wrapper'
import Meta from 'utils/meta'
import { urlFor } from '../../../sanity'

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
				<Header />
				<Information place={place} />
				<BookTrip />
			</Wrapper>
		</Layout>
	)
}

export default Place
