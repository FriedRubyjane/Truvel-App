import { memo } from 'react'
import { useRouter } from 'next/router'
import styles from './Footer.module.scss'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { IconType } from 'react-icons'
import { MdOutlinePersonOutline, MdLogout } from 'react-icons/md'
import { TbHome } from 'react-icons/tb'
import { TbHeart } from 'react-icons/tb'

type TypeNavItem = {
	label: string
	icon: IconType
	link: string
}

const navItems: TypeNavItem[] = [
	{
		label: 'Меню',
		link: '/',
		icon: TbHome,
	},
	{
		label: 'Избранное',
		link: '/favorites',
		icon: TbHeart,
	},
	{
		label: 'Профиль',
		link: '/profile',
		icon: MdOutlinePersonOutline,
	},
	{
		label: 'Авторизация',
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
							aria-label={item.label}
							className={pathname === item.link ? styles.active : ''}
							key={item.link}
							onClick={async () => {
								item.link === '/auth' ? await signOut() : await push(item.link)
							}}
						>
							<item.icon />
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

export default memo(Footer)
