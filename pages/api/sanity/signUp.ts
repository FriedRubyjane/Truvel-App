import { signUpHandler } from 'next-auth-sanity'
import { sanityClient } from '../../../app/CreateClient'

export default signUpHandler(sanityClient)
