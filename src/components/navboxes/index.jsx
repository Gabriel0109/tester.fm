import { BoxesWrapper } from './styles.js'
import { Box1 } from './box1/index.jsx'
import { Box2 } from './box2/index.jsx'
import { Box3 } from './box3/index.jsx'
import { Box4 } from './box4/index.jsx'
import { FaSpotify } from 'react-icons/fa'
import { useSession } from "../../hooks/useSession";




export function Navboxes() {
    const { refresh, playingData, token} = useSession()
    return (<>
        <BoxesWrapper>
            <Box1>
                <div>
                    {!token ? 
                     <p>sem musica</p>
                    :
                    <p>
                        {playingData.item.name}
                    </p> }
                    
                 
                  
                </div>  
                <div className="spotify-logo">
                    <button href="" onClick={refresh} >
                        <FaSpotify />
                        <p>Open in Spotify</p>
                    </button>
                </div>
            </Box1>
            <Box2 />



            <Box3>
                <h1>3</h1>
                <div className="text-flow">
                    teste teste teste
                </div>
            </Box3>

            <Box4>
                <h1>4</h1>
                <div className="text-flow">
                    teste teste teste
                </div>
            </Box4>

        </BoxesWrapper>
    </>

    )

}