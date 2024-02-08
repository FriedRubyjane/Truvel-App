import { FC } from 'react'
import styles from './Information.module.scss'
import {
	ComposableMap,
	Geographies,
	Geography,
	ZoomableGroup,
} from 'react-simple-maps'
import { TypeLocation } from '../../../../types/place'

const Map: FC<{ location: TypeLocation }> = ({ location }) => {
	const geoUrl = '/geoMap/custom.json'

	return (
		<div className={styles.map}>
			<ComposableMap
				projectionConfig={{ scale: 50 }}
				width={240}
				height={140}
				projection='geoEqualEarth'
			>
				<ZoomableGroup zoom={1.1} minZoom={1.1} maxZoom={2}>
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
				</ZoomableGroup>
			</ComposableMap>
		</div>
	)
}

export default Map
