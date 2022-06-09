import {createContext, useEffect, useState} from 'react';
import axios from 'axios'
import { useContext } from 'react';


const playbackContext = createContext({})


export function PlaybackProvider({children}){

    return(
    <playbackContext.Provider value={children}>
            {children}
    </playbackContext.Provider>
    )
}