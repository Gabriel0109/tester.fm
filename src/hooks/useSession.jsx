import {createContext, useEffect, useState} from 'react';


const loginContext = createContext({ children})


export function sessionProvider(){
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

    return(
        <loginContext.Provider value={{logout, CLIENT_ID, REDIRECT_URI, AUTH_ENDPOINT, RESPONSE_TYPE}}>
            {children}
        </loginContext.Provider>
        
    )
} 