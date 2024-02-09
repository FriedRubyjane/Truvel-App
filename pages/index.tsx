import { GetStaticProps, NextPage } from 'next'
import Layout from '@/common/Layout'
import { IPlace } from '@/types/place'
import HeadingSection from '@/elements/home/headingSection/HeadingSection'
import Search from '@/elements/search/Search'
import Filters from '@/elements/filters/Filters'
import PopularPlaces from '@/elements/home/popularPlaces/PopularPlaces'
import { useState } from 'react'
import Meta from 'utils/meta'
import { sanityClient } from '../app/sanity'
import { queries } from 'queries'

interface IHome {
	initialPlaces: IPlace[]
}

const Home: NextPage<IHome> = ({ initialPlaces }) => {
	const [places, setPlaces] = useState(initialPlaces)
	const [isLoading, setIsLoading] = useState(false)

	return (
		<Layout>
			<Meta title='Truvel App' description='Лучшие маршруты для поездки' />
			<HeadingSection />
			<div style={{ width: '80%', margin: '0 auto' }}>
				<Search
					setPlaces={setPlaces}
					initialPlaces={initialPlaces}
					setIsLoading={setIsLoading}
				/>
				<Filters setPlaces={setPlaces} initialPlaces={initialPlaces} />
				<PopularPlaces places={places} isLoading={isLoading} />
			</div>
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const result = await sanityClient.fetch(queries.getPlaces)

	return {
		props: {
			initialPlaces: result,
		},
	}
}

export default Home
