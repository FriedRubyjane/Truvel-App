import React, { FC } from 'react'
import { IPlace } from '@/types/place'
import Layout from '@/common/Layout'
import BookTrip from './BookTrip/booktrip'
import Information from './Information/information'
import Header from './Heading/header'
import Wrapper from './Wrapper/wrapper'

interface IPlacePage {
	place: IPlace
}

const Place: FC<IPlacePage> = ({ place }) => {
	return (
		<Layout isMaxWidth={false}>
			<Wrapper imagePath={place.imagePath}>
				<Header />
				<Information place={place} />
				<BookTrip />
			</Wrapper>
		</Layout>
	)
}

export default Place
