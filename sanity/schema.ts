import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import favorites from './schemas/favorites'
import place from './schemas/place'

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [place, favorites, blockContent],
}
