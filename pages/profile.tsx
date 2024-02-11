import Layout from '@/components/common/Layout'
import { NextPageAuth } from '@/types/auth'

const Profile: NextPageAuth = () => {
	return (
		<Layout>
			<h1 className='h1'>Профиль</h1>
		</Layout>
	)
}

Profile.isOnlyUser = true

export default Profile
