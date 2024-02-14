import { PortableText as PortableTextComponent } from '@portabletext/react'
import createImageUrlBuilder from '@sanity/image-url'
import { ClientConfig, createClient } from 'next-sanity'

export const config: ClientConfig = {
	projectId: 'ac6sq4v6',
	dataset: 'production',
	token: process.env.SANITY_API_TOKEN,
	apiVersion: '2022-03-07',
	useCdn: false,
}

export const sanityClient = createClient(config)
export const urlFor = source =>
	createImageUrlBuilder({ clientConfig: config }).image(source)
export const PortableText = props => (
	<PortableTextComponent components={{}} {...props} />
)
