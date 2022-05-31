import { IntroWrapper } from './styles.js';


export function Header() {
    const CLIENT_ID = "7db72dde18e949d280daba96bf9d69e9"
    const REDIRECT_URI = "https://localhost:3000/callback"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    return (

        <>
            <IntroWrapper>
                <h1>Lierbag</h1>
                <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
            </IntroWrapper>
        </>
    );
}
