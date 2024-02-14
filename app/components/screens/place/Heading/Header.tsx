import { useSession } from 'next-auth/react'
import { FC, memo } from 'react'
import BackButton from './BackButton'
import Favorites from './Favorites'
import styles from './Header.module.scss'

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
