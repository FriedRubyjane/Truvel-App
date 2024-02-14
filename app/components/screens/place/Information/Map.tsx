import { TypeLocation } from '@/types/place'
import { FC } from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import styles from './Information.module.scss'

const Map: FC<{ location: TypeLocation }> = ({ location }) => {
	const geoUrl = '/geoMap/custom.json'

	return (
		<div className={styles.map}>
			<ComposableMap
				projectionConfig={{ scale: 55, center: [17, 10] }}
				width={240}
				height={140}
				projection='geoEqualEarth'
			>
				<Geographies geography={geoUrl}>
					{({ geographies }) =>
						geographies.map(geo => {
							const isCurrent = geo.properties.name_ru === location.country

							return (
								<Geography
									key={geo.rsmKey}
									geography={geo}
									fill={isCurrent ? '#eb601e' : '#39373B'}
									stroke={isCurrent ? 'transparent' : '#2D2B2F'}
									style={{
										default: { outline: 'none' },
										hover: { outline: 'none' },
										pressed: { outline: 'none' },
									}}
								/>
							)
						})
					}
				</Geographies>
			</ComposableMap>
		</div>
	)
}

export default Map
