import { createContext, useEffect, useState } from 'react';
import axios from 'axios'
import { useContext } from 'react';
interface Images {
    url: string;
}
interface AlbumImg {
    images: Images[];
}
interface ArtistsInterface {
    href: string;
    name: string;
    external_urls: {
        spotify: string;
    },
}
interface ArtistInterface {
    artistsArray: ArtistsInterface[]
}
interface recentlyPlayedArray {
    track: {
        id: string,
        name: string,
        href: string,
        external_urls: {
            spotify: string;
        },
        artists: ArtistInterface
        album: AlbumImg
    }
       
}

interface recentlyPlayedInterface {
    items: recentlyPlayedArray[];
}
interface playingDataInterface {
    item: {
        id: string,
        name: string,
        href: string,
        external_urls: {
            spotify: string;
        },
        artists: ArtistInterface
        album: AlbumImg
    }
}
interface contextInterface {
    user: string;
    token: string;
    CLIENT_ID: string;
    REDIRECT_URI: string;
    AUTH_ENDPOINT: string;
    RESPONSE_TYPE: string;
    SCOPES: string[];
    playingData: playingDataInterface;
    recently: recentlyPlayedInterface;
    logout: () => void
    refresh: () => void
}

const loginContext = createContext<contextInterface>({} as contextInterface)


export function SessionProvider({ children }) {

    const CLIENT_ID = "7db72dde18e949d280daba96bf9d69e9"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    const SCOPES = ["user-read-currently-playing", "user-read-recently-played", "user-top-read"]
    const [token, setToken] = useState("")
    const [user, setUser] = useState("")
    const [playingData, setPlayingData] = useState<playingDataInterface>({} as playingDataInterface)
    const [recently, setRecently] = useState<recentlyPlayedInterface>({} as recentlyPlayedInterface)

    useEffect(() => {
        const hash = window.location.hash
        let token = localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
            window.location.hash = ""
            localStorage.setItem("token", token)
        }
        try {
            async function load() {
                let one = "https://api.spotify.com/v1/me"
                let two = "https://api.spotify.com/v1/me/player/currently-playing"
                let three = "https://api.spotify.com/v1/me/player/recently-played?limit=15"
                const requestOne = await axios.get(one, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                });
                const requestTwo = await axios.get(two, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                });
                const requestThree = await axios.get(three, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                });
                await axios
                    .all([requestOne, requestTwo, requestThree])
                    .then(
                        await axios.spread((...responses) => {
                            const responseOne = responses[0];
                            const responseTwo = responses[1];
                            const responseThree = responses[2];
                            setUser(responseOne.data.id)
                            setPlayingData(responseTwo.data)
                            setRecently(responseThree.data)
                            console.log(responseThree.data.items[0].track.artists[0])
                        })
                    )
            }
            load()

        } catch {
            return console.log('oi')
        }
        setToken(token)

    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
        document.location.reload();
    }
    const refresh = () => {
        const url2 = "https://api.spotify.com/v1/me/player/currently-playing";
        axios.get(url2, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }).then(response => {
            setPlayingData(response.data)

        })
    }



    return (<loginContext.Provider value={{ CLIENT_ID, REDIRECT_URI, AUTH_ENDPOINT, RESPONSE_TYPE, token, user, SCOPES, logout, refresh, playingData, recently }}>
        {children}
    </loginContext.Provider>

    )

}
export function useSession(): contextInterface {
    const context = useContext(loginContext)
    return context
}