import React, { FC, useState } from 'react'
import Layout from '@/components/common/Layout'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuthFields } from './Auth.interface'
import { MdAccountCircle } from 'react-icons/md'
import { toast } from 'react-toastify'

import { signIn } from 'next-auth/react'
import { signUp } from 'next-auth-sanity/client'

import stylesButton from '../place/BookTrip/BookTrip.module.scss'
import styles from './Auth.module.scss'
import { useRouter } from 'next/router'

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

	const { push } = useRouter()

	const onSubmit: SubmitHandler<IAuthFields> = async data => {
		if (isRegister) {
			await signUp(data)
		} else {
			const response = await signIn('sanity-login', {
				redirect: false,
				...data,
			})

			// @ts-ignore
			if (response.error) {
				// @ts-ignore
				toast.error(response.error)
				return
			}

			await push('/')
		}
	}

	return (
		<Layout>
			<h1 className='h1'>
				{isRegister ? 'Регистрация аккаунта' : 'Вход в аккаунт'}
			</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.wrapper}>
					<input
						{...register('email', { required: 'Введите правильный email' })}
						type='text'
						name='email'
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
						name='password'
						placeholder='Пароль'
						className={styles.input}
					/>
					{errors.email && (
						<div className={styles.error}>{errors.password?.message}</div>
					)}
				</div>
				<div className={stylesButton.wrapper}>
					<button
						className={stylesButton.button}
						type='submit'
						aria-label={isRegister ? 'Зарегистрироваться' : 'Войти'}
					>
						<span className={stylesButton.text}>
							{isRegister ? 'Зарегистрироваться' : 'Войти'}
						</span>
						<span className={stylesButton.icon}>
							<MdAccountCircle size={24} />
						</span>
					</button>
				</div>
			</form>
			<div className={styles.changeType}>
				<button
					onClick={() => setTypeForm(isRegister ? 'login' : 'register')}
					aria-label={`Я хочу ${isRegister ? ' войти' : ' зарегистрироваться'}`}
				>
					Я хочу {isRegister ? ' войти' : ' зарегистрироваться'}
				</button>
			</div>
		</Layout>
	)
}

export default Auth
