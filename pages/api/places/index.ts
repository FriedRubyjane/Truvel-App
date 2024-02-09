import { NextApiRequest, NextApiResponse } from 'next'
import { IPlace } from '@/types/place'

export const places: IPlace[] = [
	{
		id: 'f2ad60e87f89',
		slug: 'kyoto',
		location: { country: 'Япония', city: 'Киото' },
		imagePath: '/placesImg/Kyoto.png',
		description:
			'Страна восходящего солнца Япония ювелирно сочетает традиции и современность. Древние пагоды и ворота духов соседствуют тут с зеркальными небоскребами, помпезные «пятерки» — с уютными реканами, раскрученные спа-центры — с национальными банями офуро.',
		rating: 5,
		duration: '10 дней',
		distance: 6589,
		googleMapLink: 'rrrrrr',
	},
	{
		id: '0049e3a9aef4',
		slug: 'tokyo',
		location: { country: 'Япония', city: 'Токио' },
		imagePath: '/placesImg/Tokyo.png',
		description:
			'Страна восходящего солнца Япония ювелирно сочетает традиции и современность. Древние пагоды и ворота духов соседствуют тут с зеркальными небоскребами, помпезные «пятерки» — с уютными реканами, раскрученные спа-центры — с национальными банями офуро.',
		rating: 7,
		duration: '9 дней',
		distance: 7890,
		googleMapLink: 'rrrrrr',
	},
	{
		id: '30a00565342c',
		slug: 'venezia',
		location: { country: 'Италия', city: 'Венеция' },
		imagePath: '/placesImg/Venezia.png',
		description:
			'Страна восходящего солнца Япония ювелирно сочетает традиции и современность. Древние пагоды и ворота духов соседствуют тут с зеркальными небоскребами, помпезные «пятерки» — с уютными реканами, раскрученные спа-центры — с национальными банями офуро.',
		rating: 8,
		duration: '7 дней',
		distance: 4367,
		googleMapLink: 'fffffff',
	},
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json(places)
}
