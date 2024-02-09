import React, { FC, useState } from 'react'
import Layout from '@/components/common/Layout'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuthFields } from './auth.interface'
import { IoPersonSharp } from 'react-icons/io5'
import { toast } from 'react-toastify'

import { signIn } from 'next-auth/react'
import { signUp } from 'next-auth-sanity/client'

import stylesButton from '../place/BookTrip/BookTrip.module.scss'
import styles from './Auth.module.scss'

const Auth: FC = () => {
	const [typeForm, setTypeForm] = useState<'login' | 'register'>('login')

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<IAuthFields>({
		mode: 'onChange',
	})

	const isRegister = typeForm === 'register'

	const onSubmit: SubmitHandler<IAuthFields> = async data => {
		if (isRegister) {
			const response = await signUp(data)

			// @ts-ignore
			if (response.error) {
				// @ts-ignore
				toast.error(response.error)
			}
		} else {
			const response = await signIn('sanity-login', {
				redirect: false,
				...data,
			})

			// @ts-ignore
			if (response.error) {
				// @ts-ignore
				toast.error(response.error)
			}
		}
	}

	return (
		<Layout>
			<h1 className={styles.h1}>
				{isRegister ? 'Регистрация аккаунта' : 'Вход в аккаунт'}
			</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.wrapper}>
					<input
						{...register('name', { required: 'Не верное имя пользователя' })}
						type='text'
						placeholder='Введите имя'
						className={styles.input}
					/>
					{errors.email && (
						<div className={styles.error}>{errors.name?.message}</div>
					)}
				</div>
				<div className={styles.wrapper}>
					<input
						{...register('email', { required: 'Введите правильный email' })}
						type='text'
						placeholder='alex@gmail.com'
						className={styles.input}
					/>
					{errors.email && (
						<div className={styles.error}>{errors.email?.message}</div>
					)}
				</div>
				<div className={styles.wrapper}>
					<input
						{...register('password', {
							required: 'Не верный пароль',
						})}
						type='password'
						placeholder='Пароль'
						className={styles.input}
					/>
					{errors.email && (
						<div className={styles.error}>{errors.password?.message}</div>
					)}
				</div>
				<div>
					<div className={styles.changeType}>
						<button
							onClick={() => setTypeForm(isRegister ? 'login' : 'register')}
						>
							Я хочу {isRegister ? ' войти' : ' зарегистрироваться'}
						</button>
					</div>
					<button className={stylesButton.button}>
						<span className={stylesButton.text}>
							{isRegister ? 'Зарегистрироваться' : 'Войти'}
						</span>
						<span className={stylesButton.icon}>
							<IoPersonSharp size={18} />
						</span>
					</button>
				</div>
			</form>
		</Layout>
	)
}

export default Auth
