export type TypeLocation = {
	city: string
	country: string
}

export type TypeSlug = {
	type: string
	current: string
}

export interface IPlace {
	id: string
	slug: TypeSlug
	location: TypeLocation
	imagePath: string
	description: string
	rating: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
	duration: string
	distance: number
	googleMapLink: string
}

export interface IFavorites {
	slug: string
	name: string
}
