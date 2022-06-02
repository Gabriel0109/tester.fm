import { IntroWrapper } from './styles.js';

export function Header() {
    const { user, CLIENT_ID, REDIRECT_URI, AUTH_ENDPOINT, RESPONSE_TYPE, SCOPES} = useSession()
    return (
        
        <>
            <IntroWrapper>
                {/* {token ? <>
                    <h1>Hello, {user} </h1>

                </>
                    : <h1>tester.fm</h1>
                    
                } */}
                {/* {!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}&response_type=${RESPONSE_TYPE}`}>Login
                        to Spotify</a>
                    : <button onClick={logout}>Logout</button>}
               */}

              
            </IntroWrapper>
        </>
    );
            }
