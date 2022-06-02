import { FaSpotify } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { useSession } from '../../hooks/useSession.tsx'
import { Button, LoginBtn } from './styles.js'


export default function SignInButton() {
    const { user, CLIENT_ID, REDIRECT_URI, AUTH_ENDPOINT, RESPONSE_TYPE, SCOPES, token, logout } = useSession()
    return (
        <>
            {!token ?
                <LoginBtn type="button"
                href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}&response_type=${RESPONSE_TYPE}`}
        >
            <FaSpotify color="#eba417" />
            Sign In with Spotify

        </LoginBtn>
                : 
                <Button  type="button" onClick={logout}>
                     <FaSpotify color="#04d361" />
                     {user}
                     <FiX color="#737380"  />
                 </Button>
        }
        </>
    )
    
    
}