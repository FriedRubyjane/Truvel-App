import { NextApiRequest, NextApiResponse } from 'next'
import { IPlace } from '../../app/types/place'

const places: IPlace[] = [
	{
		slug: 'tokyo',
		location: { country: 'Япония', city: 'Киото' },
		imagePath: `${process.env.SERVER_URL}placesImg/japan.jpg`,
		description: 'Описание',
		rating: 5,
		duration: '10 дней',
		distance: 6589,
		googleMapLink: 'rrrrrr',
		mapImage: 'eeeee',
	},
	{
		slug: 'venezia',
		location: { country: 'Италия', city: 'Венеция' },
		imagePath: `${process.env.SERVER_URL}placesImg/italy.jpg`,
		description: 'Описание',
		rating: 8,
		duration: '7 дней',
		distance: 4367,
		googleMapLink: 'fffffff',
		mapImage: 'yyyyyy',
	},
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json(places)
}
