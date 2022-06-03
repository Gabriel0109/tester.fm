import {createContext, useEffect, useState} from 'react';
import axios from 'axios'
import { useContext } from 'react';
interface contextInterface {
    user: string;
    token: string;
    CLIENT_ID: string;
    REDIRECT_URI: string;
    AUTH_ENDPOINT: string;
    RESPONSE_TYPE: string;
    SCOPES: string[];
    logout: () => void 

}
const loginContext = createContext<contextInterface>({} as contextInterface)


export function SessionProvider({ children }){
  
    const CLIENT_ID = "7db72dde18e949d280daba96bf9d69e9"
    const REDIRECT_URI = "/"
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
            try{
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
                    console.log(response.data.item)

                })
            } catch{
                return console.log('oi')
            }
         

        }
        setToken(token)
    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
        document.location.reload();
    }



    return ( <loginContext.Provider value={{CLIENT_ID, REDIRECT_URI, AUTH_ENDPOINT, RESPONSE_TYPE, token, user, SCOPES, logout }}>
            {children}
             </loginContext.Provider>
        
    )
    
} 
export function useSession(): contextInterface{
    const context = useContext(loginContext)
    return context
}