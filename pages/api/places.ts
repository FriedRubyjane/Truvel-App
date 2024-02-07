import { NextApiRequest, NextApiResponse } from 'next'
import { IPlace } from '../../app/types/place'

const places: IPlace[] = [
	{
		slug: 'tokyo',
		location: { country: 'Japan', city: 'Kyoto' },
		imagePath: 'http://localhost:3000/placesImg/japan.jpg',
		description: 'Description',
		rating: 5,
		duration: '10 days',
		distance: 6589,
		googleMapLink: 'rrrrrr',
		mapImage: 'eeeee',
	},
	{
		slug: 'venezia',
		location: { country: 'Italy', city: 'Venezia' },
		imagePath: 'http://localhost:3000/placesImg/italy.jpg',
		description: 'Description',
		rating: 8,
		duration: '7 days',
		distance: 4367,
		googleMapLink: 'fffffff',
		mapImage: 'yyyyyy',
	},
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json(places)
}
