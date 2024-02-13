import { memo, FC } from 'react'
import Favorites from './Favoritesttt'
import BackButton from './BackButtonttt'
import styles from './Header.module.scss'
import { useSession } from 'next-auth/react'

const Header: FC<{ _id: string }> = ({ _id }) => {
	const { data } = useSession()

	return (
		<div className={styles.wrapper}>
			<BackButton />
			{data && <Favorites _id={_id} />}
		</div>
	)
}

export default memo(Header)
