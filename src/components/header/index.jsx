import { IntroWrapper } from './styles.js';
import {useEffect, useState} from 'react';
import axios from 'axios'

export function Header() {
    const CLIENT_ID = "7db72dde18e949d280daba96bf9d69e9"
    const REDIRECT_URI = "http://localhost:3000/"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const [token, setToken] = useState("")
    const [user, setUser] = useState("")
    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
            window.location.hash = ""
            window.localStorage.setItem("token", token)
            const url = "https://api.spotify.com/v1/me";
            axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            }).then(response => {
                setUser(response.data.id)

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
                {token ? <>
                    <h1>Hello, {user} </h1>

                </>
                    : ''
                }
                {!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                        to Spotify</a>
                    : <button onClick={logout}>Logout</button>}

              
            </IntroWrapper>
        </>
    );
            }
