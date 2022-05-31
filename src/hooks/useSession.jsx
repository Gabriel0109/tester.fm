import {createContext, useEffect, useState} from 'react';


const loginContext = createContext({ children})


export function sessionProvider(){
    const CLIENT_ID = "7db72dde18e949d280daba96bf9d69e9"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    return(
        <loginContext.Provider value={{CLIENT_ID,REDIRECT_URI, AUTH_ENDPOINT, RESPONSE_TYPE }}>
            {children}
        </loginContext.Provider>
        
    )
} 