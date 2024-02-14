import { IPlace } from '@/types/place'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Place from '@/components/screens/place/Place'
import { queries } from 'queries'
import { sanityClient } from '../../app/CreateClient'

interface IPlacePage {
	place: IPlace
}

const PlacePage: NextPage<IPlacePage> = ({ place }) => {
	return <Place place={place} />
}

export const getStaticPaths: GetStaticPaths = async () => {
	const result = await sanityClient.fetch(`${queries.getPlaces}{slug}`)

	const paths = result.map(place => ({
		params: { slug: place.slug.current },
	}))

	return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	if (!params) {
		return {
			notFound: true,
		}
	}

	const place = await sanityClient.fetch(queries.getPlace(String(params.slug)))

	return { props: { place } }
}

export default PlacePage
