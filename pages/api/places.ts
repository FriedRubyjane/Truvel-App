import { NextApiRequest, NextApiResponse } from 'next'
import { IPlace } from '../../app/types/place'
import japanImage from '../../assets/images/japan.jpg'

const places: IPlace[] = [
	{
		slug: 'tokyo',
		location: 'Japan',
		imagePath: japanImage.src,
		description: 'Description',
		rating: 5,
		duration: '10 days',
		distance: 10,
		googleMapLink: 'rrrrrr',
		mapImage: 'eeeee',
	},
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json(places)
}
