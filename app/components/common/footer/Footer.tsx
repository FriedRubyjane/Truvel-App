import { useRouter } from 'next/router'
import styles from './Footer.module.scss'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { IconType } from 'react-icons'
import { MdAccountCircle, MdHome, MdLogout } from 'react-icons/md'
import { TbHeart } from 'react-icons/tb'

type TypeNavItem = {
	icon: IconType
	link: string
}

const navItems: TypeNavItem[] = [
	{
		link: '/',
		icon: MdHome,
	},
	{
		link: '/favorites',
		icon: TbHeart,
	},
	{
		link: '/profile',
		icon: MdAccountCircle,
	},
	{
		link: '/auth',
		icon: MdLogout,
	},
]

const Footer = () => {
	const { push, pathname } = useRouter()
	const { data } = useSession()

	if (pathname === '/auth') return null

	return (
		<footer className={styles.footer}>
			<nav>
				{data ? (
					navItems.map(item => (
						<button
							className={pathname === item.link ? styles.active : ''}
							key={item.link}
							onClick={async () => {
								item.link === '/auth' ? await signOut() : await push(item.link)
							}}
						>
							<span>
								<item.icon />
							</span>
						</button>
					))
				) : (
					<Link className={styles['go-to-login']} href='auth'>
						Войти в приложение
					</Link>
				)}
			</nav>
		</footer>
	)
}

export default Footer
