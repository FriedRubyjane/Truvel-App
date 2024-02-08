import { GetStaticProps, NextPage } from 'next'
import Layout from '../app/components/common/Layout'
import { IPlace } from '../app/types/place'
import HeadingSection from '../app/components/elements/home/headingSection/HeadingSection'
import Search from '../app/components/elements/search/Search'
import Filters from '../app/components/elements/filters/Filters'
import PopularPlaces from '../app/components/elements/home/popularPlaces/PopularPlaces'
import { useState } from 'react'

interface IHome {
	initialPlaces: IPlace[]
}

const Home: NextPage<IHome> = ({ initialPlaces }) => {
	const [places, setPlaces] = useState(initialPlaces)
	const [isLoading, setIsLoading] = useState(false)

	return (
		<Layout>
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
	const result = await fetch(`${process.env.SERVER_URL}api/places`)
	const initialPlaces = await result.json()

	return {
		props: {
			initialPlaces,
		},
	}
}

export default Home