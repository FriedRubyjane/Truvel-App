import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import { IPlace } from '../../app/types/place'
import Place from '../../app/components/screens/place/place'

interface IPlacePage {
	place: IPlace
}

const PlacePage: NextPage<IPlacePage> = ({ place }) => {
	return <Place place={place} />
}

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await fetch(`${process.env.SERVER_URL}api/places`)
	const places = await res.json()

	const paths = places.map(place => ({ params: { slug: place.slug } }))

	return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	if (!params) {
		return {
			notFound: true,
		}
	}

	const res = await fetch(`${process.env.SERVER_URL}api/places/${params.slug}`)
	const place = await res.json()

	return { props: { place } }
}

export default PlacePage
