import { IntroWrapper } from './styles.js';
import {useEffect, useState} from 'react';
import axios from 'axios'

export function Header() {
    const CLIENT_ID = "7db72dde18e949d280daba96bf9d69e9"
    const REDIRECT_URI = "http://localhost:3000/"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    const SCOPES = ["user-read-currently-playing"]
    const [token, setToken] = useState("")
    const [user, setUser] = useState("")
    useEffect(() => {
        const hash = window.location.hash
        let token = localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
            window.location.hash = ""
            localStorage.setItem("token", token)
            const url = "https://api.spotify.com/v1/me";
            axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            }).then(response => {
                setUser(response.data.id)

            })
            const url2 = "https://api.spotify.com/v1/me/player/currently-playing";
            axios.get(url2, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            }).then(response => {
                console.log(response)

            })
           
        }
        setToken(token)
    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

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
