import { FaSpotify } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { Button } from './styles.js'


export function SignInButton() {
 
    return session ? (

        <Button type="button">
            <FaSpotify color="#04d361" />
            {user}
            <FiX color="#737380"  />
        </Button>
    ) : (
        <Button type="button"
            

            
        >
            <FaSpotify color="#eba417" />
            Sign In with Github

        </Button>
    )
}