import { NextApiRequest, NextApiResponse } from 'next'
import { IPlace } from '@/types/place'

export const places: IPlace[] = [
	{
		slug: 'kyoto',
		location: { country: 'Япония', city: 'Киото' },
		imagePath: '/placesImg/japan.jpg',
		description:
			'Страна восходящего солнца Япония ювелирно сочетает традиции и современность. Древние пагоды и ворота духов соседствуют тут с зеркальными небоскребами, помпезные «пятерки» — с уютными реканами, раскрученные спа-центры — с национальными банями офуро.',
		rating: 5,
		duration: '10 дней',
		distance: 6589,
		googleMapLink: 'rrrrrr',
		mapImage: 'eeeee',
	},
	{
		slug: 'venezia',
		location: { country: 'Италия', city: 'Венеция' },
		imagePath: '/placesImg/italy.jpg',
		description:
			'Страна восходящего солнца Япония ювелирно сочетает традиции и современность. Древние пагоды и ворота духов соседствуют тут с зеркальными небоскребами, помпезные «пятерки» — с уютными реканами, раскрученные спа-центры — с национальными банями офуро.',
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
