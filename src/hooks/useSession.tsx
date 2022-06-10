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
type topTrackInterface = playingDataInterface
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
    topArtist: topArtists;
    topTrack: topTrackInterface;
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
    const [topTrack, setTopTrack] = useState<topTrackInterface>({} as topTrackInterface)

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
                let user = "https://api.spotify.com/v1/me"
                let currenttrack = "https://api.spotify.com/v1/me/player/currently-playing"
                let recentlylist = "https://api.spotify.com/v1/me/player/recently-played?limit=15"
                let topartist = "https://api.spotify.com/v1/me/top/artists?limit=1"
                let toptrack = "https://api.spotify.com/v1/me/top/tracks?limit=1"
                const requestUser = await axios.get(user, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                });
                const requestCurrentTrack = await axios.get(currenttrack, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                });
                const requestRecentlyList = await axios.get(recentlylist, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                });
                const requestTopArtist = await axios.get(topartist, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                });
                const requestTopTrack = await axios.get(toptrack, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                });
                await axios
                    .all([requestUser, requestCurrentTrack, requestRecentlyList, requestTopArtist,requestTopTrack])
                    .then(
                        await axios.spread((...responses) => {
                            const responseUser = responses[0];
                            const responseCurrentTrack = responses[1];
                            const responseRecentlyList = responses[2];
                            const responseTopArtist = responses[3];
                            const responseTopTrack = responses[4];
                            setUser(responseUser.data.id)
                            setPlayingData(responseCurrentTrack.data)
                            setRecently(responseRecentlyList.data)
                            setTopArtist(responseTopArtist.data)
                            setTopTrack(responseTopTrack.data)
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



    return (<loginContext.Provider value={{ CLIENT_ID, REDIRECT_URI, AUTH_ENDPOINT, RESPONSE_TYPE, token, user, SCOPES, logout, playingData, recently, topArtist, topTrack }}>
        {children}
    </loginContext.Provider>

    )

}
export function useSession(): contextInterface {
    const context = useContext(loginContext)
    return context
}