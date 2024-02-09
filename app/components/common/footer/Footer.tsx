import { useRouter } from 'next/router'
import styles from './Footer.module.scss'

type TypeNavItem = {
	icon: string
	link: string
}

const navItems: TypeNavItem[] = [
	{
		link: '/',
		icon: 'home',
	},
	{
		link: '/explore',
		icon: 'explore',
	},
	{
		link: '/place/kyoto',
		icon: 'place',
	},
	{
		link: '/auth',
		icon: 'person_outline',
	},
]

const Footer = () => {
	const { push, pathname } = useRouter()

	return (
		<footer className={styles.footer}>
			<nav>
				{navItems.map(item => (
					<button
						className={pathname === item.link ? styles.active : ''}
						key={item.icon}
						onClick={() => push(item.link)}
					>
						<span className='material-icons-outlined'>{item.icon}</span>
					</button>
				))}
			</nav>
		</footer>
	)
}

export default Footer
