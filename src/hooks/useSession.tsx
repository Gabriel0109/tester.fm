import { createContext, useEffect, useState } from 'react';
import axios from 'axios'
import { useContext } from 'react';
import {AlbumImg, ArtistsData, topArtistsArray} from '../types'



interface recentlyPlayedArray {
    track: {
        id: string,
        name: string,
        href: string,
        external_urls: {
            spotify: string;
        },
        artists: ArtistsData[]
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
        artists: ArtistsData[]
        album: AlbumImg
    }
}
interface topArtists {
    items: topArtistsArray[]; 
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
    topArtist: topArtists
    logout: () => void
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
    const [topArtist, setTopArtist] = useState<topArtists>({} as topArtists)

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
                let four = "https://api.spotify.com/v1/me/top/artists?limit=1"
                let five = "https://api.spotify.com/v1/me/top/tracks?limit=1"
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
                const requestFour = await axios.get(four, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                });
                const requestFive = await axios.get(five, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                });
                await axios
                    .all([requestOne, requestTwo, requestThree, requestFour,requestFive])
                    .then(
                        await axios.spread((...responses) => {
                            const responseOne = responses[0];
                            const responseTwo = responses[1];
                            const responseThree = responses[2];
                            const responseFour = responses[3];
                            const responseFive = responses[4];
                            setUser(responseOne.data.id)
                            setPlayingData(responseTwo.data)
                            setRecently(responseThree.data)
                            setTopArtist(responseFour.data)
                            console.log(topArtist)
                            // console.log(responseFive.data)
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
    // const refresh = () => {
    //     const url2 = "https://api.spotify.com/v1/me/player/currently-playing";
    //     axios.get(url2, {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         },
    //     }).then(response => {
    //         setPlayingData(response.data)

    //     })
    // }



    return (<loginContext.Provider value={{ CLIENT_ID, REDIRECT_URI, AUTH_ENDPOINT, RESPONSE_TYPE, token, user, SCOPES, logout, playingData, recently, topArtist }}>
        {children}
    </loginContext.Provider>

    )

}
export function useSession(): contextInterface {
    const context = useContext(loginContext)
    return context
}